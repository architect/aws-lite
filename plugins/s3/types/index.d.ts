import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AbortMultipartUploadCommandOutput as AbortMultipartUploadResponse,
  CompleteMultipartUploadCommandOutput as CompleteMultipartUploadResponse,
  CopyObjectCommandOutput as CopyObjectResponse,
  CreateBucketCommandOutput as CreateBucketResponse,
  CreateMultipartUploadCommandOutput as CreateMultipartUploadResponse,
  DeleteBucketCommandOutput as DeleteBucketResponse,
  DeleteBucketAnalyticsConfigurationCommandOutput as DeleteBucketAnalyticsConfigurationResponse,
  DeleteBucketCorsCommandOutput as DeleteBucketCorsResponse,
  DeleteBucketEncryptionCommandOutput as DeleteBucketEncryptionResponse,
  DeleteBucketIntelligentTieringConfigurationCommandOutput as DeleteBucketIntelligentTieringConfigurationResponse,
  DeleteBucketInventoryConfigurationCommandOutput as DeleteBucketInventoryConfigurationResponse,
  DeleteBucketLifecycleCommandOutput as DeleteBucketLifecycleResponse,
  DeleteBucketMetricsConfigurationCommandOutput as DeleteBucketMetricsConfigurationResponse,
  DeleteBucketOwnershipControlsCommandOutput as DeleteBucketOwnershipControlsResponse,
  DeleteBucketPolicyCommandOutput as DeleteBucketPolicyResponse,
  DeleteBucketReplicationCommandOutput as DeleteBucketReplicationResponse,
  DeleteBucketTaggingCommandOutput as DeleteBucketTaggingResponse,
  DeleteBucketWebsiteCommandOutput as DeleteBucketWebsiteResponse,
  DeleteObjectCommandOutput as DeleteObjectResponse,
  DeleteObjectsCommandOutput as DeleteObjectsResponse,
  DeleteObjectTaggingCommandOutput as DeleteObjectTaggingResponse,
  DeletePublicAccessBlockCommandOutput as DeletePublicAccessBlockResponse,
  GetBucketAccelerateConfigurationCommandOutput as GetBucketAccelerateConfigurationResponse,
  GetBucketAclCommandOutput as GetBucketAclResponse,
  GetBucketAnalyticsConfigurationCommandOutput as GetBucketAnalyticsConfigurationResponse,
  GetBucketCorsCommandOutput as GetBucketCorsResponse,
  GetBucketEncryptionCommandOutput as GetBucketEncryptionResponse,
  GetBucketIntelligentTieringConfigurationCommandOutput as GetBucketIntelligentTieringConfigurationResponse,
  GetBucketInventoryConfigurationCommandOutput as GetBucketInventoryConfigurationResponse,
  GetBucketLifecycleConfigurationCommandOutput as GetBucketLifecycleConfigurationResponse,
  GetBucketLocationCommandOutput as GetBucketLocationResponse,
  GetBucketLoggingCommandOutput as GetBucketLoggingResponse,
  GetBucketMetricsConfigurationCommandOutput as GetBucketMetricsConfigurationResponse,
  GetBucketNotificationConfigurationCommandOutput as GetBucketNotificationConfigurationResponse,
  GetBucketOwnershipControlsCommandOutput as GetBucketOwnershipControlsResponse,
  GetBucketPolicyCommandOutput as GetBucketPolicyResponse,
  GetBucketPolicyStatusCommandOutput as GetBucketPolicyStatusResponse,
  GetBucketReplicationCommandOutput as GetBucketReplicationResponse,
  GetBucketRequestPaymentCommandOutput as GetBucketRequestPaymentResponse,
  GetBucketTaggingCommandOutput as GetBucketTaggingResponse,
  GetBucketVersioningCommandOutput as GetBucketVersioningResponse,
  GetBucketWebsiteCommandOutput as GetBucketWebsiteResponse,
  GetObjectCommandOutput as GetObjectResponse,
  GetObjectAclCommandOutput as GetObjectAclResponse,
  GetObjectAttributesCommandOutput as GetObjectAttributesResponse,
  GetObjectLegalHoldCommandOutput as GetObjectLegalHoldResponse,
  GetObjectLockConfigurationCommandOutput as GetObjectLockConfigurationResponse,
  GetObjectRetentionCommandOutput as GetObjectRetentionResponse,
  GetObjectTaggingCommandOutput as GetObjectTaggingResponse,
  GetObjectTorrentCommandOutput as GetObjectTorrentResponse,
  GetPublicAccessBlockCommandOutput as GetPublicAccessBlockResponse,
  HeadBucketCommandOutput as HeadBucketResponse,
  HeadObjectCommandOutput as HeadObjectResponse,
  ListBucketAnalyticsConfigurationsCommandOutput as ListBucketAnalyticsConfigurationsResponse,
  ListBucketIntelligentTieringConfigurationsCommandOutput as ListBucketIntelligentTieringConfigurationsResponse,
  ListBucketInventoryConfigurationsCommandOutput as ListBucketInventoryConfigurationsResponse,
  ListBucketMetricsConfigurationsCommandOutput as ListBucketMetricsConfigurationsResponse,
  ListBucketsCommandOutput as ListBucketsResponse,
  ListMultipartUploadsCommandOutput as ListMultipartUploadsResponse,
  ListObjectsV2CommandOutput as ListObjectsV2Response,
  ListObjectVersionsCommandOutput as ListObjectVersionsResponse,
  ListPartsCommandOutput as ListPartsResponse,
  PutBucketAccelerateConfigurationCommandOutput as PutBucketAccelerateConfigurationResponse,
  PutBucketAnalyticsConfigurationCommandOutput as PutBucketAnalyticsConfigurationResponse,
  PutBucketCorsCommandOutput as PutBucketCorsResponse,
  PutBucketEncryptionCommandOutput as PutBucketEncryptionResponse,
  PutBucketIntelligentTieringConfigurationCommandOutput as PutBucketIntelligentTieringConfigurationResponse,
  PutBucketInventoryConfigurationCommandOutput as PutBucketInventoryConfigurationResponse,
  PutBucketLifecycleConfigurationCommandOutput as PutBucketLifecycleConfigurationResponse,
  PutBucketMetricsConfigurationCommandOutput as PutBucketMetricsConfigurationResponse,
  PutBucketNotificationConfigurationCommandOutput as PutBucketNotificationConfigurationResponse,
  PutBucketOwnershipControlsCommandOutput as PutBucketOwnershipControlsResponse,
  PutBucketPolicyCommandOutput as PutBucketPolicyResponse,
  PutBucketReplicationCommandOutput as PutBucketReplicationResponse,
  PutBucketRequestPaymentCommandOutput as PutBucketRequestPaymentResponse,
  PutBucketTaggingCommandOutput as PutBucketTaggingResponse,
  PutBucketVersioningCommandOutput as PutBucketVersioningResponse,
  PutBucketWebsiteCommandOutput as PutBucketWebsiteResponse,
  PutObjectCommandOutput as PutObjectResponse,
  PutObjectLegalHoldCommandOutput as PutObjectLegalHoldResponse,
  PutObjectLockConfigurationCommandOutput as PutObjectLockConfigurationResponse,
  PutObjectRetentionCommandOutput as PutObjectRetentionResponse,
  PutObjectTaggingCommandOutput as PutObjectTaggingResponse,
  PutPublicAccessBlockCommandOutput as PutPublicAccessBlockResponse,
  RestoreObjectCommandOutput as RestoreObjectResponse,
  UploadCommandOutput as UploadResponse,
  UploadPartCommandOutput as UploadPartResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-s3";

