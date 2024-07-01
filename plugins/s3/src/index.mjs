/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { arrayifyAndMoveObject, getHost, getValidateHeaders, getHeadersFromParams, getQueryFromParams, makeChecksumSHA256, changeObjectKey, paramMappings, parseHeadersToResults, normalizeResponseFilter, serializeRequestFilter } = lib
import PutObject from './put-object.mjs'
import Upload from './upload.mjs'

const service = 's3'
const property = 'S3'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'

// Validation types
const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }
const xmlns = 'http://s3.amazonaws.com/doc/2006-03-01/'

const Bucket = { ...str, required, comment: 'S3 bucket name' }
const ContinuationToken = { ...str, comment: 'Pagination cursor token (returned as `NextContinuationToken`' }
const Delimiter = { ...str, comment: 'Delimiter character used to group keys' }
const EncodingType = { ...str, comment: 'Object key encoding type (must be `url`)' }
const Id = { ...str, required, comment: 'ID of the object' }
const Key = { ...str, required, comment: 'S3 key / file name' }
const PartNumber = { ...num, comment: 'Part number (between 1 - 10,000) of the object' }
const Prefix = { ...str, comment: 'Limit response to keys that begin with the specified prefix' }
const UploadId = { ...str, required, comment: 'ID of the multipart upload' }
const valPaginate = { type: [ 'boolean', 'string' ], comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
const VersionId = { ...str, comment: 'Reference a specific version of the object' }

const defaultResponse = ({ payload }) => payload || {}

const AbortMultipartUpload = {
  awsDoc: docRoot + 'API_AbortMultipartUpload.html',
  validate: {
    Bucket,
    Key,
    UploadId,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const queryParams = [ 'UploadId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: `/${params.Key}`,
      query,
      headers,
    }
  },
  response: parseHeadersToResults,
}

const CompleteMultipartUpload = {
  awsDoc: docRoot + 'API_CompleteMultipartUpload.html',
  validate: {
    Bucket,
    Key,
    UploadId,
    MultipartUpload: { ...obj, comment: '`MultipartUpload` object containing details about the completed uploads', ref: docRoot + 'API_CompleteMultipartUpload.html#AmazonS3-CompleteMultipartUpload-request-MultipartUpload' },
    ...getValidateHeaders('ChecksumCRC32', 'ChecksumCRC32C', 'ChecksumSHA1', 'ChecksumSHA256',
      'RequestPayer', 'ExpectedBucketOwner', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5',
    ),
  },
  request: (params, utils) => {
    const queryParams = [ 'UploadId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const query = getQueryFromParams(params, queryParams)
    const CompleteMultipartUpload = {
      Part: params.MultipartUpload?.Parts || [],
    }
    return {
      host,
      pathPrefix,
      path: `/${params.Key}`,
      query,
      headers: { ...xml, ...getHeadersFromParams(params, queryParams) },
      payload: { CompleteMultipartUpload },
      xmlns,
    }
  },
  response: ({ payload, headers }) => ({ ...payload || {}, ...parseHeadersToResults({ headers }) }),
}

const CopyObject = {
  awsDoc: docRoot + 'API_CopyObject.html',
  validate: {
    Bucket: { ...str, required, comment: 'Name of the S3 bucket destination' },
    Key: { ...str, required, comment: 'S3 key / file name of the destination' },
    ...getValidateHeaders('ACL', 'CacheControl', 'ChecksumAlgorithm', 'ContentDisposition', 'ContentEncoding',
      'ContentLanguage', 'ContentType', 'CopySource', 'CopySourceIfMatch', 'CopySourceIfModifiedSince',
      'CopySourceIfNoneMatch', 'CopySourceIfUnmodifiedSince', 'Expires', 'GrantFullControl', 'GrantRead',
      'GrantReadACP', 'GrantWriteACP', 'MetadataDirective', 'TaggingDirective', 'ServerSideEncryption',
      'StorageClass', 'WebsiteRedirectLocation', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5',
      'SSEKMSKeyId', 'SSEKMSEncryptionContext', 'BucketKeyEnabled', 'CopySourceSSECustomerAlgorithm', 'CopySourceSSECustomerKey',
      'CopySourceSSECustomerKeyMD5', 'RequestPayer', 'Tagging', 'ObjectLockMode', 'ObjectLockRetainUntilDate',
      'ObjectLockLegalHoldStatus', 'ExpectedBucketOwner', 'ExpectedSourceBucketOwner'),
  },
  request: (params, utils) => {
    const { Key } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      headers: { ...xml, ...getHeadersFromParams(params) },
    }
  },
  response: ({ payload, headers }) => {
    return { CopyObjectResult: {
      ...payload,
      ...parseHeadersToResults({ headers }) },
    }
  },
}

const CreateBucket = {
  awsDoc: docRoot + 'API_CreateBucket.html',
  validate: {
    Bucket,
    CreateBucketConfiguration: { ...obj, comment: 'Complete bucket configuration object', ref: docRoot + 'API_CreateBucket.html#API_CreateBucket_RequestSyntax' },
    ...getValidateHeaders('ACL', 'GrantFullControl', 'GrantRead', 'GrantReadACP', 'GrantWrite', 'GrantWriteACP', 'ObjectLockEnabledForBucket', 'ObjectOwnership'),
  },
  request: (params, utils) => {
    const { CreateBucketConfiguration } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      headers: { ...xml, ...getHeadersFromParams(params) },
      payload: CreateBucketConfiguration ? { CreateBucketConfiguration } : undefined,
    }
  },
  response: ({ headers }) => {
    return { Location: headers.Location || headers.location }
  },
}

