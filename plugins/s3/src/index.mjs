/**
 * Plugin maintained by: @architect
 */

import incomplete from './incomplete.mjs'
import lib from './lib.mjs'
const { getValidateHeaders, getHeadersFromParams, getQueryFromParams, paramMappings, parseHeadersToResults } = lib
import PutObject from './put-object.mjs'

const service = 's3'
const property = 'S3'
const required = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'

// Validation types
// const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const str = { type: 'string' }
const num = { type: 'number' }

const xml = { 'content-type': 'application/xml' }

const Bucket = { ...str, required, comment: 'S3 bucket name' }
const Key = { ...str, required, comment: 'S3 key / file name' }
const PartNumber = { ...num, comment: 'Part number (between 1 - 10,000) of the object' }
const VersionId = { ...str, comment: 'Reference a specific version of the object' }

const notTesting = process.env.NODE_ENV !== 'testing'
const host = Bucket => notTesting ? `${Bucket}.s3.amazonaws.com` : 'localhost'
const endpoint = (Bucket, path) => notTesting ? path : `/${Bucket}${path ? '/' + path : ''}`
const defaultResponse = ({ payload }) => payload
const defaultError = ({ statusCode, error }) => {
  // SDK v2 lowcases `code`
  if (error?.Code) {
    error.name = error.code = error.Code
    delete error.Code
  }
  return { statusCode, error }
}

const CreateBucket = {
  awsDoc: docRoot + 'API_CreateBucket.html',
  validate: {
    Bucket,
    CreateBucketConfiguration: { ...obj, required, comment: 'Complete bucket configuration object', ref: docRoot + 'API_CreateBucket.html#API_CreateBucket_RequestSyntax' },
    ...getValidateHeaders('ACL', 'GrantFullControl', 'GrantRead', 'GrantReadACP', 'GrantWrite', 'GrantWriteACP', 'ObjectLockEnabledForBucket', 'ObjectOwnership'),
  },
  request: (params) => {
    let { Bucket } = params
    return {
      host: host(Bucket),
      method: 'PUT',
      endpoint: endpoint(Bucket),
      headers: { ...xml, ...getHeadersFromParams(params) },
    }
  },
  response: ({ headers }) => {
    return { Location: headers.Location || headers.location }
  }
}

const DeleteBucket = {
  awsDoc: docRoot + 'API_DeleteBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params) => {
    let { Bucket } = params
    return {
      host: host(Bucket),
      method: 'DELETE',
      endpoint: endpoint(Bucket),
      headers: { ...getHeadersFromParams(params) },
    }
  },
  response: () => ({}),
}

const DeleteObject = {
  awsDoc: docRoot + 'API_DeleteObject.html',
  validate: {
    Bucket,
    Key,
    VersionId,
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner'),
  },
  request: (params) => {
    const { Bucket } = params
    return {
      host: host(Bucket),
      method: 'DELETE',
      endpoint: endpoint(Bucket, `/${Key}`),
      headers: { ...xml, ...getHeadersFromParams(params) },
    }
  },
  response: defaultResponse,
}

const DeleteObjects = {
  awsDoc: docRoot + 'API_DeleteObjects.html',
  validate: {
    Bucket,
    Delete: { ...obj, required, comment: 'Object deletion request' },
    ...getValidateHeaders('MFA', 'RequestPayer', 'BypassGovernanceRetention', 'ExpectedBucketOwner', 'ChecksumAlgorithm'),
  },
  request: (params) => {
    const { Bucket, Delete } = params
    return {
      host: host(Bucket),
      endpoint: endpoint(Bucket, '/?delete'),
      headers: { ...xml, ...getHeadersFromParams(params) },
      payload: { Delete },
    }
  },
  response: defaultResponse,
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
      'Range', 'SSECustomerAlgorithm', 'SSECustomerKey', 'SSECustomerKeyMD5', 'RequestPayer',
      'ExpectedBucketOwner', 'ChecksumMode'),
    ResponseCacheControl:       { ...str, comment: 'Sets response header: `cache-control`' },
    ResponseContentDisposition: { ...str, comment: 'Sets response header: `content-disposition`' },
    ResponseContentEncoding:    { ...str, comment: 'Sets response header: `content-encoding`' },
    ResponseContentLanguage:    { ...str, comment: 'Sets response header: `content-language`' },
    ResponseContentType:        { ...str, comment: 'Sets response header: `content-type`' },
    ResponseExpires:            { ...str, comment: 'Sets response header: `expires`' },
  },
  request: (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'ResponseCacheControl', 'ResponseContentDisposition',
      'ResponseContentEncoding', 'ResponseContentLanguage', 'ResponseContentType',
      'ResponseExpires', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      host: host(Bucket),
      endpoint: endpoint(Bucket, `/${Key}`),
      headers,
      query,
    }
  },
  response: ({ headers, payload }) => {
    return {
      Body: payload,
      ...parseHeadersToResults({ headers }, null, [])
    }
  },
  error: defaultError,
}

