# `@aws-lite/iam`

> Official `aws-lite` plugin for IAM

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/iam
```

Optionally install types:

```sh
npm i -D @aws-lite/iam-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `AddClientIDToOpenIDConnectProvider`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html)

Properties:
- **`ClientID` (string) [required]**
  - The client ID (aka the audience) to add to the IAM OpenId Connect provider resource
- **`OpenIDConnectProviderArn` (string) [required]**
  - ARN of the OpenID Connect resource


### `AddRoleToInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`RoleName` (string) [required]**
  - Name of the role


### `AddUserToGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`UserName` (string) [required]**
  - User name


### `AttachGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `AttachRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `AttachUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`UserName` (string) [required]**
  - User name


### `ChangePassword`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html)

Properties:
- **`NewPassword` (string) [required]**
  - New password; must conform to the accounts password policy
- **`OldPassword` (string) [required]**
  - Current password


### `CreateAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `CreateAccountAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html)

Properties:
- **`AccountAlias` (string) [required]**
  - Account alias to create


### `CreateGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)


### `CreateInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html)

Properties:
- **`Password` (string) [required]**
  - New password for the user
- **`UserName` (string) [required]**
  - User name
- **`PasswordResetRequired` (boolean)**
  - Set to true to specify the user must make a new password on next sign-in


### `CreatePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`Description` (string)**
  - Description of the resource
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html)

Properties:
- **`AssumeRolePolicyDocument` (string, object) [required]**
  - Trust relationship policy document granting an entity permission to assume the role; can be an object, or JSON or YAML string
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role
- **`Path` (string)**
  - Path for the role identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`PermissionsBoundary` (string)**
  - ARN of a managed policy to be used to set the role's permissions boundary
- **`Tags` (array)**
  - List of tags to attach to the role
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `CreateServiceLinkedRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html)

Properties:
- **`AWSServiceName` (string) [required]**
  - The service principal to which this role is attached; use `CustomSuffix` to prevent duplication errors during multiple requests for the same service
- **`CustomSuffix` (string)**
  - Identifier for the role; not supported by all services
- **`Description` (string)**
  - Description of the resource


### `CreateUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Path` (string)**
  - Path for the identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`PermissionsBoundary` (string)**
  - ARN of a managed policy to be used to set the resource's permissions boundary
- **`Tags` (array)**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `DeleteAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key
- **`UserName` (string)**
  - User name


### `DeleteAccountAlias`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html)

Properties:
- **`AccountAlias` (string) [required]**
  - The account alias


### `DeleteGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case


### `DeleteGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyName` (string) [required]**
  - Name of the policy


### `DeleteInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile


### `DeleteLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `DeletePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `DeleteRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `DeleteRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`PolicyName` (string) [required]**
  - Name of the policy


### `DeleteServiceLinkedRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `DeleteUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `DeleteUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html)

Properties:
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`UserName` (string) [required]**
  - User name


### `DetachGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `DetachRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `DetachUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`UserName` (string) [required]**
  - User name


### `GetAccessKeyLastUsed`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key


### `GetGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `GetInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile


### `GetLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `GetPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy


### `GetRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `GetUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name


### `ListAccessKeys`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`UserName` (string)**
  - User name
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAccountAliases`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedGroupPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedRolePolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListAttachedUserPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListGroupPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListGroups`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListGroupsForUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfiles`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfilesForRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListInstanceProfileTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`OnlyAttached` (boolean)**
  - Set to true to only see attached policies
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`PolicyUsageFilter` (string)**
  - Filter results by how they are used; can be one of: `PermissionsPolicy`, `PermissionsBoundary`
- **`Scope` (string)**
  - Filter results by how they are managed; can be one of: `All`, `AWS`, `Local` (customer managed)
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListPolicyTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRolePolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRoles`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListRoleTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListUserPolicies`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListUsers`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html)

Properties:
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`PathPrefix` (string)**
  - Filter results by path prefix
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `ListUserTags`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Marker` (string)**
  - Pagination cursor
- **`MaxItems` (number)**
  - Maximum number of items to be returned in a response; at most 1000
- **`paginate` (boolean, string)**
  - Enable automatic result pagination; use this instead of making your own individual pagination requests


### `PutGroupPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy


### `PutRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`RoleName` (string) [required]**
  - Name of the role


### `PutUserPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`PolicyName` (string) [required]**
  - Name of the policy
- **`UserName` (string) [required]**
  - User name


### `RemoveUserFromGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`UserName` (string) [required]**
  - User name


### `RemoveRoleFromInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`RoleName` (string) [required]**
  - Name of the role


