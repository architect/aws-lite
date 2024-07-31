/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import { arrayifyItemsProp, arrayifyObject, unarrayifyObject, normalizeResponse } from './lib.mjs'

const service = 'cloudfront'
const property = 'CloudFront'
const required = true
const docRoot = 'https://docs.aws.amazon.com/cloudfront/latest/APIReference/'
// const devGuide = 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/'

// Validation types
// const arr = { type: 'array' }
// const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

const CallerReference = { ...str, required, comment: 'Unique value that ensures that the request cannot be replayed' }
// const Comment = { ...str, required, comment: 'Distribution description; must be under 128 characters' }
const Id = { ...str, required, comment: 'ID of the resource' }
const IfMatch = { ...str, comment: 'Value of previous `GetDistribution` call\'s `ETag` property' }
const Name = { ...str, required, comment: 'Function name' }
const Stage = { ...str, comment: 'The functions stage; can be one of: `DEVELOPMENT`, `LIVE`' }
const Marker = { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' }
const MaxItems = { ...num, comment: 'Maximum number of items to return' }
const FunctionCode = { ...str, required, comment: 'Base64 encoded function code' }
const FunctionConfig = { ...obj, required, comment: 'Function configuration' }
const KeyGroupConfig = { ...obj, required, comment: 'Key group configuration', ref: docRoot + 'API_KeyGroupConfig.html' }


const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }

const xmlns = 'http://cloudfront.amazonaws.com/doc/2020-05-31/'

const paginator = {
  cursor: 'Marker',
  token: 'NextMarker',
  type: 'query',
}

const defaultResponse = ({ payload }) => payload || {}

const maybeAddETag = (result, headers) => {
  const ETag = headers.etag || headers.ETag
  if (ETag) result.ETag = ETag
  return result
}