const CreateMultipartUpload = {
  awsDoc: docRoot + 'API_CreateMultipartUpload.html',
  validate: {
    Bucket,
    Key,
    ...getValidateHeaders('ACL', 'CacheControl', 'ContentDisposition', 'ContentEncoding',
      'ContentLanguage', 'ContentType', 'Expires', 'GrantFullControl',
      'GrantRead', 'GrantReadACP', 'GrantWriteACP', 'ServerSideEncryption',
      'StorageClass', 'WebsiteRedirectLocation', 'SSECustomerAlgorithm', 'SSECustomerKeyMD5',
      'SSEKMSKeyId', 'SSEKMSEncryptionContext', 'BucketKeyEnabled', 'RequestPayer',
      'Tagging', 'ObjectLockMode', 'ObjectLockRetainUntilDate', 'ObjectLockLegalHoldStatus',
      'ExpectedBucketOwner', 'ChecksumAlgorithm',
    ),
  },
  request: (params, utils) => {
    const { Key } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'POST',
      host,
      pathPrefix,
      path: `/${Key}?uploads`,
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: ({ payload, headers }) => ({ ...payload || {}, ...parseHeadersToResults({ headers }) }),
}

const DeleteBucket = {
  awsDoc: docRoot + 'API_DeleteBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: defaultResponse,
}

const DeleteBucketAnalyticsConfiguration = {
  awsDoc: docRoot + 'API_DeleteBucketAnalyticsConfiguration.html',
  validate: {
    Bucket,
    Id,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const query = { analytics: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketCors = {
  awsDoc: docRoot + 'API_DeleteBucketCors.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?cors',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketEncryption = {
  awsDoc: docRoot + 'API_DeleteBucketEncryption.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?encryption',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketIntelligentTieringConfiguration = {
  awsDoc: docRoot + 'API_DeleteBucketIntelligentTieringConfiguration.html',
  validate: {
    Bucket,
    Id,
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const query = { 'intelligent-tiering': '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketInventoryConfiguration = {
  awsDoc: docRoot + 'API_DeleteBucketInventoryConfiguration.html',
  validate: {
    Bucket,
    Id,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const query = { inventory: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketLifecycle = {
  awsDoc: docRoot + 'API_DeleteBucketLifecycle.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?lifecycle',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketMetricsConfiguration = {
  awsDoc: docRoot + 'API_DeleteBucketMetricsConfiguration.html',
  validate: {
    Bucket,
    Id,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const query = { metrics: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketOwnershipControls = {
  awsDoc: docRoot + 'API_DeleteBucketOwnershipControls.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?ownershipControls',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketPolicy = {
  awsDoc: docRoot + 'API_DeleteBucketPolicy.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?policy',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketReplication = {
  awsDoc: docRoot + 'API_DeleteBucketReplication.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?replication',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketTagging = {
  awsDoc: docRoot + 'API_DeleteBucketTagging.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?tagging',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteBucketWebsite = {
  awsDoc: docRoot + 'API_DeleteBucketWebsite.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: '/?website',
      headers,
    }
  },
  response: defaultResponse,
}

const DeleteObject = {
  awsDoc: docRoot + 'API_DeleteObject.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { Key } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: `/${Key}`,
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: defaultResponse,
}

const DeleteObjects = {
  awsDoc: docRoot + 'API_DeleteObjects.html',
  validate: {
    Bucket,
    Delete: { ...obj, required, comment: 'Object deletion request' },
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner', 'ChecksumAlgorithm', 'ContentMD5'),
  },
  request: async (params, utils) => {
    const { buildXML } = utils
    const { Delete } = params
    const payload = { Delete: { Object: Delete.Objects } }
    const payloadXML = buildXML(payload)
    const { createHash } = await import('node:crypto')
    const checksum = Buffer.from(createHash('sha256').update(payloadXML).digest()).toString('base64')
    const { host, pathPrefix } = getHost(params, utils)

    return {
      host,
      pathPrefix,
      path: '/?delete',
      headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
      payload,
    }
  },
  response: ({ payload }) => {
    let res = payload

    if (!payload.Deleted) {
      res.Deleted = []
    }
    if (!Array.isArray(payload.Deleted)) {
      res.Deleted = [ payload.Deleted ]
    }
    return res
  },
}

const DeleteObjectTagging = {
  awsDoc: docRoot + 'API_DeleteObjectTagging.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'VersionId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const { Key } = params
    const query = { 'tagging': '', ...getQueryFromParams(params, queryParams) }
    return {
      method: 'DELETE',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers: getHeadersFromParams(params, queryParams),
    }
  },
  response: parseHeadersToResults,
}

const DeletePublicAccessBlock = {
  awsDoc: docRoot + 'API_DeletePublicAccessBlock.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      method: 'DELETE',
      pathPrefix,
      path: '/?publicAccessBlock',
      headers: getHeadersFromParams(params),
    }
  },
  response: defaultResponse,
}

const GetBucketAccelerateConfiguration = {
  awsDoc: docRoot + 'API_GetBucketAccelerateConfiguration.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      path: '/?accelerate',
      host,
      pathPrefix,
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: ({ headers, payload }) => {
    return {
      Status: payload.Status,
      ...parseHeadersToResults({ headers }),
    }
  },
}

const GetBucketAcl = {
  awsDoc: docRoot + 'API_GetBucketAcl.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: '/?acl',
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: ({ payload }) => {
    let { Owner } = payload
    let Grants = payload.AccessControlList.Grant
    if (!Grants) {
      Grants = []
    }
    else if (!Array.isArray(Grants)) {
      Grants = [ Grants ]
    }
    return {
      Owner,
      Grants,
    }
  },
}

const GetBucketAnalyticsConfiguration = {
  awsDoc: docRoot + 'API_GetBucketAnalyticsConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the analytics configuration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const { host, pathPrefix } = getHost(params, utils)
    const query = { analytics: '', ...getQueryFromParams(params, queryParams) }
    const headers = getHeadersFromParams(params, queryParams)
    return {
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: ({ payload }) => {
    if (payload.Filter) normalizeResponseFilter(payload.Filter)
    if (!payload.StorageClassAnalysis) {
      payload.StorageClassAnalysis = {}
    }
    delete payload.xmlns
    return { AnalyticsConfiguration: payload }
  },
}

const GetBucketCors = {
  awsDoc: docRoot + 'API_GetBucketCors.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?cors',
      headers,
    }
  },
  response: ({ payload }) => {
    let { CORSRule: CORSRules } = payload
    if (!Array.isArray(CORSRules)) {
      CORSRules = [ CORSRules ]
    }
    CORSRules.forEach(i => {
      if (i.AllowedHeader) {
        arrayifyAndMoveObject(i, 'AllowedHeader', 'AllowedHeaders')
      }
      if (i.AllowedMethod) {
        arrayifyAndMoveObject(i, 'AllowedMethod', 'AllowedMethods')
      }
      if (i.AllowedOrigin) {
        arrayifyAndMoveObject(i, 'AllowedOrigin', 'AllowedOrigins')
      }
      if (i.ExposeHeader) {
        arrayifyAndMoveObject(i, 'ExposeHeader', 'ExposeHeaders')
      }
    })
    return { CORSRules }
  },
}

const GetBucketEncryption = {
  awsDoc: docRoot + 'API_GetBucketEncryption.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?encryption',
      headers,
    }
  },
  response: ({ payload }) => {
    arrayifyAndMoveObject(payload, 'Rule', 'Rules')
    return {
      ServerSideEncryptionConfiguration: { Rules: payload.Rules },
    }
  },
}

const GetBucketIntelligentTieringConfiguration = {
  awsDoc: docRoot + 'API_GetBucketIntelligentTieringConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the intelligent tiering configuration' },
  },
  request: (params, utils) => {
    const { Id: id } = params
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      query: { 'intelligent-tiering': '', id },
    }
  },
  response: ({ payload }) => {
    arrayifyAndMoveObject(payload, 'Tiering', 'Tierings')
    if (payload.Filter) normalizeResponseFilter(payload.Filter)
    delete payload.xmlns
    return { IntelligentTieringConfiguration: payload }
  },
}

const GetBucketInventoryConfiguration = {
  awsDoc: docRoot + 'API_GetBucketInventoryConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the inventory configuration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { Id: id } = params
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      query: { 'inventory': '', id },
      headers,
    }
  },
  response: ({ payload }) => {
    if (!payload.OptionalFields) {
      payload.OptionalFields = []
    }
    else {
      payload.OptionalFields = payload.OptionalFields.Field
    }
    delete payload.xmlns
    return { InventoryConfiguration: payload }
  },
}

const GetBucketLifecycleConfiguration = {
  awsDoc: docRoot + 'API_GetBucketLifecycle.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?lifecycle',
      headers,
    }
  },
  response: ({ payload }) => {
    arrayifyAndMoveObject(payload, 'Rule', 'Rules')
    payload.Rules.forEach(i => {
      if (i.Transition) arrayifyAndMoveObject(i, 'Transition', 'Transitions')
      if (i.NonCurrentVersionTransition) arrayifyAndMoveObject(i, 'NoncurrentVersionTransition', 'NoncurrentVersionTransitions')
      if (i.Filter) {
        normalizeResponseFilter(i.Filter)
      }
      else {
        i.Filter = {}
      }
    })
    return { Rules: payload.Rules }
  },
}

const GetBucketLocation = {
  awsDoc: docRoot + 'API_GetBucketLocation.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?location',
      headers,
    }
  },
  response: defaultResponse,
}

const GetBucketLogging = {
  awsDoc: docRoot + 'API_GetBucketLogging.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?logging',
      headers,
    }
  },
  response: ({ payload }) => {
    let { LoggingEnabled } = payload
    if (!LoggingEnabled.TargetGrants) {
      LoggingEnabled.TargetGrants = []
    }
    else if (!Array.isArray(LoggingEnabled.TargetGrants.Grant)) {
      LoggingEnabled.TargetGrants = [ LoggingEnabled.TargetGrants.Grant ]
    }
    else {
      LoggingEnabled.TargetGrants = LoggingEnabled.TargetGrants.Grant
    }
    return payload
  },
}

const GetBucketMetricsConfiguration = {
  awsDoc: docRoot + 'API_GetBucketMetricsConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the metrics configuration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams)
    const query = { metrics: ' ', ...getQueryFromParams(params, queryParams) }
    return {
      host,
      pathPrefix,
      query,
      headers,
    }
  },
  response: ({ payload }) => {
    if (payload.Filter) normalizeResponseFilter(payload.Filter)
    delete payload.xmlns
    return { MetricsConfiguration: payload }
  },
}

