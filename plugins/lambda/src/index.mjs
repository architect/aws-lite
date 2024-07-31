/**
 * Plugin maintained by: @architect
 */


import incomplete from './incomplete.mjs'

const service = 'lambda'
const property = 'Lambda'
const required = true
const docRoot = 'https://docs.aws.amazon.com/lambda/latest/dg/'

const arr = { type: 'array' }
const bool = { type: 'boolean' }
const obj = { type: 'object' }
const num = { type: 'number' }
const str = { type: 'string' }

const AmazonManagedKafkaEventSourceConfig = { ...obj, comment: 'Configuration settings for an Amazon Managed Streaming for Apache Kafka event source' }
const Architectures = { ...arr, comment: 'System architecture, array can contain either `x86_64` (default) or `arm64`' }
const AuthType = { ...str, required, comment: 'Type of authentication that the function URL will use, either `AWS_IAM` or `NONE`' }
const BatchSize = { ...num, comment: 'Maximum number of records from 1 to 10000 in each batch that Lambda pulls from the stream or queue' }
const BisectBatchOnFunctionError = { ...bool, comment: 'If the function returns an error, divide the batch and try again (only for Kinesis and DynamoDB streams)' }
const CodeSigningConfigArn = { ...str, required, comment: 'ARN of the code signing configuration' }
const CodeSigningPolicies = { ...obj, comment: 'Define actions to take if validation checks fail' }
const CompatibleArchitecture = { ...str, comment: 'Set instruction set architecture to one of: `x86_64`, `arm64`' }
const CompatibleRuntime = { ...str, comment: 'Set the runtime identifier' }
const Cors = { ...obj, comment: 'Cross-origin resource sharing settings' }
const DeadLetterConfig = { ...obj, comment: 'Dead-letter queue configuration', ref: docRoot + 'API_DeadLetterConfig.html' }
const Description = { ...str, comment: 'Description of the function' }
const DestinationConfig = { ...obj, comment: 'Specify the destination of an event after being processed by Lambda' }
const DocumentDBEventSourceConfig = { ...obj, comment: 'Configuration for a `DocumentDB` event source' }
const Enabled = { ...bool, comment: 'Set to `false` to disable event source upon creation' }
const Environment = { ...obj, comment: 'Environment variable configuration', ref: docRoot + 'API_Environment.html' }
const EphemeralStorage = { ...obj, comment: 'Size of the function `/tmp` directory (in MB), from 512 (default) to 10240', ref: docRoot + 'API_EphemeralStorage.html' }
const EventSourceArn = { ...str, comment: 'ARN of the event source' }
const FileSystemConfigs = { ...arr, comment: 'EFS file system connection settings', ref: docRoot + 'API_FileSystemConfig.html' }
const FilterCriteria = { ...obj, comment: 'Define how incoming events will be filtered' }
const FunctionName = { ...str, required, comment: 'The name of the Lambda function, version, or alias' }
const FunctionResponseTypes = { ...arr, comment: 'A list of at most 1 string defining the current response type enum applied to the event source mapping; For Kinesis, DynamoDB Streams, and Amazon SQS' }
const FunctionVersion = { ...str, comment: 'Version of the aliased function' }
const Handler = { ...str, comment: 'The name of the handler file and method method within your code that Lambda calls to run your function (e.g. `index.handler`)', ref: docRoot + 'foundation-progmodel.html' }
const ImageConfig = { ...obj, comment: 'Container image configuration (overrides Docker file)', ref: docRoot + 'API_ImageConfig.html' }
const InvokeMode = { ...str, comment: 'Specify how the function will be invoked, either `BUFFERED` (default, uses the `Invoke` API operation) or `RESPONSE_STREAM` (streams results as they become available, uses the `InvokeWithResponseStream` API operation)' }
const KMSKeyArn = { ...str, comment: 'ARN of the Key Management Service (KMS) customer managed key used to encrypt your function environment variables' }
const LayerName = { ...str, required, comment: 'Name or ARN of the layer' }
const Layers = { ...arr, comment: 'List of function layer ARNs (including version) to add to the function execution environment' }
const Marker = { ...str, comment: 'Pagination token' }
const MaximumBatchingWindowInSeconds = { ...num, comment: 'Maximum time (in seconds) from 0 to 300 that Lambda may spend gathering records before invoking the function' }
const MaximumEventAgeInSeconds = { ...num, comment: 'Set a maximum age in whole seconds between 60 and 21,600 (inclusive) for events to be processed' }
const MaximumRecordAgeInSeconds = { ...num, comment: 'Maximum age between -1 (infinite, default) to 604,800 of an event before it will be discarded; only for `Kinesis` and `DynamoDB` streams' }
const MaximumRetryAttempts = { ...num, comment: 'Maximum number of tries between -1 (infinite, default) to 10,000 before a record is discarded; `Kinesis` and `DynamoDB` only ' }
const MaxItems = { ...num, comment: 'Maximum number of items to be returned; maximum 10,000' }
const MemorySize = { ...num, comment: 'Amount of memory available (in MB) at runtime from 128 to 10240; increasing memory also increases CPU allocation' }
const ParallelizationFactor = { ...num, comment: 'Number of batches between 1 to 10 that can be processed from each shard concurrently' }
const Qualifier = { ...str, comment: 'Specify a version or alias to invoke a published version of the function' }
const Queues = { ...arr, comment: 'Array of exactly 1 string specifying the name of the `Amazon MQ` broker destination queue to consume' }
const Resource = { ...str, required, comment: 'ARN of the lambda function' }
const RevisionId = { ...str, comment: 'Update the function config only if the current revision ID matches the specified `RevisionId`; used to avoid modifying a function that has changed since you last read it' }
const Role = { ...str, comment: `ARN of the function's execution role` }
const RoutingConfig = { ...obj, comment: 'Configure function version weights', ref: docRoot + 'configuration-aliases.html#configuring-alias-routing' }
const Runtime = { ...str, comment: 'Runtime identifier', ref: docRoot + 'lambda-runtimes.html' }
const ScalingConfig = { ...obj, comment: 'Configure scaling for the event source; Amazon SQS only' }
const SelfManagedEventSource = { ...obj, comment: 'A self managed `Apache Kafka` cluster to receive records from' }
const SelfManagedKafkaEventSourceConfig = { ...obj, comment: 'Configure a self managed `Apache Kafka` event source' }
const SnapStart = { ...obj, comment: 'SnapStart settings', ref: docRoot + 'API_SnapStart.html' }
const SourceAccessConfigurations = { ...arr, comment: 'Array of at most 22 `SourceAccessConfiguration` objects to specifying authentication protocols or VPC components required to secure the event source' }
const StartingPosition = { ...str, comment: 'Position in a stream to begin reading, valid entries are `TRIM_HORIZON` (all available messages), `LATEST` (from now or after) or `AT_TIMESTAMP` (specify timestamp)' }
const StartingPositionTimestamp = { ...obj, comment: 'The `timestamp` in `Unix time seconds` used when `StartingPosition` is set to `AT_TIMESTAMP`; cannot be in the future' }
const Timeout = { ...num, comment: 'Time (in seconds) a function is allowed to run before being stopped, from 3 (default) to 900' }
const Topics = { ...arr, comment: 'Array of exactly 1 string specifying the name of the `Kafka` topic' }
const TracingConfig = { ...obj, comment: 'Sample and trace a subset of incoming requests with X-Ray', ref: docRoot + 'API_TracingConfig.html' }
const TumblingWindowInSeconds = { ...num, comment: 'Time (in seconds) from 0 to 900 specifying the duration of a processing window for `DynamoDB` and `Kinesis` event stream sources' }
const valPaginate = { type: 'boolean', comment: 'Enable automatic result pagination; use this instead of making your own individual pagination requests' }
const VersionNumber = { ...num, required, comment: 'The version number of the layer' }
const VpcConfig = { ...obj, comment: 'VPC networking configuration', ref: docRoot + 'API_VpcConfig.html' }

