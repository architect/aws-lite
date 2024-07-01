# [`@aws-lite/s3`](https://aws-lite.org/services/s3)

> Official `aws-lite` plugin for S3

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/s3
```

Optionally install types:

```sh
npm i -D @aws-lite/s3-types
```

## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/s3)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `AbortMultipartUpload`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`UploadId` (string) [required]**
  - ID of the multipart upload
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `CompleteMultipartUpload`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`UploadId` (string) [required]**
  - ID of the multipart upload
- **`MultipartUpload` (object)**
  - `MultipartUpload` object containing details about the completed uploads
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html#AmazonS3-CompleteMultipartUpload-request-MultipartUpload)
- **`ChecksumCRC32` (string)**
  - Sets request header: `x-amz-checksum-crc32`
- **`ChecksumCRC32C` (string)**
  - Sets request header: `x-amz-checksum-crc32c`
- **`ChecksumSHA1` (string)**
  - Sets request header: `x-amz-checksum-sha1`
- **`ChecksumSHA256` (string)**
  - Sets request header: `x-amz-checksum-sha256`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`


### `CopyObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html)

Properties:
- **`Bucket` (string) [required]**
  - Name of the S3 bucket destination
- **`Key` (string) [required]**
  - S3 key / file name of the destination
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`CacheControl` (string)**
  - Sets request header: `cache-control`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ContentDisposition` (string)**
  - Sets request header: `content-disposition`
- **`ContentEncoding` (string)**
  - Sets request header: `content-encoding`
- **`ContentLanguage` (string)**
  - Sets request header: `content-language`
- **`ContentType` (string)**
  - Sets request header: `content-type`
- **`CopySource` (string)**
  - Sets request header: `x-amz-copy-source`
- **`CopySourceIfMatch` (string)**
  - Sets request header: `x-amz-copy-source-if-match`
- **`CopySourceIfModifiedSince` (string)**
  - Sets request header: `x-amz-copy-source-if-modified-since`
- **`CopySourceIfNoneMatch` (string)**
  - Sets request header: `x-amz-copy-source-if-none-match`
- **`CopySourceIfUnmodifiedSince` (string)**
  - Sets request header: `x-amz-copy-source-if-unmodified-since`
- **`Expires` (string)**
  - Sets request header: `expires`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`MetadataDirective` (string)**
  - Sets request header: `x-amz-metadata-directive`
- **`TaggingDirective` (string)**
  - Sets request header: `x-amz-tagging-directive`
- **`ServerSideEncryption` (string)**
  - Sets request header: `x-amz-server-side-encryption`
- **`StorageClass` (string)**
  - Sets request header: `x-amz-storage-class`
- **`WebsiteRedirectLocation` (string)**
  - Sets request header: `x-amz-website-redirect-location`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`SSEKMSKeyId` (string)**
  - Sets request header: `x-amz-server-side-encryption-aws-kms-key-id`
- **`SSEKMSEncryptionContext` (string)**
  - Sets request header: `x-amz-server-side-encryption-context`
- **`BucketKeyEnabled` (string)**
  - Sets request header: `x-amz-server-side-encryption-bucket-key-enabled`
- **`CopySourceSSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-copy-source-server-side-encryption-customer-algorithm`
- **`CopySourceSSECustomerKey` (string)**
  - Sets request header: `x-amz-copy-source-server-side-encryption-customer-key`
- **`CopySourceSSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-copy-source-server-side-encryption-customer-key-MD5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`Tagging` (string)**
  - Sets request header: `x-amz-tagging`
- **`ObjectLockMode` (string)**
  - Sets request header: `x-amz-object-lock-mode`
- **`ObjectLockRetainUntilDate` (string)**
  - Sets request header: `x-amz-object-lock-retain-until-date`
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets request header: `x-amz-object-lock-legal-hold`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ExpectedSourceBucketOwner` (string)**
  - Sets request header: `x-amz-source-expected-bucket-owner`


### `CreateBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`CreateBucketConfiguration` (object)**
  - Complete bucket configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html#API_CreateBucket_RequestSyntax)
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWrite` (string)**
  - Sets request header: `x-amz-grant-write`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ObjectLockEnabledForBucket` (string)**
  - Sets request header: `x-amz-bucket-object-lock-enabled`
