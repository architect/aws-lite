let { awsjson, copy, buildXML, getEndpointParams, tidyQuery, validateProtocol, AwsJSONContentType, XMLContentType } = require('../lib')
let { globalServices, semiGlobalServices } = require('../lib/services')
let { is } = require('../lib/validate')
let request = require('./request')

module.exports = async function _request (params, creds, region, config, metadata) {
  /* istanbul ignore next: TODO remove + test */
  if ((params.paginator?.default === 'enabled' && params.paginate !== false) ||
    (params.paginator && params.paginate)) {
    if (params.paginate === 'async') {
      return await asyncPaginator(params, creds, region, config, metadata)
    }
    else {
      return await paginator(params, creds, region, config, metadata)
    }
  }
  return await makeRequest(params, creds, region, config, metadata)
}

async function makeRequest (params, creds, region, config, metadata) {
  let overrides = getEndpointParams(params)
  let protocol = overrides.protocol || config.protocol
  let host = overrides.host || config.host
  let port = overrides.port || config.port
  let pathPrefix = overrides.pathPrefix || config.pathPrefix
  let path = params.path || ''

  // Final validation, remove aliases, etc.
  validateProtocol(protocol)
  /* istanbul ignore next */
  if (params.endpoint) delete params.endpoint
  /* istanbul ignore next */
  if (params.hostname) delete params.hostname

  // Path
  // Note: params.path may also be passed if the request is coming from a plugin that pre-signed with aws4
  if (path && !path.startsWith('/')) {
    path = '/' + path
  }
  if (pathPrefix) {
    path = pathPrefix + path
  }
  path = (path || '/').replace(/[\/]{2,}/g, '/') // 2+ slashes reduce to one

  // Structured query string
  if (params.query) {
    if (!is.object(params.query)) {
      throw ReferenceError('Query property must be an object')
    }
    let query = tidyQuery(params.query)
    if (query) {
      // Expect aws4 to handle RFC 3986 encoding when appending the query string to the passed path
      path += '?' + query
    }
  }

  // Headers, content-type
  let headers = params.headers || {}
  let contentType = headers['content-type'] || headers['Content-Type'] || ''
  /* istanbul ignore next */
  if (headers['Content-Type']) delete headers['Content-Type']

  // Body - JSON-ify payload where convenient! Leave raw where needed
  let body = params.payload || params.body || params.data
  let isBuffer = body instanceof Buffer
  let isReqStream = is.stream(body)

  // Detecting objects leaves open the possibility of some weird valid JSON (like just a null), deal with it if / when we need to I guess
  if (typeof body === 'object' && !isBuffer && !isReqStream) {
    // Backfill content-type if it's just an object
    if (!contentType) contentType = 'application/json'

    if (XMLContentType(contentType)) {
      params.body = buildXML(body, params)
    }
    else {
      // A variety of services use AWS JSON; we'll make it easier via a header or passed param
      // Allow for manual encoding by passing a header while setting awsjson to false
      let awsjsonEncode = params.awsjson ||
        (AwsJSONContentType(contentType) && params.awsjson !== false)
      if (awsjsonEncode) {
        // Backfill content-type header yet again
        if (!AwsJSONContentType(contentType)) {
          contentType = 'application/x-amz-json-1.0'
        }
        body = awsjson.marshall(body, { awsjson: params.awsjson, config })
      }
      // Final JSON encoding
      params.body = JSON.stringify(body)
    }
  }
  // Everything besides streams pass through for signing
  else {
    params.body = isReqStream ? undefined : body
  }

  // Finalize headers, content-type
  if (contentType) {
    headers['content-type'] = contentType
  }
  // aws4's default content-type is form-urlencoded: backfill if there's a (non-streaming) body, yet no content-type was specified
  // We don't want aws4 to attempt to sign stream objects, so if we backfill this content-type on a stream, the signature breaks and auth will fail
  else if (params.body) {
    headers['content-type'] = 'application/octet-stream'
  }
  params.headers = headers

  // Sign the payload; let aws4 handle (most) logic related to region + service instantiation
  let signing = { region, ...params, protocol, host, port, pathPrefix, path }

  /* istanbul ignore next */
  if (globalServices.includes(params.service)) {
    // If it's semi-global and the region is not us-east-1, leave the region in
    // Otherwise, exclude the region from the signed headers
    let isSemiGlobal = semiGlobalServices.includes(params.service)
    if (!isSemiGlobal || (isSemiGlobal && region === 'us-east-1')) {
      delete signing.region // jic the user specified it per-request
    }
  }

  let streamReq = isReqStream ? body : undefined
  return await request(params, { creds, config, metadata, signing, streamReq })
}

