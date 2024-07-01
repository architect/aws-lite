let request = require('./request')
let { services } = require('./lib/services')
let testing = require('./testing')
let { awsjson, copy, buildXML } = require('./lib')
let { validateInput } = require('./lib/validate')
let errorHandler = require('./error')
let enumerable = false

let credentialProps = [ 'accessKeyId', 'secretAccessKey', 'sessionToken' ]

module.exports = async function clientFactory (config, creds, region) {

  // Attach config + creds to client (and make available for plugins)
  let configuration = copy(config)
  credentialProps.forEach(p => delete configuration[p])
  let credentials = copy(creds)
  Object.defineProperty(credentials, 'secretAccessKey', { enumerable })
  Object.defineProperty(credentials, 'sessionToken', { enumerable })

  // The basic API client
  async function client (params = {}) {
    let selectedRegion = params.region || region
    let verifyService = params.verifyService ?? config.verifyService ?? true
    validateService(params.service, verifyService)
    let metadata = { service: params.service }
    try {
      // Use provided mocks if in testing mode
      let mock = await getMock('aws-lite', 'client', params, metadata)
      if (mock) return mock

      return await request(params, creds, selectedRegion, config, metadata)
    }
    catch (err) {
      errorHandler(err)
    }
  }
  client.config = { ...configuration, region }
  client.credentials = credentials

  /* istanbul ignore next */
  if (config.debug) {
    console.error('[aws-lite] Client instantiated with this config:', client.config)
    console.error('[aws-lite] Client instantiated with these creds:', {
      ...credentials,
      secretAccessKey: credentials.secretAccessKey ? '[found / redacted]' : undefined,
      sessionToken: credentials.sessionToken ? '[found / redacted]' : undefined,
    })
  }

  let { plugins } = config
  if (plugins.length) {
    /* istanbul ignore next */
    if (config.debug) {
      console.error('[aws-lite] Loading plugins', plugins.map(({ name, service }) => name || service), '\n')
    }
    for (let plugin of plugins) {
      try {
        let { service, methods, property } = plugin
        validateService(service, config.verifyService)
        if (!methods || (typeof methods !== 'object' || Array.isArray(methods))) {
          throw TypeError('Plugin must export a methods object')
        }
        Object.values(methods).forEach(method => {
          if (method.request && typeof method.request !== 'function') {
            throw ReferenceError(`All plugin request methods must be a function: ${service}`)
          }
          if (method.response && typeof method.response !== 'function') {
            throw ReferenceError(`All plugin response methods must be a function: ${service}`)
          }
          if (method.error && typeof method.error !== 'function') {
            throw ReferenceError(`All plugin error methods must be a function: ${service}`)
          }
        })

        let pluginUtils = {
          awsjsonMarshall: awsjson.marshall,
          awsjsonUnmarshall: awsjson.unmarshall,
          buildXML,
          client,
          config: configuration,
          credentials,
        }
        let clientMethods = {}
        Object.entries(methods).forEach(([ name, method ]) => {
          // Allow for falsy methods to be denoted as incomplete in generated docs
          if (!method || method.disabled) return

          // For convenient error reporting (and jic anyone wants to enumerate everything) try to ensure the AWS API method names pass through
          clientMethods[name] = Object.defineProperty(async input => {
            input = input || {}
            let selectedRegion = input?.region || region
            let metadata = { service, name, property }
            if (method.awsDoc) {
              metadata.awsDoc = method.awsDoc
            }
            // Printed after the AWS doc
            if (plugin?.name?.startsWith('@aws-lite/')) {
              metadata.readme = `https://aws-lite.org/services/${service}#${name.toLowerCase()}`
            }
            else if (method.readme) {
              metadata.readme = method.readme
            }

            // Initial validation
            if (method.validate) {
              validateInput(method.validate, input, metadata)
            }

            // Run plugin.method.request()
            if (method.request) {
              try {
                // TODO: probably deep-copy and/or make input immutable?
                var req = await method.request(input, { ...pluginUtils, region: selectedRegion })
                req = req || {}
              }
              catch (methodError) {
                errorHandler({ error: methodError, metadata })
              }
            }

            // Validate combined inputs of user + plugin
            let params = { ...input, ...req }
            if (method.validate) {
              validateInput(method.validate, params, metadata)
            }

            // Make the request
            try {
              let response

              // Use provided mocks if in testing mode
              let mock = await getMock(property, name, params, metadata)
              /**/ if (mock && !testing.data.usePluginResponseMethod) {
                return mock
              }
              else if (mock) {
                response = mock
              }
              else {
                response = await request({ ...params, service }, creds, selectedRegion, config, metadata)
              }

              // Run plugin.method.response()
              if (method.response) {

                // Async pagination enabled, found async iterator
                /* istanbul ignore next: TODO remove + test */
                if (response.asyncIterator) {
                  return iterativeRequestGenerator({
                    asyncIterator: response.asyncIterator,
                    response: method.response,
                    method,
                    metadata,
                    config,
                    pluginUtils,
                    region: selectedRegion,
                  })
                }

                try {
                  var pluginRes = await method.response(response, { ...pluginUtils, region: selectedRegion })
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata })
                }
                if (pluginRes !== undefined) {
                  let unmarshalling = pluginRes?.awsjson
                  if (unmarshalling) {
                    delete pluginRes.awsjson
                    // If a payload property isn't included, it _is_ the payload
                    let unmarshalled = awsjson.unmarshall(pluginRes.payload || pluginRes, { awsjson: unmarshalling, config })
                    response = pluginRes.payload
                      ? { ...pluginRes, payload: unmarshalled }
                      : unmarshalled
                  }
                  else response = pluginRes
                }
              }
              return response
            }
            catch (err) {
              if (err?.metadata?.mock && !testing.data.usePluginResponseMethod) {
                errorHandler(err)
              }
              // Run plugin.method.error()
              let updatedError
              if (method.error && !(err instanceof Error)) {
                try {
                  updatedError = await method.error(err, { ...pluginUtils, region: selectedRegion })
                }
                catch (methodError) {
                  errorHandler({ error: methodError, metadata: { service, name, property } })
                }
                updatedError = updatedError || err
                updatedError.metadata = { ...updatedError.metadata, ...metadata }
                errorHandler(updatedError)
              }
              errorHandler(err)
            }
          }, 'name', { value: name })
        })

        let serviceName = property || service
        client[serviceName] = clientMethods
        // Lowcase alias
        let propLow = serviceName.toLowerCase()
        if (serviceName !== propLow) {
          client[propLow] = clientMethods
          Object.defineProperty(client, propLow, { enumerable })
        }
      }
      catch (err) {
        /* istanbul ignore next */
        let name = plugin.name ? `: ${plugin.name}` : ''
        console.error(`Plugin error${name}`)
        throw err
      }
    }
  }

  return client
}

