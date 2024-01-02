let aws4 = require('aws4')
let { globalServices, semiGlobalServices } = require('./services')
let { awsjson, buildXml, parseXml, tidyQuery, useAWS } = require('./lib')

/* istanbul ignore next */
let copy = obj => JSON.parse(JSON.stringify(obj))
let JSONregex = /application\/json/
let JSONContentType = ct => ct.match(JSONregex)
let AwsJSONregex = /application\/x-amz-json/
let AwsJSONContentType = ct => ct.match(AwsJSONregex)
let XMLregex = /(application|text)\/xml/
let XMLContentType = ct => ct.match(XMLregex)

// HTTP client agent cache to prevent generating new agents for every request
let agentCache = {
  http: { keepAliveEnabled: null, keepAliveDisabled: null },
  https: { keepAliveEnabled: null, keepAliveDisabled: null },
}
/* istanbul ignore next */
function getAgent (client, isHTTPS, config) {
  let http = isHTTPS ? 'https' : 'http'

  let keepAlive = config.keepAlive ?? useAWS()
  let agent = keepAlive ? 'keepAliveEnabled' : 'keepAliveDisabled'

  if (!agentCache[http][agent]) {
    agentCache[http][agent] = new client.Agent({ keepAlive })
  }
  return agentCache[http][agent]
}

module.exports = async function _request (params, creds, region, config, metadata) {
  /* istanbul ignore next */ // TODO remove + test
  if ((params.paginator?.default === 'enabled' && params.paginate !== false) ||
      (params.paginator && params.paginate)) {
    return await paginator(params, creds, region, config, metadata)
  }
  return request(params, creds, region, config, metadata)
}

