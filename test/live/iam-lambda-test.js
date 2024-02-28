let { join } = require('node:path')
let test = require('tape')
let Zip = require('adm-zip')
let cwd = process.cwd()
let sut = join(cwd, 'src', 'index.js')
let client = require(sut)

let aws, roleARN
let region = process.env.AWS_REGION || 'us-west-2'
let FunctionName = process.env.AWS_LITE_TEST_LAMBDA_NAME || 'aws-lite-test-lambda'
let p = path => process.platform.startsWith('win') ? 'file://' + path : path

test('Set up env', async t => {
  t.plan(2)
  t.ok(client, 'aws-lite client is present')
  let plugins = [
    import(p(join(__dirname, '_iam.mjs'))),
    import(p(join(cwd, 'plugins', 'lambda', 'src', 'index.mjs'))), // We should be able to retire this once we phase out 14.x CI runs
  ]
  aws = await client({ region, plugins })
  t.ok(aws, 'Client ready')
})

test('Get Lambda role', async t => {
  t.plan(2)

  let role
  let roleName = FunctionName + '-role'

  try {
    role = await aws.iam.GetRole({ name: roleName })
  }
  catch { /* noop */ }

  if (!role) {
    role = await aws.iam.CreateRole({
      name: roleName,
      desc: 'aws-lite test Lambda role: please do not delete!',
      policyDoc: JSON.stringify({
        Version: '2012-10-17',
        Statement: [ {
          Effect: 'Allow',
          Principal: { Service: 'lambda.amazonaws.com' },
          Action: 'sts:AssumeRole'
        } ]
      }),
      path: '/',
    })
    // Give it a few seconds for the role to be ready for a new Lambda
    await new Promise((resolve) => setTimeout(resolve, 5000))
  }
  roleARN = role?.GetRoleResult?.Role?.Arn
  t.ok(role, 'Got Lambda execution role')
  t.equal(roleARN.split(':').length, 6, `Got role ARN: ${roleARN}`)
})

test('Invoke Lambda', async t => {
  t.plan(3)

  async function getConfig (tryNum = 1) {
    let result = await aws.lambda.GetFunctionConfiguration({ FunctionName })
    if (result.State === 'Active') return result
    if (result.State === 'Pending') {
      if (++tryNum > 5) {
        throw Error('Too many GetFunctionConfiguration tries')
      }
      await new Promise((res) => setTimeout(res, 1000))
      return await getConfig(tryNum)
    }
    throw Error(`Lambda in a weird state: ${result.State}`)
  }

  let config
  try {
    config = await getConfig()
  }
  catch (err) {
    if (err.statusCode !== 404) {
      t.fail('Failed, cannot proceed with test')
      console.log(err)
      return
    }
  }

  if (!config) {
    console.log(`Creating new test Lambda!`)

    let zip = new Zip()
    let code = `export const handler = async (event) => ({ ok: true, event })\n`
    zip.addFile('index.mjs', Buffer.from(code, 'utf8'))
    // Deployment contents must be base64-encoded
    let ZipFile = zip.toBuffer().toString('base64')

    await aws.lambda.CreateFunction({
      Architectures: [ 'arm64' ],
      Code: { ZipFile },
      Description: 'aws-lite test Lambda: please do not delete!',
      FunctionName,
      Handler: 'index.handler',
      MemorySize: 256,
      Role: roleARN,
      Runtime: 'nodejs18.x',
    })

    // Check to see if the Lambda is online; it'll blow up if not after a few seconds
    config = await getConfig()
  }

  t.equal(config.FunctionName, FunctionName, 'Got back function config for test Lambda')
  t.equal(config.State, 'Active', 'Test Lambda is active!')

  let Payload = { hello: 'there' }
  let result = await aws.lambda.Invoke({ FunctionName, Payload })
  let expected = { ok: true, event: Payload }
  console.log(`Lambda invoke returned:`, result)
  t.deepEqual(result.Payload, expected, 'Lambda invoked with correct payload')
})