### `TagInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `TagUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Tags` (array) [required]**
  - List of tags to attach to the resource
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `UntagInstanceProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html)

Properties:
- **`InstanceProfileName` (string) [required]**
  - Name of the instance profile
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagPolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html)

Properties:
- **`PolicyArn` (string) [required]**
  - Arn of the policy
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UntagUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`TagKeys` (array) [required]**
  - Array of tag keys


### `UpdateAccessKey`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html)

Properties:
- **`AccessKeyId` (string) [required]**
  - ID of the access key
- **`Status` (string) [required]**
  - New status for the access key; can be one of: `Active`, `Inactive`
- **`UserName` (string)**
  - User name


### `UpdateAssumeRolePolicy`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html)

Properties:
- **`PolicyDocument` (string, object) [required]**
  - The policy document; can be an object, or JSON or YAML string
- **`RoleName` (string) [required]**
  - Name of the role


### `UpdateGroup`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html)

Properties:
- **`GroupName` (string) [required]**
  - Name of the group; names are not distinguished by case
- **`NewGroupName` (string)**
  - New name for the group
- **`NewPath` (string)**
  - New path for the service


### `UpdateLoginProfile`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`Password` (string)**
  - New password for the user
- **`PasswordResetRequired` (boolean)**
  - Set to true to specify the user must make a new password on next sign-in


### `UpdateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role


### `UpdateRoleDescription`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the resource


### `UpdateUser`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html)

Properties:
- **`UserName` (string) [required]**
  - User name
- **`NewPath` (string)**
  - New path for the service
- **`NewUserName` (string)**
  - New user name


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`CreateOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html)
- [`CreatePolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html)
- [`CreateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html)
- [`CreateServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html)
- [`CreateVirtualMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html)
- [`DeactivateMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html)
- [`DeleteAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html)
- [`DeleteOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html)
- [`DeletePolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html)
- [`DeleteRolePermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html)
- [`DeleteSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html)
- [`DeleteServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html)
- [`DeleteServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html)
- [`DeleteSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html)
- [`DeleteSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html)
- [`DeleteUserPermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html)
- [`DeleteVirtualMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html)
- [`EnableMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html)
- [`GenerateCredentialReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html)
- [`GenerateOrganizationsAccessReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html)
- [`GenerateServiceLastAccessedDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html)
- [`GetAccountAuthorizationDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html)
- [`GetAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html)
- [`GetAccountSummary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html)
- [`GetContextKeysForCustomPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html)
- [`GetContextKeysForPrincipalPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html)
- [`GetCredentialReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html)
- [`GetGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html)
- [`GetMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetMFADevice.html)
- [`GetOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html)
- [`GetOrganizationsAccessReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html)
- [`GetPolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html)
- [`GetRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html)
- [`GetSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html)
- [`GetServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html)
- [`GetServiceLastAccessedDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html)
- [`GetServiceLastAccessedDetailsWithEntities`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html)
- [`GetServiceLinkedRoleDeletionStatus`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html)
- [`GetSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html)
- [`ListEntitiesForPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html)
- [`ListMFADevices`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html)
- [`ListMFADeviceTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html)
- [`ListOpenIDConnectProviders`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html)
- [`ListOpenIDConnectProviderTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html)
- [`ListPoliciesGrantingServiceAccess`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html)
- [`ListPolicyVersions`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html)
- [`ListSAMLProviders`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html)
- [`ListSAMLProviderTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html)
- [`ListServerCertificates`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html)
- [`ListServerCertificateTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html)
- [`ListServiceSpecificCredentials`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html)
- [`ListSigningCertificates`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html)
- [`ListSSHPublicKeys`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html)
- [`ListVirtualMFADevices`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html)
- [`PutRolePermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html)
- [`PutUserPermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html)
- [`RemoveClientIDFromOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html)
- [`ResetServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html)
- [`ResyncMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html)
- [`SetDefaultPolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html)
- [`SetSecurityTokenServicePreferences`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html)
- [`SimulateCustomPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html)
- [`SimulatePrincipalPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html)
- [`TagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html)
- [`TagOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html)
- [`TagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html)
- [`TagServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html)
- [`UntagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html)
- [`UntagOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html)
- [`UntagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html)
- [`UntagServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html)
- [`UpdateAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html)
- [`UpdateOpenIDConnectProviderThumbprint`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html)
- [`UpdateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html)
- [`UpdateServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html)
- [`UpdateServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html)
- [`UpdateSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html)
- [`UpdateSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html)
- [`UploadServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html)
- [`UploadSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html)
- [`UploadSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
