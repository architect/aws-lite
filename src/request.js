let qs = require('querystring')
let { Readable } = require('stream')
let aws4 = require('aws4')
let { globalServices, semiGlobalServices } = require('./services')
let { is } = require('./validate')
let { awsjson, useAWS } = require('./lib')
let xml

/* istanbul ignore next */
let copy = obj => JSON.parse(JSON.stringify(obj))
let JSONregex = /application\/json/
let JSONContentType = ct => ct.match(JSONregex)
let AwsJSONregex = /application\/x-amz-json/
let AwsJSONContentType = ct => ct.match(AwsJSONregex)
let XMLregex = /(application|text)\/xml/
let XMLContentType = ct => ct.match(XMLregex)
let textNodeName = '#text'

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
      if (!is.object(params.query)) {
        throw ReferenceError('Query property must be an object')
      }
      // Expect aws4 to handle RFC 3986 encoding when appending the query string to the passed path
      params.path += '?' + qs.stringify(params.query)
    }

    // Headers, content-type
    let headers = params.headers || {}
    let contentType = headers['content-type'] || headers['Content-Type'] || ''
    /* istanbul ignore next */
    if (headers['Content-Type']) delete headers['Content-Type']

    // Body - JSON-ify payload where convenient!
    let body = params.payload || params.body || params.data || params.json
    let isBuffer = body instanceof Buffer
    let isStream = body instanceof Readable

    // Detecting objects leaves open the possibility of some weird valid JSON (like just a null), deal with it if / when we need to I guess
    if (typeof body === 'object' && !isBuffer && !isStream) {
      // Backfill content-type if it's just an object
      if (!contentType) contentType = 'application/json'

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

    // Importing http(s) is a bit slow (~1ms), so only instantiate the client we need
    options.protocol = (params.protocol || config.protocol) + ':'
    let isHTTPS = options.host.includes('.amazonaws.com') || options.protocol === 'https:'
    /* istanbul ignore next */ // eslint-disable-next-line
    let http = isHTTPS ? require('https') : require('http')

    // Port configuration
    options.port = params.port || config.port

    // Disable keep-alive locally (or wait Node's default 5s for sockets to time out)
    /* istanbul ignore next */
    options.agent = new http.Agent({ keepAlive: config.keepAlive ?? useAWS() })

    /* istanbul ignore next */
    if (debug) {
      let { method = 'GET', service, host, path, port = '', headers, protocol, body } = options
      let truncatedBody
      /**/ if (isBuffer) truncatedBody = `<body buffer of ${body.length}b>`
      else if (isStream) truncatedBody = `<readable stream>`
      else truncatedBody = body?.length > 1000 ? body?.substring(0, 1000) + '...' : body
      console.error('[aws-lite] Request:', {
        service,
        method,
        url: `${protocol}//${host}${port}${path}`,
        headers: { ...headers, Authorization: headers.Authorization.substring(0, 35) + '...' },
        body: truncatedBody || '<no body>',
      })
    }

    let req = http.request(options, res => {
      let data = []
      /* istanbul ignore next */ // We can always expect headers, but jic
      let { headers = {}, statusCode } = res
      let ok = statusCode >= 200 && statusCode < 303
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        let body = Buffer.concat(data), payload, rawString
        let contentType = config.responseContentType || headers['content-type'] || headers['Content-Type'] || ''
        if (JSONContentType(contentType) || AwsJSONContentType(contentType)) {
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
        if (XMLContentType(contentType)) {
          // Only require the vendor if it's actually needed
          /* istanbul ignore next */
          if (!xml) {
            // eslint-disable-next-line
            let vendor = require('./_vendor/xml')
            // The following was pulled directly from AWS's implementations of `fast-xml-parser` in SDKv3
            xml = new vendor.XMLParser({
              attributeNamePrefix: '',
              htmlEntities: true,
              ignoreAttributes: false,
              ignoreDeclaration: true,
              parseTagValue: false,
              trimValues: false,
              tagValueProcessor: (_, val) => (val.trim() === '' && val.includes('\n') ? '' : undefined),
            })
            xml.addEntity('#xD', '\r')
            xml.addEntity('#10', '\n')
            xml.getValueFromTextNode = vendor.getValueFromTextNode
          }

          let parsed = xml.parse(body)
          let key = Object.keys(parsed)[0]
          let payloadToReturn = parsed[key]
          /* istanbul ignore next */ // TODO remove + test
          if (payloadToReturn[textNodeName]) {
            payloadToReturn[key] = payloadToReturn[textNodeName]
            delete payloadToReturn[textNodeName]
          }
          payload = xml.getValueFromTextNode(payloadToReturn)

          /* istanbul ignore next */
          if (debug) rawString = body.toString()
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
          })
        }
        if (ok) resolve({ statusCode, headers, payload })
        else reject({ statusCode, headers, error: payload, metadata })
      })
    })
    req.on('error', error => reject({
      error: error.message,
      metadata: {
        ...metadata,
        rawStack: error.stack,
        service: params.service,
        host: options.host,
        protocol: options.protocol.replace(':', ''),
        port: options.port,
      }
    }))

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
    if (!result.payload[accumulator]) {
      throw ReferenceError(`Pagination error: response accumulator property '${accumulator}' not found`)
    }
    if (!Array.isArray(result.payload[accumulator])) {
      throw ReferenceError(`Pagination error: response accumulator property '${accumulator}' must be an array`)

    }
    items.push(...result.payload[accumulator])
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
  return { payload: { [accumulator]: items } }
}
