/**
 * Upsert go-live env vars on the Vercel project.
 *
 * Based on Vercel REST API (2026):
 * POST /v10/projects/{id}/env?upsert=true
 * https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables
 *
 * Requires VERCEL_TOKEN. Optional VERCEL_ORG_ID / VERCEL_PROJECT_ID.
 * Only skip/delete CLOUDFLARE_API_TOKEN when AUTH_OK is exactly '0'
 * (GitHub proved the token has no Images access). 'location-restricted'
 * means Cloudflare 9109 from GitHub IPs — still upsert so Vercel can upload.
 */
const TEAM_ID = process.env.VERCEL_ORG_ID || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
// Do not trust a shared GitHub VERCEL_PROJECT_ID secret — team workflows
// often point at a different Vercel project.
const PROJECT_ID = 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'
const TOKEN = process.env.VERCEL_TOKEN

const TARGETS = ['production', 'preview']

const VARS = [
  {
    key: 'FOLLOW_UP_BOSS_API_KEY',
    type: 'encrypted',
    comment: 'FUB Events API for Calendly bookings',
  },
  {
    key: 'CALENDLY_API_TOKEN',
    type: 'encrypted',
    comment: 'Calendly PAT for invitee URI lookup and webhook register',
  },
  {
    key: 'CALENDLY_WEBHOOK_SIGNING_KEY',
    type: 'encrypted',
    comment: 'Calendly webhook HMAC signing key',
  },
  {
    key: 'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
    type: 'plain',
    comment: 'Public Cloudflare Images account hash',
  },
  {
    key: 'CLOUDFLARE_IMAGES_HASH',
    type: 'plain',
    comment: 'Server Cloudflare Images account hash (runtime)',
  },
  {
    key: 'CLOUDFLARE_API_TOKEN',
    type: 'encrypted',
    comment: 'Cloudflare Images:Edit for origin upload cron',
  },
  {
    key: 'CLOUDFLARE_ACCOUNT_ID',
    type: 'plain',
    comment: 'Cloudflare account id for Images uploads',
  },
  {
    key: 'CRON_SECRET',
    type: 'encrypted',
    comment: 'Bearer token for /api/cron/cloudflare-images',
  },
]

if (!TOKEN) {
  console.error(
    'VERCEL_TOKEN is not set. Add env in the dashboard:\nhttps://vercel.com/janet-duffys-projects/arroyoskyeview.com/settings/environment-variables',
  )
  process.exit(1)
}

function envValue(key) {
  if (key === 'FOLLOW_UP_BOSS_API_KEY') {
    const value =
      process.env.FOLLOW_UP_BOSS_API_KEY?.trim() || process.env.FUB_API_KEY?.trim()
    if (value && value.length > 200) {
      console.log('Skip upserting FOLLOW_UP_BOSS_API_KEY: value is not an Events API key length')
      return undefined
    }
    return value
  }
  if (key === 'CALENDLY_API_TOKEN') {
    return (
      process.env.CALENDLY_API_TOKEN?.trim() ||
      process.env.CALENDLY_PERSONAL_ACCESS_TOKEN?.trim() ||
      process.env.CALENDLY_PAT?.trim()
    )
  }
  if (key === 'CLOUDFLARE_API_TOKEN' && process.env.CLOUDFLARE_IMAGES_AUTH_OK === '0') {
    return undefined
  }
  return process.env[key]?.trim()
}

async function deleteProjectEnv(key) {
  const listUrl = new URL(`https://api.vercel.com/v9/projects/${PROJECT_ID}/env`)
  listUrl.searchParams.set('teamId', TEAM_ID)
  const listed = await fetch(listUrl, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  if (!listed.ok) {
    console.log(`Could not list env to remove ${key}: HTTP ${listed.status}`)
    return
  }
  const json = await listed.json()
  const envs = Array.isArray(json?.envs) ? json.envs : []
  const matches = envs.filter((entry) => entry?.key === key && entry?.id)
  for (const entry of matches) {
    const del = new URL(`https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${entry.id}`)
    del.searchParams.set('teamId', TEAM_ID)
    const res = await fetch(del, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    console.log(
      res.ok
        ? `Removed ${key} (${entry.target?.join(',') || 'unknown target'})`
        : `Failed to remove ${key}: HTTP ${res.status}`,
    )
  }
}

if (process.env.CLOUDFLARE_IMAGES_AUTH_OK === '0') {
  await deleteProjectEnv('CLOUDFLARE_API_TOKEN')
}

const payload = VARS.flatMap((item) => {
  const value = envValue(item.key)
  if (!value) {
    return []
  }
  return [
    {
      key: item.key,
      value,
      type: item.type,
      target: TARGETS,
      comment: item.comment,
    },
  ]
})

if (payload.length === 0) {
  console.log('No go-live env vars present in the environment. Nothing to upsert.')
  process.exit(0)
}

const url = new URL(`https://api.vercel.com/v10/projects/${PROJECT_ID}/env`)
url.searchParams.set('teamId', TEAM_ID)
url.searchParams.set('upsert', 'true')

const res = await fetch(url, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})

const text = await res.text()
let json
try {
  json = text ? JSON.parse(text) : null
} catch {
  json = null
}

const keys = payload.map((item) => item.key).join(', ')
if (!res.ok) {
  const message = json?.error?.message || json?.message || text.slice(0, 300)
  console.error(`Failed to upsert ${keys}: HTTP ${res.status} ${message}`)
  process.exit(1)
}

console.log(`Upserted ${payload.length} env var(s): ${keys} on ${PROJECT_ID} (HTTP ${res.status})`)
const listed = await fetch(
  `https://api.vercel.com/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`,
  { headers: { Authorization: `Bearer ${TOKEN}` } },
)
if (listed.ok) {
  const listedJson = await listed.json()
  const names = Array.isArray(listedJson?.envs)
    ? listedJson.envs.map((entry) => {
        const key = entry?.key || '?'
        const target = Array.isArray(entry?.target) ? entry.target.join('+') : 'unknown'
        const type = entry?.type || 'unknown'
        return `${key}@${target}/${type}`
      })
    : []
  console.log(`Project now has ${names.length} env name(s): ${names.join(', ')}`)
}
const failed = json?.failed
if (Array.isArray(failed) && failed.length > 0) {
  console.error('Some env vars failed:', failed.map((item) => item.key || item).join(', '))
  process.exit(1)
}
