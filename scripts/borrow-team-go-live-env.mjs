/**
 * Copy go-live keys from sister Vercel projects on the same team.
 * Prints only key names and source project — never secret values.
 *
 * GET /v10/projects/{id}/env?decrypt=true&source=vercel-cli:env:pull
 * GET /v3/env/pull/{id}/production (same path `vercel env pull` uses)
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

/** Sister env names that map onto the keys this repo actually reads. */
const ALIASES = {
  CLOUDFLARE_API_TOKEN: [
    'CLOUDFLARE_API_TOKEN',
    'CF_API_TOKEN',
    'CF_IMAGES_TOKEN',
    'CLOUDFLARE_IMAGES_TOKEN',
    'CLOUDFLARE_IMAGES_API_TOKEN',
  ],
  CLOUDFLARE_ACCOUNT_ID: ['CLOUDFLARE_ACCOUNT_ID', 'CF_ACCOUNT_ID'],
  FOLLOW_UP_BOSS_API_KEY: [
    'FOLLOW_UP_BOSS_API_KEY',
    'FUB_API_KEY',
    'FOLLOWUPBOSS_API_KEY',
    'FUB_APIKEY',
  ],
  CALENDLY_API_TOKEN: [
    'CALENDLY_API_TOKEN',
    'CALENDLY_PERSONAL_ACCESS_TOKEN',
    'CALENDLY_PAT',
    'CALENDLY_ACCESS_TOKEN',
    'CALENDLY_TOKEN',
  ],
  CALENDLY_WEBHOOK_SIGNING_KEY: [
    'CALENDLY_WEBHOOK_SIGNING_KEY',
    'CALENDLY_SIGNING_KEY',
  ],
  CLOUDFLARE_GLOBAL_API_TOKEN: ['CLOUDFLARE_GLOBAL_API_TOKEN'],
  CLOUDFLARE_EMAIL: ['CLOUDFLARE_EMAIL', 'CF_EMAIL'],
}

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
  { id: 'prj_PcVsODtPjvyUQCg4hStpyILEbYFh', name: 'sandstonetulessprings' },
  { id: 'prj_UPf2vK6xEdnz02NkWKgvaZcqnZrX', name: 'rhodesranchlasvegas.com' },
  { id: 'prj_cgzb65mf2GDFh37vU9hPWQ2TGJ6m', name: 'midtownvegascondos-com' },
  { id: 'prj_cAI32rOSAZCdPeMMOdoLnlsd378x', name: 'madeiracanyonhomes-com' },
  { id: 'prj_f00T6IobVyA0nhUmwIWTwKJbEnFq', name: 'californiaforeverrealty-com' },
  { id: 'prj_1oa9Zoow76266yZcUC5Z4LWyITfk', name: 'lasvegasfamilyhomes-com' },
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

async function vercelGet(path) {
  const url = new URL(`https://api.vercel.com${path}`)
  if (!url.searchParams.has('teamId')) {
    url.searchParams.set('teamId', TEAM_ID)
  }
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  const text = await res.text()
  let json = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = null
  }
  return { ok: res.ok, status: res.status, json }
}

function asEnvList(json) {
  if (Array.isArray(json?.envs)) {
    return json.envs
  }
  const bag = {}
  if (json?.env && typeof json.env === 'object' && !Array.isArray(json.env)) {
    Object.assign(bag, json.env)
  }
  if (json?.buildEnv && typeof json.buildEnv === 'object' && !Array.isArray(json.buildEnv)) {
    Object.assign(bag, json.buildEnv)
  }
  return Object.entries(bag).map(([key, value]) => ({
    key,
    value,
    target: ['production'],
  }))
}

async function listEnvs(projectId) {
  const attempts = [
    `/v10/projects/${projectId}/env?decrypt=true&source=vercel-cli:env:pull&target=production`,
    `/v9/projects/${projectId}/env?decrypt=true&source=vercel-cli:pull`,
    `/v3/env/pull/${projectId}/production?source=vercel-cli:env:pull`,
  ]
  let best = { ok: false, status: 0, envs: [] }
  for (const path of attempts) {
    const result = await vercelGet(path)
    const envs = asEnvList(result.json)
    if (!result.ok) {
      if (!best.ok) {
        best = { ok: false, status: result.status, envs }
      }
      continue
    }
    const valued = envs.filter((entry) => entryValue(entry)).length
    const scored = { ok: true, status: result.status, envs, valued }
    if (valued > 0) {
      return scored
    }
    if (!best.ok || envs.length > best.envs.length) {
      best = scored
    }
  }
  return best
}

function pickByNames(envs, names) {
  const matches = envs.filter(
    (entry) => names.includes(entry?.key) && entryValue(entry),
  )
  if (matches.length === 0) {
    return undefined
  }
  return matches.find(prefersProduction) || matches[0]
}

async function decryptEnv(projectId, envId) {
  if (!envId) {
    return ''
  }
  const result = await vercelGet(`/v1/projects/${projectId}/env/${envId}`)
  return entryValue(result.json)
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
  const remaining = Object.keys(ALIASES).filter((key) => !alreadyHave(key) && !found[key])
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
  const names = result.envs.map((entry) => entry?.key).filter(Boolean)
  const withValues = result.envs.filter((entry) => entryValue(entry)).map((entry) => entry.key)
  console.log(
    `Keys on ${project.name}: ${names.join(', ') || '(none)'} (values: ${withValues.length})`,
  )
  for (const [canonical, namesForKey] of Object.entries(ALIASES)) {
    if (alreadyHave(canonical) || found[canonical]) {
      continue
    }
    let entry = pickByNames(result.envs, namesForKey)
    let value = entry ? entryValue(entry) : ''
    if (!value) {
      const listed = result.envs.filter((item) => namesForKey.includes(item?.key))
      const candidate = listed.find(prefersProduction) || listed[0]
      if (candidate?.id) {
        value = await decryptEnv(project.id, candidate.id)
        if (value) {
          entry = candidate
        }
      }
    }
    if (!value) {
      continue
    }
    found[canonical] = {
      value,
      source: `${project.name} (${entry?.key || namesForKey[0]})`,
    }
  }
}

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
