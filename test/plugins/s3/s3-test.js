let { join } = require('path')
let S3rver = require('s3rver')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)
let test = require('tape')
let mockTmp = require('mock-tmp')

let aws, s3rver, tmp
let port = 4569
let bucket_name = 'bucket1'
let object_name = 'object1'
let object_content = 'Hello, World!'
let s3_root_dir = 's3_root_dir'
let contentType = 'text/plain'

test('Set up env', async t => {
  t.plan(3)
  aws = await client({
    accessKeyId: 'S3RVER',
    secretAccessKey: 'S3RVER',
    region: 'us-east-1',
    host: 'localhost',
    port,
    protocol: 'http',
  })
  t.ok(aws, 'Client ready')

  tmp = mockTmp({
  // Directory for S3rver
    [`${s3_root_dir}/${bucket_name}`]: {},
    // Source file for PutObject
    [object_name]: object_content,
  })
  t.ok(tmp, `mockTmp directory ${tmp} is present`)

  s3rver = new S3rver({
    port,
    silent: true,
    directory: join(tmp, s3_root_dir),
  })
  let started = await s3rver.run()
  t.ok(started, 'Started S3rver')
})

test('List buckets', async t => {
  t.plan(2)
  let listBucketsResponse = await aws.S3.ListBuckets()
  t.ok(listBucketsResponse.Buckets, 'Response has a Buckets element')
  // TBD - ListBucketsResponse.Buckets should always be an array of buckets.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // there are no buckets, and a bucket if there is only one bucket.
  // t.equal(listBucketsResponse.Buckets.length, 1, `One bucket found`)
  // t.equal(listBucketsResponse.Buckets[0].Name, bucket_name, `Bucket ${bucket_name} found`)
  t.equal(listBucketsResponse.Buckets.Bucket.Name, bucket_name, `Bucket ${bucket_name} found`)
})

test('List objects - empty bucket', async t => {
  t.plan(1)
  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  // TBD - should KeyCount be a Number, rather than a string?
  t.equals(listObjectsV2Response.KeyCount, '0', 'Zero objects found')
  // TBD - ListObjectsV2Response.Contents should always be an array of objects.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // the bucket is empty, and an object if there is only one object in the
  // bucket.
  // t.equal(listObjectsV2Response.Contents.length, 0, 'No objects returned')
})

test('Put object', async t => {
  t.plan(1)
  let putObjectResponse = await aws.S3.PutObject({
    Bucket: bucket_name,
    Key: object_name,
    File: join(tmp, object_name),
    ContentType: contentType
  })
  t.ok(putObjectResponse, `Object ${object_name} created`)
})

test('List objects - single object', async t => {
  t.plan(1)
  let listObjectsV2Response = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  t.equal(listObjectsV2Response.KeyCount, '1', 'One object found')
  // TBD - ListObjectsV2Response.Contents should always be an array of objects.
  // At present, due to the vagaries of XML/JSON translation, it is missing if
  // the bucket is empty, and an object if there is only one object in the
  // bucket.
  // t.equal(listObjectsV2Response.Contents.length, 1, 'One object returned')
})

test('Head object', async t => {
  t.plan(3)
  let headObjectResponse = await aws.S3.HeadObject({ Bucket: bucket_name, Key: object_name })
  t.ok(headObjectResponse, `Object ${object_name} found`)
  t.equal(headObjectResponse.ContentLength, object_content.length, 'Content has expected length')
  t.equal(headObjectResponse.ContentType, contentType, 'Content has expected type')
})

test('Get object', async t => {
  t.plan(4)
  let getObjectResponse = await aws.S3.GetObject({ Bucket: bucket_name, Key: object_name })
  t.ok(getObjectResponse, `Object ${object_name} found`)
  t.equal(getObjectResponse.ContentLength, object_content.length, 'Content has expected length')
  t.equal(getObjectResponse.ContentType, contentType, 'Content has expected type')
  t.equal(getObjectResponse.Body.toString(), object_content, `Object ${object_name} has expected content`)
})

test('Put second object', async t => {
  t.plan(1)
  let putObjectResponse = await aws.S3.PutObject({ Bucket: bucket_name, Key: `${object_name}.2`, File: join(tmp, object_name) })
  t.ok(putObjectResponse, `Object ${object_name}.2 created`)
})

test('List objects - two objects', async t => {
  t.plan(2)
  let listObjectsResponse = await aws.S3.ListObjectsV2({ Bucket: bucket_name })
  t.equal(listObjectsResponse.KeyCount, '2', 'Two objects found')
  t.equal(listObjectsResponse.Contents.length, 2, 'Two objects returned')
})

test('Tear down env', async t => {
  t.plan(2)
  await s3rver.close()
  t.pass('Server ended')
  mockTmp.reset()
  t.pass(`mockTmp removed`)
})