- **`ObjectOwnership` (string)**
  - Sets request header: `x-amz-object-ownership`


### `CreateMultipartUpload`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`CacheControl` (string)**
  - Sets request header: `cache-control`
- **`ContentDisposition` (string)**
  - Sets request header: `content-disposition`
- **`ContentEncoding` (string)**
  - Sets request header: `content-encoding`
- **`ContentLanguage` (string)**
  - Sets request header: `content-language`
- **`ContentType` (string)**
  - Sets request header: `content-type`
- **`Expires` (string)**
  - Sets request header: `expires`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ServerSideEncryption` (string)**
  - Sets request header: `x-amz-server-side-encryption`
- **`StorageClass` (string)**
  - Sets request header: `x-amz-storage-class`
- **`WebsiteRedirectLocation` (string)**
  - Sets request header: `x-amz-website-redirect-location`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`SSEKMSKeyId` (string)**
  - Sets request header: `x-amz-server-side-encryption-aws-kms-key-id`
- **`SSEKMSEncryptionContext` (string)**
  - Sets request header: `x-amz-server-side-encryption-context`
- **`BucketKeyEnabled` (string)**
  - Sets request header: `x-amz-server-side-encryption-bucket-key-enabled`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`Tagging` (string)**
  - Sets request header: `x-amz-tagging`
- **`ObjectLockMode` (string)**
  - Sets request header: `x-amz-object-lock-mode`
- **`ObjectLockRetainUntilDate` (string)**
  - Sets request header: `x-amz-object-lock-retain-until-date`
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets request header: `x-amz-object-lock-legal-hold`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`


### `DeleteBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketAnalyticsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketCors`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketEncryption`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketIntelligentTieringConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object


### `DeleteBucketInventoryConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketLifecycle`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketMetricsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketOwnershipControls`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketOwnershipControls.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketReplication`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteBucketWebsite`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`MFA` (string)**
  - Sets request header: `x-amz-mfa`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`BypassGovernanceRetention` (string)**
  - Sets request header: `x-amz-bypass-governance-retention`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeleteObjects`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Delete` (object) [required]**
  - Object deletion request
- **`MFA` (string)**
  - Sets request header: `x-amz-mfa`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`BypassGovernanceRetention` (string)**
  - Sets request header: `x-amz-bypass-governance-retention`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`


### `DeleteObjectTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `DeletePublicAccessBlock`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketAccelerateConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetBucketAcl`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketAnalyticsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the analytics configuration
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketCors`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketEncryption`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketIntelligentTieringConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the intelligent tiering configuration


### `GetBucketInventoryConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the inventory configuration
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketLifecycleConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketLocation`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketLogging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketMetricsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the metrics configuration
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketNotificationConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketOwnershipControls`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketPolicyStatus`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketReplication`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketRequestPayment`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketVersioning`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetBucketWebsite`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`PartNumber` (number)**
  - Part number (between 1 - 10,000) of the object
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`IfMatch` (string)**
  - Sets request header: `if-match`
- **`IfModifiedSince` (string)**
  - Sets request header: `if-modified-since`
- **`IfNoneMatch` (string)**
  - Sets request header: `if-none-match`
- **`IfUnmodifiedSince` (string)**
  - Sets request header: `if-unmodified-since`
- **`Range` (string)**
  - Sets request header: `range`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumMode` (string)**
  - Sets request header: `x-amz-checksum-mode`
- **`ResponseCacheControl` (string)**
  - Sets response header: `cache-control`
- **`ResponseContentDisposition` (string)**
  - Sets response header: `content-disposition`
- **`ResponseContentEncoding` (string)**
  - Sets response header: `content-encoding`
- **`ResponseContentLanguage` (string)**
  - Sets response header: `content-language`
- **`ResponseContentType` (string)**
  - Sets response header: `content-type`
- **`ResponseExpires` (string)**
  - Sets response header: `expires`