const HeadBucket = {
  awsDoc: docRoot + 'API_HeadBucket.html',
  validate: {
    Bucket,
    ...getValidateHeaders('ExpectedBucketOwner'),
  },
  request: (params) => {
    let { Bucket } = params
    return {
      host: host(Bucket),
      endpoint: endpoint(Bucket),
      method: 'HEAD',
      headers: getHeadersFromParams(params),
    }
  },
  response: parseHeadersToResults,
  error: defaultError,
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
  request: (params) => {
    let { Bucket, Key } = params
    let queryParams = [ 'PartNumber', 'VersionId' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams)
    return {
      host: host(Bucket),
      endpoint: endpoint(Bucket, `/${Key}`),
      method: 'HEAD',
      headers,
      query,
    }
  },
  response: ({ headers }) => parseHeadersToResults({ headers }, null, []),
  error: defaultError,
}

const ListBuckets = {
  awsDoc: docRoot + 'API_ListBuckets.html',
  validate: {},
  request: () => ({}),
  response: ({ payload }) => payload,
  error: defaultError,
}

const ListObjectsV2 = {
  awsDoc: docRoot + 'API_ListObjectsV2.html',
  validate: {
    Bucket,
    ContinuationToken:  { ...str, comment: 'Pagination cursor token (returned as `NextContinuationToken`' },
    Delimiter:          { ...str, comment: 'Delimiter character used to group keys' },
    EncodingType:       { ...str, comment: 'Object key encoding type (must be `url`)' },
    FetchOwner:         { ...str, comment: 'Return owner field with results' },
    MaxKeys:            { ...num, comment: 'Set the maximum number of keys returned per response' },
    Prefix:             { ...str, comment: 'Limit response to keys that begin with the specified prefix' },
    StartAfter:         { ...str, comment: 'Starts listing after any specified key in the bucket' },
    // Here come the headers
    ...getValidateHeaders('RequestPayer', 'ExpectedBucketOwner', 'OptionalObjectAttributes'),
    paginate:           { ...bool, comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
  },
  request: (params) => {
    let { Bucket, paginate } = params
    let queryParams = [ 'ContinuationToken', 'Delimiter', 'EncodingType', 'FetchOwner', 'MaxKeys', 'Prefix', 'StartAfter' ]
    let headers = getHeadersFromParams(params, queryParams)
    let query = getQueryFromParams(params, queryParams) || {}
    query['list-type'] = 2
    return {
      host: host(Bucket),
      endpoint: endpoint(Bucket),
      headers,
      query,
      paginate,
      paginator: { type: 'query', cursor: 'continuation-token', token: 'NextContinuationToken', accumulator: 'Contents' }
    }
  },
  response: ({ headers, payload }) => {
    const res = payload
    const charged = 'x-amz-request-charged'
    if (headers[charged]) res[paramMappings[charged]] = headers[charged]
    return res
  },
  error: defaultError,
}

const methods = { CreateBucket, DeleteBucket, DeleteObject, DeleteObjects, GetObject, HeadObject, HeadBucket, ListBuckets, ListObjectsV2, PutObject, ...incomplete }
export default { service, property, methods }
