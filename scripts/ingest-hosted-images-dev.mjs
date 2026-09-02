/**
 * Run hosted-images ingest through wrangler dev (localhost + remote Images
 * binding). Requires `wrangler login` on account 2cc579c1ec9e426ed585e933ebf4753b.
 *
 * Usage: npm run images:ingest-dev
 */
import { spawn, spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const PORT = process.env.IMAGES_DEV_PORT?.trim() || '8788'
const CONFIG = path.join(ROOT, 'workers/hosted-images/wrangler.jsonc')

function waitForReady(child, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`wrangler dev did not become ready within ${timeoutMs}ms`))
    }, timeoutMs)
    const onData = (buf) => {
      const text = buf.toString()
      process.stderr.write(text)
      if (/Ready on http:\/\/127\.0\.0\.1:/.test(text)) {
        clearTimeout(timer)
        child.stdout?.off('data', onData)
        child.stderr?.off('data', onData)
        resolve()
      }
    }
    child.stdout?.on('data', onData)
    child.stderr?.on('data', onData)
    child.once('exit', (code) => {
      clearTimeout(timer)
      reject(new Error(`wrangler dev exited ${code} before ready`))
    })
  })
}

const wrangler = spawn(
  'npx',
  [
    'wrangler',
    'dev',
    '--config',
    CONFIG,
    '--port',
    PORT,
    '--ip',
    '127.0.0.1',
    '--test-scheduled',
  ],
  {
    cwd: ROOT,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
  },
)

let ingest
try {
  await waitForReady(wrangler, 45000)
  const res = await fetch(`http://127.0.0.1:${PORT}/sync`, {
    signal: AbortSignal.timeout(180000),
  })
  ingest = await res.json().catch(() => null)
  console.log(`ingest HTTP ${res.status}`)
  console.log(JSON.stringify(ingest, null, 2))
  if (!ingest?.ok || ingest.failed > 0) {
    process.exitCode = 1
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
} finally {
  wrangler.kill('SIGTERM')
}

if (ingest?.hash && process.exitCode !== 1) {
  process.env.CLOUDFLARE_IMAGES_HASH = ingest.hash
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