let validPaginationTypes = [ 'headers', 'payload', 'query' ]
/* istanbul ignore next */
async function paginator (params, creds, region, config, metadata) {
  let { debug } = config
  let { type = 'payload', cursor, token, accumulator } = params.paginator
  let nestedAccumulator = accumulator.split('.').length > 1

  if (!cursor || (!is.string(cursor) && !is.array(cursor))) {
    throw ReferenceError(`aws-lite paginator requires a cursor property name (string) or cursor property array`)
  }
  if (!token || (!is.string(token) && !is.array(token))) {
    throw ReferenceError(`aws-lite paginator requires a token property name (string) or token property array`)
  }
  if (typeof cursor !== typeof token) {
    throw ReferenceError(`aws-lite paginator requires a token and cursor properties to both be a string or array`)
  }
  if (!accumulator || typeof accumulator !== 'string') {
    throw ReferenceError(`aws-lite paginator requires an accumulator property name (string)`)
  }
  if (type && !validPaginationTypes.includes(type)) {
    throw ReferenceError(`aws-lite paginator type must be one of: ${validPaginationTypes.join(', ')}`)
  }

  // Normalize cursors and tokens into iterables, then validate
  if (is.string(cursor) && is.string(token)) {
    cursor = [ cursor ]
    token = [ token ]
  }
  if (cursor.length !== token.length) {
    throw ReferenceError(`aws-lite paginator requires an equal number of cursor and token properties`)
  }

  // aws4 has a lot of options, so our request() method mutates the passed params and just signs the whole thing
  // That's normally fine! But we need to start from a fresh copy of the original headers each time, or content-length, auth, etc. will be passed by reference, and may get borked across multiple sequential requests
  let originalHeaders = copy(params.headers || {})
  let page = 1
  let items = []
  let statusCode, headers
  async function get () {
    let result = await makeRequest(
      { ...params, headers: copy(originalHeaders) },
      creds, region, config, metadata,
    )
    if (!result.payload) {
      throw ReferenceError('Pagination error: missing API response')
    }
    if (typeof result.payload !== 'object') {
      throw ReferenceError('Pagination error: response must be valid JSON or XML')
    }

    let accumulated = nestedAccumulator
      ? accumulator.split('.').reduce((parent, child) => parent?.[child], result.payload)
      // Some responses omit their accumulator property if empty (eg S3 ListObjectsV2...), so backfill it as necessary
      : result.payload[accumulator] || []

    // Best effort handling of properties that sometimes are / are not arrays, courtesy of XML
    // This can perhaps backfire in a few different ways, so hold onto your butts
    if (accumulated && !Array.isArray(accumulated)) {
      accumulated = [ accumulated ]
    }

    // Update statusCode and headers for response hooks
    statusCode = result.statusCode
    headers = result.headers

    // Exit if it's XML that parses as a falsy value
    let contentType = result.headers['content-type'] || result.headers['Content-Type'] || ''
    if (XMLContentType(contentType) && !accumulated) {
      return
    }

    // Exit if we're out of results
    if (!accumulated.length) {
      return
    }

    // Yay, results!
    items.push(...accumulated)

    // Determine whether we have tokens, which would necessitate making the next pagination call
    // Some APIs (e.g. CloudFormation) nest their tokens, so we need to account for those
    // Other APIs (e.g. Route 53) use some, but not all, of the specified cursors and tokens
    // Moreover, some services will just keep re-sending the final page with the final token, so also prevent infinite loops if cursors match
    let foundTokens = token.map((t, i) => {
      let nestedToken = t.split('.').length > 1
      if (nestedToken) {
        let foundNestedToken = t.split('.').reduce((parent, child) => parent?.[child], result.payload)
        // Final page was not re-sent with final token
        if (foundNestedToken && (foundNestedToken !== params[type][cursor[i]])) {
          return [ cursor[i], foundNestedToken ]
        }
      }
      // Final page was not re-sent with final token
      else if (result.payload[t] && (result.payload[t] !== params[type][cursor[i]])) {
        return [ cursor[i], result.payload[t] ]
      }
    }).filter(Boolean)

    if (foundTokens.length) {
      if (type === 'payload' || !type) {
        foundTokens.forEach(([ cur, val ]) => params.payload[cur] = val)
      }
      if (type === 'headers') {
        foundTokens.forEach(([ cur, val ]) => params.headers[cur] = val)
      }
      if (type === 'query') {
        params.query = params.query || {}
        foundTokens.forEach(([ cur, val ]) => params.query[cur] = val)
      }
      page++
      if (debug) console.error(`[aws-lite] Paginator: getting page ${page}`)
      await get()
    }
  }
  await get()
  if (nestedAccumulator) {
    return { statusCode, headers, payload: reNestAccumulated(accumulator, items) }
  }
  return { statusCode, headers, payload: { [accumulator]: items } }
}