declare interface AwsLiteS3 {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html S3: AbortMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#AbortMultipartUpload S3: AbortMultipartUpload}
   */
  AbortMultipartUpload: (input: { Bucket: string, Key: string, UploadId: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<AbortMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html S3: CompleteMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CompleteMultipartUpload S3: CompleteMultipartUpload}
   */
  CompleteMultipartUpload: (input: { Bucket: string, Key: string, UploadId: string, MultipartUpload?: Record<string, any>, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, RequestPayer?: string, ExpectedBucketOwner?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string }) => Promise<CompleteMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html S3: CopyObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CopyObject S3: CopyObject}
   */
  CopyObject: (input: { Bucket: string, Key: string, ACL?: string, CacheControl?: string, ChecksumAlgorithm?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentType?: string, CopySource?: string, CopySourceIfMatch?: string, CopySourceIfModifiedSince?: string, CopySourceIfNoneMatch?: string, CopySourceIfUnmodifiedSince?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, MetadataDirective?: string, TaggingDirective?: string, ServerSideEncryption?: string, StorageClass?: string, WebsiteRedirectLocation?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSKeyId?: string, SSEKMSEncryptionContext?: string, BucketKeyEnabled?: string, CopySourceSSECustomerAlgorithm?: string, CopySourceSSECustomerKey?: string, CopySourceSSECustomerKeyMD5?: string, RequestPayer?: string, Tagging?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, ObjectLockLegalHoldStatus?: string, ExpectedBucketOwner?: string, ExpectedSourceBucketOwner?: string }) => Promise<CopyObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html S3: CreateBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CreateBucket S3: CreateBucket}
   */
  CreateBucket: (input: { Bucket: string, CreateBucketConfiguration?: Record<string, any>, ACL?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWrite?: string, GrantWriteACP?: string, ObjectLockEnabledForBucket?: string, ObjectOwnership?: string }) => Promise<CreateBucketResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html S3: CreateMultipartUpload}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#CreateMultipartUpload S3: CreateMultipartUpload}
   */
  CreateMultipartUpload: (input: { Bucket: string, Key: string, ACL?: string, CacheControl?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentType?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ServerSideEncryption?: string, StorageClass?: string, WebsiteRedirectLocation?: string, SSECustomerAlgorithm?: string, SSECustomerKeyMD5?: string, SSEKMSKeyId?: string, SSEKMSEncryptionContext?: string, BucketKeyEnabled?: string, RequestPayer?: string, Tagging?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, ObjectLockLegalHoldStatus?: string, ExpectedBucketOwner?: string, ChecksumAlgorithm?: string }) => Promise<CreateMultipartUploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html S3: DeleteBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucket S3: DeleteBucket}
   */
  DeleteBucket: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html S3: DeleteBucketAnalyticsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketAnalyticsConfiguration S3: DeleteBucketAnalyticsConfiguration}
   */
  DeleteBucketAnalyticsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketAnalyticsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html S3: DeleteBucketCors}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketCors S3: DeleteBucketCors}
   */
  DeleteBucketCors: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketCorsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html S3: DeleteBucketEncryption}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketEncryption S3: DeleteBucketEncryption}
   */
  DeleteBucketEncryption: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketEncryptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html S3: DeleteBucketIntelligentTieringConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketIntelligentTieringConfiguration S3: DeleteBucketIntelligentTieringConfiguration}
   */
  DeleteBucketIntelligentTieringConfiguration: (input: { Bucket: string, Id: string }) => Promise<DeleteBucketIntelligentTieringConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html S3: DeleteBucketInventoryConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketInventoryConfiguration S3: DeleteBucketInventoryConfiguration}
   */
  DeleteBucketInventoryConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketInventoryConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html S3: DeleteBucketLifecycle}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketLifecycle S3: DeleteBucketLifecycle}
   */
  DeleteBucketLifecycle: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketLifecycleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html S3: DeleteBucketMetricsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketMetricsConfiguration S3: DeleteBucketMetricsConfiguration}
   */
  DeleteBucketMetricsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketMetricsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketOwnershipControls.html S3: DeleteBucketOwnershipControls}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketOwnershipControls S3: DeleteBucketOwnershipControls}
   */
  DeleteBucketOwnershipControls: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketOwnershipControlsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html S3: DeleteBucketPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketPolicy S3: DeleteBucketPolicy}
   */
  DeleteBucketPolicy: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html S3: DeleteBucketReplication}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketReplication S3: DeleteBucketReplication}
   */
  DeleteBucketReplication: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketReplicationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html S3: DeleteBucketTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketTagging S3: DeleteBucketTagging}
   */
  DeleteBucketTagging: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html S3: DeleteBucketWebsite}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteBucketWebsite S3: DeleteBucketWebsite}
   */
  DeleteBucketWebsite: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeleteBucketWebsiteResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html S3: DeleteObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteObject S3: DeleteObject}
   */
  DeleteObject: (input: { Bucket: string, Key: string, VersionId?: string, MFA?: string, RequestPayer?: string, BypassGovernanceRetention?: string, ExpectedBucketOwner?: string }) => Promise<DeleteObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html S3: DeleteObjects}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteObjects S3: DeleteObjects}
   */
  DeleteObjects: (input: { Bucket: string, Delete: Record<string, any>, MFA?: string, RequestPayer?: string, BypassGovernanceRetention?: string, ExpectedBucketOwner?: string, ChecksumAlgorithm?: string, ContentMD5?: string }) => Promise<DeleteObjectsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html S3: DeleteObjectTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeleteObjectTagging S3: DeleteObjectTagging}
   */
  DeleteObjectTagging: (input: { Bucket: string, Key: string, VersionId?: string, ExpectedBucketOwner?: string }) => Promise<DeleteObjectTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html S3: DeletePublicAccessBlock}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#DeletePublicAccessBlock S3: DeletePublicAccessBlock}
   */
  DeletePublicAccessBlock: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<DeletePublicAccessBlockResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html S3: GetBucketAccelerateConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAccelerateConfiguration S3: GetBucketAccelerateConfiguration}
   */
  GetBucketAccelerateConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetBucketAccelerateConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html S3: GetBucketAcl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAcl S3: GetBucketAcl}
   */
  GetBucketAcl: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketAclResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html S3: GetBucketAnalyticsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketAnalyticsConfiguration S3: GetBucketAnalyticsConfiguration}
   */
  GetBucketAnalyticsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketAnalyticsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html S3: GetBucketCors}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketCors S3: GetBucketCors}
   */
  GetBucketCors: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketCorsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html S3: GetBucketEncryption}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketEncryption S3: GetBucketEncryption}
   */
  GetBucketEncryption: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketEncryptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html S3: GetBucketIntelligentTieringConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketIntelligentTieringConfiguration S3: GetBucketIntelligentTieringConfiguration}
   */
  GetBucketIntelligentTieringConfiguration: (input: { Bucket: string, Id: string }) => Promise<GetBucketIntelligentTieringConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html S3: GetBucketInventoryConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketInventoryConfiguration S3: GetBucketInventoryConfiguration}
   */
  GetBucketInventoryConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketInventoryConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html S3: GetBucketLifecycleConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLifecycleConfiguration S3: GetBucketLifecycleConfiguration}
   */
  GetBucketLifecycleConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLifecycleConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html S3: GetBucketLocation}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLocation S3: GetBucketLocation}
   */
  GetBucketLocation: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLocationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html S3: GetBucketLogging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketLogging S3: GetBucketLogging}
   */
  GetBucketLogging: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketLoggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html S3: GetBucketMetricsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketMetricsConfiguration S3: GetBucketMetricsConfiguration}
   */
  GetBucketMetricsConfiguration: (input: { Bucket: string, Id: string, ExpectedBucketOwner?: string }) => Promise<GetBucketMetricsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html S3: GetBucketNotificationConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketNotificationConfiguration S3: GetBucketNotificationConfiguration}
   */
  GetBucketNotificationConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketNotificationConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html S3: GetBucketOwnershipControls}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketOwnershipControls S3: GetBucketOwnershipControls}
   */
  GetBucketOwnershipControls: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketOwnershipControlsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html S3: GetBucketPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketPolicy S3: GetBucketPolicy}
   */
  GetBucketPolicy: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html S3: GetBucketPolicyStatus}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketPolicyStatus S3: GetBucketPolicyStatus}
   */
  GetBucketPolicyStatus: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketPolicyStatusResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html S3: GetBucketReplication}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketReplication S3: GetBucketReplication}
   */
  GetBucketReplication: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketReplicationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html S3: GetBucketRequestPayment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketRequestPayment S3: GetBucketRequestPayment}
   */
  GetBucketRequestPayment: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketRequestPaymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html S3: GetBucketTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketTagging S3: GetBucketTagging}
   */
  GetBucketTagging: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html S3: GetBucketVersioning}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketVersioning S3: GetBucketVersioning}
   */
  GetBucketVersioning: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketVersioningResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html S3: GetBucketWebsite}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetBucketWebsite S3: GetBucketWebsite}
   */
  GetBucketWebsite: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetBucketWebsiteResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html S3: GetObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObject S3: GetObject}
   */
  GetObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string, ResponseCacheControl?: string, ResponseContentDisposition?: string, ResponseContentEncoding?: string, ResponseContentLanguage?: string, ResponseContentType?: string, ResponseExpires?: string, rawResponsePayload?: boolean, streamResponsePayload?: boolean }) => Promise<GetObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html S3: GetObjectAcl}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectAcl S3: GetObjectAcl}
   */
  GetObjectAcl: (input: { Bucket: string, Key: string, VersionId?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetObjectAclResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html S3: GetObjectAttributes}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectAttributes S3: GetObjectAttributes}
   */
  GetObjectAttributes: (input: { Bucket: string, Key: string, ObjectAttributes: any[], VersionId?: string, MaxParts?: number, PartNumberMarker?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string }) => Promise<GetObjectAttributesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html S3: GetObjectLegalHold}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectLegalHold S3: GetObjectLegalHold}
   */
  GetObjectLegalHold: (input: { Bucket: string, Key: string, VersionId?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetObjectLegalHoldResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html S3: GetObjectLockConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectLockConfiguration S3: GetObjectLockConfiguration}
   */
  GetObjectLockConfiguration: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetObjectLockConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html S3: GetObjectRetention}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectRetention S3: GetObjectRetention}
   */
  GetObjectRetention: (input: { Bucket: string, Key: string, VersionId?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetObjectRetentionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html S3: GetObjectTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectTagging S3: GetObjectTagging}
   */
  GetObjectTagging: (input: { Bucket: string, Key: string, VersionId?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetObjectTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html S3: GetObjectTorrent}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetObjectTorrent S3: GetObjectTorrent}
   */
  GetObjectTorrent: (input: { Bucket: string, Key: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<GetObjectTorrentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html S3: GetPublicAccessBlock}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#GetPublicAccessBlock S3: GetPublicAccessBlock}
   */
  GetPublicAccessBlock: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<GetPublicAccessBlockResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html S3: HeadBucket}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#HeadBucket S3: HeadBucket}
   */
  HeadBucket: (input: { Bucket: string, ExpectedBucketOwner?: string }) => Promise<HeadBucketResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html S3: HeadObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#HeadObject S3: HeadObject}
   */
  HeadObject: (input: { Bucket: string, Key: string, PartNumber?: number, VersionId?: string, IfMatch?: string, IfModifiedSince?: string, IfNoneMatch?: string, IfUnmodifiedSince?: string, Range?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string, ChecksumMode?: string }) => Promise<HeadObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html S3: ListBucketAnalyticsConfigurations}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBucketAnalyticsConfigurations S3: ListBucketAnalyticsConfigurations}
   */
  ListBucketAnalyticsConfigurations: (input: { Bucket: string, ContinuationToken?: string, paginate?: boolean | string, ExpectedBucketOwner?: string }) => Promise<ListBucketAnalyticsConfigurationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html S3: ListBucketIntelligentTieringConfigurations}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBucketIntelligentTieringConfigurations S3: ListBucketIntelligentTieringConfigurations}
   */
  ListBucketIntelligentTieringConfigurations: (input: { Bucket: string, ContinuationToken?: string, paginate?: boolean | string, ExpectedBucketOwner?: string }) => Promise<ListBucketIntelligentTieringConfigurationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html S3: ListBucketInventoryConfigurations}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBucketInventoryConfigurations S3: ListBucketInventoryConfigurations}
   */
  ListBucketInventoryConfigurations: (input: { Bucket: string, ContinuationToken?: string, paginate?: boolean | string, ExpectedBucketOwner?: string }) => Promise<ListBucketInventoryConfigurationsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html S3: ListBucketMetricsConfigurations}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBucketMetricsConfigurations S3: ListBucketMetricsConfigurations}
   */
  ListBucketMetricsConfigurations: (input: { Bucket: string, ContinuationToken?: string, paginate?: boolean | string, ExpectedBucketOwner?: string }) => Promise<ListBucketMetricsConfigurationsResponse>
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListBuckets S3: ListBuckets} */
  ListBuckets: () => Promise<ListBucketsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html S3: ListMultipartUploads}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListMultipartUploads S3: ListMultipartUploads}
   */
  ListMultipartUploads: (input: { Bucket: string, Delimiter?: string, EncodingType?: string, KeyMarker?: string, MaxUploads?: number, UploadIdMarker?: string, ExpectedBucketOwner?: string, RequestPayer?: string, paginate?: boolean | string }) => Promise<ListMultipartUploadsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html S3: ListObjectsV2}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListObjectsV2 S3: ListObjectsV2}
   */
  ListObjectsV2: (input: { Bucket: string, ContinuationToken?: string, Delimiter?: string, EncodingType?: string, FetchOwner?: string, MaxKeys?: number, Prefix?: string, StartAfter?: string, RequestPayer?: string, ExpectedBucketOwner?: string, OptionalObjectAttributes?: string, paginate?: boolean | string }) => Promise<ListObjectsV2Response>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html S3: ListObjectVersions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListObjectVersions S3: ListObjectVersions}
   */
  ListObjectVersions: (input: { Bucket: string, Delimiter?: string, EncodingType?: string, KeyMarker?: string, MaxKeys?: number, Prefix?: string, VersionIdMarker?: string, paginate?: boolean | string, ExpectedBucketOwner?: string, RequestPayer?: string, OptionalObjectAttributes?: string }) => Promise<ListObjectVersionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html S3: ListParts}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#ListParts S3: ListParts}
   */
  ListParts: (input: { Bucket: string, Key: string, UploadId: string, MaxParts?: number, PartNumberMarker?: string, RequestPayer?: string, ExpectedBucketOwner?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string }) => Promise<ListPartsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html S3: PutBucketAccelerateConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketAccelerateConfiguration S3: PutBucketAccelerateConfiguration}
   */
  PutBucketAccelerateConfiguration: (input: { AccelerateConfiguration: Record<string, any>, Bucket: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketAccelerateConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html S3: PutBucketAnalyticsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketAnalyticsConfiguration S3: PutBucketAnalyticsConfiguration}
   */
  PutBucketAnalyticsConfiguration: (input: { Bucket: string, Id: string, AnalyticsConfiguration: Record<string, any>, ExpectedBucketOwner?: string }) => Promise<PutBucketAnalyticsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html S3: PutBucketCors}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketCors S3: PutBucketCors}
   */
  PutBucketCors: (input: { Bucket: string, CORSConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketCorsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html S3: PutBucketEncryption}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketEncryption S3: PutBucketEncryption}
   */
  PutBucketEncryption: (input: { Bucket: string, ServerSideEncryptionConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketEncryptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html S3: PutBucketIntelligentTieringConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketIntelligentTieringConfiguration S3: PutBucketIntelligentTieringConfiguration}
   */
  PutBucketIntelligentTieringConfiguration: (input: { Bucket: string, Id: string, IntelligentTieringConfiguration: Record<string, any> }) => Promise<PutBucketIntelligentTieringConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html S3: PutBucketInventoryConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketInventoryConfiguration S3: PutBucketInventoryConfiguration}
   */
  PutBucketInventoryConfiguration: (input: { Bucket: string, Id: string, InventoryConfiguration: Record<string, any>, ExpectedBucketOwner?: string }) => Promise<PutBucketInventoryConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html S3: PutBucketLifecycleConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketLifecycleConfiguration S3: PutBucketLifecycleConfiguration}
   */
  PutBucketLifecycleConfiguration: (input: { Bucket: string, LifecycleConfiguration: Record<string, any>, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string, ContentMD5?: string }) => Promise<PutBucketLifecycleConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html S3: PutBucketMetricsConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketMetricsConfiguration S3: PutBucketMetricsConfiguration}
   */
  PutBucketMetricsConfiguration: (input: { Bucket: string, Id: string, MetricsConfiguration: Record<string, any>, ExpectedBucketOwner?: string }) => Promise<PutBucketMetricsConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotificationConfiguration.html S3: PutBucketNotificationConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketNotificationConfiguration S3: PutBucketNotificationConfiguration}
   */
  PutBucketNotificationConfiguration: (input: { Bucket: string, NotificationConfiguration: Record<string, any>, ExpectedBucketOwner?: string }) => Promise<PutBucketNotificationConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html S3: PutBucketOwnershipControls}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketOwnershipControls S3: PutBucketOwnershipControls}
   */
  PutBucketOwnershipControls: (input: { Bucket: string, OwnershipControls: Record<string, any>, ContentMD5?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketOwnershipControlsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html S3: PutBucketPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketPolicy S3: PutBucketPolicy}
   */
  PutBucketPolicy: (input: { Bucket: string, Policy: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ConfirmRemoveSelfBucketAccess?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html S3: PutBucketReplication}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketReplication S3: PutBucketReplication}
   */
  PutBucketReplication: (input: { Bucket: string, ReplicationConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, Token?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketReplicationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html S3: PutBucketRequestPayment}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketRequestPayment S3: PutBucketRequestPayment}
   */
  PutBucketRequestPayment: (input: { Bucket: string, RequestPaymentConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketRequestPaymentResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html S3: PutBucketTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketTagging S3: PutBucketTagging}
   */
  PutBucketTagging: (input: { Bucket: string, Tagging: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html S3: PutBucketVersioning}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketVersioning S3: PutBucketVersioning}
   */
  PutBucketVersioning: (input: { Bucket: string, VersioningConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, MFA?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketVersioningResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html S3: PutBucketWebsite}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutBucketWebsite S3: PutBucketWebsite}
   */
  PutBucketWebsite: (input: { Bucket: string, WebsiteConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutBucketWebsiteResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html S3: PutObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObject S3: PutObject}
   */
  PutObject: (input: { Bucket: string, Key: string, Body?: Buffer | stream | string, File?: string, ApplyChecksum?: boolean, MinChunkSize?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentLength?: string, ContentMD5?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string, Metadata?: Record<string, any> }) => Promise<PutObjectResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html S3: PutObjectLegalHold}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObjectLegalHold S3: PutObjectLegalHold}
   */
  PutObjectLegalHold: (input: { Bucket: string, Key: string, VersionId?: string, LegalHold: Record<string, any>, RequestPayer?: string, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutObjectLegalHoldResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html S3: PutObjectLockConfiguration}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObjectLockConfiguration S3: PutObjectLockConfiguration}
   */
  PutObjectLockConfiguration: (input: { Bucket: string, ObjectLockConfiguration: Record<string, any>, RequestPayer?: string, Token?: string, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutObjectLockConfigurationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html S3: PutObjectRetention}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObjectRetention S3: PutObjectRetention}
   */
  PutObjectRetention: (input: { Bucket: string, Key: string, VersionId?: string, Retention: Record<string, any>, RequestPayer?: string, BypassGovernanceRetention?: string, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutObjectRetentionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html S3: PutObjectTagging}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutObjectTagging S3: PutObjectTagging}
   */
  PutObjectTagging: (input: { Bucket: string, Key: string, VersionId?: string, Tagging: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string, RequestPayer?: string }) => Promise<PutObjectTaggingResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html S3: PutPublicAccessBlock}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#PutPublicAccessBlock S3: PutPublicAccessBlock}
   */
  PutPublicAccessBlock: (input: { Bucket: string, PublicAccessBlockConfiguration: Record<string, any>, ContentMD5?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<PutPublicAccessBlockResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html S3: RestoreObject}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#RestoreObject S3: RestoreObject}
   */
  RestoreObject: (input: { Bucket: string, Key: string, RestoreRequest: Record<string, any>, VersionId?: string, RequestPayer?: string, ChecksumAlgorithm?: string, ExpectedBucketOwner?: string }) => Promise<RestoreObjectResponse>
  /**
   * @description
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#Upload S3: Upload}
   */
  Upload: (input: { Bucket: string, Key: string, Body?: Buffer | stream | string, File?: string, ChunkSize?: number, Concurrency?: number, ACL?: string, BucketKeyEnabled?: string, CacheControl?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, ContentDisposition?: string, ContentEncoding?: string, ContentLanguage?: string, ContentType?: string, ExpectedBucketOwner?: string, Expires?: string, GrantFullControl?: string, GrantRead?: string, GrantReadACP?: string, GrantWriteACP?: string, ObjectLockLegalHoldStatus?: string, ObjectLockMode?: string, ObjectLockRetainUntilDate?: string, RequestPayer?: string, ServerSideEncryption?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, SSEKMSEncryptionContext?: string, SSEKMSKeyId?: string, StorageClass?: string, Tagging?: string, WebsiteRedirectLocation?: string, Metadata?: Record<string, any> }) => Promise<UploadResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html S3: UploadPart}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/s3/readme.md#UploadPart S3: UploadPart}
   */
  UploadPart: (input: { Bucket: string, Key: string, PartNumber?: number, Body?: Buffer | stream | string, ContentLength?: string, ContentMD5?: string, ChecksumAlgorithm?: string, ChecksumCRC32?: string, ChecksumCRC32C?: string, ChecksumSHA1?: string, ChecksumSHA256?: string, SSECustomerAlgorithm?: string, SSECustomerKey?: string, SSECustomerKeyMD5?: string, RequestPayer?: string, ExpectedBucketOwner?: string }) => Promise<UploadPartResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    S3: AwsLiteS3;
  }
}

