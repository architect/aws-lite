import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AddClientIDToOpenIDConnectProviderCommandOutput as AddClientIDToOpenIDConnectProviderResponse,
  AddRoleToInstanceProfileCommandOutput as AddRoleToInstanceProfileResponse,
  AddUserToGroupCommandOutput as AddUserToGroupResponse,
  AttachGroupPolicyCommandOutput as AttachGroupPolicyResponse,
  AttachRolePolicyCommandOutput as AttachRolePolicyResponse,
  AttachUserPolicyCommandOutput as AttachUserPolicyResponse,
  ChangePasswordCommandOutput as ChangePasswordResponse,
  CreateAccessKeyCommandOutput as CreateAccessKeyResponse,
  CreateAccountAliasCommandOutput as CreateAccountAliasResponse,
  CreateGroupCommandOutput as CreateGroupResponse,
  CreateInstanceProfileCommandOutput as CreateInstanceProfileResponse,
  CreateLoginProfileCommandOutput as CreateLoginProfileResponse,
  CreatePolicyCommandOutput as CreatePolicyResponse,
  CreateRoleCommandOutput as CreateRoleResponse,
  CreateServiceLinkedRoleCommandOutput as CreateServiceLinkedRoleResponse,
  CreateUserCommandOutput as CreateUserResponse,
  DeleteAccessKeyCommandOutput as DeleteAccessKeyResponse,
  DeleteAccountAliasCommandOutput as DeleteAccountAliasResponse,
  DeleteGroupCommandOutput as DeleteGroupResponse,
  DeleteGroupPolicyCommandOutput as DeleteGroupPolicyResponse,
  DeleteInstanceProfileCommandOutput as DeleteInstanceProfileResponse,
  DeleteLoginProfileCommandOutput as DeleteLoginProfileResponse,
  DeletePolicyCommandOutput as DeletePolicyResponse,
  DeleteRoleCommandOutput as DeleteRoleResponse,
  DeleteRolePolicyCommandOutput as DeleteRolePolicyResponse,
  DeleteServiceLinkedRoleCommandOutput as DeleteServiceLinkedRoleResponse,
  DeleteUserCommandOutput as DeleteUserResponse,
  DeleteUserPolicyCommandOutput as DeleteUserPolicyResponse,
  DetachGroupPolicyCommandOutput as DetachGroupPolicyResponse,
  DetachRolePolicyCommandOutput as DetachRolePolicyResponse,
  DetachUserPolicyCommandOutput as DetachUserPolicyResponse,
  GetAccessKeyLastUsedCommandOutput as GetAccessKeyLastUsedResponse,
  GetGroupCommandOutput as GetGroupResponse,
  GetInstanceProfileCommandOutput as GetInstanceProfileResponse,
  GetLoginProfileCommandOutput as GetLoginProfileResponse,
  GetPolicyCommandOutput as GetPolicyResponse,
  GetRoleCommandOutput as GetRoleResponse,
  GetUserCommandOutput as GetUserResponse,
  ListAccessKeysCommandOutput as ListAccessKeysResponse,
  ListAccountAliasesCommandOutput as ListAccountAliasesResponse,
  ListAttachedGroupPoliciesCommandOutput as ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesCommandOutput as ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesCommandOutput as ListAttachedUserPoliciesResponse,
  ListGroupPoliciesCommandOutput as ListGroupPoliciesResponse,
  ListGroupsCommandOutput as ListGroupsResponse,
  ListGroupsForUserCommandOutput as ListGroupsForUserResponse,
  ListInstanceProfilesCommandOutput as ListInstanceProfilesResponse,
  ListInstanceProfilesForRoleCommandOutput as ListInstanceProfilesForRoleResponse,
  ListInstanceProfileTagsCommandOutput as ListInstanceProfileTagsResponse,
  ListPoliciesCommandOutput as ListPoliciesResponse,
  ListPolicyTagsCommandOutput as ListPolicyTagsResponse,
  ListRolePoliciesCommandOutput as ListRolePoliciesResponse,
  ListRolesCommandOutput as ListRolesResponse,
  ListRoleTagsCommandOutput as ListRoleTagsResponse,
  ListUserPoliciesCommandOutput as ListUserPoliciesResponse,
  ListUsersCommandOutput as ListUsersResponse,
  ListUserTagsCommandOutput as ListUserTagsResponse,
  PutGroupPolicyCommandOutput as PutGroupPolicyResponse,
  PutRolePolicyCommandOutput as PutRolePolicyResponse,
  PutUserPolicyCommandOutput as PutUserPolicyResponse,
  RemoveUserFromGroupCommandOutput as RemoveUserFromGroupResponse,
  RemoveRoleFromInstanceProfileCommandOutput as RemoveRoleFromInstanceProfileResponse,
  TagInstanceProfileCommandOutput as TagInstanceProfileResponse,
  TagPolicyCommandOutput as TagPolicyResponse,
  TagRoleCommandOutput as TagRoleResponse,
  TagUserCommandOutput as TagUserResponse,
  UntagInstanceProfileCommandOutput as UntagInstanceProfileResponse,
  UntagPolicyCommandOutput as UntagPolicyResponse,
  UntagRoleCommandOutput as UntagRoleResponse,
  UntagUserCommandOutput as UntagUserResponse,
  UpdateAccessKeyCommandOutput as UpdateAccessKeyResponse,
  UpdateAssumeRolePolicyCommandOutput as UpdateAssumeRolePolicyResponse,
  UpdateGroupCommandOutput as UpdateGroupResponse,
  UpdateLoginProfileCommandOutput as UpdateLoginProfileResponse,
  UpdateRoleCommandOutput as UpdateRoleResponse,
  UpdateRoleDescriptionCommandOutput as UpdateRoleDescriptionResponse,
  UpdateUserCommandOutput as UpdateUserResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-iam";

