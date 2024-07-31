# `@aws-lite/cloudfront`

> Official `aws-lite` plugin for CloudFront

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/cloudfront
```

Optionally install types:

```sh
npm i -D @aws-lite/cloudfront-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudfront)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/cloudfront)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestSyntax)


### `CreateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html)

Properties:
- **`FunctionCode` (string) [required]**
  - Base64 encoded function code
- **`FunctionConfig` (object) [required]**
  - Function configuration
- **`Name` (string) [required]**
  - Function name


### `CreateInvalidation`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource
- **`InvalidationBatch` (string, array)**
  - One or more invalidation parameters
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html#API_CreateInvalidation_RequestSyntax)
- **`CallerReference` (string) [required]**
  - Unique value that ensures that the request cannot be replayed


### `CreateKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html)

Properties:
- **`KeyGroupConfig` (object) [required]**
  - Key group configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_KeyGroupConfig.html)


### `CreatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html#cloudfront-CreatePublicKey-request-PublicKeyConfig)


### `DeleteDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html)

Properties:
- **`Name` (string) [required]**
  - Function name
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeleteKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html)

Properties:
- **`Name` (string) [required]**
  - Function name
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DeletePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource
- **`IfMatch` (string)**
  - Value of previous `GetDistribution` call's `ETag` property


### `DescribeFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html)

Properties:
- **`Name` (string) [required]**
  - Function name
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `GetDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `GetDistributionConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `GetFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html)

Properties:
- **`Name` (string) [required]**
  - Function name
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `GetKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `GetKeyGroupConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `GetPublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `GetPublicKeyConfig`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html)

Properties:
- **`Id` (string) [required]**
  - ID of the resource


### `ListDistributions`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListFunctions`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListKeyGroups`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPublicKeys`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor token to be used if `NextMarker` was returned in a previous response
- **`MaxItems` (number)**
  - Maximum number of items to return
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `TestFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html)

Properties:
- **`Name` (string) [required]**
  - Function name
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property
- **`EventObject` (string) [required]**
  - Base64 encoded binary `Event` object that will be passed to your function as an argument
- **`Stage` (string)**
  - The functions stage; can be one of: `DEVELOPMENT`, `LIVE`


### `UpdateDistribution`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html)

Properties:
- **`DistributionConfig` (object) [required]**
  - Complete distribution configuration object from `GetDistribution` call
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html#API_UpdateDistribution_RequestBody)
- **`Id` (string) [required]**
  - ID of the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdateFunction`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html)

Properties:
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property
- **`Name` (string) [required]**
  - Function name
- **`FunctionCode` (string) [required]**
  - Base64 encoded function code
- **`FunctionConfig` (object) [required]**
  - Function configuration


### `UpdateKeyGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html)

Properties:
- **`KeyGroupConfig` (object) [required]**
  - Key group configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_KeyGroupConfig.html)
- **`Id` (string) [required]**
  - ID of the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### `UpdatePublicKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html)

Properties:
- **`PublicKeyConfig` (object) [required]**
  - Public key configuration
  - [More details (AWS)](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html#cloudfront-UpdatePublicKey-request-PublicKeyConfig)
- **`Id` (string) [required]**
  - ID of the resource
- **`IfMatch` (string) [required]**
  - Value of previous `GetDistribution` call's `ETag` property


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AssociateAlias`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html)
- [`CopyDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html)
- [`CreateCachePolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html)
- [`CreateCloudFrontOriginAccessIdentity`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html)
- [`CreateContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateContinuousDeploymentPolicy.html)
- [`CreateDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistributionWithTags.html)
- [`CreateFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html)
- [`CreateFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html)
- [`CreateKeyValueStore`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyValueStore.html)
- [`CreateMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html)
- [`CreateOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginAccessControl.html)
- [`CreateOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html)
- [`CreateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html)
- [`CreateResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html)
- [`CreateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html)
- [`CreateStreamingDistributionWithTags`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html)
- [`DeleteCachePolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html)
- [`DeleteCloudFrontOriginAccessIdentity`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html)
- [`DeleteContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteContinuousDeploymentPolicy.html)
- [`DeleteFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html)
- [`DeleteFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html)
- [`DeleteKeyValueStore`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyValueStore.html)
- [`DeleteMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html)
- [`DeleteOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginAccessControl.html)
- [`DeleteOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html)
- [`DeleteRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html)
- [`DeleteResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html)
- [`DeleteStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html)
- [`DescribeKeyValueStore`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeKeyValueStore.html)
- [`GetCachePolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html)
- [`GetCachePolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html)
- [`GetCloudFrontOriginAccessIdentity`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html)
- [`GetCloudFrontOriginAccessIdentityConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html)
- [`GetContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicy.html)
- [`GetContinuousDeploymentPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetContinuousDeploymentPolicyConfig.html)
- [`GetFieldLevelEncryption`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html)
- [`GetFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html)
- [`GetFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html)
- [`GetFieldLevelEncryptionProfileConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html)
- [`GetInvalidation`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html)
- [`GetMonitoringSubscription`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html)
- [`GetOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControl.html)
- [`GetOriginAccessControlConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginAccessControlConfig.html)
- [`GetOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html)
- [`GetOriginRequestPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html)
- [`GetRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html)
- [`GetResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html)
- [`GetResponseHeadersPolicyConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html)
- [`GetStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html)
- [`GetStreamingDistributionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html)
- [`ListCachePolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html)
- [`ListCloudFrontOriginAccessIdentities`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html)
- [`ListConflictingAliases`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html)
- [`ListContinuousDeploymentPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListContinuousDeploymentPolicies.html)
- [`ListDistributionsByCachePolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html)
- [`ListDistributionsByKeyGroup`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html)
- [`ListDistributionsByOriginRequestPolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html)
- [`ListDistributionsByRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html)
- [`ListDistributionsByResponseHeadersPolicyId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html)
- [`ListDistributionsByWebACLId`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html)
- [`ListFieldLevelEncryptionConfigs`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html)
- [`ListFieldLevelEncryptionProfiles`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html)
- [`ListInvalidations`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html)
- [`ListKeyValueStores`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyValueStores.html)
- [`ListOriginAccessControls`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginAccessControls.html)
- [`ListOriginRequestPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html)
- [`ListRealtimeLogConfigs`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html)
- [`ListResponseHeadersPolicies`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html)
- [`ListStreamingDistributions`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html)
- [`ListTagsForResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html)
- [`PublishFunction`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html)
- [`TagResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html)
- [`UntagResource`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html)
- [`UpdateCachePolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html)
- [`UpdateCloudFrontOriginAccessIdentity`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html)
- [`UpdateContinuousDeploymentPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateContinuousDeploymentPolicy.html)
- [`UpdateDistributionWithStagingConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionWithStagingConfig.html)
- [`UpdateFieldLevelEncryptionConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html)
- [`UpdateFieldLevelEncryptionProfile`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html)
- [`UpdateKeyValueStore`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyValueStore.html)
- [`UpdateOriginAccessControl`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginAccessControl.html)
- [`UpdateOriginRequestPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html)
- [`UpdateRealtimeLogConfig`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html)
- [`UpdateResponseHeadersPolicy`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html)
- [`UpdateStreamingDistribution`](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
