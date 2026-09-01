/**
 * After `wrangler deploy`, trigger ingest on the live Worker.
 *
 * `*.drduffy.workers.dev` is reachable from this VM (no workers.dev Turnstile).
 * wrangler-dev remote Images bindings have failed with capnweb WebSocket
 * errors on preview accounts, so production ingest prefers this path.
 *
 * Requires `wrangler login` on account 2cc579c1ec9e426ed585e933ebf4753b.
 *
 * Usage: npm run images:ingest-remote
 */
import { randomBytes } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONFIG = path.join(ROOT, 'workers/hosted-images/wrangler.jsonc')
const FALLBACK_URLS = [
  'https://arroyoskyeview-hosted-images.drduffy.workers.dev',
  'https://arroyoskyeview-hosted-images.workers.dev',
]

function runWrangler(args, options = {}) {
  return spawnSync('npx', ['wrangler', ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    ...options,
  })
}

async function workerHealth(baseUrl) {
  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/`, {
      signal: AbortSignal.timeout(12000),
    })
    const body = await res.json().catch(() => null)
    if (
      res.ok &&
      body &&
      typeof body === 'object' &&
      body.service === 'arroyoskyeview-hosted-images'
    ) {
      return true
    }
  } catch {
    return false
  }
  return false
}

async function discoverWorkerUrl() {
  const fromEnv = process.env.CLOUDFLARE_IMAGES_WORKER_URL?.trim()
  const candidates = [
    fromEnv,
    ...FALLBACK_URLS,
  ].filter((value, index, list) => value && list.indexOf(value) === index)

  for (const url of candidates) {
    if (await workerHealth(url)) {
      console.log(`hosted-images Worker ready at ${url}`)
      return url
    }
  }
  return null
}

function putUploadSecret(secret) {
  const existing = process.env.CLOUDFLARE_IMAGES_UPLOAD_SECRET?.trim()
  if (existing) {
    return existing
  }
  const put = runWrangler(
    ['secret', 'put', 'UPLOAD_SECRET', '--config', CONFIG],
    { input: `${secret}\n` },
  )
  if (put.status !== 0) {
    console.error(put.stderr || put.stdout || 'wrangler secret put failed')
    return null
  }
  return secret
}

async function syncWorker(baseUrl, secret) {
  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/sync`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.timeout(180000),
  })
  const body = await res.json().catch(() => null)
  console.log(`ingest HTTP ${res.status}`)
  console.log(JSON.stringify(body, null, 2))
  return { res, body }
}

const workerUrl = await discoverWorkerUrl()
if (!workerUrl) {
  console.error(
    'hosted-images Worker is not reachable on workers.dev. Deploy first (`npm run images:worker`), then retry.',
  )
  process.exit(1)
}

const secret = putUploadSecret(randomBytes(24).toString('hex'))
if (!secret) {
  process.exit(1)
}

const { body } = await syncWorker(workerUrl, secret)
if (!body?.ok || body.failed > 0) {
  process.exitCode = 1
}

if (body?.hash && process.exitCode !== 1) {
  process.env.CLOUDFLARE_IMAGES_HASH = body.hash
  const probe = spawnSync(
    process.execPath,
    [path.join(ROOT, 'scripts/ensure-cloudflare-images.mjs')],
    {
      cwd: ROOT,
      env: process.env,
      stdio: 'inherit',
    },
  )
  if (probe.status !== 0) {
    process.exitCode = 1
  }
}