declare interface AwsLiteIAM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html IAM: AddClientIDToOpenIDConnectProvider}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddClientIDToOpenIDConnectProvider IAM: AddClientIDToOpenIDConnectProvider}
   */
  AddClientIDToOpenIDConnectProvider: (input: { ClientID: string, OpenIDConnectProviderArn: string }) => Promise<AddClientIDToOpenIDConnectProviderResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html IAM: AddRoleToInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddRoleToInstanceProfile IAM: AddRoleToInstanceProfile}
   */
  AddRoleToInstanceProfile: (input: { InstanceProfileName: string, RoleName: string }) => Promise<AddRoleToInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html IAM: AddUserToGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AddUserToGroup IAM: AddUserToGroup}
   */
  AddUserToGroup: (input: { GroupName: string, UserName: string }) => Promise<AddUserToGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html IAM: AttachGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachGroupPolicy IAM: AttachGroupPolicy}
   */
  AttachGroupPolicy: (input: { GroupName: string, PolicyArn: string }) => Promise<AttachGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html IAM: AttachRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachRolePolicy IAM: AttachRolePolicy}
   */
  AttachRolePolicy: (input: { PolicyArn: string, RoleName: string }) => Promise<AttachRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html IAM: AttachUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#AttachUserPolicy IAM: AttachUserPolicy}
   */
  AttachUserPolicy: (input: { PolicyArn: string, UserName: string }) => Promise<AttachUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html IAM: ChangePassword}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ChangePassword IAM: ChangePassword}
   */
  ChangePassword: (input: { NewPassword: string, OldPassword: string }) => Promise<ChangePasswordResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html IAM: CreateAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateAccessKey IAM: CreateAccessKey}
   */
  CreateAccessKey: (input: { UserName: string }) => Promise<CreateAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html IAM: CreateAccountAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateAccountAlias IAM: CreateAccountAlias}
   */
  CreateAccountAlias: (input: { AccountAlias: string }) => Promise<CreateAccountAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html IAM: CreateGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateGroup IAM: CreateGroup}
   */
  CreateGroup: (input: { GroupName: string, Path?: string }) => Promise<CreateGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html IAM: CreateInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateInstanceProfile IAM: CreateInstanceProfile}
   */
  CreateInstanceProfile: (input: { InstanceProfileName: string, Path?: string, Tags?: any[] }) => Promise<CreateInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html IAM: CreateLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateLoginProfile IAM: CreateLoginProfile}
   */
  CreateLoginProfile: (input: { Password: string, UserName: string, PasswordResetRequired?: boolean }) => Promise<CreateLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html IAM: CreatePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreatePolicy IAM: CreatePolicy}
   */
  CreatePolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, Description?: string, Path?: string, Tags?: any[] }) => Promise<CreatePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html IAM: CreateRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateRole IAM: CreateRole}
   */
  CreateRole: (input: { AssumeRolePolicyDocument: string | Record<string, any>, RoleName: string, Description?: string, MaxSessionDuration?: number, Path?: string, PermissionsBoundary?: string, Tags?: any[] }) => Promise<CreateRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html IAM: CreateServiceLinkedRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateServiceLinkedRole IAM: CreateServiceLinkedRole}
   */
  CreateServiceLinkedRole: (input: { AWSServiceName: string, CustomSuffix?: string, Description?: string }) => Promise<CreateServiceLinkedRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html IAM: CreateUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#CreateUser IAM: CreateUser}
   */
  CreateUser: (input: { UserName: string, Path?: string, PermissionsBoundary?: string, Tags?: any[] }) => Promise<CreateUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html IAM: DeleteAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteAccessKey IAM: DeleteAccessKey}
   */
  DeleteAccessKey: (input: { AccessKeyId: string, UserName?: string }) => Promise<DeleteAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html IAM: DeleteAccountAlias}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteAccountAlias IAM: DeleteAccountAlias}
   */
  DeleteAccountAlias: (input: { AccountAlias: string }) => Promise<DeleteAccountAliasResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html IAM: DeleteGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteGroup IAM: DeleteGroup}
   */
  DeleteGroup: (input: { GroupName: string }) => Promise<DeleteGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html IAM: DeleteGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteGroupPolicy IAM: DeleteGroupPolicy}
   */
  DeleteGroupPolicy: (input: { GroupName: string, PolicyName: string }) => Promise<DeleteGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html IAM: DeleteInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteInstanceProfile IAM: DeleteInstanceProfile}
   */
  DeleteInstanceProfile: (input: { InstanceProfileName: string }) => Promise<DeleteInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html IAM: DeleteLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteLoginProfile IAM: DeleteLoginProfile}
   */
  DeleteLoginProfile: (input: { UserName: string }) => Promise<DeleteLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html IAM: DeletePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeletePolicy IAM: DeletePolicy}
   */
  DeletePolicy: (input: { PolicyArn: string }) => Promise<DeletePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html IAM: DeleteRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRole IAM: DeleteRole}
   */
  DeleteRole: (input: { RoleName: string }) => Promise<DeleteRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html IAM: DeleteRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteRolePolicy IAM: DeleteRolePolicy}
   */
  DeleteRolePolicy: (input: { RoleName: string, PolicyName: string }) => Promise<DeleteRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html IAM: DeleteServiceLinkedRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteServiceLinkedRole IAM: DeleteServiceLinkedRole}
   */
  DeleteServiceLinkedRole: (input: { RoleName: string }) => Promise<DeleteServiceLinkedRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html IAM: DeleteUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUser IAM: DeleteUser}
   */
  DeleteUser: (input: { UserName: string }) => Promise<DeleteUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html IAM: DeleteUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DeleteUserPolicy IAM: DeleteUserPolicy}
   */
  DeleteUserPolicy: (input: { PolicyName: string, UserName: string }) => Promise<DeleteUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html IAM: DetachGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachGroupPolicy IAM: DetachGroupPolicy}
   */
  DetachGroupPolicy: (input: { GroupName: string, PolicyArn: string }) => Promise<DetachGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html IAM: DetachRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachRolePolicy IAM: DetachRolePolicy}
   */
  DetachRolePolicy: (input: { PolicyArn: string, RoleName: string }) => Promise<DetachRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html IAM: DetachUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#DetachUserPolicy IAM: DetachUserPolicy}
   */
  DetachUserPolicy: (input: { PolicyArn: string, UserName: string }) => Promise<DetachUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html IAM: GetAccessKeyLastUsed}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetAccessKeyLastUsed IAM: GetAccessKeyLastUsed}
   */
  GetAccessKeyLastUsed: (input: { AccessKeyId: string }) => Promise<GetAccessKeyLastUsedResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html IAM: GetGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetGroup IAM: GetGroup}
   */
  GetGroup: (input: { GroupName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<GetGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html IAM: GetInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetInstanceProfile IAM: GetInstanceProfile}
   */
  GetInstanceProfile: (input: { InstanceProfileName: string }) => Promise<GetInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html IAM: GetLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetLoginProfile IAM: GetLoginProfile}
   */
  GetLoginProfile: (input: { UserName: string }) => Promise<GetLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html IAM: GetPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetPolicy IAM: GetPolicy}
   */
  GetPolicy: (input: { PolicyArn: string }) => Promise<GetPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html IAM: GetRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetRole IAM: GetRole}
   */
  GetRole: (input: { RoleName: string }) => Promise<GetRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html IAM: GetUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#GetUser IAM: GetUser}
   */
  GetUser: (input: { UserName: string }) => Promise<GetUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html IAM: ListAccessKeys}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAccessKeys IAM: ListAccessKeys}
   */
  ListAccessKeys: (input: { Marker?: string, MaxItems?: number, UserName?: string, paginate?: boolean | string }) => Promise<ListAccessKeysResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html IAM: ListAccountAliases}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAccountAliases IAM: ListAccountAliases}
   */
  ListAccountAliases: (input: { Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListAccountAliasesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html IAM: ListAttachedGroupPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedGroupPolicies IAM: ListAttachedGroupPolicies}
   */
  ListAttachedGroupPolicies: (input: { GroupName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListAttachedGroupPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html IAM: ListAttachedRolePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedRolePolicies IAM: ListAttachedRolePolicies}
   */
  ListAttachedRolePolicies: (input: { RoleName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListAttachedRolePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html IAM: ListAttachedUserPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListAttachedUserPolicies IAM: ListAttachedUserPolicies}
   */
  ListAttachedUserPolicies: (input: { UserName: string, Marker?: string, PathPrefix?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListAttachedUserPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html IAM: ListGroupPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroupPolicies IAM: ListGroupPolicies}
   */
  ListGroupPolicies: (input: { GroupName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListGroupPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html IAM: ListGroups}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroups IAM: ListGroups}
   */
  ListGroups: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean | string }) => Promise<ListGroupsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html IAM: ListGroupsForUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListGroupsForUser IAM: ListGroupsForUser}
   */
  ListGroupsForUser: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListGroupsForUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html IAM: ListInstanceProfiles}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfiles IAM: ListInstanceProfiles}
   */
  ListInstanceProfiles: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean | string }) => Promise<ListInstanceProfilesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html IAM: ListInstanceProfilesForRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfilesForRole IAM: ListInstanceProfilesForRole}
   */
  ListInstanceProfilesForRole: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListInstanceProfilesForRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html IAM: ListInstanceProfileTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListInstanceProfileTags IAM: ListInstanceProfileTags}
   */
  ListInstanceProfileTags: (input: { InstanceProfileName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListInstanceProfileTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html IAM: ListPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPolicies IAM: ListPolicies}
   */
  ListPolicies: (input: { Marker?: string, MaxItems?: number, OnlyAttached?: boolean, PathPrefix?: string, PolicyUsageFilter?: string, Scope?: string, paginate?: boolean | string }) => Promise<ListPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html IAM: ListPolicyTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListPolicyTags IAM: ListPolicyTags}
   */
  ListPolicyTags: (input: { PolicyArn: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListPolicyTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html IAM: ListRolePolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRolePolicies IAM: ListRolePolicies}
   */
  ListRolePolicies: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListRolePoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html IAM: ListRoles}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRoles IAM: ListRoles}
   */
  ListRoles: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean | string }) => Promise<ListRolesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html IAM: ListRoleTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListRoleTags IAM: ListRoleTags}
   */
  ListRoleTags: (input: { RoleName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListRoleTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html IAM: ListUserPolicies}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUserPolicies IAM: ListUserPolicies}
   */
  ListUserPolicies: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListUserPoliciesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html IAM: ListUsers}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUsers IAM: ListUsers}
   */
  ListUsers: (input: { Marker?: string, MaxItems?: number, PathPrefix?: string, paginate?: boolean | string }) => Promise<ListUsersResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html IAM: ListUserTags}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#ListUserTags IAM: ListUserTags}
   */
  ListUserTags: (input: { UserName: string, Marker?: string, MaxItems?: number, paginate?: boolean | string }) => Promise<ListUserTagsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html IAM: PutGroupPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutGroupPolicy IAM: PutGroupPolicy}
   */
  PutGroupPolicy: (input: { GroupName: string, PolicyDocument: string | Record<string, any>, PolicyName: string }) => Promise<PutGroupPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html IAM: PutRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutRolePolicy IAM: PutRolePolicy}
   */
  PutRolePolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, RoleName: string }) => Promise<PutRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html IAM: PutUserPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#PutUserPolicy IAM: PutUserPolicy}
   */
  PutUserPolicy: (input: { PolicyDocument: string | Record<string, any>, PolicyName: string, UserName: string }) => Promise<PutUserPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html IAM: RemoveUserFromGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveUserFromGroup IAM: RemoveUserFromGroup}
   */
  RemoveUserFromGroup: (input: { GroupName: string, UserName: string }) => Promise<RemoveUserFromGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html IAM: RemoveRoleFromInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#RemoveRoleFromInstanceProfile IAM: RemoveRoleFromInstanceProfile}
   */
  RemoveRoleFromInstanceProfile: (input: { InstanceProfileName: string, RoleName: string }) => Promise<RemoveRoleFromInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html IAM: TagInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagInstanceProfile IAM: TagInstanceProfile}
   */
  TagInstanceProfile: (input: { InstanceProfileName: string, Tags: any[] }) => Promise<TagInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html IAM: TagPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagPolicy IAM: TagPolicy}
   */
  TagPolicy: (input: { PolicyArn: string, Tags: any[] }) => Promise<TagPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html IAM: TagRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagRole IAM: TagRole}
   */
  TagRole: (input: { RoleName: string, Tags: any[] }) => Promise<TagRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html IAM: TagUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#TagUser IAM: TagUser}
   */
  TagUser: (input: { UserName: string, Tags: any[] }) => Promise<TagUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html IAM: UntagInstanceProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagInstanceProfile IAM: UntagInstanceProfile}
   */
  UntagInstanceProfile: (input: { InstanceProfileName: string, TagKeys: any[] }) => Promise<UntagInstanceProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html IAM: UntagPolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagPolicy IAM: UntagPolicy}
   */
  UntagPolicy: (input: { PolicyArn: string, TagKeys: any[] }) => Promise<UntagPolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html IAM: UntagRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagRole IAM: UntagRole}
   */
  UntagRole: (input: { RoleName: string, TagKeys: any[] }) => Promise<UntagRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html IAM: UntagUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UntagUser IAM: UntagUser}
   */
  UntagUser: (input: { UserName: string, TagKeys: any[] }) => Promise<UntagUserResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html IAM: UpdateAccessKey}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAccessKey IAM: UpdateAccessKey}
   */
  UpdateAccessKey: (input: { AccessKeyId: string, Status: string, UserName?: string }) => Promise<UpdateAccessKeyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html IAM: UpdateAssumeRolePolicy}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateAssumeRolePolicy IAM: UpdateAssumeRolePolicy}
   */
  UpdateAssumeRolePolicy: (input: { PolicyDocument: string | Record<string, any>, RoleName: string }) => Promise<UpdateAssumeRolePolicyResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html IAM: UpdateGroup}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateGroup IAM: UpdateGroup}
   */
  UpdateGroup: (input: { GroupName: string, NewGroupName?: string, NewPath?: string }) => Promise<UpdateGroupResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html IAM: UpdateLoginProfile}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateLoginProfile IAM: UpdateLoginProfile}
   */
  UpdateLoginProfile: (input: { UserName: string, Password?: string, PasswordResetRequired?: boolean }) => Promise<UpdateLoginProfileResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html IAM: UpdateRole}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateRole IAM: UpdateRole}
   */
  UpdateRole: (input: { RoleName: string, Description?: string, MaxSessionDuration?: number }) => Promise<UpdateRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html IAM: UpdateRoleDescription}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateRoleDescription IAM: UpdateRoleDescription}
   */
  UpdateRoleDescription: (input: { RoleName: string, Description?: string }) => Promise<UpdateRoleDescriptionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html IAM: UpdateUser}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/iam/readme.md#UpdateUser IAM: UpdateUser}
   */
  UpdateUser: (input: { UserName: string, NewPath?: string, NewUserName?: string }) => Promise<UpdateUserResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    IAM: AwsLiteIAM;
  }
}