const GetBucketNotificationConfiguration = {
  awsDoc: docRoot + 'API_GetBucketNotificationConfiguration.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?notification',
      headers,
    }
  },
  response: ({ payload }) => {
    const normalizeFilter = (Filter) => {
      const { S3Key } = Filter
      let { FilterRule } = S3Key
      if (!Array.isArray(FilterRule)) FilterRule = [ FilterRule ]
      return {
        Key: {
          FilterRules: FilterRule,
        },
      }
    }
    const normalizeConfig = (config, oldArnKey, newArnKey) => {
      if (!Array.isArray(config)) config = [ config ]
      return config.map(i => {
        const { Filter, Event, Id } = i
        let result = { Id }
        result[newArnKey] = i[oldArnKey]
        if (!Array.isArray(Event)) {
          result.Events = [ Event ]
        }
        else {
          result.Events = Event
        }
        if (Filter) result.Filter = normalizeFilter(Filter)
        return result
      })
    }
    const { TopicConfiguration, QueueConfiguration, CloudFunctionConfiguration, EventBridgeConfiguration } = payload
    let result = {}
    result.EventBridgeConfiguration = EventBridgeConfiguration ? EventBridgeConfiguration : {}
    if (TopicConfiguration)
      result.TopicConfigurations = normalizeConfig(TopicConfiguration, 'Topic', 'TopicArn')

    if (QueueConfiguration)
      result.QueueConfigurations = normalizeConfig(QueueConfiguration, 'Queue', 'QueueArn')

    if (CloudFunctionConfiguration)
      result.LambdaFunctionConfigurations = normalizeConfig(CloudFunctionConfiguration, 'CloudFunction', 'LambdaFunctionArn')

    return result
  },
}

const GetBucketOwnershipControls = {
  awsDoc: docRoot + 'API_GetBucketOwnershipControls.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?ownershipControls',
      headers,
    }
  },
  response: ({ payload }) => {
    const { Rule } = payload
    let result = {}
    if (!Rule) {
      result.Rules = []
    }
    else if (!Array.isArray(Rule)) {
      result.Rules = [ Rule ]
    }
    else {
      result.Rule = Rule
    }
    return { OwnershipControls: result }
  },
}

const GetBucketPolicy = {
  awsDoc: docRoot + 'API_GetBucketPolicy.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?policy',
      headers,
    }
  },
  response: ({ payload: Policy }) => {
    return { Policy }
  },
}

const GetBucketPolicyStatus = {
  awsDoc: docRoot + 'API_GetBucketPolicyStatus.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?policyStatus',
      headers,
    }
  },
  response: ({ payload }) => {
    const { IsPublic } = payload
    return { PolicyStatus: { IsPublic: IsPublic } }
  },
}

const GetBucketReplication = {
  awsDoc: docRoot + 'API_GetBucketReplication.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?replication',
      headers,
    }
  },
  response: ({ payload }) => {
    arrayifyAndMoveObject(payload, 'Rule', 'Rules')
    payload.Rules.forEach(i => {
      if (i.Filter) normalizeResponseFilter(i.Filter)
    })
    return {
      ReplicationConfiguration: {
        Role: payload.Role,
        Rules: payload.Rules,
      },
    }
  },
}

const GetBucketRequestPayment = {
  awsDoc: docRoot + 'API_GetBucketRequestPayment.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?requestPayment',
      headers,
    }
  },
  response: ({ payload }) => {
    return { Payer: payload.Payer }
  },
}

const GetBucketTagging = {
  awsDoc: docRoot + 'API_GetBucketTagging.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?tagging',
      headers,
    }
  },
  response: ({ payload }) => {
    let TagSet = payload.TagSet.Tag
    if (!Array.isArray(TagSet)) TagSet = [ TagSet ]
    return { TagSet }
  },
}

const GetBucketVersioning = {
  awsDoc: docRoot + 'API_GetBucketVersioning.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?versioning',
      headers,
    }
  },
  response: ({ payload }) => {
    const { Status, MfaDelete: MFADelete } = payload
    return { Status, MFADelete }
  },
}

const GetBucketWebsite = {
  awsDoc: docRoot + 'API_GetBucketWebsite.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    return {
      host,
      pathPrefix,
      path: '/?website',
      headers,
    }
  },
  response: ({ payload }) => {
    if (payload.RoutingRules) {
      if (!Array.isArray(payload.RoutingRules.RoutingRule)) {
        payload.RoutingRules.RoutingRule = [ payload.RoutingRules.RoutingRule ]
      }
      payload.RoutingRules = payload.RoutingRules.RoutingRule
    }
    return payload
  },
}

const GetObject = {
  awsDoc: docRoot + 'API_GetObject.html',
  validate: {
    Bucket,
    Key,
    PartNumber,
    VersionId,
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5',
      'RequestPayer', 'ExpectedBucketOwner', 'ChecksumMode',
    ),
    ResponseCacheControl: { ...str, comment: 'Sets response header: `cache-control`' },
    ResponseContentDisposition: { ...str, comment: 'Sets response header: `content-disposition`' },
    ResponseContentEncoding: { ...str, comment: 'Sets response header: `content-encoding`' },
    ResponseContentLanguage: { ...str, comment: 'Sets response header: `content-language`' },
    ResponseContentType: { ...str, comment: 'Sets response header: `content-type`' },
    ResponseExpires: { ...str, comment: 'Sets response header: `expires`' },
    // Not strictly necessary since users can pass this through with any request, but it's good for folks to know it's available on this particular method
    rawResponsePayload: { ...bool, comment: 'Set to `true` to return payload as a buffer' },
    streamResponsePayload: { ...bool, comment: 'Set to `true` to return payload as a Node.js stream' },
  },
  request: (params, utils) => {
    const { Key, rawResponsePayload = false, streamResponsePayload = false } = params
    const queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
      rawResponsePayload,
      streamResponsePayload,
    }
  },
  response: ({ headers, payload }) => {
    return {
      Body: payload,
      ...parseHeadersToResults({ headers }, null, []),
    }
  },
}

const GetObjectAcl = {
  awsDoc: docRoot + 'API_GetObjectAcl.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { 'acl': '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload, headers }) => {
    const { AccessControlList, Owner } = payload
    let { Grant: Grants } = AccessControlList
    let { RequestCharged } = parseHeadersToResults({ headers })
    if (!Array.isArray(Grants)) {
      Grants = [ Grants ]
    }
    Grants = Grants.map(i => {
      let { Grantee } = i
      Grantee.Type = Grantee['xsi:type']
      delete Grantee['xsi:type']
      delete Grantee['xmlns:xsi']
      i.Grantee = Grantee
      return i
    })
    let result = {
      Owner,
      Grants,
    }
    if (RequestCharged) result.RequestCharged = RequestCharged
    return result
  },
}

// TODO: Enable header pagination support
const GetObjectAttributes = {
  awsDoc: docRoot + 'API_GetObjectAttributes.html',
  validate: {
    Bucket,
    Key,
    ObjectAttributes: { ...arr, required, comment: 'Specify attributes to be returned, can be one or more of: `ETag`, `Checksum`, `ObjectParts`, `StorageClass`, `ObjectSize`', ref: docRoot + 'API_GetObjectAttributes.html#API_GetObjectAttributes_RequestParameters' },
    VersionId,
    MaxParts: { ...num, comment: 'Maximum number of parts to be returned in the response' },
    ...getValidateHeaders('PartNumberMarker', 'SSECustomerAlgorithm',
      'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer', 'ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { 'attributes': '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
      // TODO: could not get the part paginator working to validate functionality; additionally, our current means of pagination would potentially remove other metadata from responses, so paginating this method may be better accomplished with an iterating paginator
    }
  },
  response: ({ payload, headers }) => {
    let result = { ...payload, ...parseHeadersToResults({ headers }) }
    let { ObjectParts } = result
    if (ObjectParts?.Part) {
      ObjectParts.Parts = Array.isArray(ObjectParts.Part) ? ObjectParts.Part : [ ObjectParts.Parts ]
      delete ObjectParts.Part
    }
    delete result.xmlns
    return result
  },
}

const GetObjectLegalHold = {
  awsDoc: docRoot + 'API_GetObjectLegalHold.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { 'legal-hold': '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload }) => {
    const { Status } = payload
    return {
      LegalHold: { Status },
    }
  },
}

