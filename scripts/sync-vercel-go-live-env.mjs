/**
 * Upsert go-live env vars on the Vercel project.
 *
 * Based on Vercel REST API (2026):
 * POST /v10/projects/{id}/env?upsert=true
 * https://vercel.com/docs/rest-api/reference/endpoints/projects/create-one-or-more-environment-variables
 *
 * Requires VERCEL_TOKEN. Optional VERCEL_ORG_ID / VERCEL_PROJECT_ID.
 * Only keys present in the environment are sent. Values are never printed.
 */
const TEAM_ID = process.env.VERCEL_ORG_ID || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'
const TOKEN = process.env.VERCEL_TOKEN

const TARGETS = ['production', 'preview']

const VARS = [
  {
    key: 'FOLLOW_UP_BOSS_API_KEY',
    type: 'encrypted',
    comment: 'FUB Events API for Calendly bookings',
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

const payload = VARS.flatMap((item) => {
  const value = process.env[item.key]?.trim()
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

console.log(`Upserted ${payload.length} env var(s): ${keys} (HTTP ${res.status})`)
const failed = json?.failed
if (Array.isArray(failed) && failed.length > 0) {
  console.error('Some env vars failed:', failed.map((item) => item.key || item).join(', '))
  process.exit(1)
}