function request (params, creds, region, config, metadata) {
  return new Promise((resolve, reject) => {
    let { debug } = config

    // Path
    // Note: params.path may be passed if the request is coming from a plugin that pre-signed with aws4
    params.path = params.endpoint || params.path || ''
    if (params.path && !params.path.startsWith('/')) {
      params.path = '/' + params.path
    }
    if (config.endpointPrefix) {
      if (!config.endpointPrefix.startsWith('/')) {
        config.endpointPrefix = '/' + config.endpointPrefix
      }
      if (config.endpointPrefix.endsWith('/')) {
        config.endpointPrefix = config.endpointPrefix.substring(0, config.endpointPrefix.length - 1)
      }
      params.path = config.endpointPrefix + params.path
    }
    params.path = params.path || '/'
    params.path = params.path.replace(/\/\//g, '/')

    // Host
    params.host = params.host || params.hostname || config.host || config.hostname
    if (params.hostname) delete params.hostname

    // Structured query string
    if (params.query) {
      let { is } = require('./validate')
      if (!is.object(params.query)) {
        throw ReferenceError('Query property must be an object')
      }
      let query = tidyQuery(params.query)
      if (query) {
        // Expect aws4 to handle RFC 3986 encoding when appending the query string to the passed path
        params.path += '?' + query
      }
    }

    // Headers, content-type
    let headers = params.headers || {}
    let contentType = headers['content-type'] || headers['Content-Type'] || ''
    /* istanbul ignore next */
    if (headers['Content-Type']) delete headers['Content-Type']

    // Body - JSON-ify payload where convenient!
    let body = params.payload || params.body || params.data || params.json
    let isBuffer = body instanceof Buffer
    let isStream = (body?.on && body?._read && body?._readableState)

    // Detecting objects leaves open the possibility of some weird valid JSON (like just a null), deal with it if / when we need to I guess
    if (typeof body === 'object' && !isBuffer && !isStream) {
      // Backfill content-type if it's just an object
      if (!contentType) contentType = 'application/json'

      if (XMLContentType(contentType)) {
        params.body = buildXml(body)
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
          body = awsjson.marshall(body, params.awsjson)
        }
        // Final JSON encoding
        params.body = JSON.stringify(body)
      }
    }
    // Everything besides streams pass through for signing
    else {
      params.body = isStream ? undefined : body
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
    let signing = { region, ...params }

    /* istanbul ignore next */
    if (globalServices.includes(params.service)) {
      // If it's semi-global and the region is not us-east-1, leave the region in
      // Otherwise, exclude the region from the signed headers
      let isSemiGlobal = semiGlobalServices.includes(params.service)
      if (!isSemiGlobal || (isSemiGlobal && region === 'us-east-1')) {
        signing = params
        delete signing.region // jic the user specified it per-request
      }
    }

    // Sign and construct the request
    let options = aws4.sign(signing, creds)
    // Normalize host (again): aws4 sometimes uses host, sometimes hostname
    /* istanbul ignore next */ // This won't get seen by nyc
    options.host = options.host || options.hostname
    /* istanbul ignore next */
    if (options.hostname) delete options.hostname

    // Importing http(s) is a bit slow (~1ms), so only instantiate the client and http agent we need
    options.protocol = (params.protocol || config.protocol) + ':'
    let isHTTPS = options.host.includes('.amazonaws.com') || options.protocol === 'https:'
    /* istanbul ignore next */
    let http = isHTTPS ? require('https') : require('http')

    // Port configuration
    options.port = params.port || config.port

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    options.agent = getAgent(http, isHTTPS, config)

    /* istanbul ignore next */
    if (debug) {
      let { method = 'GET', service, host, path, port, headers, protocol, body } = options
      let truncatedBody
      /**/ if (isBuffer) truncatedBody = `<body buffer of ${body.length}b>`
      else if (isStream) truncatedBody = `<readable stream>`
      else truncatedBody = body?.length > 1000 ? body?.substring(0, 1000) + '...' : body
      console.error('[aws-lite] Request:', {
        service,
        method,
        url: `${protocol}//${host}${port ? ':' + port : ''}${path}`,
        headers: { ...headers, Authorization: headers.Authorization.substring(0, 35) + '...' },
        body: truncatedBody || '<no body>',
      }, '\n')
    }

    let req = http.request(options, res => {
      let data = []
      /* istanbul ignore next */ // We can always expect headers, but jic
      let { headers = {}, statusCode } = res
      let ok = statusCode >= 200 && statusCode < 303
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let body = Buffer.concat(data), payload, rawString
        let contentType = config.responseContentType ||
                          headers['content-type'] ||
                          headers['Content-Type'] || ''
        if (body.length && (JSONContentType(contentType) || AwsJSONContentType(contentType))) {
          payload = JSON.parse(body)

          /* istanbul ignore next */
          if (debug) rawString = body.toString()

          // Some services may attempt to respond with regular JSON, but an AWS JSON content-type. Sure. Ok. Anyway, try to guard against that.
          if (AwsJSONContentType(contentType)) {
            try {
              payload = awsjson.unmarshall(payload)
            }
            catch { /* noop, it's already parsed */ }
          }
        }
        if (body.length && XMLContentType(contentType)) {
          payload = parseXml(body)
          /* istanbul ignore next */
          if (payload.xmlns) delete payload.xmlns

          /* istanbul ignore next */
          if (debug) rawString = body.toString()
        }
        // Sometimes AWS reports JSON and XML errors without a content type (ahem, Lambda) so that's fun
        /* istanbul ignore next */ // TODO remove + test
        if (body.length && !ok && !contentType) {
          try {
            payload = JSON.parse(body)
          }
          catch {
            try {
              payload = parseXml(body)
            }
            catch {
              // lolnothingmatters
              payload = body.toString()
            }
          }
        }
        payload = payload || (body.length ? body : null)

        /* istanbul ignore next */
        if (debug) {
          let truncatedBody
          /**/ if (payload instanceof Buffer) truncatedBody = body.length ? `<body buffer of ${body.length}b>` : ''
          else if (rawString) truncatedBody = rawString?.length > 250 ? rawString?.substring(0, 250) + '...' : rawString
          console.error('[aws-lite] Response:', {
            statusCode,
            headers,
            body: truncatedBody || '<no body>',
          }, '\n')
        }
        if (ok) resolve({ statusCode, headers, payload })
        else reject({ statusCode, headers, error: payload, metadata })
      })
    })
    req.on('error', error => {
      /* istanbul ignore next */
      if (debug) {
        console.error('[aws-lite] HTTP error:', error)
      }
      reject({
        error: error.message || /* istanbul ignore next */ error.code,
        metadata: {
          ...metadata,
          rawStack: error.stack,
          service: params.service,
          host: options.host,
          protocol: options.protocol.replace(':', ''),
          port: options.port,
        }
      })
    })

    if (isStream) {
      body.pipe(req)
      /* istanbul ignore next */
      if (debug) {
        let bytes = 0
        body.on('data', chunk => {
          bytes += chunk.length
          console.error(`Bytes streamed: ${bytes}`)
        })
      }
    }
    else req.end(options.body || '')
  })
}