const defaultResponse = ({ payload }) => payload || {}
const emptyResponse = () => ({ })
const paginator = {
  type: 'query',
  token: 'NextMarker',
  cursor: 'Marker',
}

const AddLayerVersionPermission = {
  awsDoc: docRoot + 'API_AddLayerVersionPermission.html',
  validate: {
    LayerName,
    RevisionId,
    VersionNumber,
    Action: { ...str, required, comment: 'The API action that grants access to the layer, for example `lambda:GetLayerVersion`' },
    OrganizationId: { ...str, comment: 'When `Principal` is set to `*`, permission will be granted to all accounts in the specified organization' },
    Principal: { ...str, comment: 'Account ID being granted permissions. Use `*` along with the `OrganizationId` to grant permissions to all accounts in the specified organization' },
    StatementId: { ...str, required, comment: 'ID to distinguish the policy from other policies on the same layer version' },
  },
  request: async (params) => {
    const { LayerName, RevisionId, VersionNumber } = params
    let payload = { ...params }
    let query
    delete payload.LayerName
    delete payload.VersionNumber

    if (RevisionId) {
      query = { RevisionId }
      delete params.RevisionId
    }

    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}/policy`,
      query,
      payload,
    }
  },
}

const AddPermission = {
  awsDoc: docRoot + 'API_AddPermission.html',
  validate: {
    FunctionName,
    Qualifier,
    Action: { ...str, required, comment: 'Action that the principal can use on the function; for example, `lambda:InvokeFunction`' },
    EventSourceToken: { ...str, comment: 'A token that Alexa Smart Home requires from the invoker' },
    FunctionUrlAuthType: { ...str, comment: 'The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint' },
    Principal: { ...str, required, comment: 'The AWS service or AWS account that invokes the function' },
    PrincipalOrgID: { ...str, comment: 'The identifier for your organization in AWS Organizations' },
    RevisionId,
    SourceAccount: { ...str, comment: 'ID of the AWS account that owns the resource' },
    SourceArn: { ...str, comment: 'ARN of the AWS resource that invokes the function, such as an Amazon S3 bucket' },
    StatementId: { ...str, required, comment: 'A statement identifier that differentiates the statement from others in the same policy' },
  },
  request: async (params) => {
    const { FunctionName, Qualifier } = params
    let payload = { ...params }
    let query
    delete payload.FunctionName
    delete payload.Qualifier

    if (Qualifier) {
      query = { Qualifier }
      delete payload.Qualifier
    }

    return {
      path: `/2015-03-31/functions/${FunctionName}/policy`,
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const CreateAlias = {
  awsDoc: docRoot + 'API_CreateAlias.html',
  validate: {
    FunctionName,
    Description,
    FunctionVersion: { ...FunctionVersion, required },
    Name: { ...str, required, comment: 'Name of the alias' }, //
    RoutingConfig,
  },
  request: async (params) => {
    const { FunctionName } = params
    let payload = { ...params }
    delete payload.FunctionName

    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases`,
      payload,
    }
  },
  response: defaultResponse,
}

const CreateCodeSigningConfig = {
  awsDoc: docRoot + 'API_CreateCodeSigningConfig.html',
  validate: {
    AllowedPublishers: { ...obj, required, comment: 'Signing profiles for this code signing configuration', ref: 'https://docs.aws.amazon.com/lambda/latest/api/API_AllowedPublishers.html' },
    CodeSigningPolicies: { ...CodeSigningPolicies, ref: 'https://docs.aws.amazon.com/lambda/latest/api/API_CodeSigningPolicies.html' },
    Description,
  },
  request: async (payload) => {
    return {
      path: '/2020-04-22/code-signing-configs/',
      payload,
    }
  },
  response: defaultResponse,
}

