/**
 * Copy go-live keys from sister Vercel projects on the same team.
 * Prints only key names and source project — never secret values.
 *
 * GET /v9/projects/{id}/env?decrypt=true
 * https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name
 */
import { appendFile } from 'node:fs/promises'

const TEAM_ID = process.env.VERCEL_ORG_ID?.trim() || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const TOKEN = process.env.VERCEL_TOKEN?.trim()

const KEYS = [
  'CLOUDFLARE_API_TOKEN',
  'CLOUDFLARE_ACCOUNT_ID',
  'CLOUDFLARE_IMAGES_HASH',
  'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
  'FOLLOW_UP_BOSS_API_KEY',
  'FUB_API_KEY',
  'CALENDLY_API_TOKEN',
  'CALENDLY_PERSONAL_ACCESS_TOKEN',
  'CALENDLY_PAT',
  'CALENDLY_WEBHOOK_SIGNING_KEY',
  'CRON_SECRET',
]

/** Sister projects most likely to already have Images / FUB / Calendly keys. */
const PROJECTS = [
  { id: 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm', name: 'arroyoskyeview.com' },
  { id: 'prj_vrMcC3LsxgF3yf51M06TdeYUI24j', name: 'sienalasvegas.com' },
  { id: 'prj_Egvst53Qns0tSJ0K5cqfbicv2MIj', name: 'hertagestonebridge.com' },
  { id: 'prj_SZWSyg5C0N9pEzeLoHQNtSYo4U0L', name: 'mesaskyeview-com' },
  { id: 'prj_4h22EmvSku2lGaqMJICZ4F4dWMci', name: 'villagestulesprings.com' },
  { id: 'prj_yqEdVMMf80FUnFC8sdo3YZyT1fAB', name: 'providencelasvegas.com' },
  { id: 'prj_adBpYedAsrNmRAe7mZQhPrhOQUOx', name: 'ironmountainranchlasvegas-com' },
  { id: 'prj_XSQcFHSlv16uyGR0vQxAokNky9Em', name: 'townesunionvillage.com' },
  { id: 'prj_zPQHYgfe5kwPxzxGAF3Hy5Wt9QiL', name: 'anthemhenderson-com' },
  { id: 'prj_1stBQmZJKMVcoH85G3bggNCVFr0t', name: 'summerlinwesthomes-com' },
  { id: 'prj_ssXC2GDDK31BEgguytzs7H4dQepP', name: 'vegas55plushomes.com' },
  { id: 'prj_kTz2rCHAVLMutQA6DDGv7nskA39Q', name: 'suncitysummerlinhomesforsale-com' },
  { id: 'prj_OKsb5CSYTYncUOJecJz8craMKgUU', name: 'inspiradahomes.com' },
  { id: 'prj_JLGCPPn46Oc7XqNNxl2cTShiczXg', name: 'letmehelpyourealtor-com' },
  { id: 'prj_V5549R7k5GyeTVngaNVzDEr8UqAL', name: 'trilogysunstonehomes' },
]

function alreadyHave(key) {
  const value = process.env[key]
  return typeof value === 'string' && value.trim().length > 0
}

function envRow(key, value) {
  const delim = `EOF_${key}_${Date.now()}`
  return `${key}<<${delim}\n${value}\n${delim}\n`
}

function entryValue(entry) {
  if (typeof entry?.value === 'string') {
    return entry.value.trim()
  }
  if (entry?.value && typeof entry.value === 'object' && typeof entry.value.value === 'string') {
    return entry.value.value.trim()
  }
  return ''
}

function prefersProduction(entry) {
  return Array.isArray(entry?.target) && entry.target.includes('production')
}

async function listEnvs(projectId) {
  const url = new URL(`https://api.vercel.com/v9/projects/${projectId}/env`)
  url.searchParams.set('teamId', TEAM_ID)
  url.searchParams.set('decrypt', 'true')
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  if (!res.ok) {
    return { ok: false, status: res.status, envs: [] }
  }
  const json = await res.json()
  const envs = Array.isArray(json?.envs) ? json.envs : []
  return { ok: true, status: res.status, envs }
}

function pickKey(envs, key) {
  const matches = envs.filter((entry) => entry?.key === key && entryValue(entry))
  if (matches.length === 0) {
    return undefined
  }
  return matches.find(prefersProduction) || matches[0]
}

if (!TOKEN) {
  console.log('VERCEL_TOKEN unset; skip borrowing env from sister projects.')
  process.exit(0)
}

const githubEnv = process.env.GITHUB_ENV
const needed = KEYS.filter((key) => !alreadyHave(key))
if (needed.length === 0) {
  console.log('All go-live keys already present. No sister-project copy needed.')
  process.exit(0)
}

const found = {}
let decryptDenied = 0
let readableProjects = 0

for (const project of PROJECTS) {
  const remaining = needed.filter((key) => !found[key])
  if (remaining.length === 0) {
    break
  }
  const result = await listEnvs(project.id)
  if (!result.ok) {
    if (result.status === 403 || result.status === 401) {
      decryptDenied += 1
    }
    console.log(`Skip ${project.name}: HTTP ${result.status}`)
    continue
  }
  readableProjects += 1
  console.log(`Read ${result.envs.length} env name(s) from ${project.name}`)
  for (const key of remaining) {
    const entry = pickKey(result.envs, key)
    const value = entry ? entryValue(entry) : ''
    if (!value || found[key]) {
      continue
    }
    found[key] = { value, source: project.name }
  }
}

function alias(fromKeys, toKey) {
  if (alreadyHave(toKey) || found[toKey]) {
    return
  }
  for (const fromKey of fromKeys) {
    if (found[fromKey]) {
      found[toKey] = { value: found[fromKey].value, source: `${found[fromKey].source} (${fromKey})` }
      return
    }
  }
}

alias(['FUB_API_KEY'], 'FOLLOW_UP_BOSS_API_KEY')
alias(['CALENDLY_PERSONAL_ACCESS_TOKEN', 'CALENDLY_PAT'], 'CALENDLY_API_TOKEN')

const copied = Object.keys(found)
if (copied.length === 0) {
  if (readableProjects === 0 && decryptDenied > 0) {
    console.log(
      'VERCEL_TOKEN cannot decrypt sister-project env (401/403). Add CLOUDFLARE_API_TOKEN, FOLLOW_UP_BOSS_API_KEY, and CALENDLY_API_TOKEN to GitHub repo secrets.',
    )
  } else {
    console.log(`No missing go-live keys found on sister projects (${needed.join(', ')}).`)
  }
  process.exit(0)
}

for (const key of copied) {
  const { value, source } = found[key]
  console.log(`::add-mask::${value}`)
  console.log(`Copied ${key} from ${source}`)
  if (githubEnv) {
    await appendFile(githubEnv, envRow(key, value))
  }
}

console.log(`Borrowed ${copied.length} key(s): ${copied.join(', ')}`)