export type {
  AwsLiteIAM,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  AddClientIDToOpenIDConnectProviderResponse,
  AddRoleToInstanceProfileResponse,
  AddUserToGroupResponse,
  AttachGroupPolicyResponse,
  AttachRolePolicyResponse,
  AttachUserPolicyResponse,
  ChangePasswordResponse,
  CreateAccessKeyResponse,
  CreateAccountAliasResponse,
  CreateGroupResponse,
  CreateInstanceProfileResponse,
  CreateLoginProfileResponse,
  CreatePolicyResponse,
  CreateRoleResponse,
  CreateServiceLinkedRoleResponse,
  CreateUserResponse,
  DeleteAccessKeyResponse,
  DeleteAccountAliasResponse,
  DeleteGroupResponse,
  DeleteGroupPolicyResponse,
  DeleteInstanceProfileResponse,
  DeleteLoginProfileResponse,
  DeletePolicyResponse,
  DeleteRoleResponse,
  DeleteRolePolicyResponse,
  DeleteServiceLinkedRoleResponse,
  DeleteUserResponse,
  DeleteUserPolicyResponse,
  DetachGroupPolicyResponse,
  DetachRolePolicyResponse,
  DetachUserPolicyResponse,
  GetAccessKeyLastUsedResponse,
  GetGroupResponse,
  GetInstanceProfileResponse,
  GetLoginProfileResponse,
  GetPolicyResponse,
  GetRoleResponse,
  GetUserResponse,
  ListAccessKeysResponse,
  ListAccountAliasesResponse,
  ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesResponse,
  ListGroupPoliciesResponse,
  ListGroupsResponse,
  ListGroupsForUserResponse,
  ListInstanceProfilesResponse,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfileTagsResponse,
  ListPoliciesResponse,
  ListPolicyTagsResponse,
  ListRolePoliciesResponse,
  ListRolesResponse,
  ListRoleTagsResponse,
  ListUserPoliciesResponse,
  ListUsersResponse,
  ListUserTagsResponse,
  PutGroupPolicyResponse,
  PutRolePolicyResponse,
  PutUserPolicyResponse,
  RemoveUserFromGroupResponse,
  RemoveRoleFromInstanceProfileResponse,
  TagInstanceProfileResponse,
  TagPolicyResponse,
  TagRoleResponse,
  TagUserResponse,
  UntagInstanceProfileResponse,
  UntagPolicyResponse,
  UntagRoleResponse,
  UntagUserResponse,
  UpdateAccessKeyResponse,
  UpdateAssumeRolePolicyResponse,
  UpdateGroupResponse,
  UpdateLoginProfileResponse,
  UpdateRoleResponse,
  UpdateRoleDescriptionResponse,
  UpdateUserResponse,
  // $EXPORT_END
}