export type {
  AwsLiteS3,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AbortMultipartUploadResponse,
  CompleteMultipartUploadResponse,
  CopyObjectResponse,
  CreateBucketResponse,
  CreateMultipartUploadResponse,
  DeleteBucketResponse,
  DeleteBucketAnalyticsConfigurationResponse,
  DeleteBucketCorsResponse,
  DeleteBucketEncryptionResponse,
  DeleteBucketIntelligentTieringConfigurationResponse,
  DeleteBucketInventoryConfigurationResponse,
  DeleteBucketLifecycleResponse,
  DeleteBucketMetricsConfigurationResponse,
  DeleteBucketOwnershipControlsResponse,
  DeleteBucketPolicyResponse,
  DeleteBucketReplicationResponse,
  DeleteBucketTaggingResponse,
  DeleteBucketWebsiteResponse,
  DeleteObjectResponse,
  DeleteObjectsResponse,
  DeleteObjectTaggingResponse,
  DeletePublicAccessBlockResponse,
  GetBucketAccelerateConfigurationResponse,
  GetBucketAclResponse,
  GetBucketAnalyticsConfigurationResponse,
  GetBucketCorsResponse,
  GetBucketEncryptionResponse,
  GetBucketIntelligentTieringConfigurationResponse,
  GetBucketInventoryConfigurationResponse,
  GetBucketLifecycleConfigurationResponse,
  GetBucketLocationResponse,
  GetBucketLoggingResponse,
  GetBucketMetricsConfigurationResponse,
  GetBucketNotificationConfigurationResponse,
  GetBucketOwnershipControlsResponse,
  GetBucketPolicyResponse,
  GetBucketPolicyStatusResponse,
  GetBucketReplicationResponse,
  GetBucketRequestPaymentResponse,
  GetBucketTaggingResponse,
  GetBucketVersioningResponse,
  GetBucketWebsiteResponse,
  GetObjectResponse,
  GetObjectAclResponse,
  GetObjectAttributesResponse,
  GetObjectLegalHoldResponse,
  GetObjectLockConfigurationResponse,
  GetObjectRetentionResponse,
  GetObjectTaggingResponse,
  GetObjectTorrentResponse,
  GetPublicAccessBlockResponse,
  HeadBucketResponse,
  HeadObjectResponse,
  ListBucketAnalyticsConfigurationsResponse,
  ListBucketIntelligentTieringConfigurationsResponse,
  ListBucketInventoryConfigurationsResponse,
  ListBucketMetricsConfigurationsResponse,
  ListBucketsResponse,
  ListMultipartUploadsResponse,
  ListObjectsV2Response,
  ListObjectVersionsResponse,
  ListPartsResponse,
  PutBucketAccelerateConfigurationResponse,
  PutBucketAnalyticsConfigurationResponse,
  PutBucketCorsResponse,
  PutBucketEncryptionResponse,
  PutBucketIntelligentTieringConfigurationResponse,
  PutBucketInventoryConfigurationResponse,
  PutBucketLifecycleConfigurationResponse,
  PutBucketMetricsConfigurationResponse,
  PutBucketNotificationConfigurationResponse,
  PutBucketOwnershipControlsResponse,
  PutBucketPolicyResponse,
  PutBucketReplicationResponse,
  PutBucketRequestPaymentResponse,
  PutBucketTaggingResponse,
  PutBucketVersioningResponse,
  PutBucketWebsiteResponse,
  PutObjectResponse,
  PutObjectLegalHoldResponse,
  PutObjectLockConfigurationResponse,
  PutObjectRetentionResponse,
  PutObjectTaggingResponse,
  PutPublicAccessBlockResponse,
  RestoreObjectResponse,
  UploadResponse,
  UploadPartResponse,
  // $EXPORT_END
}