const GetObjectLockConfiguration = {
  awsDoc: docRoot + 'API_GetObjectLockConfiguration.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const headers = getHeadersFromParams(params)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: '/?object-lock',
      headers,
    }
  },
  response: ({ payload }) => {
    const { ObjectLockEnabled, Rule } = payload
    return {
      ObjectLockConfiguration: {
        ObjectLockEnabled,
        Rule,
      },
    }
  },
}

const GetObjectRetention = {
  awsDoc: docRoot + 'API_GetObjectRetention.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { retention: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload }) => {
    const { Mode, RetainUntilDate } = payload
    return {
      Retention: {
        Mode,
        RetainUntilDate,
      },
    }
  },
}

const GetObjectTagging = {
  awsDoc: docRoot + 'API_GetObjectTagging.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { tagging: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ payload, headers }) => {
    const { VersionId } = parseHeadersToResults({ headers })
    let { TagSet } = payload
    const { Tag } = TagSet
    TagSet = Array.isArray(Tag) ? Tag : [ Tag ]
    return {
      VersionId,
      TagSet,
    }
  },
}

const GetObjectTorrent = {
  awsDoc: docRoot + 'API_GetObjectTorrent.html',
  validate: {
    Bucket,
    Key,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
  },
  request: (params, utils) => {
    const { Key } = params
    const headers = getHeadersFromParams(params)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/${Key}?torrent`,
      headers,
    }
  },
  response: ({ payload, headers }) => {
    const { Body } = payload
    const { RequestCharged } = parseHeadersToResults({ headers })
    return {
      Body,
      RequestCharged,
    }
  },
}

const GetPublicAccessBlock = {
  awsDoc: docRoot + 'API_GetPublicAccessBlock.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const headers = getHeadersFromParams(params)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      path: `/?publicAccessBlock`,
      headers,
    }
  },
  response: ({ payload }) => {
    let PublicAccessBlockConfiguration = { ...payload }
    delete PublicAccessBlockConfiguration.xmlns
    return { PublicAccessBlockConfiguration }
  },
}

const HeadBucket = {
  awsDoc: docRoot + 'API_HeadBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'HEAD',
      host,
      pathPrefix,
      headers: getHeadersFromParams(params),
    }
  },
  response: parseHeadersToResults,
}

const HeadObject = {
  awsDoc: docRoot + 'API_HeadObject.html',
  validate: {
    Bucket,
    Key,
    PartNumber,
    VersionId,
    // Here come the headers
    ...getValidateHeaders('IfMatch', 'IfModifiedSince', 'IfNoneMatch', 'IfUnmodifiedSince',
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
  },
  request: (params, utils) => {
    const { Key } = params
    const queryParams = [ 'PartNumber', 'VersionId' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams)
    const { host, pathPrefix } = getHost(params, utils)
    return {
      method: 'HEAD',
      host,
      pathPrefix,
      path: `/${Key}`,
      headers,
      query,
    }
  },
  response: ({ headers }) => parseHeadersToResults({ headers }, null, []),
  error: params => {
    if (params.statusCode === 404) {
      params.error = params.error || {}
      params.error.code = params.error.code || 'NotFound'
    }
    return params
  },
}

const ListBucketAnalyticsConfigurations = {
  awsDoc: docRoot + 'API_ListBucketAnalyticsConfigurations.html',
  validate: {
    Bucket,
    ContinuationToken,
    paginate: valPaginate,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'ContinuationToken' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams + [ 'paginate' ])
    let query = { analytics: '', ...getQueryFromParams(params, queryParams) }
    let paginate
    if (params.paginate) paginate = true
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'AnalyticsConfiguration' },
    }
  },
  response: ({ payload }) => {
    let { AnalyticsConfiguration: resultList } = payload
    if (resultList) {
      resultList = resultList.map(i => {
        if (i.Filter) normalizeResponseFilter(i.Filter)
        i.StorageClassAnalysis = i.StorageClassAnalysis || {}
        return i
      })
    }
    else {
      resultList = []
    }
    return resultList
  },
}

const ListBucketIntelligentTieringConfigurations = {
  awsDoc: docRoot + 'API_ListBucketIntelligentTieringConfigurations.html',
  validate: {
    Bucket,
    ContinuationToken,
    paginate: valPaginate,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'ContinuationToken' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams + [ 'paginate' ])
    let query = { 'intelligent-tiering': '', ...getQueryFromParams(params, queryParams) }
    let paginate
    if (params.paginate) paginate = true
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'IntelligentTieringConfiguration' },
    }
  },
  response: ({ payload }) => {
    let { IntelligentTieringConfiguration: resultList } = payload
    if (resultList) {
      resultList = resultList.map(i => {
        if (i.Filter) normalizeResponseFilter(i.Filter)
        if (!Array.isArray(i.Tiering)) i.Tiering = [ i.Tiering ]
        i.Tierings = i.Tiering
        delete i.Tiering
        return i
      })
    }
    else {
      resultList = []
    }
    return resultList
  },
}

const ListBucketInventoryConfigurations = {
  awsDoc: docRoot + 'API_ListBucketInventoryConfigurations.html',
  validate: {
    Bucket,
    ContinuationToken,
    paginate: valPaginate,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'ContinuationToken' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams + [ 'paginate' ])
    let query = { 'inventory': '', ...getQueryFromParams(params, queryParams) }
    let paginate
    if (params.paginate) paginate = true
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'InventoryConfiguration' },
    }
  },
  response: ({ payload }) => {
    let { InventoryConfiguration } = payload
    if (InventoryConfiguration) {
      InventoryConfiguration = InventoryConfiguration.map(i => {
        const { OptionalFields } = i
        if (OptionalFields) {
          const { Field } = OptionalFields
          i.OptionalFields = Array.isArray(Field) ? Field : [ Field ]
        }
        return i
      })
    }
    else {
      InventoryConfiguration = []
    }
    return InventoryConfiguration
  },
}

const ListBucketMetricsConfigurations = {
  awsDoc: docRoot + 'API_ListBucketMetricsConfigurations.html',
  validate: {
    Bucket,
    ContinuationToken,
    paginate: valPaginate,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'ContinuationToken' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams + [ 'paginate' ])
    let query = { 'metrics': '', ...getQueryFromParams(params, queryParams) }
    let paginate
    if (params.paginate) paginate = true
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'MetricsConfiguration' },
    }
  },
  response: ({ payload }) => {
    let { MetricsConfiguration } = payload
    if (MetricsConfiguration) {
      MetricsConfiguration = MetricsConfiguration.map(i => {
        if (i.Filter) normalizeResponseFilter(i.Filter)
        return i
      })
    }
    else {
      MetricsConfiguration = []
    }
    return MetricsConfiguration
  },
}

const ListBuckets = {
  awsDoc: docRoot + 'API_ListBuckets.html',
  validate: {},
  request: () => ({}),
  response: ({ payload }) => {
    let res = payload

    // Multiple buckets
    if (!payload.Buckets) {
      res.Buckets = []
    }
    if (!Array.isArray(payload.Buckets)) {
      res.Buckets = [ payload.Buckets ]
    }
    res.Buckets = res.Buckets.map(i => i.Bucket ? i.Bucket : i)
    return res
  },
}

const ListMultipartUploads = {
  awsDoc: docRoot + 'API_ListMultipartUploads.html',
  validate: {
    Bucket,
    Delimiter,
    EncodingType,
    KeyMarker: { ...str, comment: 'Pagination cursor' },
    MaxUploads: { ...num, comment: 'Maximum number of uploads between 1 and 1000 (inclusive) to return in the response' },
    UploadIdMarker: { ...str, comment: 'Deal with this later' },
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer'),
    paginate: valPaginate,
  },
  request: (params, utils) => {
    const queryParams = [ 'Delimiter', 'EncodingType', 'KeyMarker', 'MaxUploads', 'UploadMarker' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params, queryParams + [ 'paginate' ])
    let query = { uploads: '', ...getQueryFromParams(params, queryParams) }
    let paginate
    if (params.paginate) paginate = params.paginate
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: {
        type: 'query',
        cursor: [ 'key-marker', 'upload-id-marker' ],
        token: [ 'NextKeyMarker', 'NextUploadIdMarker' ],
        accumulator: 'Upload',
      },
    }
  },
  response: ({ payload, headers }) => {
    let { Upload: Uploads } = payload
    if (typeof Uploads === 'object' && !Array.isArray(Uploads)) {
      Uploads = [ Uploads ]
    }
    else if (!Uploads) {
      Uploads = []
    }
    return { Uploads, ...parseHeadersToResults({ headers }) }
  },
}

const ListObjectsV2 = {
  awsDoc: docRoot + 'API_ListObjectsV2.html',
  validate: {
    Bucket,
    ContinuationToken,
    Delimiter,
    EncodingType,
    FetchOwner: { ...str, comment: 'Return owner field with results' },
    MaxKeys: { ...num, comment: 'Set the maximum number of keys returned per response' },
    Prefix,
    StartAfter: { ...str, comment: 'Starts listing after any specified key in the bucket' },
    // Here come the headers
    ...getValidateHeaders('RequestPayer', 'ExpectedBucketOwner', 'OptionalObjectAttributes'),
    paginate: valPaginate,
  },
  request: (params, utils) => {
    const { paginate } = params
    const queryParams = [ 'ContinuationToken', 'Delimiter', 'EncodingType', 'FetchOwner', 'MaxKeys', 'Prefix', 'StartAfter' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = getQueryFromParams(params, queryParams) || {}
    query['list-type'] = 2
    const { host, pathPrefix } = getHost(params, utils)
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'Contents' },
    }
  },
  response: ({ headers, payload }) => {
    const res = payload
    const charged = 'x-amz-request-charged'
    if (headers[charged]) res[paramMappings[charged]] = headers[charged]

    if (!payload.Contents) {
      res.Contents = []
    }
    if (payload.Contents) {
      res.Contents = Array.isArray(payload.Contents) ? payload.Contents : [ payload.Contents ]
    }
    return res
  },
}

// TODO: allow multiple pagination accumulators before providing pagination support
const ListObjectVersions = {
  awsDoc: docRoot + 'API_ListObjectVersions.html',
  validate: {
    Bucket,
    Delimiter,
    EncodingType,
    KeyMarker: { ...str, comment: 'Pagination cursor' },
    MaxKeys: { ...num, comment: 'Maximum number of keys (at most 1000) to be returned in the response' },
    Prefix,
    VersionIdMarker: { ...str, comment: 'Specify the version to begin listing from', ref: docRoot + 'API_ListObjectVersions.html#API_ListObjectVersions_RequestParameters' },
    paginate: valPaginate,
    ...getValidateHeaders('ExpectedBucketOwner', 'RequestPayer', 'OptionalObjectAttributes'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Delimiter', 'EncodingType', 'KeyMarker', 'MaxKeys', 'Prefix', 'VersionIdMarker' ]
    const headers = getHeadersFromParams(params, queryParams)
    const query = { versions: '', ...getQueryFromParams(params, queryParams) }
    const { host, pathPrefix } = getHost(params, utils)
    const { paginate } = params
    return {
      host,
      pathPrefix,
      headers,
      query,
      paginate,
      paginator: {
        type: 'query',
        cursor: [ 'key-marker', 'version-id-marker' ],
        token: [ 'NextKeyMarker', 'NextVersionIdMarker' ],
      },
    }
  },
  response: ({ headers, payload }) => {
    let { Version, DeleteMarker, CommonPrefixes } = payload
    if (Version) {
      Version = Array.isArray(Version) ? Version : [ Version ]
      payload.Versions = Version.map(i => {
        if (i.ChecksumAlgorithm && Array.isArray(i.ChecksumAlgorithm)) i.ChecksumAlgorithm = [ i.ChecksumAlgorithm ]
        return i
      })
      delete payload.Version
    }
    if (DeleteMarker) {
      payload.DeleteMarkers = Array.isArray(DeleteMarker) ? DeleteMarker : [ DeleteMarker ]
      delete payload.DeleteMarker
    }
    if (CommonPrefixes && !Array.isArray(CommonPrefixes)) payload.CommonPrefixes = [ payload.CommonPrefixes ]
    return {
      ...payload,
      ...parseHeadersToResults({ headers }),
    }
  },
}

// TODO: prevent paginator from excluding fields that are not the accumulator
const ListParts = {
  awsDoc: docRoot + 'API_ListParts.html',
  validate: {
    Bucket,
    Key,
    UploadId,
    MaxParts: { ...num, comment: 'Maximum number of parts (at most 1000) to be returned in the response' },
    PartNumberMarker: { ...str, comment: 'Pagination cursor' },
    // paginate: valPaginate,
    ...getValidateHeaders('RequestPayer', 'ExpectedBucketOwner', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5'),
  },
  request: (params, utils) => {
    const queryParams = [ 'MaxParts', 'PartNumberMarker', 'UploadId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const { Key /* paginate*/ } = params
    return {
      host,
      pathPrefix,
      path: `/${Key}`,
      query: getQueryFromParams(params, queryParams),
      headers: getHeadersFromParams(params, queryParams),
      // paginate,
      // paginator: {
      //   type: 'query',
      //   cursor: 'part-number-marker',
      //   token: 'NextPartNumberMarker',
      //   accumulator: 'Part',
      // },
    }
  },
  response: ({ payload, headers }) => {
    let res = { ...payload, ...parseHeadersToResults({ headers }) }
    if (res.Part) {
      res.Parts = Array.isArray(res.Part) ? res.Part : [ res.Part ]
      delete res.Part
    }
    return res
  },
}

const PutBucketAccelerateConfiguration = {
  awsDoc: docRoot + 'API_PutBucketAccelerateConfiguration.html',
  validate: {
    AccelerateConfiguration: { ...obj, required, comment: 'Object specifying acceleration configurations; can contain one of: `Status: \'Enabled\'`, `Status: \'Suspended\'`', ref: docRoot + 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html#AmazonS3-PutBucketAccelerateConfiguration-request-Status' },
    Bucket,
    ...getValidateHeaders('ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const headers = { ...xml, ...getHeadersFromParams(params) }
    const { AccelerateConfiguration } = params
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?accelerate',
      headers,
      xmlns,
      payload: { AccelerateConfiguration },
    }
  },
  response: defaultResponse,
}