const CreateDistribution = {
  awsDoc: docRoot + 'API_CreateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object', ref: docRoot + 'API_CreateDistribution.html#API_CreateDistribution_RequestSyntax' },
    // TODO enable nested validation
    /*
    CallerReference,
    Comment,
    DefaultCacheBehavior: { ...obj, required, comment: 'Configuration for default cache behavior (if `PathPattern` and `CacheBehavior` are not matched)', ref: docRoot + 'API_DefaultCacheBehavior.html' },
    Enabled: { ...bool, required, comment: 'Enable or disable the distribution' },
    Origins: { ...obj, required, comment: 'Distribution origin configuration', ref: docRoot + 'API_Origins.html' },
    Aliases: { ...obj, comment: 'CNAME configuration', ref: docRoot + 'API_Aliases.html' },
    CacheBehaviors: { ...obj, comment: 'Object containing zero or more `CacheBehavior` elements', ref: docRoot + 'API_CacheBehaviors.html' },
    ContinuousDeploymentPolicyId: { ...obj, comment: 'Continuous deployment policy ID', ref: docRoot + 'API_CreateContinuousDeploymentPolicy.html' },
    CustomErrorResponses: { ...obj, comment: 'Configure error status forwarding and caching', ref: docRoot + 'API_CustomErrorResponses.html' },
    DefaultRootObject: { ...str, comment: 'Default path to request from the origin (e.g. `index.html`)', ref: devGuide + 'DefaultRootObject.html' },
    HttpVersion: { ...str, comment: 'Maximum supported HTTP version; can be set to one of: `http1.1`, `http2`, `http3`, `http2and3`', ref: docRoot + 'API_CreateDistribution.html#cloudfront-CreateDistribution-request-HttpVersion' },
    IsIPV6Enabled: { ...bool, comment: 'Respond to IPV6 requests', ref: docRoot + 'API_CreateDistribution.html#cloudfront-CreateDistribution-request-IsIPV6Enabled' },
    Logging: { ...obj, comment: 'Access log configuration', ref: docRoot + 'API_LoggingConfig.html' },
    OriginGroups: { ...obj, comment: 'Origin group configuration', ref: docRoot + 'API_OriginGroups.html' },
    PriceClass: { ...str, comment: 'Price class corresponding to the maximum pricing, corresponding to responding regions; can be set to one of: `PriceClass_100`, `PriceClass_200`, `PriceClass_All`', ref: devGuide + 'PriceClass.html' },
    Restrictions: { ...obj, comment: 'Content restriction configuration', ref: docRoot + 'API_Restrictions.html' },
    Staging: { ...bool, comment: 'Specifies distribution as staging if `true`' },
    ViewerCertificate: { ...obj, comment: 'SSL/TS configuration', ref: docRoot + 'API_ViewerCertificate.html' },
    WebACLId: { ...str, required, comment: 'ID of the AWS WAF web ACL to associate' },
     */
  },
  request: (params) => {
    const DistributionConfig = unarrayifyObject(params.DistributionConfig)
    return {
      path: '/2020-05-31/distribution',
      method: 'POST',
      headers: xml,
      payload: { DistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    return maybeAddETag({ Distribution }, headers)
  },
}

const CreateFunction = {
  awsDoc: docRoot + 'API_CreateFunction.html',
  validate: {
    FunctionCode,
    FunctionConfig,
    Name,
  },
  request: ({ FunctionCode, FunctionConfig, Name }) => {
    FunctionConfig = unarrayifyObject(FunctionConfig)
    return {
      path: '/2020-05-31/function',
      methods: 'POST',
      headers: xml,
      xmlns,
      payload: {
        CreateFunctionRequest: {
          FunctionCode,
          FunctionConfig,
          Name,
        },
      },
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { etag, location } = headers
    const FunctionSummary = normalizeResponse(payload, arrayProperties, 2)
    return {
      FunctionSummary,
      Location: location,
      ETag: etag,
    }
  },
}

const CreateInvalidation = {
  awsDoc: docRoot + 'API_CreateInvalidation.html',
  validate: {
    Id,
    // DistributionId - for whatever reason only this method specifies `DistributionId`, so let's keep things consistent with literally everything else for now
    InvalidationBatch: { type: [ 'string', 'array' ], comment: 'One or more invalidation parameters', ref: docRoot + 'API_CreateInvalidation.html#API_CreateInvalidation_RequestSyntax' },
    CallerReference,
  },
  request: ({ CallerReference, Id, InvalidationBatch }) => {
    const Items = Array.isArray(InvalidationBatch) ? InvalidationBatch : [ InvalidationBatch ]
    const payload = unarrayifyObject({
      InvalidationBatch: {
        CallerReference,
        Paths: { Items, Quantity: Items.length },
      },
    })
    return {
      path: `/2020-05-31/distribution/${Id}/invalidation`,
      method: 'POST',
      headers: xml,
      payload,
    }
  },
  response: ({ payload }) => {
    const result = arrayifyObject(payload)
    return result
  },
}

const CreateKeyGroup = {
  awsDoc: docRoot + 'API_CreateKeyGroup.html',
  validate: {
    KeyGroupConfig,
  },
  request: (params) => {
    const payload = unarrayifyObject(params)
    return {
      path: '/2020-05-31/key-group',
      method: 'POST',
      headers: xml,
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const { etag: ETag, location: Location } = headers
    const KeyGroup = arrayifyObject(payload)
    return {
      KeyGroup,
      Location,
      ETag,
    }
  },
}

const CreatePublicKey = {
  awsDoc: docRoot + 'API_CreatePublicKey.html',
  validate: {
    PublicKeyConfig: { ...obj, required, comment: 'Public key configuration', ref: docRoot + 'API_CreatePublicKey.html#cloudfront-CreatePublicKey-request-PublicKeyConfig' },
  },
  request: (params) => {
    return {
      path: '/2020-05-31/public-key',
      method: 'POST',
      headers: xml,
      xmlns,
      payload: params,
    }
  },
}

const DeleteDistribution = {
  awsDoc: docRoot + 'API_DeleteDistribution.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    return {
      path: `/2020-05-31/distribution/${Id}`,
      method: 'DELETE',
      headers: IfMatch ? { 'if-match': IfMatch } : {},
    }
  },
  response: () => ({}),
}

const DeleteFunction = {
  awsDoc: docRoot + 'API_DeleteFunction.html',
  validate: {
    Name,
    IfMatch: { ...IfMatch, required },
  },
  request: ({ Name, IfMatch }) => {
    return {
      path: `/2020-05-31/function/${Name}`,
      method: 'DELETE',
      headers: { 'if-match': IfMatch },
    }
  },
  response: defaultResponse,
}

const DeleteKeyGroup = {
  awsDoc: docRoot + 'API_DeleteKeyGroup.html',
  validate: {
    Name,
    IfMatch,
  },
  request: ({ Name, IfMatch }) => {
    const headers = IfMatch ? { 'if-match': IfMatch } : {}
    return {
      path: `/2020-05-31/key-value-store/${Name}`,
      method: 'DELETE',
      headers,
    }
  },
  response: defaultResponse,
}

const DeletePublicKey = {
  awsDoc: docRoot + 'API_DeletePublicKey.html',
  validate: {
    Id,
    IfMatch,
  },
  request: ({ Id, IfMatch }) => {
    const headers = IfMatch ? { 'if-match': IfMatch } : {}
    return {
      path: `/2020-05-31/public-key/${Id}`,
      method: 'DELETE',
      headers,
    }
  },
  response: defaultResponse,
}

const DescribeFunction = {
  awsDoc: docRoot + 'API_DescribeFunction.html',
  validate: {
    Name,
    Stage,
  },
  request: ({ Name, Stage }) => {
    const query = Stage ? { Stage } : {}
    return {
      path: `/2020-05-31/function/${Name}/describe`,
      query,
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { etag } = headers
    const FunctionSummary = normalizeResponse(payload, arrayProperties, 2)
    return {
      FunctionSummary,
      ETag: etag,
    }
  },
}

const GetDistribution = {
  awsDoc: docRoot + 'API_GetDistribution.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/distribution/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const Distribution = arrayifyObject(payload)
    // Drop into the distribution config (instead of expecting arrayifyObject to handle things) so as to keep the property paths from having to prepend DistributionConfig
    Distribution.DistributionConfig = arrayifyObject(Distribution.DistributionConfig)
    return maybeAddETag({ Distribution }, headers)
  },
}

const GetDistributionConfig = {
  awsDoc: docRoot + 'API_GetDistributionConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/distribution/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const DistributionConfig = arrayifyObject(payload)
    return maybeAddETag({ DistributionConfig }, headers)
  },
}