- **`rawResponsePayload` (boolean)**
  - Set to `true` to return payload as a buffer
- **`streamResponsePayload` (boolean)**
  - Set to `true` to return payload as a Node.js stream


### `GetObjectAcl`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetObjectAttributes`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`ObjectAttributes` (array) [required]**
  - Specify attributes to be returned, can be one or more of: `ETag`, `Checksum`, `ObjectParts`, `StorageClass`, `ObjectSize`
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html#API_GetObjectAttributes_RequestParameters)
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`MaxParts` (number)**
  - Maximum number of parts to be returned in the response
- **`PartNumberMarker` (string)**
  - Sets request header: `x-amz-part-number-marker`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetObjectLegalHold`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetObjectLockConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `GetObjectRetention`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetObjectTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetObjectTorrent`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `GetPublicAccessBlock`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `HeadBucket`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `HeadObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`PartNumber` (number)**
  - Part number (between 1 - 10,000) of the object
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`IfMatch` (string)**
  - Sets request header: `if-match`
- **`IfModifiedSince` (string)**
  - Sets request header: `if-modified-since`
- **`IfNoneMatch` (string)**
  - Sets request header: `if-none-match`
- **`IfUnmodifiedSince` (string)**
  - Sets request header: `if-unmodified-since`
- **`Range` (string)**
  - Sets request header: `range`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ChecksumMode` (string)**
  - Sets request header: `x-amz-checksum-mode`


### `ListBucketAnalyticsConfigurations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `ListBucketIntelligentTieringConfigurations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `ListBucketInventoryConfigurations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `ListBucketMetricsConfigurations`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `ListBuckets`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html)

Properties:



### `ListMultipartUploads`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Delimiter` (string)**
  - Delimiter character used to group keys
- **`EncodingType` (string)**
  - Object key encoding type (must be `url`)
- **`KeyMarker` (string)**
  - Pagination cursor
- **`MaxUploads` (number)**
  - Maximum number of uploads between 1 and 1000 (inclusive) to return in the response
- **`UploadIdMarker` (string)**
  - Deal with this later
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListObjectsV2`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ContinuationToken` (string)**
  - Pagination cursor token (returned as `NextContinuationToken`
- **`Delimiter` (string)**
  - Delimiter character used to group keys
- **`EncodingType` (string)**
  - Object key encoding type (must be `url`)
- **`FetchOwner` (string)**
  - Return owner field with results
- **`MaxKeys` (number)**
  - Set the maximum number of keys returned per response
- **`Prefix` (string)**
  - Limit response to keys that begin with the specified prefix
- **`StartAfter` (string)**
  - Starts listing after any specified key in the bucket
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`OptionalObjectAttributes` (string)**
  - Sets request header: `x-amz-optional-object-attributes`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListObjectVersions`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Delimiter` (string)**
  - Delimiter character used to group keys
- **`EncodingType` (string)**
  - Object key encoding type (must be `url`)
- **`KeyMarker` (string)**
  - Pagination cursor
- **`MaxKeys` (number)**
  - Maximum number of keys (at most 1000) to be returned in the response
- **`Prefix` (string)**
  - Limit response to keys that begin with the specified prefix
- **`VersionIdMarker` (string)**
  - Specify the version to begin listing from
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html#API_ListObjectVersions_RequestParameters)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`OptionalObjectAttributes` (string)**
  - Sets request header: `x-amz-optional-object-attributes`


### `ListParts`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`UploadId` (string) [required]**
  - ID of the multipart upload
- **`MaxParts` (number)**
  - Maximum number of parts (at most 1000) to be returned in the response
- **`PartNumberMarker` (string)**
  - Pagination cursor
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`


### `PutBucketAccelerateConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html)

