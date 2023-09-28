import aws4 from 'aws4'
import crypto from 'node:crypto'
import { readFile, stat } from 'node:fs/promises'
import { Readable } from 'node:stream'

const required = true

const minSize = 1024 * 1024 * 5
const intToHexString = int => String(Number(int).toString(16))
const algo = 'sha256', utf8 = 'utf8', hex = 'hex'
const hash = str => crypto.createHash(algo).update(str, utf8).digest(hex)
const hmac = (key, str, enc) => crypto.createHmac(algo, key).update(str, utf8).digest(enc)

let chunkBreak = `\r\n`
function payloadMetadata (chunkSize, signature) {
  // Don't forget: after the signature + break would normally follow the body + one more break
  return intToHexString(chunkSize) + `;chunk-signature=${signature}` + chunkBreak
}

const PutObject = {
  awsDoc: 'https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html',
  // See also: https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-streaming.html
  validate: {
    Bucket:                    { type: 'string', required, comment: 'S3 bucket name' },
    Key:                       { type: 'string', required, comment: 'S3 key / file name' },
    File:                      { type: 'string', required, comment: 'File path to be read and uploaded from the local filesystem' },
    MinChunkSize:              { type: 'number', default: minSize, comment: 'Minimum size (in bytes) to utilize AWS-chunk-encoded uploads to S3' },
    // Here come the headers
    ACL:                       { type: 'string', comment: 'Sets header: x-amz-acl' },
    BucketKeyEnabled:          { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-bucket-key-enabled' },
    CacheControl:              { type: 'string', comment: 'Sets header: Cache-Control' },
    ChecksumAlgorithm:         { type: 'string', comment: 'Sets header: x-amz-sdk-checksum-algorithm' },
    ChecksumCRC32:             { type: 'string', comment: 'Sets header: x-amz-checksum-crc32' },
    ChecksumCRC32C:            { type: 'string', comment: 'Sets header: x-amz-checksum-crc32c' },
    ChecksumSHA1:              { type: 'string', comment: 'Sets header: x-amz-checksum-sha1' },
    ChecksumSHA256:            { type: 'string', comment: 'Sets header: x-amz-checksum-sha256' },
    ContentDisposition:        { type: 'string', comment: 'Sets header: Content-Disposition' },
    ContentEncoding:           { type: 'string', comment: 'Sets header: Content-Encoding' },
    ContentLanguage:           { type: 'string', comment: 'Sets header: Content-Language' },
    ContentLength:             { type: 'string', comment: 'Sets header: Content-Length' },
    ContentMD5:                { type: 'string', comment: 'Sets header: Content-MD5' },
    ContentType:               { type: 'string', comment: 'Sets header: Content-Type' },
    ExpectedBucketOwner:       { type: 'string', comment: 'Sets header: x-amz-expected-bucket-owner' },
    Expires:                   { type: 'string', comment: 'Sets header: Expires' },
    GrantFullControl:          { type: 'string', comment: 'Sets header: x-amz-grant-full-control' },
    GrantRead:                 { type: 'string', comment: 'Sets header: x-amz-grant-read' },
    GrantReadACP:              { type: 'string', comment: 'Sets header: x-amz-grant-read-acp' },
    GrantWriteACP:             { type: 'string', comment: 'Sets header: x-amz-grant-write-acp' },
    ObjectLockLegalHoldStatus: { type: 'string', comment: 'Sets header: x-amz-object-lock-legal-hold' },
    ObjectLockMode:            { type: 'string', comment: 'Sets header: x-amz-object-lock-mode' },
    ObjectLockRetainUntilDate: { type: 'string', comment: 'Sets header: x-amz-object-lock-retain-until-date' },
    RequestPayer:              { type: 'string', comment: 'Sets header: x-amz-request-payer' },
    ServerSideEncryption:      { type: 'string', comment: 'Sets header: x-amz-server-side-encryption' },
    SSECustomerAlgorithm:      { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-customer-algorithm' },
    SSECustomerKey:            { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-customer-key' },
    SSECustomerKeyMD5:         { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-customer-key-MD5' },
    SSEKMSEncryptionContext:   { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-context' },
    SSEKMSKeyId:               { type: 'string', comment: 'Sets header: x-amz-server-side-encryption-aws-kms-key-id' },
    StorageClass:              { type: 'string', comment: 'Sets header: x-amz-storage-class' },
    Tagging:                   { type: 'string', comment: 'Sets header: x-amz-tagging' },
    WebsiteRedirectLocation:   { type: 'string', comment: 'Sets header: x-amz-website-redirect-location' },
  },
  request: async (params, utils) => {
    let { Bucket, Key, File, MinChunkSize } = params
    let { credentials, region } = utils
    MinChunkSize = MinChunkSize || minSize

    let { ACL, BucketKeyEnabled, CacheControl, ChecksumAlgorithm, ChecksumCRC32, ChecksumCRC32C, ChecksumSHA1, ChecksumSHA256, ContentDisposition, ContentEncoding, ContentLanguage, ContentLength, ContentMD5, ContentType, ExpectedBucketOwner, Expires, GrantFullControl, GrantRead, GrantReadACP, GrantWriteACP, ObjectLockLegalHoldStatus, ObjectLockMode, ObjectLockRetainUntilDate, RequestPayer, ServerSideEncryption, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, SSEKMSEncryptionContext, SSEKMSKeyId, StorageClass, Tagging, WebsiteRedirectLocation } = params
    let headers = { ACL, BucketKeyEnabled, CacheControl, ChecksumAlgorithm, ChecksumCRC32, ChecksumCRC32C, ChecksumSHA1, ChecksumSHA256, ContentDisposition, ContentEncoding, ContentLanguage, ContentLength, ContentMD5, ContentType, ExpectedBucketOwner, Expires, GrantFullControl, GrantRead, GrantReadACP, GrantWriteACP, ObjectLockLegalHoldStatus, ObjectLockMode, ObjectLockRetainUntilDate, RequestPayer, ServerSideEncryption, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, SSEKMSEncryptionContext, SSEKMSKeyId, StorageClass, Tagging, WebsiteRedirectLocation }

    let dataSize
    try {
      let stats = await stat(File)
      dataSize = stats.size
    }
    catch (err) {
      console.log(`Error reading file: ${File}`)
      throw err
    }

    if (dataSize <= MinChunkSize) {
      let payload = await readFile(File)
      return {
        path: `/${Bucket}/${Key}`,
        method: 'PUT',
        headers,
        payload,
      }
    }
    else {
      // We'll assemble file indices of chunks here
      let chunks = [
        // Reminder: no payload is sent with the canonical request
        { canonicalRequest: true },
      ]

      // We'll need to compute all chunk sizes (including metadata) so that we can get the total content-length for the canonical request
      let totalRequestSize = dataSize
      let dummySig = 'a'.repeat(64)
      let emptyHash = hash('')

      // Multipart uploading requires an extra zero-data chunk to denote completion
      let chunkAmount = Math.ceil(dataSize / MinChunkSize) + 1

      for (let i = 0; i < chunkAmount; i++) {
        // Get start end byte position for streaming
        let start = i === 0 ? 0 : i * MinChunkSize
        let end = (i * MinChunkSize) + MinChunkSize

        let chunk = {}, chunkSize
        // The last real chunk
        if (end > dataSize) {
          end = dataSize
        }
        // The 0-byte trailing chunk
        if (start > dataSize) {
          chunkSize = 0
          chunk.finalRequest = true
        }
        // Normal
        else {
          chunkSize = end - start
          chunk.start = start
          chunk.end = end
        }

        totalRequestSize += payloadMetadata(chunkSize, dummySig).length + chunkBreak.length
        chunks.push({ ...chunk, chunkSize })
      }

      headers = {
        ...headers,
        'content-encoding': 'aws-chunked',
        'content-length': totalRequestSize,
        'x-amz-content-sha256': 'STREAMING-AWS4-HMAC-SHA256-PAYLOAD',
        'x-amz-decoded-content-length': dataSize,
      }
      let canonicalReq = aws4.sign({
        service: 's3',
        region,
        method: 'PUT',
        path: `/${Bucket}/${Key}`,
        headers,
      }, credentials)
      let seedSignature = canonicalReq.headers.Authorization.split('Signature=')[1]
      chunks[0].signature = seedSignature

      let date = canonicalReq.headers['X-Amz-Date'] ||
                 canonicalReq.headers['x-amz-date']
      let yyyymmdd = date.split('T')[0]
      let payloadSigHeader =  `AWS4-HMAC-SHA256-PAYLOAD\n` +
                              `${date}\n` +
                              `${yyyymmdd}/${canonicalReq.region}/s3/aws4_request\n`

      // TODO make this streamable
      let data = await readFile(File)
      let stream = new Readable()
      chunks.forEach((chunk, i) => {
        if (chunk.canonicalRequest) return

        // Ideally we'd use start/end with fs.createReadStream
        let { start, end } = chunk
        let body = chunk.finalRequest ? '' : data.slice(start, end)
        let chunkHash = chunk.finalRequest ? emptyHash : hash(body)

        let payloadSigValues = [
          chunks[i - 1].signature, // Previous chunk signature
          emptyHash,               // Hash of an empty line ¯\_(ツ)_/¯
          chunkHash,               // Hash of the current chunk
        ].join('\n')
        let signing = payloadSigHeader + payloadSigValues

        // lol at this cascade of hmacs
        let kDate = hmac('AWS4' + credentials.secretAccessKey, yyyymmdd)
        let kRegion = hmac(kDate, region)
        let kService = hmac(kRegion, 's3')
        let kCredentials = hmac(kService, 'aws4_request')
        let chunkSignature = hmac(kCredentials, signing, hex)

        // Important: populate the signature for the next chunk down the line
        chunks[i].signature = chunkSignature

        // Now add the chunk to the stream
        let part = payloadMetadata(chunk.chunkSize, chunkSignature) + body + chunkBreak
        stream.push(part)

        if (chunk.finalRequest) {
          stream.push(null)
        }
      })
      canonicalReq.stream = stream
      return canonicalReq
    }
  },
}
export default PutObject