function validateService (service, verify = true) {
  if (!service) {
    throw ReferenceError('No AWS service specified')
  }
  if (verify && !services.includes(service)) {
    throw ReferenceError(`Invalid AWS service specified: ${service}`)
  }
}

async function getMock (property, name, params, metadata) {
  if (testing.data.enabled) {
    if (!testing.data?.[property]?.[name]?.mocks?.length) {
      throw ReferenceError(`Mock response not found: ${property}.${name}`)
    }
    let clientResponse = property === 'aws-lite' && name === 'client'

    let response

    let item = {
      method: `${property}.${name}`,
      time: new Date().toISOString(),
    }
    let req = { ...item, request: params }
    testing.data.allRequests.push(req)
    testing.data[property][name].requests.push(req)

    if (testing.data[property][name].mocks.length === 1) {
      response = testing.data[property][name].mocks[0]
    }
    else {
      response = testing.data[property][name].mocks.shift()
    }
    if (typeof response === 'function') {
      response = response.constructor.name === 'AsyncFunction'
        ? response(params) : await response(params)
    }

    if (clientResponse || testing.data.usePluginResponseMethod) {
      if (!response.statusCode) {
        let method = clientResponse ? 'client' : `${property}.${name}`
        throw ReferenceError(`Mock response must include statusCode property (${method})`)
      }
      if (!response.headers) response.headers = {}
      if (!response.error) response.payload = response.payload ?? ''
    }

    let res = { ...item, response }
    testing.data.allResponses.push(res)
    testing.data[property][name].responses.push(res)

    if (response.error) throw {
      ...response,
      metadata: { ...metadata, mock: true },
    }
    return response
  }
}

/* istanbul ignore next: TODO remove + test */
async function* iterativeRequestGenerator (params) {
  const { asyncIterator, response, region, pluginUtils, metadata, config } = params
  let pluginResponse
  for await (let page of asyncIterator) {
    try {
      pluginResponse = response(page,  { ...pluginUtils, region })
    }
    catch (methodError) {
      errorHandler({ error: methodError, metadata })
      break
    }
    if (pluginResponse) {
      yield pluginResponse
    }
    else {
      yield maybeUnmarshall(pluginResponse, config)
    }
  }
}

/* istanbul ignore next: TODO remove + test */
function maybeUnmarshall (pluginResponse, config) {
  let unmarshalling = pluginResponse?.awsjson
  let response
  if (unmarshalling) {
    delete pluginResponse.awsjson
    // If a payload property isn't included, it _is_ the payload
    let unmarshalled = awsjson.unmarshall(pluginResponse.payload || pluginResponse, { awsjson: unmarshalling, config })
    response = pluginResponse.payload
      ? { ...pluginResponse, payload: unmarshalled }
      : unmarshalled
  }
  else response = pluginResponse
  return response
}