Properties:
- **`AccelerateConfiguration` (object) [required]**
  - Object specifying acceleration configurations; can contain one of: `Status: 'Enabled'`, `Status: 'Suspended'`
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html#AmazonS3-PutBucketAccelerateConfiguration-request-Status)
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketAnalyticsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the analytics configuration
- **`AnalyticsConfiguration` (object) [required]**
  - Object defining the analytics configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html#AmazonS3-PutBucketAnalyticsConfiguration-request-AnalyticsConfiguration)
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketCors`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`CORSConfiguration` (object) [required]**
  - Object defining the CORS configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html#AmazonS3-PutBucketCors-request-CORSConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketEncryption`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ServerSideEncryptionConfiguration` (object) [required]**
  - Object defining the server side encryption configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html#AmazonS3-PutBucketEncryption-request-ServerSideEncryptionConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketIntelligentTieringConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - Id of the intelligent tiering configuration
- **`IntelligentTieringConfiguration` (object) [required]**
  - Object defining the intelligent tiering configuration; required fields are: `Id`, `Status`, `Tierings` 
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html#AmazonS3-PutBucketIntelligentTieringConfiguration-request-IntelligentTieringConfiguration)


### `PutBucketInventoryConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object
- **`InventoryConfiguration` (object) [required]**
  - Object defining the inventory configuration; required config fields are: `Id`, `IsEnabled`, `IncludedObjectVersion`, `Destination`, `Schedule`
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API/API_PutBucketInventoryConfiguration.html#AmazonS3-PutBucketInventoryConfiguration-request-InventoryConfiguration)
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketLifecycleConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`LifecycleConfiguration` (object) [required]**
  - Object defining the lifecycle configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#AmazonS3-PutBucketLifecycleConfiguration-request-LifecycleConfiguration)
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`


### `PutBucketMetricsConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Id` (string) [required]**
  - ID of the object
- **`MetricsConfiguration` (object) [required]**
  - Object defining the metrics configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html#AmazonS3-PutBucketMetricsConfiguration-request-MetricsConfiguration)
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketNotificationConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotificationConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`NotificationConfiguration` (object) [required]**
  - Object defining the notification configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotificationConfiguration.html#AmazonS3-PutBucketNotificationConfiguration-request-NotificationConfiguration)
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketOwnershipControls`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`OwnershipControls` (object) [required]**
  - Object defining the ownership controls
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html#AmazonS3-PutBucketOwnershipControls-request-OwnershipControls)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Policy` (object) [required]**
  - Object defining the policy
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html#API_PutBucketPolicy_RequestBody)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ConfirmRemoveSelfBucketAccess` (string)**
  - Sets request header: `x-amz-confirm-remove-self-bucket-access`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketReplication`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ReplicationConfiguration` (object) [required]**
  - Object defining the replication configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html#AmazonS3-PutBucketReplication-request-ReplicationConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`Token` (string)**
  - Sets request header: `x-amz-bucket-object-lock-token`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketRequestPayment`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`RequestPaymentConfiguration` (object) [required]**
  - Object defining the payment configuration; must contain `Payer`, which can be one of: `Requester`, `BucketOwner`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Tagging` (object) [required]**
  - Object defining the tag set
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html#AmazonS3-PutBucketTagging-request-Tagging)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketVersioning`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`VersioningConfiguration` (object) [required]**
  - Object defining the versioning configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html#AmazonS3-PutBucketVersioning-request-VersioningConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`MFA` (string)**
  - Sets request header: `x-amz-mfa`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutBucketWebsite`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`WebsiteConfiguration` (object) [required]**
  - Object defining the website configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html#AmazonS3-PutBucketWebsite-request-WebsiteConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`Body` (buffer, stream, string)**
  - String or buffer to be uploaded
- **`File` (string)**
  - File path to be read and uploaded from the local filesystem
- **`ApplyChecksum` (boolean)**
  - Sign payload; enabling this option may significantly increase memory and latency
- **`MinChunkSize` (number)**
  - Minimum size (in bytes) to utilize signed, AWS-chunk-encoded uploads to S3
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`BucketKeyEnabled` (string)**
  - Sets request header: `x-amz-server-side-encryption-bucket-key-enabled`
- **`CacheControl` (string)**
  - Sets request header: `cache-control`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ChecksumCRC32` (string)**
  - Sets request header: `x-amz-checksum-crc32`
- **`ChecksumCRC32C` (string)**
  - Sets request header: `x-amz-checksum-crc32c`