let validPaginationTypes = [ 'payload', 'query' ]
/* istanbul ignore next */
async function paginator (params, creds, region, config, metadata) {
  let { debug } = config
  let { type, cursor, token, accumulator } = params.paginator
  let nestedAccumulator = accumulator.split('.').length > 1

  if (!cursor || typeof cursor !== 'string') {
    throw ReferenceError(`aws-lite paginator requires a cursor property name (string)`)
  }
  if (!token || typeof token !== 'string') {
    throw ReferenceError(`aws-lite paginator requires a token property name (string)`)
  }
  if (!accumulator || typeof accumulator !== 'string') {
    throw ReferenceError(`aws-lite paginator requires an accumulator property name (string)`)
  }
  if (type && !validPaginationTypes.includes(type)) {
    throw ReferenceError(`aws-lite paginator type must be one of: ${validPaginationTypes.join(', ')}`)
  }

  // aws4 has a lot of options, so our request() method mutates the passed params and just signs the whole thing
  // That's normally fine! But we need to start from a fresh copy of the original headers each time, or content-length, auth, etc. will be passed by reference, and may get borked across multiple sequential requests
  let originalHeaders = copy(params.headers || {})
  let page = 1
  let items = []
  let statusCode, headers
  async function get () {
    let result = await request(
      { ...params, headers: copy(originalHeaders) },
      creds, region, config, metadata
    )
    if (!result.payload) {
      throw ReferenceError('Pagination error: missing API response')
    }
    if (typeof result.payload !== 'object') {
      throw ReferenceError('Pagination error: response must be valid JSON or XML')
    }

    let accumulated = nestedAccumulator
      ? accumulator.split('.').reduce((parent, child) => parent?.[child], result.payload)
      : result.payload[accumulator]

    if (!accumulated) {
      throw ReferenceError(`Pagination error: response accumulator property '${accumulator}' not found`)
    }

    // Best effort handling of properties that sometimes are / are not arrays, courtesy of XML
    // This can perhaps backfire in a few different ways, so hold onto your butts
    if (accumulated && !Array.isArray(accumulated)) {
      accumulated = [ accumulated ]
    }

    // Update statusCode and headers for response hooks
    statusCode = result.statusCode
    headers = result.headers

    // Exit if we're out of results
    if (!accumulated.length) {
      return
    }

    // Some services will just keep re-sending the final page with the final token
    // Exit here to prevent infinite loops if cursors match
    if (result.payload[token] && (type === 'payload' || !type) &&
        result.payload[token] === params.payload[cursor]) {
      return
    }
    if (result.payload[token] && (type === 'query') &&
        result.payload[token] === params.query[cursor]) {
      return
    }

    items.push(...accumulated)
    if (result.payload[token]) {
      if (type === 'payload' || !type) {
        params.payload[cursor] = result.payload[token]
      }
      if (type === 'query') {
        params.query = params.query || {}
        params.query[cursor] = result.payload[token]
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
