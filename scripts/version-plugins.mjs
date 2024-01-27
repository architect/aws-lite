import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import pluginList from '../plugins.mjs'
import semver from 'semver'
const cwd = process.cwd()

const args = process.argv.slice(2)
const semverArgs = [ 'major', 'minor', 'patch' ]
const action = args[0]
if (!semverArgs.includes(action)) {
  throw ReferenceError(`Version action must be one of: ${semverArgs.join(', ')} (got: ${action})`)
}

const pluginNames = args.slice(1)
const plugins = pluginNames === 'all' ? pluginList.map(({ service }) => service) : pluginNames

const status = execSync('git status --porcelain')
if (status.length) {
  console.error('Found uncommitted changes:')
  console.error(status.toString())
  console.error('Please stash or commit changes and run again')
  process.exit(1)
}

const files = []
const msg = []
for (let p of plugins) {
  const plugin = p.replace('-types', '')
  const typesOnly = p.endsWith('-types')

  const pluginDir = join(cwd, 'plugins', plugin)

  if (!existsSync(pluginDir)) {
    throw ReferenceError(`Invalid plugin, or plugin doesn't yet exist: ${plugin}`)
  }
  if (!pluginList.some(({ service }) => service === plugin)) {
    throw ReferenceError(`Plugin not found in aws-lite plugins list: ${plugin}`)
  }
  if (typesOnly && action !== 'patch') {
    throw ReferenceError(`Types packages may only receive patches independent of the main plugin`)
  }

  const pluginPkgFile = join(pluginDir, 'package.json')
  const pluginTypeDir = join(pluginDir, 'types')
  const pluginTypePkgFile = join(pluginTypeDir, 'package.json')
  if (!existsSync(pluginDir) || !existsSync(pluginTypeDir)) {
    throw ReferenceError(`Plugin or plugin types directory not found: ${plugin}`)
  }
  if (!existsSync(pluginPkgFile) || !existsSync(pluginTypePkgFile)) {
    throw ReferenceError(`Plugin or types package.json file not found: ${plugin}`)
  }

  const changes = {}
  if (!typesOnly) changes[pluginPkgFile] = { msg: `\`@aws-lite/${plugin}\` ` }
  changes[pluginTypePkgFile] = { msg: `\`@aws-lite/${plugin}-types\` ` }

  Object.keys(changes).forEach(file => {
    const pkg = JSON.parse(readFileSync(file))
    const newVersion = semver.inc(pkg.version, action)
    if (typesOnly) {
      changes[file].ver = newVersion
    }
    else if (file === pluginTypePkgFile &&
             semver.lt(newVersion, changes[pluginPkgFile].ver)) {
      changes[file].ver = changes[pluginPkgFile].ver
    }
    else changes[file].ver = newVersion

    pkg.version = changes[file].ver
    changes[file].msg = changes[file].msg += changes[file].ver
    writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n')
  })

  files.push(...Object.keys(changes))
  msg.push(...Object.values(changes).map(({ msg }) => msg))
}
execSync(`git commit ${files.join(' ')} -m '${msg.join('\n')}'`)