- **`ChecksumSHA1` (string)**
  - Sets request header: `x-amz-checksum-sha1`
- **`ChecksumSHA256` (string)**
  - Sets request header: `x-amz-checksum-sha256`
- **`ContentDisposition` (string)**
  - Sets request header: `content-disposition`
- **`ContentEncoding` (string)**
  - Sets request header: `content-encoding`
- **`ContentLanguage` (string)**
  - Sets request header: `content-language`
- **`ContentLength` (string)**
  - Sets request header: `content-length`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ContentType` (string)**
  - Sets request header: `content-type`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`Expires` (string)**
  - Sets request header: `expires`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets request header: `x-amz-object-lock-legal-hold`
- **`ObjectLockMode` (string)**
  - Sets request header: `x-amz-object-lock-mode`
- **`ObjectLockRetainUntilDate` (string)**
  - Sets request header: `x-amz-object-lock-retain-until-date`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ServerSideEncryption` (string)**
  - Sets request header: `x-amz-server-side-encryption`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`SSEKMSEncryptionContext` (string)**
  - Sets request header: `x-amz-server-side-encryption-context`
- **`SSEKMSKeyId` (string)**
  - Sets request header: `x-amz-server-side-encryption-aws-kms-key-id`
- **`StorageClass` (string)**
  - Sets request header: `x-amz-storage-class`
- **`Tagging` (string)**
  - Sets request header: `x-amz-tagging`
- **`WebsiteRedirectLocation` (string)**
  - Sets request header: `x-amz-website-redirect-location`
- **`Metadata` (object)**
  - Key / value pairs of object metadata; must conform to S3 metadata guidelines
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html)


### `PutObjectLegalHold`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`LegalHold` (object) [required]**
  - Object containing the field `Status` (string) which can be one of: `ON`, `OFF`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutObjectLockConfiguration`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`ObjectLockConfiguration` (object) [required]**
  - Object defining the object lock configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html#AmazonS3-PutObjectLockConfiguration-request-ObjectLockConfiguration)
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`Token` (string)**
  - Sets request header: `x-amz-bucket-object-lock-token`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutObjectRetention`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`Retention` (object) [required]**
  - Object specifying the object retention parameters
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html#AmazonS3-PutObjectRetention-request-Retention)
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`BypassGovernanceRetention` (string)**
  - Sets request header: `x-amz-bypass-governance-retention`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `PutObjectTagging`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`Tagging` (object) [required]**
  - Object containing the tag set
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html#AmazonS3-PutObjectTagging-request-Tagging)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`


### `PutPublicAccessBlock`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`PublicAccessBlockConfiguration` (object) [required]**
  - Object defining the public access block configuration
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html#AmazonS3-PutPublicAccessBlock-request-PublicAccessBlockConfiguration)
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `RestoreObject`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`RestoreRequest` (object) [required]**
  - Object defining the restore request
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html#AmazonS3-RestoreObject-request-RestoreRequest)
- **`VersionId` (string)**
  - Reference a specific version of the object
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### `Upload`


Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`Body` (buffer, stream, string)**
  - String or buffer to be uploaded; per S3, size should be 5MB or greater
- **`File` (string)**
  - File path to be read and uploaded from the local filesystem; per S3, size should be 5MB or greater
- **`ChunkSize` (number)**
  - Size of each chunk to upload in byes (also aliased to `partSize`); default is 10 MB
- **`Concurrency` (number)**
  - Maximum concurrent uploads (also aliased to `queueSize`); default is 5, setting to 1 synchronously, sequentially uploads chunks; memory consumption is (`ChunkSize` + 1) * `Concurrency`
- **`ACL` (string)**
  - Sets request header: `x-amz-acl`
- **`BucketKeyEnabled` (string)**
  - Sets request header: `x-amz-server-side-encryption-bucket-key-enabled`