// TODO: Add support for nested XML attributes
// const PutBucketAcl = {
//   awsDoc: docRoot + 'API_PutBucketAcl.html',
//   validate: {
//     Bucket,
//     AccessControlPolicy: { ...obj, comment: 'Object defining the access control policy', ref: docRoot + 'API_PutBucketAcl.html#AmazonS3-PutBucketAcl-request-AccessControlPolicy' },
//     ...getValidateHeaders('ACL', 'ContentMD5', 'ChecksumAlgorithm', 'GrantFullControl',
//       'GrantRead', 'GrantReadACP', 'GrantWrite', 'GrantWriteACP', 'ExpectedBucketOwner'),
//   },
//   request: (params, utils) => {
//     const { host, pathPrefix } = getHost(params, utils)
//     const headers = { ...xml, ...getHeadersFromParams(params) }
//     let { AccessControlPolicy } = params

//     if (AccessControlPolicy.Grants) {
//       AccessControlPolicy.Grants = AccessControlPolicy.Grants.map(i => {
//         i.Grantee['xsi:type'] = i.Grantee.Type
//         delete i.Grantee.Type
//         return i
//       })

//       AccessControlPolicy.AccessControlList = {
//         Grant: AccessControlPolicy.Grants,
//       }
//       delete AccessControlPolicy.Grants

//     }

//     return {
//       method: 'PUT',
//       host,
//       pathPrefix,
//       path: '/?acl',
//       headers,
//       payload: { AccessControlPolicy },
//       xmlns,
//     }
//   },
//   response: defaultResponse,
// }

const PutBucketAnalyticsConfiguration = {
  awsDoc: docRoot + 'API_PutBucketAnalyticsConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the analytics configuration' },
    AnalyticsConfiguration: { ...obj, required, comment: 'Object defining the analytics configuration', ref: docRoot + 'API_PutBucketAnalyticsConfiguration.html#AmazonS3-PutBucketAnalyticsConfiguration-request-AnalyticsConfiguration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = { ...xml, ...getHeadersFromParams(params, queryParams) }
    const query = { analytics: '', ...getQueryFromParams(params, queryParams) }
    const { AnalyticsConfiguration } = params
    const { Id, Filter, StorageClassAnalysis } = AnalyticsConfiguration
    let payload = { Id, StorageClassAnalysis }
    if (Filter) payload.Filter = serializeRequestFilter(Filter)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      query,
      headers,
      xmlns,
      payload: { AnalyticsConfiguration: payload },
    }
  },
  response: defaultResponse,
}

