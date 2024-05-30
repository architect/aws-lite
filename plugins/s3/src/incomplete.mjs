const disabled = true
const docRoot = 'https://docs.aws.amazon.com/AmazonS3/latest/API/'
export default {
  CopyObject:                                  { disabled, awsDoc: docRoot + 'API_CopyObject.html' },
  CreateSession:                               { disabled, awsDoc: docRoot + 'API_CreateSession.html' },
  DeleteBucketAnalyticsConfiguration:          { disabled, awsDoc: docRoot + 'API_DeleteBucketAnalyticsConfiguration.html' },
  DeleteBucketCors:                            { disabled, awsDoc: docRoot + 'API_DeleteBucketCors.html' },
  DeleteBucketEncryption:                      { disabled, awsDoc: docRoot + 'API_DeleteBucketEncryption.html' },
  DeleteBucketIntelligentTieringConfiguration: { disabled, awsDoc: docRoot + 'API_DeleteBucketIntelligentTieringConfiguration.html' },
  DeleteBucketInventoryConfiguration:          { disabled, awsDoc: docRoot + 'API_DeleteBucketInventoryConfiguration.html' },
  DeleteBucketLifecycle:                       { disabled, awsDoc: docRoot + 'API_DeleteBucketLifecycle.html' },
  DeleteBucketMetricsConfiguration:            { disabled, awsDoc: docRoot + 'API_DeleteBucketMetricsConfiguration.html' },
  DeleteBucketOwnershipControls:               { disabled, awsDoc: docRoot + 'API_DeleteBucketOwnershipControls.html' },
  DeleteBucketPolicy:                          { disabled, awsDoc: docRoot + 'API_DeleteBucketPolicy.html' },
  DeleteBucketReplication:                     { disabled, awsDoc: docRoot + 'API_DeleteBucketReplication.html' },
  DeleteBucketTagging:                         { disabled, awsDoc: docRoot + 'API_DeleteBucketTagging.html' },
  DeleteBucketWebsite:                         { disabled, awsDoc: docRoot + 'API_DeleteBucketWebsite.html' },
  DeleteObjectTagging:                         { disabled, awsDoc: docRoot + 'API_DeleteObjectTagging.html' },
  DeletePublicAccessBlock:                     { disabled, awsDoc: docRoot + 'API_DeletePublicAccessBlock.html' },
  GetBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_GetBucketLifecycle.html' }, // Does not exist anymore, replaced by `GetBucketLifecycleConfiguration`
  GetBucketNotification:                       { disabled, awsDoc: docRoot + 'API_GetBucketNotification.html' }, // Does not exist anymore, replaced by `GetBucketNotificationConfiguration`
  GetBucketRequestPayment:                     { disabled, awsDoc: docRoot + 'API_GetBucketRequestPayment.html' },
  GetBucketTagging:                            { disabled, awsDoc: docRoot + 'API_GetBucketTagging.html' },
  GetBucketVersioning:                         { disabled, awsDoc: docRoot + 'API_GetBucketVersioning.html' },
  GetBucketWebsite:                            { disabled, awsDoc: docRoot + 'API_GetBucketWebsite.html' },
  GetObjectAcl:                                { disabled, awsDoc: docRoot + 'API_GetObjectAcl.html' },
  GetObjectAttributes:                         { disabled, awsDoc: docRoot + 'API_GetObjectAttributes.html' },
  GetObjectLegalHold:                          { disabled, awsDoc: docRoot + 'API_GetObjectLegalHold.html' },
  GetObjectLockConfiguration:                  { disabled, awsDoc: docRoot + 'API_GetObjectLockConfiguration.html' },
  GetObjectRetention:                          { disabled, awsDoc: docRoot + 'API_GetObjectRetention.html' },
  GetObjectTagging:                            { disabled, awsDoc: docRoot + 'API_GetObjectTagging.html' },
  GetObjectTorrent:                            { disabled, awsDoc: docRoot + 'API_GetObjectTorrent.html' },
  GetPublicAccessBlock:                        { disabled, awsDoc: docRoot + 'API_GetPublicAccessBlock.html' },
  ListBucketAnalyticsConfigurations:           { disabled, awsDoc: docRoot + 'API_ListBucketAnalyticsConfigurations.html' },
  ListBucketIntelligentTieringConfigurations:  { disabled, awsDoc: docRoot + 'API_ListBucketIntelligentTieringConfigurations.html' },
  ListBucketInventoryConfigurations:           { disabled, awsDoc: docRoot + 'API_ListBucketInventoryConfigurations.html' },
  ListBucketMetricsConfigurations:             { disabled, awsDoc: docRoot + 'API_ListBucketMetricsConfigurations.html' },
  ListDirectoryBuckets:                        { disabled, awsDoc: docRoot + 'API_ListDirectoryBuckets.html' },
  ListObjects:                                 { disabled, awsDoc: docRoot + 'API_ListObjects.html' },
  ListObjectVersions:                          { disabled, awsDoc: docRoot + 'API_ListObjectVersions.html' },
  ListParts:                                   { disabled, awsDoc: docRoot + 'API_ListParts.html' },
  PutBucketAccelerateConfiguration:            { disabled, awsDoc: docRoot + 'API_PutBucketAccelerateConfiguration.html' },
  PutBucketAcl:                                { disabled, awsDoc: docRoot + 'API_PutBucketAcl.html' },
  PutBucketAnalyticsConfiguration:             { disabled, awsDoc: docRoot + 'API_PutBucketAnalyticsConfiguration.html' },
  PutBucketCors:                               { disabled, awsDoc: docRoot + 'API_PutBucketCors.html' },
  PutBucketEncryption:                         { disabled, awsDoc: docRoot + 'API_PutBucketEncryption.html' },
  PutBucketIntelligentTieringConfiguration:    { disabled, awsDoc: docRoot + 'API_PutBucketIntelligentTieringConfiguration.html' },
  PutBucketInventoryConfiguration:             { disabled, awsDoc: docRoot + 'API_PutBucketInventoryConfiguration.html' },
  PutBucketLifecycle:                          { disabled, awsDoc: docRoot + 'API_PutBucketLifecycle.html' },
  PutBucketLifecycleConfiguration:             { disabled, awsDoc: docRoot + 'API_PutBucketLifecycleConfiguration.html' },
  PutBucketLogging:                            { disabled, awsDoc: docRoot + 'API_PutBucketLogging.html' },
  PutBucketMetricsConfiguration:               { disabled, awsDoc: docRoot + 'API_PutBucketMetricsConfiguration.html' },
  PutBucketNotification:                       { disabled, awsDoc: docRoot + 'API_PutBucketNotification.html' },
  PutBucketNotificationConfiguration:          { disabled, awsDoc: docRoot + 'API_PutBucketNotificationConfiguration.html' },
  PutBucketOwnershipControls:                  { disabled, awsDoc: docRoot + 'API_PutBucketOwnershipControls.html' },
  PutBucketPolicy:                             { disabled, awsDoc: docRoot + 'API_PutBucketPolicy.html' },
  PutBucketReplication:                        { disabled, awsDoc: docRoot + 'API_PutBucketReplication.html' },
  PutBucketRequestPayment:                     { disabled, awsDoc: docRoot + 'API_PutBucketRequestPayment.html' },
  PutBucketTagging:                            { disabled, awsDoc: docRoot + 'API_PutBucketTagging.html' },
  PutBucketVersioning:                         { disabled, awsDoc: docRoot + 'API_PutBucketVersioning.html' },
  PutBucketWebsite:                            { disabled, awsDoc: docRoot + 'API_PutBucketWebsite.html' },
  PutObjectAcl:                                { disabled, awsDoc: docRoot + 'API_PutObjectAcl.html' },
  PutObjectLegalHold:                          { disabled, awsDoc: docRoot + 'API_PutObjectLegalHold.html' },
  PutObjectLockConfiguration:                  { disabled, awsDoc: docRoot + 'API_PutObjectLockConfiguration.html' },
  PutObjectRetention:                          { disabled, awsDoc: docRoot + 'API_PutObjectRetention.html' },
  PutObjectTagging:                            { disabled, awsDoc: docRoot + 'API_PutObjectTagging.html' },
  PutPublicAccessBlock:                        { disabled, awsDoc: docRoot + 'API_PutPublicAccessBlock.html' },
  RestoreObject:                               { disabled, awsDoc: docRoot + 'API_RestoreObject.html' },
  SelectObjectContent:                         { disabled, awsDoc: docRoot + 'API_SelectObjectContent.html' },
  UploadPartCopy:                              { disabled, awsDoc: docRoot + 'API_UploadPartCopy.html' },
  WriteGetObjectResponse:                      { disabled, awsDoc: docRoot + 'API_WriteGetObjectResponse.html' },
}