const CreateEventSourceMapping = {
  awsDoc: docRoot + 'API_CreateEventSourceMapping.html',
  validate: {
    FunctionName,
    AmazonManagedKafkaEventSourceConfig: { ...AmazonManagedKafkaEventSourceConfig, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-AmazonManagedKafkaEventSourceConfig' },
    BatchSize: { ...BatchSize, ref:  docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-BatchSize' },
    BisectBatchOnFunctionError,
    DestinationConfig: { ...DestinationConfig, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DestinationConfig' },
    DocumentDBEventSourceConfig: { ...DocumentDBEventSourceConfig, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-DocumentDBEventSourceConfig' },
    Enabled,
    EventSourceArn,
    FilterCriteria: { ...FilterCriteria, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FilterCriteria' },
    FunctionResponseTypes: { ...FunctionResponseTypes, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-FunctionResponseTypes' },
    MaximumBatchingWindowInSeconds: { ...MaximumBatchingWindowInSeconds, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-MaximumBatchingWindowInSeconds' },
    MaximumRecordAgeInSeconds: { ...MaximumRecordAgeInSeconds },
    MaximumRetryAttempts,
    ParallelizationFactor,
    Queues,
    ScalingConfig: { ...ScalingConfig, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-ScalingConfig' },
    SelfManagedEventSource: { ...SelfManagedEventSource, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource' },
    SelfManagedKafkaEventSourceConfig: { ...SelfManagedKafkaEventSourceConfig, ref: docRoot + 'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-SelfManagedEventSource' },
    SourceAccessConfigurations,
    StartingPosition: { ...StartingPosition, ref: docRoot +  'API_CreateEventSourceMapping.html#lambda-CreateEventSourceMapping-request-StartingPosition' },
    StartingPositionTimestamp,
    Topics,
    TumblingWindowInSeconds,
  },
  request: (params) => {
    return {
      path: '/2015-03-31/event-source-mappings/',
      payload: params,
    }
  },
  response: defaultResponse,
}

const CreateFunction = {
  awsDoc: docRoot + 'API_CreateFunction.html',
  validate: {
    Code: { ...obj, required, comment: 'Code payload to be run in Lambda; object can contain: `ImageUri` (ECR image), `S3Bucket` + `S3Key` + `S3ObjectVersion` (S3 bucket in the same region, key, and optional version), or `ZipFile` (base64-encoded zip)', ref: docRoot + 'API_FunctionCode.html' },
    FunctionName,
    Role: { ...Role, required },
    Architectures,
    CodeSigningConfigArn: { ...str, comment: 'ARN of a code-signing configuration used to enable code signing for this function' },
    DeadLetterConfig,
    Description,
    Environment,
    EphemeralStorage,
    FileSystemConfigs,
    Handler,
    ImageConfig,
    KMSKeyArn,
    Layers,
    MemorySize,
    PackageType: { ...str, comment: 'Deployment package type, either `Image` (container image) or `Zip` (zip archive)' },
    Publish: { ...bool, comment: 'Set to `true` to publish the first version of the function during creation' },
    Runtime,
    SnapStart,
    Tags: { ...arr, comment: 'List of tags to apply to the function' },
    Timeout,
    TracingConfig,
    VpcConfig,

  },
  request: async (payload) => {
    return {
      path: '/2015-03-31/functions',
      payload,
    }
  },
  response: defaultResponse,
}

const CreateFunctionUrlConfig = {
  awsDoc: docRoot + 'API_CreateFunctionUrlConfig.html',
  validate: {
    AuthType,
    FunctionName,
    Cors: { ...Cors, ref: docRoot +  'API_CreateFunctionUrlConfig.html#lambda-CreateFunctionUrlConfig-request-Cors' },
    InvokeMode: { ...InvokeMode, ref: docRoot + 'API_CreateFunctionUrlConfig.html#lambda-CreateFunctionUrlConfig-request-InvokeMode' },
    Qualifier,
  },
  request: (params) => {
    const { FunctionName, Qualifier } = params
    let payload = { ...params }
    let query
    delete payload.FunctionName
    if (Qualifier) {
      query = { Qualifier }
      delete payload.Qualifier
    }
    return {
      path: `/2021-10-31/functions/${FunctionName}/url`,
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const DeleteAlias = {
  awsDoc: docRoot + 'API_DeleteAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the alias' },
  },
  request: ({ FunctionName, Name }) => {
    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteCodeSigningConfig = {
  awsDoc: docRoot + 'API_DeleteCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn,
  },
  request: ({ CodeSigningConfigArn }) => {
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteEventSourceMapping = {
  awsDoc: docRoot + 'API_DeleteEventSourceMapping.html',
  validate: {
    UUID: { ...str, required, comment: 'UUID of the event source mapping' },
  },
  request: ({ UUID }) => {
    return {
      path: `/2015-03-31/event-source-mappings/${UUID}`,
      method: 'DELETE',
    }
  },
  response: defaultResponse,
}

const DeleteFunction = {
  awsDoc: docRoot + 'API_DeleteFunction.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}`,
      query,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteFunctionCodeSigningConfig = {
  awsDoc: docRoot + 'API_DeleteFunctionCodeSigningConfig.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2020-06-30/functions/${FunctionName}/code-signing-config`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteFunctionConcurrency = {
  awsDoc: docRoot + 'API_DeleteFunctionConcurrency.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2017-10-31/functions/${FunctionName}/concurrency`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteFunctionEventInvokeConfig = {
  awsDoc: docRoot + 'API_DeleteFunctionEventInvokeConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config`,
      query,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteFunctionUrlConfig = {
  awsDoc: docRoot + 'API_DeleteFunctionUrlConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2021-10-31/functions/${FunctionName}/url`,
      query,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteLayerVersion = {
  awsDoc: docRoot + 'API_DeleteLayerVersion.html',
  validate: {
    LayerName,
    VersionNumber,
  },
  request: ({ LayerName, VersionNumber }) => {
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}`,
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const DeleteProvisionedConcurrencyConfig = {
  awsDoc: docRoot + 'API_DeleteProvisionedConcurrencyConfig.html',
  validate: {
    FunctionName,
    Qualifier: { ...Qualifier, required },
  },
  request: ({ FunctionName, Qualifier }) => {
    return {
      path: `/2019-09-30/functions/${FunctionName}/provisioned-concurrency`,
      query: { Qualifier },
      method: 'DELETE',
    }
  },
  response: emptyResponse,
}

const GetAccountSettings = {
  awsDoc: docRoot + 'API_GetAccountSettings.html',
  validate: {},
  request: () => {
    return {
      path: '/2016-08-19/account-settings/',
    }
  },
  response: defaultResponse,
}

const GetAlias = {
  awsDoc: docRoot + 'API_GetAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the function alias' },
  },
  request: ({ FunctionName, Name }) => {
    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
    }
  },
  response: defaultResponse,
}

const GetCodeSigningConfig = {
  awsDoc: docRoot + 'API_GetCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn,
  },
  request: ({ CodeSigningConfigArn }) => {
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}`,
    }
  },
  response: defaultResponse,
}

const GetEventSourceMapping = {
  awsDoc: docRoot + 'API_GetEventSourceMapping.html',
  validate: {
    UUID: { ...str, required, comment: 'ARN of the event source mapping' },
  },
  request: ({ UUID }) => {
    return {
      path: `/2015-03-31/event-source-mappings/${UUID}`,
    }
  },
  response: defaultResponse,
}

const GetFunction = {
  awsDoc: docRoot + 'API_GetFunction.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionConcurrency = {
  awsDoc: docRoot + 'API_GetFunctionConcurrency.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2019-09-30/functions/${FunctionName}/concurrency`,
    }
  },
  response: defaultResponse,
}

const GetFunctionEventInvokeConfig = {
  awsDoc: docRoot + 'API_GetFunctionEventInvokeConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionCodeSigningConfig = {
  awsDoc: docRoot + 'API_GetFunctionCodeSigningConfig.html',
  validate: {
    FunctionName,
  },
  request: ({ FunctionName }) => {
    return {
      path: `/2020-06-30/functions/${FunctionName}/code-signing-config`,
    }
  },
  response: defaultResponse,
}

const GetFunctionConfiguration = {
  awsDoc: docRoot + 'API_GetFunctionConfiguration.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}/configuration`,
      query,
    }
  },
  response: defaultResponse,
}

const GetFunctionUrlConfig = {
  awsDoc: docRoot + 'API_GetFunctionUrlConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2021-10-31/functions/${FunctionName}/url`,
      query,
    }
  },
  response: defaultResponse,
}

const GetLayerVersion = {
  awsDoc: docRoot + 'API_GetLayerVersion.html',
  validate: {
    LayerName,
    VersionNumber,
  },
  request: ({ LayerName, VersionNumber }) => {
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}`,
    }
  },
  response: defaultResponse,
}

const GetLayerVersionByArn = {
  awsDoc: docRoot + 'API_GetLayerVersionByArn.html',
  validate: {
    Arn: { ...str, required, comment: 'The ARN of the layer version' },
  },
  request: ({ Arn }) => {
    let query = {
      find: 'LayerVersion',
      Arn,
    }
    return {
      path: `/2018-10-31/layers`,
      query,
    }
  },
  response: defaultResponse,
}

const GetLayerVersionPolicy = {
  awsDoc: docRoot + 'API_GetLayerVersionPolicy.html',
  validate: {
    LayerName,
    VersionNumber,
  },
  request: ({ LayerName, VersionNumber }) => {
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}/policy`,
    }
  },
  response: defaultResponse,
}

const GetPolicy = {
  awsDoc: docRoot + 'API_GetPolicy.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2015-03-31/functions/${FunctionName}/policy`,
      query,
    }
  },
  response: defaultResponse,
}

const GetProvisionedConcurrencyConfig = {
  awsDoc: docRoot + 'API_GetProvisionedConcurrencyConfig.html',
  validate: {
    FunctionName,
    Qualifier: { ...str, required, comment: 'The version number or alias name' },
  },
  request: ({ FunctionName, Qualifier }) => {
    let query = { Qualifier }
    return {
      path: `/2019-09-30/functions/${FunctionName}/provisioned-concurrency`,
      query,
    }
  },
  response: defaultResponse,
}

const GetRuntimeManagementConfig = {
  awsDoc: docRoot + 'API_GetRuntimeManagementConfig.html',
  validate: {
    FunctionName,
    Qualifier,
  },
  request: ({ FunctionName, Qualifier }) => {
    let query
    if (Qualifier) query = { Qualifier }
    return {
      path: `/2021-07-20/functions/${FunctionName}/runtime-management-config`,
      query,
    }
  },
  response: defaultResponse,
}

const Invoke = {
  awsDoc: docRoot + 'API_Invoke.html',
  validate: {
    FunctionName,
    InvocationType: { ...str, comment: 'Set invocation type to one of: `RequestResponse` (default, synchronous), `Event` (asynchronous), `DryRun` (validate invoke request only)' },
    Payload: { type: [ 'array', 'object' ], required, comment: 'Event payload to invoke function with' },
    LogType: { ...str, comment: 'Set to `Tail` to include the execution log in the `X-Amz-Log-Result` response header of synchronously invoked functions' },
    ClientContext: { ...str, comment: 'Up to 3,583 bytes of base64-encoded data to pass to the function in the context object' },
    Qualifier,
  },
  request: async function (params) {
    const { FunctionName, InvocationType, Payload: payload, LogType, ClientContext, Qualifier } = params

    const headers = {}
    if (InvocationType) headers['X-Amz-Invocation-Type'] = InvocationType
    if (LogType) headers['X-Amz-Log-Type'] = LogType
    if (ClientContext) headers['X-Amz-Client-Context'] = ClientContext

    let query
    if (Qualifier) query = { Qualifier }

    return {
      path: `/2015-03-31/functions/${FunctionName}/invocations`,
      headers,
      query,
      payload,
    }
  },
  response: async ({ headers, payload: Payload, statusCode: StatusCode }) => {
    const result = { Payload, StatusCode }
    const log = headers['x-amz-log-result'] || headers['X-Amz-Log-Result']
    const FunctionError = headers['x-amz-function-error'] || headers['X-Amz-Function-Error']
    const ExecutedVersion = headers['x-amz-executed-version'] || headers['x-amz-function-error']
    if (log) result.LogResult = Buffer.from(log, 'base64').toString()
    if (FunctionError) result.FunctionError = FunctionError
    if (ExecutedVersion) result.ExecutedVersion = ExecutedVersion
    return result
  },
}

const InvokeAsync = {
  awsDoc: docRoot + 'API_InvokeAsync.html',
  deprecated: true,
  validate: {
    FunctionName,
    InvokeArgs: { ...obj, required, comment: 'Function arguments', ref: docRoot + 'API_InvokeAsync.html#API_InvokeAsync_RequestSyntax' },
  },
  request: ({ FunctionName, InvokeArgs }) => {
    return {
      path: `/2014-11-13/functions/${FunctionName}/invoke-async/`,
      payload: InvokeArgs,
    }
  },
  response: ({ statusCode }) => ({ Status: statusCode }),
}

const ListAliases = {
  awsDoc: docRoot + 'API_ListAliases.html',
  validate: {
    FunctionName,
    FunctionVersion,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    let { FunctionName } = params
    let query = { ...params }
    delete query.FunctionName
    let paginate
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases`,
      paginate,
      paginator: { ...paginator, accumulator: 'Aliases' },
      query,
    }
  },
  response: defaultResponse,
}

const ListCodeSigningConfigs = {
  awsDoc: docRoot + 'API_ListCodeSigningConfigs.html',
  validate: {
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }

    return {
      path: '/2020-04-22/code-signing-configs/',
      query: params,
      paginate,
      paginator: { ...paginator, accumulator: 'CodeSigningConfigs' },
    }
  },
  response: defaultResponse,
}

const ListEventSourceMappings = {
  awsDoc: docRoot + 'API_ListEventSourceMappings.html',
  validate: {
    EventSourceArn: { ...str, comment: 'ARN of the event source' },
    FunctionName: { ...FunctionName, required: false },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (query) => {
    let paginate
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: '/2015-03-31/event-source-mappings/',
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'EventSourceMappings' },
    }
  },
  response: defaultResponse,
}

const ListFunctionEventInvokeConfigs = {
  awsDoc: docRoot + 'API_ListFunctionEventInvokeConfigs.html',
  validate: {
    FunctionName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (query) => {
    const { FunctionName } = query
    let paginate
    delete query.FuncionName
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config/list`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'FunctionEventInvokeConfigs' },
    }
  },
  response: defaultResponse,
}

const ListFunctions = {
  awsDoc: docRoot + 'API_ListFunctions.html',
  validate: {
    FunctionVersion: { ...str, comment: 'Set to `ALL` to include entries for all published versions' },
    Marker,
    MasterRegion: { ...str, comment: 'Display `LambdaEdge` functions replicated from a master function in a specified region', ref: docRoot + 'API_ListFunctions.html#API_ListFunctions_RequestSyntax' },
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      path: '/2015-03-31/functions/',
      query: params,
      paginate,
      paginator: { ...paginator, accumulator: 'Functions' },
    }
  },
}

const ListFunctionsByCodeSigningConfig = {
  awsDoc: docRoot + 'API_ListFunctionsByCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { CodeSigningConfigArn } = params
    let query = { ...params }
    let paginate
    delete query.CodeSigningConfigArn
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}/functions`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'FunctionArns' },
    }
  },
  response: defaultResponse,
}

const ListFunctionUrlConfigs = {
  awsDoc: docRoot + 'API_ListFunctionUrlConfigs.html',
  validate: {
    FunctionName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { FunctionName, paginate } = params
    let query = { ...params }
    delete query.FunctionName
    if (paginate) delete query.paginate
    return {
      path: `/2021-10-31/functions/${FunctionName}/urls`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'FunctionUrlConfigs' },
    }
  },
  response: defaultResponse,
}

const ListLayers = {
  awsDoc: docRoot + 'API_ListLayers.html',
  validate: {
    CompatibleArchitecture,
    CompatibleRuntime: { ...CompatibleRuntime, ref: docRoot + 'API_ListLayers.html#API_ListLayers_RequestSyntax' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    let paginate
    if (params.paginate) {
      delete params.paginate
      paginate = true
    }
    return {
      path: '/2018-10-31/layers',
      query: params,
      paginate,
      paginator: { ...paginator, accumulator: 'Layers' },
    }
  },
  response: defaultResponse,
}

const ListLayerVersions = {
  awsDoc: docRoot + 'API_ListLayerVersions.html',
  validate: {
    LayerName,
    CompatibleArchitecture,
    CompatibleRuntime: { ...CompatibleRuntime, ref: docRoot + 'API_ListLayerVersions.html#API_ListLayerVersions_RequestSyntax' },
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { LayerName } = params
    let query = { ...params }
    let paginate
    delete query.LayerName
    if (query.paginate) {
      paginate = true
      delete query.paginate
    }
    return {
      path: `/2018-10-31/layers/${LayerName}/versions`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'LayerVersions' },
    }
  },
  response: defaultResponse,
}

const ListProvisionedConcurrencyConfigs = {
  awsDoc: docRoot + 'API_ListProvisionedConcurrencyConfigs.html',
  validate: {
    FunctionName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { FunctionName } = params
    let query = { ...params }
    let paginate
    query.List = 'ALL'
    delete query.FunctionName
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: `/2019-09-30/functions/${FunctionName}/provisioned-concurrency`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'ProvisionedConcurrencyConfigs' },
    }
  },
  response: defaultResponse,
}

const ListTags = {
  awsDoc: docRoot + 'API_ListTags.html',
  validate: {
    Resource,
  },
  request: ({ Resource: ARN }) => {
    return {
      path: `/2017-03-31/tags/${ARN}`,
    }
  },
  response: defaultResponse,
}

const ListVersionsByFunction = {
  awsDoc: docRoot + 'API_ListVersionsByFunction.html',
  validate: {
    FunctionName,
    Marker,
    MaxItems,
    paginate: valPaginate,
  },
  request: (params) => {
    const { FunctionName } = params
    let query = { ...params }
    let paginate
    delete query.FunctionName
    if (query.paginate) {
      delete query.paginate
      paginate = true
    }
    return {
      path: `/2015-03-31/functions/${FunctionName}/versions`,
      query,
      paginate,
      paginator: { ...paginator, accumulator: 'Versions' },
    }
  },
  response: defaultResponse,
}

const PublishLayerVersion = {
  awsDoc: docRoot + 'API_PublishLayerVersion.html',
  validate: {
    Content: { ...obj, required, comment: 'Contents of the layer; object can contain: `S3Bucket`, `S3Key`, `S3ObjectVersion`, or `ZipFile` (base64-encoded zip)', ref: docRoot + 'API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-Content' },
    CompatibleArchitectures: { ...arr, comment: 'Array with a maximum of 2 strings specifying instruction set architecture; array can contain: `x86_64`, `arm64`', ref: docRoot + 'API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-CompatibleArchitectures' },
    CompatibleRuntimes: { ...arr, comment: 'Array with a maximum of 15 strings specifying compatible runtime environments', ref: docRoot + 'API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-CompatibleRuntimes'  },
    Description,
    LiscenceInfo: { ...str, comment: `The layer's software license`, ref: docRoot + 'API_PublishLayerVersion.html#lambda-PublishLayerVersion-request-LicenseInfo' },
  },
  request: (params) => {
    const { LayerName } = params
    let payload = { ...params }
    delete payload.LayerName
    return {
      path: `/2018-10-31/layers/${LayerName}/versions`,
      payload,
    }
  },
  response: defaultResponse,
}