const PutBucketCors = {
  awsDoc: docRoot + 'API_PutBucketCors.html',
  validate: {
    Bucket,
    CORSConfiguration: { ...obj, required, comment: 'Object defining the CORS configuration', ref: docRoot + 'API_PutBucketCors.html#AmazonS3-PutBucketCors-request-CORSConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { CORSConfiguration } = params
    const payload = {
      CORSConfiguration: {
        CORSRule: CORSConfiguration.CORSRules.map(i => {
          const { AllowedHeaders, AllowedMethods, AllowedOrigins, ExposeHeaders } = i
          let result = { ...i }
          if (AllowedHeaders) {
            result.AllowedHeader = AllowedHeaders
            delete result.AllowedHeaders
          }
          if (AllowedMethods) {
            result.AllowedMethod = AllowedMethods
            delete result.AllowedMethods
          }
          if (AllowedOrigins) {
            result.AllowedOrigin = AllowedOrigins
            delete result.AllowedOrigins
          }
          if (ExposeHeaders) {
            result.ExposeHeader = ExposeHeaders
            delete result.ExposeHeaders
          }
          return result
        }),
      },
    }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?cors',
      headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketEncryption = {
  awsDoc: docRoot + 'API_PutBucketEncryption.html',
  validate: {
    Bucket,
    ServerSideEncryptionConfiguration: { ...obj, required, comment: 'Object defining the server side encryption configuration', ref: docRoot + 'API_PutBucketEncryption.html#AmazonS3-PutBucketEncryption-request-ServerSideEncryptionConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { ServerSideEncryptionConfiguration } = params
    const { Rules: Rule } = ServerSideEncryptionConfiguration
    const payload = { ServerSideEncryptionConfiguration: { Rule } }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?encryption',
      headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketIntelligentTieringConfiguration = {
  awsDoc: docRoot + 'API_PutBucketIntelligentTieringConfiguration.html',
  validate: {
    Bucket,
    Id: { ...str, required, comment: 'Id of the intelligent tiering configuration' },
    IntelligentTieringConfiguration: { ...obj, required, comment: 'Object defining the intelligent tiering configuration; required fields are: `Id`, `Status`, `Tierings` ', ref: docRoot + 'API_PutBucketIntelligentTieringConfiguration.html#AmazonS3-PutBucketIntelligentTieringConfiguration-request-IntelligentTieringConfiguration' },
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const query = { 'intelligent-tiering': '', ...getQueryFromParams(params, [ 'Id' ]) }
    const { IntelligentTieringConfiguration } = params
    const { Id, Filter, Status, Tierings: Tiering } = IntelligentTieringConfiguration
    let payload = { Id, Status, Tiering }
    if (Filter) payload.Filter = serializeRequestFilter(Filter)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      query,
      headers: xml,
      xmlns,
      payload: { IntelligentTieringConfiguration: payload },
    }
  },
  response: defaultResponse,
}

const PutBucketInventoryConfiguration = {
  awsDoc: docRoot + 'API_PutBucketInventoryConfiguration.html',
  validate: {
    Bucket,
    Id,
    InventoryConfiguration: { ...obj, required, comment: 'Object defining the inventory configuration; required config fields are: `Id`, `IsEnabled`, `IncludedObjectVersion`, `Destination`, `Schedule`', ref: docRoot + 'API/API_PutBucketInventoryConfiguration.html#AmazonS3-PutBucketInventoryConfiguration-request-InventoryConfiguration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const queryParams = [ 'Id' ]
    const { host, pathPrefix } = getHost(params, utils)
    const query = { 'inventory': '', ...getQueryFromParams(params, queryParams) }
    const headers = { ...xml, ...getHeadersFromParams(params, queryParams) }
    const { InventoryConfiguration } = params
    let payload = { ...InventoryConfiguration }
    if (payload.OptionalFields) payload.OptionalFields = { Field: payload.OptionalFields }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      query,
      headers,
      xmlns,
      payload: { InventoryConfiguration: payload },
    }
  },
  response: defaultResponse,
}

const PutBucketLifecycleConfiguration = {
  awsDoc: docRoot + 'API_PutBucketLifecycleConfiguration.html',
  validate: {
    Bucket,
    LifecycleConfiguration: { ...obj, required, comment: 'Object defining the lifecycle configuration', ref: docRoot + 'API_PutBucketLifecycleConfiguration.html#AmazonS3-PutBucketLifecycleConfiguration-request-LifecycleConfiguration' },
    ...getValidateHeaders('ChecksumAlgorithm', 'ExpectedBucketOwner', 'ContentMD5'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { LifecycleConfiguration } = params
    const payload = {
      LifecycleConfiguration: {
        Rule: LifecycleConfiguration.Rules.map(i => {
          let result = { ...i }
          if (result.Filter) result.Filter = serializeRequestFilter(result.Filter)
          changeObjectKey(result, 'Transitions', 'Transition')
          changeObjectKey(result, 'NoncurrentVersionTransitions', 'NoncurrentVersionTransition')
          return result
        }),
      },
    }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?lifecycle',
      headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

// TODO: Add support for nested XML attributes
// const PutBucketLogging = {
//   awsDoc: docRoot + 'API_PutBucketLogging.html',
//   validate: {
//     Bucket,
//     BucketLoggingStatus: { ...obj, required, comment: 'Object defining the logging status', ref: docRoot + 'AmazonS3/latest/API/API_PutBucketLogging.html#AmazonS3-PutBucketLogging-request-BucketLoggingStatus' },
//     ...getValidateHeaders('ChecksumAlgorithm', 'ExpectedBucketOwner', 'ContentMD5'),
//   },
//   request: async (params, utils) => {
//     const { host, pathPrefix } = getHost(params, utils)
//     let { BucketLoggingStatus } = params
//     if (BucketLoggingStatus.LoggingEnabled?.TargetGrants) {
//       BucketLoggingStatus.TargetGrants = { Grant: BucketLoggingStatus.TargetGrants }
//     }
//     const payload = { BucketLoggingStatus }
//     const checksum = await makeChecksumSHA256(utils, payload, { xmlns } )
//     return {
//       method: 'PUT',
//       host,
//       pathPrefix,
//       path: '/?logging',
//       headers: { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum },
//       xmlns,
//       payload,
//     }
//   },
//   response: defaultResponse,
// }

const PutBucketMetricsConfiguration = {
  awsDoc: docRoot + 'API_PutBucketMetricsConfiguration.html',
  validate: {
    Bucket,
    Id,
    MetricsConfiguration: { ...obj, required, comment: 'Object defining the metrics configuration', ref: docRoot + 'API_PutBucketMetricsConfiguration.html#AmazonS3-PutBucketMetricsConfiguration-request-MetricsConfiguration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'Id' ]
    const { host, pathPrefix } = getHost(params, utils)
    const query = { metrics: '', ...getQueryFromParams(params, queryParams) }
    const { MetricsConfiguration } = params
    let { Id, Filter } = MetricsConfiguration
    if (Filter) Filter = serializeRequestFilter(Filter)
    const payload = {
      MetricsConfiguration: {
        Id,
        Filter,
      },
    }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      query,
      headers: { ...xml, ...getHeadersFromParams(params, queryParams) },
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketNotificationConfiguration = {
  awsDoc: docRoot + 'API_PutBucketNotificationConfiguration.html',
  validate: {
    Bucket,
    NotificationConfiguration: { ...obj, required, comment: 'Object defining the notification configuration', ref: docRoot + 'API_PutBucketNotificationConfiguration.html#AmazonS3-PutBucketNotificationConfiguration-request-NotificationConfiguration' },
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { NotificationConfiguration } = params
    const { TopicConfigurations, QueueConfigurations, LambdaFunctionConfigurations, EventBridgeConfiguration } = NotificationConfiguration
    let payload = { EventBridgeConfiguration }
    const serializeFilter = Filter => {
      return {
        S3Key: {
          FilterRule: Filter.Key.FilterRules,
        },
      }
    }
    const serializeConfig = (config, oldArnKey, newArnKey) => {
      return config.map(i => {
        let result = {
          Event: i.Events,
          Topic: i.TopicArn,
          Id: i.Id,
        }
        result[newArnKey] = i[oldArnKey]
        if (i.Filter) result.Filter = serializeFilter(i.Filter)
        return result
      })
    }
    if (TopicConfigurations)
      payload.TopicConfiguration = serializeConfig(TopicConfigurations, 'TopicArn', 'Topic')

    if (QueueConfigurations)
      payload.QueueConfiguration = serializeConfig(QueueConfigurations, 'QueueArn', 'Queue')

    if (LambdaFunctionConfigurations)
      payload.CloudFunctionConfiguration = serializeConfig(LambdaFunctionConfigurations, 'LambdaFunctionArn', 'CloudFunction')

    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?notification',
      headers: { ...xml, ...getHeadersFromParams(params) },
      xmlns,
      payload: { NotificationConfiguration: payload },
    }
  },
  response: defaultResponse,
}

const PutBucketOwnershipControls = {
  awsDoc: docRoot + 'API_PutBucketOwnershipControls.html',
  validate: {
    Bucket,
    OwnershipControls: { ...obj, required, comment: 'Object defining the ownership controls', ref: docRoot + 'API_PutBucketOwnershipControls.html#AmazonS3-PutBucketOwnershipControls-request-OwnershipControls' },
    ...getValidateHeaders('ContentMD5', 'ExpectedBucketOwner'),
  },
  request: (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { OwnershipControls } = params
    const { Rules: Rule } = OwnershipControls
    const payload = {
      OwnershipControls: {
        Rule,
      },
    }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?ownershipControls',
      headers: { ...xml, ...getHeadersFromParams(params) },
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketPolicy = {
  awsDoc: docRoot + 'API_PutBucketPolicy.html',
  validate: {
    Bucket,
    Policy: { ...obj, required, comment: 'Object defining the policy', ref: docRoot + 'API_PutBucketPolicy.html#API_PutBucketPolicy_RequestBody' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ConfirmRemoveSelfBucketAccess', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { Policy: payload } = params
    const { host, pathPrefix } = getHost(params, utils)
    const { createHash } = await import('node:crypto')
    const payloadString = JSON.stringify(payload)
    const checksum = Buffer.from(createHash('sha256').update(payloadString).digest()).toString('base64')
    const headers = { ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?policy',
      headers,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketReplication = {
  awsDoc: docRoot + 'API_PutBucketReplication.html',
  validate: {
    Bucket,
    ReplicationConfiguration: { ...obj, required, comment: 'Object defining the replication configuration', ref: docRoot + 'API_PutBucketReplication.html#AmazonS3-PutBucketReplication-request-ReplicationConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'Token', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { ReplicationConfiguration } = params
    let { Role, Rules: Rule } = ReplicationConfiguration

    Rule = Rule.map(i => {
      const { Filter } = i
      let result = { ...i }
      if (Filter) result.Filter = serializeRequestFilter(Filter)
      return result
    })

    const payload = {
      ReplicationConfiguration: {
        Role,
        Rule,
      },
    }

    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?replication',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketRequestPayment = {
  awsDoc: docRoot + 'API_PutBucketRequestPayment.html',
  validate: {
    Bucket,
    RequestPaymentConfiguration: { ...obj, required, comment: 'Object defining the payment configuration; must contain `Payer`, which can be one of: `Requester`, `BucketOwner`' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { RequestPaymentConfiguration } = params
    const payload = { RequestPaymentConfiguration }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?requestPayment',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketTagging = {
  awsDoc: docRoot + 'API_PutBucketTagging.html',
  validate: {
    Bucket,
    Tagging: { ...obj, required, comment: 'Object defining the tag set', ref: docRoot + 'API_PutBucketTagging.html#AmazonS3-PutBucketTagging-request-Tagging' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { Tagging } = params
    const payload = {
      Tagging: {
        TagSet: {
          Tag: Tagging.TagSet,
        },
      },
    }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?tagging',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketVersioning = {
  awsDoc: docRoot + 'API_PutBucketVersioning.html',
  validate: {
    Bucket,
    VersioningConfiguration: { ...obj, required, comment: 'Object defining the versioning configuration', ref: docRoot + 'API_PutBucketVersioning.html#AmazonS3-PutBucketVersioning-request-VersioningConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'MFA', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { VersioningConfiguration } = params
    const { Status, MFADelete: MfaDelete } = VersioningConfiguration
    const payload = {
      VersioningConfiguration: {
        MfaDelete,
        Status,
      },
    }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?versioning',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutBucketWebsite = {
  awsDoc: docRoot + 'API_PutBucketWebsite.html',
  validate: {
    Bucket,
    WebsiteConfiguration: { ...obj, required, comment: 'Object defining the website configuration', ref: docRoot + 'API_PutBucketWebsite.html#AmazonS3-PutBucketWebsite-request-WebsiteConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { WebsiteConfiguration } = params
    const { RoutingRules: RoutingRule } = WebsiteConfiguration
    let payload = { WebsiteConfiguration: { ...WebsiteConfiguration } }
    if (RoutingRule) payload.WebsiteConfiguration.RoutingRules = { RoutingRule }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?website',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const PutObjectLegalHold = {
  awsDoc: docRoot + 'API_PutObjectLegalHold.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    LegalHold: { ...obj, required, comment: 'Object containing the field `Status` (string) which can be one of: `ON`, `OFF`' },
    ...getValidateHeaders('RequestPayer', 'ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'VersionId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const { LegalHold, Key } = params
    const payload = { LegalHold }
    const query = { 'legal-hold': '', ...getQueryFromParams(params, queryParams) }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params, queryParams), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers,
      xmlns,
      payload,
    }
  },
  response: ({ headers }) => {
    let result = {}
    const { RequestCharged } = parseHeadersToResults({ headers })
    if (RequestCharged) result.RequestCharged = RequestCharged
    return result
  },
}

const PutObjectLockConfiguration = {
  awsDoc: docRoot + 'API_PutObjectLockConfiguration.html',
  validate: {
    Bucket,
    ObjectLockConfiguration: { ...obj, required, comment: 'Object defining the object lock configuration', ref: docRoot + 'API_PutObjectLockConfiguration.html#AmazonS3-PutObjectLockConfiguration-request-ObjectLockConfiguration' },
    ...getValidateHeaders('RequestPayer', 'Token', 'ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { ObjectLockConfiguration } = params
    const payload = { ObjectLockConfiguration }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/?object-lock`,
      headers,
      xmlns,
      payload,
    }
  },
  response: ({ headers }) => {
    let result = {}
    const { RequestCharged } = parseHeadersToResults({ headers })
    if (RequestCharged) result.RequestCharged = RequestCharged
    return result
  },
}

const PutObjectRetention = {
  awsDoc: docRoot + 'API_PutObjectRetention.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    Retention: { ...obj, required, comment: 'Object specifying the object retention parameters', ref: docRoot + 'API_PutObjectRetention.html#AmazonS3-PutObjectRetention-request-Retention' },
    ...getValidateHeaders('RequestPayer', 'BypassGovernanceRetention', 'ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'VersionId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const { Retention, Key } = params
    const payload = { Retention }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params, queryParams), 'x-amz-checksum-sha256': checksum }
    const query = { 'retention': '', ...getQueryFromParams(params, queryParams) }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers,
      xmlns,
      payload,
    }
  },
  response: ({ headers }) => {
    let result = {}
    const { RequestCharged } = parseHeadersToResults({ headers })
    if (RequestCharged) result.RequestCharged = RequestCharged
    return result
  },

}

const PutObjectTagging = {
  awsDoc: docRoot + 'API_PutObjectTagging.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    Tagging: { ...obj, required, comment: 'Object containing the tag set', ref: docRoot + 'API_PutObjectTagging.html#AmazonS3-PutObjectTagging-request-Tagging' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner', 'RequestPayer'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'VersionId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const { Tagging, Key } = params
    const payload = { Tagging: { TagSet: { Tag: Tagging.TagSet } } }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params, queryParams), 'x-amz-checksum-sha256': checksum }
    const query = { 'tagging': '', ...getQueryFromParams(params, queryParams) }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers,
      xmlns,
      payload,
    }
  },
  response: parseHeadersToResults,
}

const PutPublicAccessBlock = {
  awsDoc: docRoot + 'API_PutPublicAccessBlock.html',
  validate: {
    Bucket,
    PublicAccessBlockConfiguration: { ...obj, required, comment: 'Object defining the public access block configuration', ref: docRoot + 'API_PutPublicAccessBlock.html#AmazonS3-PutPublicAccessBlock-request-PublicAccessBlockConfiguration' },
    ...getValidateHeaders('ContentMD5', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const { host, pathPrefix } = getHost(params, utils)
    const { PublicAccessBlockConfiguration } = params
    const payload = { PublicAccessBlockConfiguration }
    const checksum = await makeChecksumSHA256(utils, payload, { xmlns })
    const headers = { ...xml, ...getHeadersFromParams(params), 'x-amz-checksum-sha256': checksum }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: '/?publicAccessBlock',
      headers,
      xmlns,
      payload,
    }
  },
  response: defaultResponse,
}

const RestoreObject = {
  awsDoc: docRoot + 'API_RestoreObject.html',
  validate: {
    Bucket,
    Key,
    RestoreRequest: { ...obj, required, comment: 'Object defining the restore request', ref: docRoot + 'API_RestoreObject.html#AmazonS3-RestoreObject-request-RestoreRequest' },
    VersionId,
    ...getValidateHeaders( 'RequestPayer', 'ChecksumAlgorithm', 'ExpectedBucketOwner'),
  },
  request: async (params, utils) => {
    const queryParams = [ 'VersionId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const query = { restore: '', ...getQueryFromParams(params, queryParams) }
    let { RestoreRequest } = params

    if (RestoreRequest.OutputLocation?.S3.AccessControlList)
      RestoreRequest.OutputLocation.S3.AccessControlList = { Grant: RestoreRequest.OutputLocation.S3.AccessControlList }

    if (RestoreRequest.OutputLocation?.S3.Tagging)
      RestoreRequest.OutputLocation.S3.Tagging.TagSet = { Tag: RestoreRequest.OutputLocation.S3.Tagging.TagSet }

    const headers = { ...xml, ...getHeadersFromParams(params, queryParams) }
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers,
      xmlns,
      payload: { RestoreRequest },
    }
  },
  response: parseHeadersToResults,
}

// The response will take some more time to figure out
// TODO: RequestProgress will require some extra work
// const SelectObjectContent = {
//   awsDoc: docRoot + 'API_SelectObjectContent.html',
//   validate: {
//     Bucket,
//     Key,
//     Expression: { ...str, required, comment: 'Query expression' },
//     ExpressionType: { ...str, required, comment: 'The type of the query; can be one of: `SQL`' },
//     InputSerialization: { ...obj, required, comment: 'Specify the data format of the object being queried', ref: docRoot + 'API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-InputSerialization' },
//     OutputSerialization: { ...obj, required, comment: 'Specify the data format of the response', ref: docRoot + 'API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-OutputSerialization' },
//     RequestProgress: { ...obj, comment: 'Request periodic progress reports', ref: docRoot + 'API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-RequestProgress' },
//     ScanRange: { ...obj, comment: 'Limit the search space to a range (in bytes) within the object', ref: docRoot + 'API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-ScanRange' },
//   },
//   request: async (params, utils) => {
//     const { host, pathPrefix } = getHost(params, utils)
//     const { Key } = params
//     const headers = { ...xml, ...getHeadersFromParams(params) }
//     let SelectObjectContentRequest = { ...params }
//     delete SelectObjectContentRequest.Key
//     return {
//       method: 'POST',
//       // streamResponsePayload: true,
//       host,
//       pathPrefix,
//       path: `/${Key}`,
//       query:  { select: '', 'select-type': 2 },
//       headers,
//       xmlns,
//       payload: { SelectObjectContentRequest },
//     }
//   },
//   response: ({ payload }) => payload,
// }

const UploadPart = {
  awsDoc: docRoot + 'API_UploadPart.html',
  validate: {
    Bucket,
    Key,
    PartNumber,
    Body: { type: [ 'buffer', 'stream', 'string' ], comment: 'Stream of data to be uploaded', ref: docRoot + 'AmazonS3/latest/API/API_UploadPart.html#API_UploadPart_RequestBody' },
    ...getValidateHeaders('ContentLength', 'ContentMD5', 'ChecksumAlgorithm', 'ChecksumCRC32',
      'ChecksumCRC32C', 'ChecksumSHA1', 'ChecksumSHA256', 'SSECustomerAlgorithm',
      'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer', 'ExpectedBucketOwner',
    ),
  },
  request: (params, utils) => {
    const { Key, Body } = params
    const queryParams = [ 'PartNumber', 'UploadId' ]
    const { host, pathPrefix } = getHost(params, utils)
    const headers = getHeadersFromParams(params)
    const query = getQueryFromParams(params, queryParams)
    return {
      method: 'PUT',
      host,
      pathPrefix,
      path: `/${Key}`,
      query,
      headers,
      payload: Body,
    }
  },
  response: ({ headers }) => parseHeadersToResults({ headers }),
}

const methods = {
  AbortMultipartUpload,
  CompleteMultipartUpload,
  CopyObject,
  CreateBucket,
  CreateMultipartUpload,
  DeleteBucket,
  DeleteBucketAnalyticsConfiguration,
  DeleteBucketCors,
  DeleteBucketEncryption,
  DeleteBucketIntelligentTieringConfiguration,
  DeleteBucketInventoryConfiguration,
  DeleteBucketLifecycle,
  DeleteBucketMetricsConfiguration,
  DeleteBucketOwnershipControls,
  DeleteBucketPolicy,
  DeleteBucketReplication,
  DeleteBucketTagging,
  DeleteBucketWebsite,
  DeleteObject,
  DeleteObjects,
  DeleteObjectTagging,
  DeletePublicAccessBlock,
  GetBucketAccelerateConfiguration,
  GetBucketAcl,
  GetBucketAnalyticsConfiguration,
  GetBucketCors,
  GetBucketEncryption,
  GetBucketIntelligentTieringConfiguration,
  GetBucketInventoryConfiguration,
  GetBucketLifecycleConfiguration,
  GetBucketLocation,
  GetBucketLogging,
  GetBucketMetricsConfiguration,
  GetBucketNotificationConfiguration,
  GetBucketOwnershipControls,
  GetBucketPolicy,
  GetBucketPolicyStatus,
  GetBucketReplication,
  GetBucketRequestPayment,
  GetBucketTagging,
  GetBucketVersioning,
  GetBucketWebsite,
  GetObject,
  GetObjectAcl,
  GetObjectAttributes,
  GetObjectLegalHold,
  GetObjectLockConfiguration,
  GetObjectRetention,
  GetObjectTagging,
  GetObjectTorrent,
  GetPublicAccessBlock,
  HeadBucket,
  HeadObject,
  ListBucketAnalyticsConfigurations,
  ListBucketIntelligentTieringConfigurations,
  ListBucketInventoryConfigurations,
  ListBucketMetricsConfigurations,
  ListBuckets,
  ListMultipartUploads,
  ListObjectsV2,
  ListObjectVersions,
  ListParts,
  PutBucketAccelerateConfiguration,
  PutBucketAnalyticsConfiguration,
  PutBucketCors,
  PutBucketEncryption,
  PutBucketIntelligentTieringConfiguration,
  PutBucketInventoryConfiguration,
  PutBucketLifecycleConfiguration,
  PutBucketMetricsConfiguration,
  PutBucketNotificationConfiguration,
  PutBucketOwnershipControls,
  PutBucketPolicy,
  PutBucketReplication,
  PutBucketRequestPayment,
  PutBucketTagging,
  PutBucketVersioning,
  PutBucketWebsite,
  PutObject,
  PutObjectLegalHold,
  PutObjectLockConfiguration,
  PutObjectRetention,
  PutObjectTagging,
  PutPublicAccessBlock,
  RestoreObject,
  // SelectObjectContent,
  Upload,
  UploadPart,
  ...incomplete,
}

export default {
  name: '@aws-lite/s3',
  service,
  property,
  methods,
}
