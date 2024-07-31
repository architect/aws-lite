// Each item here is expected to contain an Items property; each value is the XML property containing the Items in question
const arrayProperties = {
  // Distributions
  'ActiveTrustedKeyGroups': 'KeyGroup',
  'ActiveTrustedKeyGroups.Items.KeyPairIds': 'KeyPairId',
  'ActiveTrustedSigners': 'Signer',
  'ActiveTrustedSigners.Items.KeyPairIds': 'KeyPairId',
  'Aliases': 'CNAME',
  'CacheBehaviors': 'CacheBehavior',
  'CacheBehaviors.Items.AllowedMethods': 'Method',
  'CacheBehaviors.Items.AllowedMethods.CachedMethods': 'Method',
  'CacheBehaviors.Items.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'CacheBehaviors.Items.ForwardedValues.Headers': 'Name',
  'CacheBehaviors.Items.ForwardedValues.QueryStringCacheKeys': 'Name',
  'CacheBehaviors.Items.FunctionAssociations': 'FunctionAssociation',
  'CacheBehaviors.Items.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'CacheBehaviors.Items.TrustedKeyGroups': 'KeyGroup',
  'CacheBehaviors.Items.TrustedSigners': 'AwsAccountNumber',
  'CustomErrorResponses': 'CustomErrorResponse',
  'DefaultCacheBehavior.AllowedMethods': 'Method',
  'DefaultCacheBehavior.AllowedMethods.CachedMethods': 'Method',
  'DefaultCacheBehavior.ForwardedValues.Headers': 'Name',
  'DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys': 'Name',
  'DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames': 'Name',
  'DefaultCacheBehavior.FunctionAssociations': 'FunctionAssociation',
  'DefaultCacheBehavior.LambdaFunctionAssociations': 'LambdaFunctionAssociation',
  'DefaultCacheBehavior.TrustedKeyGroups': 'KeyGroup',
  'DefaultCacheBehavior.TrustedSigners': 'AwsAccountNumber',
  'OriginGroups': 'OriginGroup',
  'OriginGroups.Items.Members': 'OriginGroupMember',
  'OriginGroups.Items.FailoverCriteria.StatusCodes': 'StatusCode',
  'Origins': 'Origin',
  'Origins.Items.CustomHeaders': 'OriginCustomHeader',
  'Origins.Items.CustomOriginConfig.OriginSslProtocols': 'SslProtocol',
  'Restrictions.GeoRestriction': 'Location',
  // Invalidations
  'InvalidationBatch.Paths': 'Path',
  // Functions
  'KeyValueStoreAssociations': 'KeyValueStoreAssociation',
  'FunctionExecutionLogs.member': 'FunctionExecutionLogs',
  // KeyGroups
  'KeyGroupConfig': 'PublicKey',
}

const arrayifyItemsProp = obj => {
  // Handle obj.Items XML interpolation: Items may not exist, may be an object containing an array, or may be an object with a single property containing an object
  let { Items } = obj

  // Items not (yet) populated
  if (!Items) Items = []
  const firstItem = Object.values(Items)[0]

  // Items is an array within an object
  /**/ if (Array.isArray(firstItem)) Items = firstItem
  // Items is a single object within an object
  else if (typeof Items === 'object') Items = [ firstItem ]

  obj.Items = Items.filter(Boolean).flat()
  return obj
}

function getPropertyPath (obj, lastPropertyPath, key) {
  // Don't add array index keys to the name strings
  if (Array.isArray(obj)) {
    return lastPropertyPath ? lastPropertyPath : ''
  }
  return lastPropertyPath ? `${lastPropertyPath}.${key}` : key
}

function arrayifyObject (obj, lastPropertyPath, arraysList = arrayProperties) {
  Object.entries(obj).forEach(([ key, value ]) => {
    const currentPropertyPath = getPropertyPath(obj, lastPropertyPath, key)

    // We've traversed into a property that should have an `Items` array
    if (arraysList[currentPropertyPath]) {
      obj[key] = arrayifyItemsProp(value)
    }

    // Just in case: reset the reference for value
    value = obj[key]

    if (Array.isArray(value)) {
      // Note: this does not currently attempt to recurse arrays containing arrays
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return arrayifyObject(i, currentPropertyPath)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      arrayifyObject(value, currentPropertyPath)
    }
  })
  return obj
}

// Specifically for unarrayifying distros to be re-serialized to XML (see: UpdateDistribution)
function unarrayifyObject (obj, lastPropertyPath) {
  Object.entries(obj).forEach(([ key, value ]) => {
    const currentPropertyPath = getPropertyPath(obj, lastPropertyPath, key)

    if (Array.isArray(value)) {
      // Note: this does not currently attempt to recurse arrays containing arrays
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return unarrayifyObject(i, currentPropertyPath)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      obj[key] = unarrayifyObject(value, currentPropertyPath)
    }

    // Just in case: reset the reference for value
    value = obj[key]

    // We've traversed into a property that needs to have its `Items` array readied for XML
    if (arrayProperties[currentPropertyPath] && value.Items) {
      obj[key] = { ...value }
      if (value.Items.length === 0) {
        delete obj[key].Items
      }
      else {
        obj[key].Items = value.Items.length === 1
          ? { [arrayProperties[currentPropertyPath]]: value.Items[0] }
          : { [arrayProperties[currentPropertyPath]]: value.Items }
      }
    }
  })
  return obj
}

// Method for de-Items-ing an object; prob no longer necessary, but here jic
/* function stripEmptyItems (obj) {
  Object.entries(obj).forEach(([ key, value ]) => {
    if (obj[key]?.Quantity === 0 &&
        Array.isArray(obj[key]?.Items) &&
        !obj[key].Items.length) {
      delete obj[key].Items
    }

    if (Array.isArray(value)) {
      obj[key] = value.map(i => {
        if (typeof i === 'object' && i && !Array.isArray(i)) {
          return stripEmptyItems(i)
        }
        return i
      })
    }
    else if (typeof value === 'object') {
      stripEmptyItems(value)
    }
  })
  return obj
} */

// Expanding on object serialization/normalization.. Cloudfront is painfully inconsistent,
// the existing stuff expects arrays to be an `Items` property, which is not the case.
// Max depth can be used to prevent unnecessary recursion into arrays
// TODO: test more
function normalizeResponse (object, arrayProps, maxDepth = 0) {
  if (maxDepth < 0) return

  if (typeof object === 'object') {
    Object.entries(object).forEach(([ key, value ]) => {
      if (arrayProps.has(key)) {
        let temp = Object.values(value)[0]
        if (temp === undefined) temp = []
        object[key] = Array.isArray(temp) ? temp : [ temp ]
      }
      if (maxDepth > 0) {
        normalizeResponse(value, arrayProps, maxDepth - 1)
      }
    })
  }
  else if (Array.isArray(object) && maxDepth > 0) {
    object.forEach(i => normalizeResponse(i, arrayProps, maxDepth - 1))
  }
  return object
}

export {
  arrayifyItemsProp,
  arrayifyObject,
  unarrayifyObject,
  normalizeResponse,
}