// TODO: confirm response
const GetFunction = {
  awsDoc: docRoot + 'API_GetFunction.html',
  validate: {
    Name,
    Stage,
  },
  request: ({ Name, Stage }) => {
    const query = Stage ? { Stage } : {}
    return {
      path: `/2020-05-31/function/${Name}`,
      query,
      streamResponsePayload: true,
    }
  },
  response: (payload) => {
    return payload
  },
}

const GetKeyGroup = {
  awsDoc: docRoot + 'API_GetKeyGroup.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/key-group/${Id}`,
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { etag: ETag } = headers
    const KeyGroup = normalizeResponse(payload, arrayProperties, 1)
    return {
      KeyGroup,
      ETag,
    }
  },
}

const GetKeyGroupConfig = {
  awsDoc: docRoot + 'API_GetKeyGroupConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/key-group/${Id}/config`,
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { etag: ETag } = headers
    const KeyGroupConfig = normalizeResponse(payload, arrayProperties, 1)
    return {
      KeyGroupConfig,
      ETag,
    }
  },
}

const GetPublicKey = {
  awsDoc: docRoot + 'API_GetPublicKey.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/public-key/${Id}`,
      method: 'GET',
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKey: payload,
      ETag: etag,
    }
  },
}

const GetPublicKeyConfig = {
  awsDoc: docRoot + 'API_GetPublicKeyConfig.html',
  validate: {
    Id,
  },
  request: ({ Id }) => {
    return {
      path: `/2020-05-31/public-key/${Id}/config`,
      method: 'GET',
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKeyConfig: payload,
      ETag: etag,
    }
  },
}