/* istanbul ignore next */
function reNestAccumulated (acc, items) {
  acc = Array.isArray(acc) ? acc : acc.split('.')
  if (!acc.length) return items
  return { [acc.shift()]: reNestAccumulated(acc, items) }
}

/* istanbul ignore next: TODO remove + test */
async function asyncPaginator (params, creds, region, config, metadata) {
  let { type = 'payload', cursor, token } = params.paginator
  // Normalize tokens and cursors into arrays
  if (!Array.isArray(cursor)) cursor = [ cursor ]
  if (!Array.isArray(token)) token = [ token ]
  if (cursor.length !== token.length) throw ReferenceError(`aws-lite paginator requires an equal number of cursor and token properties`)
  // Split nested tokens
  token = token.map(c => c.split('.'))
  let originalHeaders = copy(params.headers || {})

  const asyncIterator = (async function* () {
    // Request first page
    let currPage = await makeRequest(
      { ...params, headers: copy(originalHeaders) },
      creds, region, config, metadata,
    )
    if (!currPage.payload) throw ReferenceError('Pagination error: missing API response')
    if (typeof currPage.payload !== 'object') throw ReferenceError('Pagination error: response must be valid JSON or XML')
    let cursorValues = findAllTokens(currPage.payload, token, cursor)
    yield currPage
    // Continue requesting pages until no more tokens are found
    while (currPage && cursorValues) {
      if (type === 'payload' || !type) {
        params.payload = { ...params.payload, ...cursorValues }
      }
      if (type === 'headers') {
        params.headers = { ...params.headers, ...cursorValues }
      }
      if (type === 'query') {
        params.query = { ...params.query, ...cursorValues }
      }
      currPage = await makeRequest(
        { ...params, headers: copy(originalHeaders) },
        creds, region, config, metadata,
      )
      if (!currPage.payload) throw ReferenceError('Pagination error: missing API response')
      if (typeof currPage.payload !== 'object') throw ReferenceError('Pagination error: response must be valid JSON or XML')
      cursorValues = findAllTokens(currPage.payload, token, cursor)
      yield currPage
    }
  })()
  // Wrap asyncIterator in an object for easy detection within the client-factory
  return { asyncIterator }
}

// Construct an object in the form of {cursorKey: cursorValue}
/* istanbul ignore next: TODO remove + test */
function findAllTokens (data, tokens, cursors) {
  let result
  tokens.forEach((t, i) => {
    const value = findToken(data, t, 0)
    if (value) {
      result = result || {}
      result[cursors[i]]  = value
    }
  })
  return result
}

// Recursive search for tokens
// Nested tokens such as `a.b.c` are passed as ['a', 'b', 'c']
/* istanbul ignore next: TODO remove + test */
function findToken (data, token, i) {
  if (i == token.length - 1 && data[token[i]]) return data[token[i]] // Value found
  if (!data[token[i]]) return // No value found
  return findToken(data[token[i]], token, i + 1) // Recurse
}