const PublishVersion = {
  awsDoc: docRoot + 'API_PublishVersion.html',
  validate: {
    FunctionName,
    CodeSha256: { ...str, comment: 'Checksum to confirm the function has not changed since being updated', ref: docRoot + 'API_PublishVersion.html#lambda-PublishVersion-request-CodeSha256' },
    Description,
    RevisionId,
  },
  request: (params) => {
    const { FunctionName } = params
    let payload = { ...params }
    delete payload.FunctionName
    return {
      path: `/2015-03-31/functions/${FunctionName}/versions`,
      payload,
    }
  },
  response: defaultResponse,
}

const PutFunctionCodeSigningConfig = {
  awsDoc: docRoot + 'API_PutFunctionCodeSigningConfig.html',
  validate: {
    FunctionName,
    CodeSigningConfigArn,
  },
  request: ({ FunctionName, CodeSigningConfigArn }) => {
    return {
      path: `/2020-06-30/functions/${FunctionName}/code-signing-config`,
      method: 'PUT',
      payload: { CodeSigningConfigArn },
    }
  },
  response: defaultResponse,
}

const PutFunctionConcurrency = {
  awsDoc: docRoot + 'API_PutFunctionConcurrency.html',
  validate: {
    FunctionName,
    ReservedConcurrentExecutions: { ...num, required, comment: 'number of simultaneous executions to reserve' },
  },
  request: (params) => {
    const { FunctionName, ReservedConcurrentExecutions } = params
    return {
      path: `/2017-10-31/functions/${FunctionName}/concurrency`,
      method: 'PUT',
      payload: { ReservedConcurrentExecutions },
    }
  },
  response: defaultResponse,
}