const ListDistributions = {
  awsDoc: docRoot + 'API_ListDistributions.html',
  validate: {
    Marker: { ...str, comment: 'Pagination cursor token to be used if `NextMarker` was returned in a previous response' },
    MaxItems: { ...num, comment: 'Maximum number of items to return' },
    paginate: valPaginate,
  },
  request: (params) => {
    return {
      path: '/2020-05-31/distribution',
      query: params,
      paginator: {
        cursor: 'Marker',
        token: 'NextMarker',
        accumulator: 'Items',
        type: 'query',
      },
    }
  },
  response: ({ headers, payload }) => {
    const isPaginated = Array.isArray(payload.Items) &&
      payload.Items.every(i => i?.DistributionSummary)
    if (isPaginated) {
      // In the raw paginated state, each response is its own array nested in an object containing a DistributionSummary property
      // So we have to pull out all the arrays, concat + flatten them, then re-wrap the array in a single DistributionSummary obj before we run arrayifyItemsProp
      payload.Items = {
        DistributionSummary: payload.Items.map(i => i.DistributionSummary).flat(),
      }
    }
    const DistributionList = arrayifyItemsProp(payload)
    DistributionList.Items = DistributionList.Items.map(i => arrayifyObject(i))
    return maybeAddETag({ DistributionList }, headers)
  },
}

// TODO: confirm `KeyValueStoreAssociations.Items` get normalized correctly
const ListFunctions = {
  awsDoc: docRoot + 'API_ListFunctions.html',
  validate: {
    Marker,
    MaxItems,
    Stage,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: '/2020-05-31/function',
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'Items.FunctionSummary' },
    }
  },
  response: ({ payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const FunctionList = normalizeResponse(payload, arrayProperties, 5)
    return { FunctionList }
  },
}

const ListKeyGroups = {
  awsDoc: docRoot + 'API_ListKeyGroups.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/key-group`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.KeyGroupSummary',
      },
    }
  },
  response: ({ payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const KeyGroupList = normalizeResponse(payload, arrayProperties, 4)
    return { KeyGroupList }
  },
}

const ListPublicKeys = {
  awsDoc: docRoot + 'API_ListPublicKeys.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const query = { ...params }
    const { paginate } = params
    if (paginate) delete query.paginate
    return {
      path: `/2020-05-31/public-key`,
      method: 'GET',
      query,
      paginate,
      paginator: {
        ...paginator,
        accumulator: 'Items.PublicKeySummary',
      },
    }
  },
  response: ({ payload }) => {
    const PublicKeyList = arrayifyItemsProp(payload)
    return { PublicKeyList }
  },
}

// TODO: improve documentation for `EventObject`
// TODO: more testing
const TestFunction = {
  awsDoc: docRoot + 'API_TestFunction.html',
  validate: {
    Name,
    IfMatch: { ...IfMatch, required },
    EventObject: { ...str, required, comment: 'Base64 encoded binary `Event` object that will be passed to your function as an argument' },
    Stage,
  },
  request: (params) => {
    const { Name, IfMatch, EventObject, Stage } = params
    const payload = { TestFunctionRequest: { EventObject } }
    if (Stage) payload.Stage = Stage
    return {
      path: `/2020-05-31/function/${Name}/test`,
      method: 'POST',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload,
    }
  },
  response: ({ payload }) => {
    const arrayProperties = new Set([ 'Items', 'FunctionExecutionLogs' ])
    const TestResult = normalizeResponse(payload, arrayProperties, 2)
    return { TestResult }
  },
}

