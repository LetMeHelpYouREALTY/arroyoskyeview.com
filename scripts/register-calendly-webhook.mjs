/**
 * Create or reuse a Calendly invitee.created webhook for this site.
 *
 * Based on Calendly Webhook Subscriptions API:
 * POST https://api.calendly.com/webhook_subscriptions
 * GET  https://api.calendly.com/users/me
 *
 * Requires CALENDLY_API_TOKEN (personal access token).
 * Prints CALENDLY_WEBHOOK_SIGNING_KEY= only when GitHub Actions can capture
 * it via GITHUB_ENV — the value is never written to stdout.
 *
 * Dashboard fallback (no PAT): Event type → Confirmation page redirect to
 * https://www.arroyoskyeview.com/schedule-confirmed (pass event details),
 * plus Integrations → Webhooks → https://www.arroyoskyeview.com/api/calendly/webhook
 */
import { appendFile } from 'node:fs/promises'

const TOKEN =
  process.env.CALENDLY_API_TOKEN?.trim() ||
  process.env.CALENDLY_PERSONAL_ACCESS_TOKEN?.trim() ||
  process.env.CALENDLY_PAT?.trim()
const CALLBACK =
  process.env.CALENDLY_WEBHOOK_URL?.trim() ||
  'https://www.arroyoskyeview.com/api/calendly/webhook'
const EVENT = 'invitee.created'

if (!TOKEN) {
  console.error(
    'Set CALENDLY_API_TOKEN, then rerun:\n  npm run calendly:webhook',
  )
  process.exit(1)
}

async function calendly(path, init = {}) {
  const res = await fetch(`https://api.calendly.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })
  const text = await res.text()
  let json = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = null
  }
  return { res, json, text }
}

const me = await calendly('/users/me')
if (!me.res.ok) {
  const message = me.json?.message || me.json?.title || me.text.slice(0, 300)
  console.error(`Calendly /users/me failed: HTTP ${me.res.status} ${message}`)
  process.exit(1)
}

const userUri = me.json?.resource?.uri
const organization = me.json?.resource?.current_organization
if (!userUri || !organization) {
  console.error('Calendly /users/me did not return uri and current_organization')
  process.exit(1)
}

const listPath = `/webhook_subscriptions?${new URLSearchParams({
  organization,
  user: userUri,
  scope: 'user',
}).toString()}`
const existing = await calendly(listPath)
if (!existing.res.ok) {
  const message = existing.json?.message || existing.text.slice(0, 300)
  console.error(`List webhooks failed: HTTP ${existing.res.status} ${message}`)
  process.exit(1)
}

const collection = Array.isArray(existing.json?.collection)
  ? existing.json.collection
  : []
const match = collection.find((item) => {
  const url = item.callback_url || item.url
  const events = item.events || []
  return url === CALLBACK && events.includes(EVENT)
})

if (match) {
  console.log(`Calendly webhook already registered: ${CALLBACK}`)
  console.log(
    'Reuse CALENDLY_WEBHOOK_SIGNING_KEY from the original create response or the Calendly dashboard.',
  )
  process.exit(0)
}

const created = await calendly('/webhook_subscriptions', {
  method: 'POST',
  body: JSON.stringify({
    url: CALLBACK,
    events: [EVENT],
    organization,
    user: userUri,
    scope: 'user',
  }),
})

if (!created.res.ok) {
  const message =
    created.json?.message ||
    created.json?.details?.[0]?.message ||
    created.text.slice(0, 300)
  console.error(`Create webhook failed: HTTP ${created.res.status} ${message}`)
  process.exit(1)
}

const signingKey =
  created.json?.resource?.signing_key ||
  created.json?.signing_key ||
  created.json?.resource?.signingKey

if (signingKey && process.env.GITHUB_ENV) {
  console.log(`::add-mask::${signingKey}`)
  const delim = `EOF_CALENDLY_SIGNING_${Date.now()}`
  await appendFile(
    process.env.GITHUB_ENV,
    `CALENDLY_WEBHOOK_SIGNING_KEY<<${delim}\n${signingKey}\n${delim}\n`,
  )
}

if (signingKey) {
  console.log(
    'Created Calendly webhook. Signing key captured for env:sync (not printed).',
  )
} else {
  console.log(
    'Created Calendly webhook. Copy the signing key from the Calendly dashboard into CALENDLY_WEBHOOK_SIGNING_KEY.',
  )
}

console.log(`callback=${CALLBACK}`)
console.log(`user=${userUri}`)