const PutFunctionEventInvokeConfig = {
  awsDoc: docRoot + 'API_PutFunctionEventInvokeConfig.html',
  validate: {
    FunctionName,
    DestinationConfig: { ...DestinationConfig, ref: docRoot + 'API_PutFunctionEventInvokeConfig.html#lambda-PutFunctionEventInvokeConfig-request-DestinationConfig' },
    MaximumEventAgeInSeconds,
    MaximumRetryAttempts: { ...num, comment: 'Set a maximum number of retries between 0 and 2 (inclusive) when the function returns an error' },
    Qualifier,
  },
  request: (params) => {
    const { FunctionName, Qualifier } = params
    let query
    let payload = { ...params }
    delete payload.FunctionName
    if (Qualifier) {
      query = { Qualifier }
      delete payload.Qualifier
    }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config`,
      method: 'PUT',
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const PutProvisionedConcurrencyConfig = {
  awsDoc: docRoot + 'API_PutProvisionedConcurrencyConfig.html',
  validate: {
    FunctionName,
    ProvisionedConcurrentExecutions: { ...num, required, comment: 'Amount of provisioned concurrency of at least 1, to allocate for the version or alias' },
    Qualifier: { ...Qualifier, required },
  },
  request: (params) => {
    const { FunctionName, Qualifier, ProvisionedConcurrentExecutions } = params
    return {
      path: `/2019-09-30/functions/${FunctionName}/provisioned-concurrency`,
      method: 'PUT',
      query: { Qualifier },
      payload: { ProvisionedConcurrentExecutions },
    }
  },
  response: defaultResponse,
}

const PutRuntimeManagementConfig = {
  awsDoc: docRoot + 'API_PutRuntimeManagementConfig.html',
  validate: {
    FunctionName,
    UpdateRuntimeOn: { ...str, required, comment: 'Specify the runtime update mode; can be one of: `Auto` (default), `FunctionUpdate`, `Manual`', ref: docRoot + 'API_PutRuntimeManagementConfig.html#lambda-PutRuntimeManagementConfig-request-UpdateRuntimeOn' },
    Qualifier: { ...str, comment: 'Specify a version of the function', ref: docRoot + 'API_PutRuntimeManagementConfig.html#API_PutRuntimeManagementConfig_RequestSyntax#Qualifier' },
    RuntimeVersionArn: { ...str, comment: 'ARN of the runtime version the function will use' },
  },
  request: (params) => {
    const { FunctionName, Qualifier } = params
    let query
    let payload = { ...params }
    delete payload.FunctionName
    if (Qualifier) {
      query = { Qualifier }
      delete payload.Qualifier
    }
    return {
      path: `/2021-07-20/functions/${FunctionName}/runtime-management-config`,
      method: 'PUT',
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const RemoveLayerVersionPermission = {
  awsDoc: docRoot + 'API_RemoveLayerVersionPermission.html',
  validate: {
    LayerName,
    StatementId: { ...str, required, comment: 'Identifier specified when the statement was added' },
    VersionNumber,
    RevisionId,
  },
  request: (params) => {
    const { LayerName, StatementId, VersionNumber, RevisionId } = params
    let query
    if (RevisionId) {
      query = { RevisionId }
    }
    return {
      path: `/2018-10-31/layers/${LayerName}/versions/${VersionNumber}/policy/${StatementId}`,
      method: 'DELETE',
      query,
    }
  },
  response: emptyResponse,
}

const RemovePermission = {
  awsDoc: docRoot + 'API_RemovePermission.html',
  validate: {
    FunctionName,
    StatementId: { ...str, required, comment: 'Statement ID of the permission to remove' },
    RevisionId,
    Qualifier,
  },
  request: (params) => {
    const { FunctionName, StatementId } = params
    let query = { ...params }
    delete query.FunctionName
    delete query.StatementId
    return {
      path: `/2015-03-31/functions/${FunctionName}/policy/${StatementId}`,
      method: 'DELETE',
      query,
    }
  },
  response: emptyResponse,
}

const TagResource = {
  awsDoc: docRoot + 'API_TagResource.html',
  validate: {
    Resource,
    Tags: { ...obj, required, comment: 'Record of tags to be applied to the function', ref: docRoot + 'API_TagResource.html#lambda-TagResource-request-Tags' },
  },
  request: ({ Resource, Tags }) => {
    return {
      path: `/2017-03-31/tags/${Resource}`,
      payload: { Tags },
    }
  },
  response: emptyResponse,
}

const UntagResource = {
  awsDoc: docRoot + 'API_UntagResource.html',
  validate: {
    Resource,
    TagKeys: { ...arr, required, comment: 'Array of tag keys (strings) to removed from the function' },
  },
  request: ({ Resource, TagKeys }) => {
    return {
      path: `/2017-03-31/tags/${Resource}`,
      method: 'DELETE',
      query: { tagKeys: TagKeys },
    }
  },
  response: emptyResponse,
}

const UpdateAlias = {
  awsDoc: docRoot + 'API_UpdateAlias.html',
  validate: {
    FunctionName,
    Name: { ...str, required, comment: 'Name of the alias' },
    Description,
    FunctionVersion,
    RevisionId,
    RoutingConfig,
  },
  request: async (params) => {
    const { FunctionName, Name } = params
    let payload = { ...params }
    delete payload.FunctionName
    delete payload.Name

    return {
      path: `/2015-03-31/functions/${FunctionName}/aliases/${Name}`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateCodeSigningConfig = {
  awsDoc: docRoot + 'API_UpdateCodeSigningConfig.html',
  validate: {
    CodeSigningConfigArn,
    AllowedPublishers: { ...obj, comment: 'Signing profiles for this code signing configuration', ref: docRoot + 'API_UpdateCodeSigningConfig.html#lambda-UpdateCodeSigningConfig-request-AllowedPublishers' },
    CodeSigningPolicies: { ...CodeSigningPolicies, ref: docRoot + 'API_UpdateCodeSigningConfig.html#lambda-UpdateCodeSigningConfig-request-CodeSigningPolicies' },
    Description,
  },
  request: (params) => {
    const { CodeSigningConfigArn } = params
    let payload = { ...params }
    delete payload.CodeSigningConfigArn
    return {
      path: `/2020-04-22/code-signing-configs/${CodeSigningConfigArn}`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateEventSourceMapping = {
  awsDoc: docRoot + 'API_UpdateEventSourceMapping.html',
  validate: {
    UUID: { ...str, required, comment: 'UUID of the event source mapping' },
    AmazonManagedKafkaEventSourceConfig: { ...AmazonManagedKafkaEventSourceConfig, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-BatchSize' },
    BatchSize: { ...BatchSize, ref:  docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-BatchSize' },
    BisectBatchOnFunctionError,
    DestinationConfig: { ...DestinationConfig, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-DestinationConfig' },
    DocumentDBEventSourceConfig: { ...DocumentDBEventSourceConfig, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-DocumentDBEventSourceConfig' },
    Enabled,
    FilterCriteria: { ...FilterCriteria, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-FilterCriteria' },
    FunctionName: { ...FunctionName, required: false },
    FunctionResponseTypes: { ...FunctionResponseTypes, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-FunctionResponseTypes' },
    MaximumBatchingWindowInSeconds: { ...MaximumBatchingWindowInSeconds, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-MaximumBatchingWindowInSeconds' },
    MaximumRecordAgeInSeconds: { ...MaximumRecordAgeInSeconds },
    MaximumRetryAttempts,
    ParallelizationFactor,
    Queues,
    ScalingConfig: { ...ScalingConfig, ref: docRoot + 'API_UpdateEventSourceMapping.html#lambda-UpdateEventSourceMapping-request-ScalingConfig' },
    SourceAccessConfigurations,
    TumblingWindowInSeconds,
  },
  request: (params) => {
    const { UUID } = params
    let payload = { ...params }
    delete payload.UUID
    return {
      path: `/2015-03-31/event-source-mappings/${UUID}`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionCode = {
  awsDoc: docRoot + 'API_UpdateFunctionCode.html',
  validate: {
    FunctionName,
    Architectures,
    DryRun: { ...str, comment: 'Validate the request parameters and access permissions without modifying the function code (`true`)' },
    ImageUri: { ...str, comment: 'URI of a container image in the Amazon ECR registry (if not using a .zip file)' },
    Publish: { ...bool, comment: 'Publish a new version after after updating the code (`true`); effectively the same as calling `PublishVersion`' },
    RevisionId,
    S3Bucket: { ...str, comment: 'S3 bucket containing the key of the deployment package; must be in the same region' },
    S3Key: { ...str, comment: 'S3 key of the deployment package (must be a .zip file)' },
    S3ObjectVersion: { ...str, comment: 'S3 object version to use, if applicable' },
    ZipFile: { type: [ 'string', 'buffer' ], comment: 'File path or raw buffer of the .zip deployment package' },
  },
  request: async (params) => {
    let { FunctionName, ZipFile } = params
    if (typeof ZipFile === 'string') {
      const { readFile } = await import('node:fs/promises')
      ZipFile = await readFile(ZipFile)
    }
    if (ZipFile instanceof Buffer) {
      params.ZipFile = Buffer.from(ZipFile).toString('base64')
    }
    let payload = { ...params }
    delete payload.FunctionName

    return {
      path: `/2015-03-31/functions/${FunctionName}/code`,
      method: 'PUT',
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionConfiguration = {
  awsDoc: docRoot + 'API_UpdateFunctionConfiguration.html',
  validate: {
    FunctionName,
    DeadLetterConfig,
    Description,
    Environment,
    EphemeralStorage,
    FileSystemConfigs,
    Handler,
    ImageConfig,
    KMSKeyArn,
    Layers,
    MemorySize,
    RevisionId,
    Role,
    Runtime,
    SnapStart,
    Timeout,
    TracingConfig,
    VpcConfig,
  },
  request: async function (params) {
    const { FunctionName } = params
    return {
      path: `/2015-03-31/functions/${FunctionName}/configuration`,
      method: 'PUT',
      payload: params,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionEventInvokeConfig = {
  awsDoc: docRoot + 'API_UpdateFunctionEventInvokeConfig.html',
  validate: {
    FunctionName,
    DestinationConfig: { ...DestinationConfig, ref: docRoot + 'API_UpdateFunctionEventInvokeConfig.html#lambda-UpdateFunctionEventInvokeConfig-request-DestinationConfig' },
    MaximumEventAgeInSeconds,
    MaximumRetryAttempts,
  },
  request: (params) => {
    const { FunctionName, Qualifier } = params
    let query
    let payload = { ...params }
    delete payload.FunctionName
    if (Qualifier) {
      delete payload.Qualifier
      query = { Qualifier }
    }
    return {
      path: `/2019-09-25/functions/${FunctionName}/event-invoke-config`,
      query,
      payload,
    }
  },
  response: defaultResponse,
}

const UpdateFunctionUrlConfig = {
  awsDoc: docRoot + 'API_UpdateFunctionUrlConfig.html',
  validate: {
    FunctionName,
    AuthType: { ...AuthType, required: false },
    Cors: { ...Cors, ref: docRoot + 'API_UpdateFunctionUrlConfig.html#lambda-UpdateFunctionUrlConfig-request-Cors' },
    InvokeMode: { ...InvokeMode, ref: docRoot + 'API_UpdateFunctionUrlConfig.html#lambda-UpdateFunctionUrlConfig-request-InvokeMode' },
    Qualifier,
  },
  request: (params) => {
    const { FunctionName, Qualifier } = params
    let query
    let payload = { ...params }
    delete payload.FunctionName
    if (Qualifier) {
      delete payload.Qualifier
      query = { Qualifier }
    }
    return {
      path: `/2021-10-31/functions/${FunctionName}/url`,
      method: 'PUT',
      query,
      payload,
    }
  },
  response: defaultResponse,
}

export default {
  name: '@aws-lite/lambda',
  service,
  property,
  methods: {
    AddLayerVersionPermission,
    AddPermission,
    CreateAlias,
    CreateCodeSigningConfig,
    CreateEventSourceMapping,
    CreateFunction,
    CreateFunctionUrlConfig,
    DeleteAlias,
    DeleteCodeSigningConfig,
    DeleteEventSourceMapping,
    DeleteFunction,
    DeleteFunctionCodeSigningConfig,
    DeleteFunctionConcurrency,
    DeleteFunctionEventInvokeConfig,
    DeleteFunctionUrlConfig,
    DeleteLayerVersion,
    DeleteProvisionedConcurrencyConfig,
    GetAccountSettings,
    GetAlias,
    GetCodeSigningConfig,
    GetEventSourceMapping,
    GetFunction,
    GetFunctionCodeSigningConfig,
    GetFunctionConcurrency,
    GetFunctionConfiguration,
    GetFunctionEventInvokeConfig,
    GetFunctionUrlConfig,
    GetLayerVersion,
    GetLayerVersionByArn,
    GetLayerVersionPolicy,
    GetPolicy,
    GetProvisionedConcurrencyConfig,
    GetRuntimeManagementConfig,
    Invoke,
    InvokeAsync,
    ListAliases,
    ListCodeSigningConfigs,
    ListEventSourceMappings,
    ListFunctionEventInvokeConfigs,
    ListFunctions,
    ListFunctionsByCodeSigningConfig,
    ListFunctionUrlConfigs,
    ListLayers,
    ListLayerVersions,
    ListProvisionedConcurrencyConfigs,
    ListTags,
    ListVersionsByFunction,
    PublishLayerVersion,
    PublishVersion,
    PutFunctionCodeSigningConfig,
    PutFunctionConcurrency,
    PutFunctionEventInvokeConfig,
    PutProvisionedConcurrencyConfig,
    PutRuntimeManagementConfig,
    RemoveLayerVersionPermission,
    RemovePermission,
    TagResource,
    UntagResource,
    UpdateAlias,
    UpdateCodeSigningConfig,
    UpdateEventSourceMapping,
    UpdateFunctionCode,
    UpdateFunctionConfiguration,
    UpdateFunctionEventInvokeConfig,
    UpdateFunctionUrlConfig,
    ...incomplete,
  },
}