const UpdateDistribution = {
  awsDoc: docRoot + 'API_UpdateDistribution.html',
  validate: {
    DistributionConfig: { ...obj, required, comment: 'Complete distribution configuration object from `GetDistribution` call', ref: docRoot + 'API_UpdateDistribution.html#API_UpdateDistribution_RequestBody' },
    Id,
    IfMatch: { ...IfMatch, required },
  },
  request: (params) => {
    const { Id, IfMatch } = params
    const DistributionConfig = unarrayifyObject(params.DistributionConfig)
    return {
      path: `/2020-05-31/distribution/${Id}/config`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      payload: { DistributionConfig },
    }
  },
  response: ({ headers, payload }) => {
    const DistributionConfig = arrayifyObject(payload)
    return maybeAddETag({ DistributionConfig }, headers)
  },
}

const UpdateFunction = {
  awsDoc: docRoot + 'API_UpdateFunction.html',
  validate: {
    IfMatch: { ...IfMatch, required },
    Name,
    FunctionCode,
    FunctionConfig,
  },
  request: (params) => {
    let { FunctionCode, FunctionConfig, Name, IfMatch } = params
    FunctionConfig = unarrayifyObject(FunctionConfig)
    return {
      path: `/2020-05-31/function/${Name}`,
      method: 'PUT',
      headers: { ...xml, 'if-match': IfMatch },
      xmlns,
      payload: {
        UpdateFunctionRequest: {
          FunctionCode,
          FunctionConfig,
          Name,
        },
      },
    }
  },
  response: ({ headers, payload }) => {
    const arrayProperties = new Set([ 'Items' ])
    const { ettag } = headers // wtf amazon
    const FunctionSummary = normalizeResponse(payload, arrayProperties, 2)
    return {
      FunctionSummary,
      ETag: ettag,
    }
  },
}

const UpdateKeyGroup = {
  awsDoc: docRoot + 'API_UpdateKeyGroup.html',
  validate: {
    KeyGroupConfig,
    Id,
    IfMatch: { ...IfMatch, required },
  },
  request: ({ KeyGroupConfig, Id, IfMatch }) => {
    const payload = unarrayifyObject({ KeyGroupConfig })
    return {
      path: `/2020-05-31/key-group/${Id}`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload,
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    const KeyGroup = arrayifyObject(payload)
    return {
      KeyGroup,
      ETag: etag,
    }
  },
}

const UpdatePublicKey = {
  awsDoc: docRoot + 'API_UpdatePublicKey.html',
  validate: {
    PublicKeyConfig: { ...obj, required, comment: 'Public key configuration', ref: docRoot + 'API_UpdatePublicKey.html#cloudfront-UpdatePublicKey-request-PublicKeyConfig' },
    Id,
    IfMatch: { ...IfMatch, required },
  },
  request: (params) => {
    const { PublicKeyConfig, Id, IfMatch } = params
    return {
      path: `/2020-05-31/public-key/${Id}/config`,
      method: 'PUT',
      headers: { 'if-match': IfMatch, ...xml },
      xmlns,
      payload: { PublicKeyConfig },
    }
  },
  response: ({ headers, payload }) => {
    const { etag } = headers
    return {
      PublicKey: payload,
      ETag: etag,
    }
  },
}

export default {
  name: '@aws-lite/cloudfront',
  service,
  property,
  methods: {
    CreateDistribution,
    CreateFunction,
    CreateInvalidation,
    CreateKeyGroup,
    CreatePublicKey,
    DeleteDistribution,
    DeleteFunction,
    DeleteKeyGroup,
    DeletePublicKey,
    DescribeFunction,
    GetDistribution,
    GetDistributionConfig,
    GetFunction,
    GetKeyGroup,
    GetKeyGroupConfig,
    GetPublicKey,
    GetPublicKeyConfig,
    ListDistributions,
    ListFunctions,
    ListKeyGroups,
    ListPublicKeys,
    TestFunction,
    UpdateDistribution,
    UpdateFunction,
    UpdateKeyGroup,
    UpdatePublicKey,
    ...incomplete,
  },
}