- **`CacheControl` (string)**
  - Sets request header: `cache-control`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ChecksumCRC32` (string)**
  - Sets request header: `x-amz-checksum-crc32`
- **`ChecksumCRC32C` (string)**
  - Sets request header: `x-amz-checksum-crc32c`
- **`ChecksumSHA1` (string)**
  - Sets request header: `x-amz-checksum-sha1`
- **`ChecksumSHA256` (string)**
  - Sets request header: `x-amz-checksum-sha256`
- **`ContentDisposition` (string)**
  - Sets request header: `content-disposition`
- **`ContentEncoding` (string)**
  - Sets request header: `content-encoding`
- **`ContentLanguage` (string)**
  - Sets request header: `content-language`
- **`ContentType` (string)**
  - Sets request header: `content-type`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`
- **`Expires` (string)**
  - Sets request header: `expires`
- **`GrantFullControl` (string)**
  - Sets request header: `x-amz-grant-full-control`
- **`GrantRead` (string)**
  - Sets request header: `x-amz-grant-read`
- **`GrantReadACP` (string)**
  - Sets request header: `x-amz-grant-read-acp`
- **`GrantWriteACP` (string)**
  - Sets request header: `x-amz-grant-write-acp`
- **`ObjectLockLegalHoldStatus` (string)**
  - Sets request header: `x-amz-object-lock-legal-hold`
- **`ObjectLockMode` (string)**
  - Sets request header: `x-amz-object-lock-mode`
- **`ObjectLockRetainUntilDate` (string)**
  - Sets request header: `x-amz-object-lock-retain-until-date`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ServerSideEncryption` (string)**
  - Sets request header: `x-amz-server-side-encryption`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`SSEKMSEncryptionContext` (string)**
  - Sets request header: `x-amz-server-side-encryption-context`
- **`SSEKMSKeyId` (string)**
  - Sets request header: `x-amz-server-side-encryption-aws-kms-key-id`
- **`StorageClass` (string)**
  - Sets request header: `x-amz-storage-class`
- **`Tagging` (string)**
  - Sets request header: `x-amz-tagging`
- **`WebsiteRedirectLocation` (string)**
  - Sets request header: `x-amz-website-redirect-location`
- **`Metadata` (object)**
  - Key / value pairs of object metadata; must conform to S3 metadata guidelines
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html)


### `UploadPart`

[Canonical AWS API doc](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)

Properties:
- **`Bucket` (string) [required]**
  - S3 bucket name
- **`Key` (string) [required]**
  - S3 key / file name
- **`PartNumber` (number)**
  - Part number (between 1 - 10,000) of the object
- **`Body` (buffer, stream, string)**
  - Stream of data to be uploaded
  - [More details (AWS)](https://docs.aws.amazon.com/AmazonS3/latest/API/AmazonS3/latest/API/API_UploadPart.html#API_UploadPart_RequestBody)
- **`ContentLength` (string)**
  - Sets request header: `content-length`
- **`ContentMD5` (string)**
  - Sets request header: `content-md5`
- **`ChecksumAlgorithm` (string)**
  - Sets request header: `x-amz-sdk-checksum-algorithm`
- **`ChecksumCRC32` (string)**
  - Sets request header: `x-amz-checksum-crc32`
- **`ChecksumCRC32C` (string)**
  - Sets request header: `x-amz-checksum-crc32c`
- **`ChecksumSHA1` (string)**
  - Sets request header: `x-amz-checksum-sha1`
- **`ChecksumSHA256` (string)**
  - Sets request header: `x-amz-checksum-sha256`
- **`SSECustomerAlgorithm` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-algorithm`
- **`SSECustomerKey` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key`
- **`SSECustomerKeyMD5` (string)**
  - Sets request header: `x-amz-server-side-encryption-customer-key-md5`
- **`RequestPayer` (string)**
  - Sets request header: `x-amz-request-payer`
- **`ExpectedBucketOwner` (string)**
  - Sets request header: `x-amz-expected-bucket-owner`


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html)
- [`GetBucketLifecycle`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html)
- [`GetBucketNotification`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html)
- [`ListDirectoryBuckets`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html)
- [`ListObjects`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html)
- [`PutBucketAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html)
- [`PutBucketLifecycle`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html)
- [`PutBucketLogging`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html)
- [`PutBucketNotification`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html)
- [`PutObjectAcl`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html)
- [`UploadPartCopy`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)
- [`WriteGetObjectResponse`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
