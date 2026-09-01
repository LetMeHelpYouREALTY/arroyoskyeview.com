/**
 * Print which env keys exist on the Arroyo Vercel project (names only).
 * Does not decrypt or print values.
 *
 * GET /v9/projects/{id}/env
 * https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name
 */
const TEAM_ID = process.env.VERCEL_ORG_ID?.trim() || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const PROJECT_ID = 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'
const TOKEN = process.env.VERCEL_TOKEN?.trim()

const WATCH = [
  'CLOUDFLARE_API_TOKEN',
  'CLOUDFLARE_GLOBAL_API_TOKEN',
  'CLOUDFLARE_API_KEY',
  'CLOUDFLARE_EMAIL',
  'CLOUDFLARE_ACCOUNT_ID',
  'CLOUDFLARE_IMAGES_HASH',
  'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
  'NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED',
  'NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH',
  'FOLLOW_UP_BOSS_API_KEY',
  'FUB_API_KEY',
  'CALENDLY_API_TOKEN',
  'CALENDLY_PERSONAL_ACCESS_TOKEN',
  'CALENDLY_PAT',
  'CALENDLY_WEBHOOK_SIGNING_KEY',
  'CRON_SECRET',
]

if (!TOKEN) {
  console.log('VERCEL_TOKEN missing; skip Arroyo env name list.')
  process.exit(0)
}

const url = new URL(`https://api.vercel.com/v9/projects/${PROJECT_ID}/env`)
url.searchParams.set('teamId', TEAM_ID)
url.searchParams.set('decrypt', 'false')

const res = await fetch(url, {
  headers: { Authorization: `Bearer ${TOKEN}` },
})
if (!res.ok) {
  console.log(`Arroyo Vercel env list HTTP ${res.status}`)
  process.exit(0)
}

const json = await res.json()
const envs = Array.isArray(json.envs) ? json.envs : Array.isArray(json) ? json : []
const byKey = new Map()
for (const item of envs) {
  const key = typeof item?.key === 'string' ? item.key : ''
  if (!key) {
    continue
  }
  const targets = Array.isArray(item.target) ? item.target.join('+') : String(item.target || '')
  const prev = byKey.get(key) || []
  prev.push(targets)
  byKey.set(key, prev)
}

const interesting = [...byKey.keys()]
  .filter((key) =>
    /cloudflare|calendly|follow_up_boss|^fub_|cron_secret|images_hash|images_token|cf_/i.test(
      key,
    ),
  )
  .sort()

console.log(
  `Arroyo Vercel env keys (interesting): ${interesting.length ? interesting.join(', ') : '(none)'}`,
)
for (const key of WATCH) {
  const targets = byKey.get(key)
  console.log(`  ${key}=${targets ? `yes (${targets.join('; ')})` : 'no'}`)
}
