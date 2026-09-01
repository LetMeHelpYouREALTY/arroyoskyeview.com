/**
 * Upload public/images assets to Cloudflare Images using custom IDs that
 * match lib/cloudflare-images.ts (e.g. images/hero/hero-5).
 *
 * Create (not deprecated):
 * POST https://api.cloudflare.com/client/v4/accounts/{account_id}/images/v1
 * List (preferred): GET .../images/v2 (continuation_token, per_page ≥ 10)
 * List (deprecated fallback): GET .../images/v1 (page, per_page 10–10000)
 *
 * Custom IDs match git paths. requireSignedURLs=false (custom IDs cannot
 * use signed URLs). metadata stores { git, site } (≤1024 bytes).
 *
 * Requires CLOUDFLARE_API_TOKEN (Account · Cloudflare Images · Edit).
 * Do not orange-cloud the Vercel apex. Images belong on imagedelivery.net.
 */
import { appendFile, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  cloudflareImagesCredentialWorks,
  uniqueAuthEmails,
} from './cloudflare-images-auth.mjs'
import {
  IMAGES_CREATOR,
  isCloudflareRateLimit,
  listImages,
  parseDeliveryHash,
} from './cloudflare-images-list.mjs'
import { isRasterImageFile } from './raster-image.mjs'

/** Public Cloudflare account id (Images) shared across Dr. Jan Duffy sites. */
const DEFAULT_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || DEFAULT_ACCOUNT_ID
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])

function uniqueTokens() {
  return [
    ...new Set(
      [
        process.env.CLOUDFLARE_API_TOKEN,
        process.env.CLOUDFLARE_ORIGIN_CA_KEY,
        process.env.CLOUDFLARE_GLOBAL_API_TOKEN,
        process.env.CLOUDFLARE_API_KEY,
      ]
        .map((value) => (typeof value === 'string' ? value.trim() : ''))
        .filter(Boolean),
    ),
  ]
}

const EMAIL =
  process.env.CLOUDFLARE_EMAIL?.trim() || process.env.CF_EMAIL?.trim() || ''

let authHeaders = null

async function writeGithubEnv(line) {
  if (process.env.GITHUB_ENV) {
    await appendFile(process.env.GITHUB_ENV, `${line}\n`)
  }
}

async function resolveAuth() {
  const tokens = uniqueTokens()
  if (tokens.length === 0) {
    console.error(
      'Set CLOUDFLARE_API_TOKEN (Images:Edit), then rerun:\n  npm run images:upload',
    )
    process.exit(1)
  }

  const emails = uniqueAuthEmails([EMAIL])
  console.log(`Cloudflare auth emails: ${emails.join(', ')}`)
  let locationRestricted = null
  for (const token of tokens) {
    const probe = await cloudflareImagesCredentialWorks(token, emails)
    if (probe.rateLimited && probe.token) {
      process.env.CLOUDFLARE_API_TOKEN = probe.token
      await writeGithubEnv('CLOUDFLARE_IMAGES_AUTH_OK=rate-limited')
      console.warn(
        'Cloudflare rate-limited this runner (429). Skipping upload here. CLOUDFLARE_API_TOKEN stays set so Vercel can retry.',
      )
      process.exit(0)
    }
    if (probe.locationRestricted && probe.token) {
      locationRestricted = probe
      console.log(
        'Cloudflare token is IP-allowlisted on this runner (9109 from location). Looking for an unrestricted token before skipping upload.',
      )
      continue
    }
    if (!probe.ok) {
      console.log(`Cloudflare Images token probe HTTP ${probe.status}`)
      continue
    }
    authHeaders = probe.headers
    if (probe.token && (probe.mode === 'bearer' || probe.minted)) {
      process.env.CLOUDFLARE_API_TOKEN = probe.token
    }
    if (probe.mode === 'service' && probe.token) {
      process.env.CLOUDFLARE_ORIGIN_CA_KEY = probe.token
    }
    if (probe.email) {
      process.env.CLOUDFLARE_EMAIL = probe.email
    }
    console.log(
      `Cloudflare Images auth: ${probe.mode}${probe.minted ? ' minted Images:Edit token' : ''} accepted`,
    )
    return
  }

  if (locationRestricted) {
    process.env.CLOUDFLARE_API_TOKEN = locationRestricted.token
    await writeGithubEnv('CLOUDFLARE_IMAGES_AUTH_OK=location-restricted')
    if (process.env.VERCEL) {
      authHeaders = locationRestricted.headers
      console.warn(
        'Vercel build IP is Cloudflare 9109-blocked (same as GitHub). Attempting Images upload anyway; serverless cron uses different egress.',
      )
      return
    }
    console.warn(
      'GitHub runner IP cannot use this Images token (9109 from location). Skipping upload here. CLOUDFLARE_API_TOKEN stays set so Vercel env upsert and the production build can retry.',
    )
    process.exit(0)
  }

  console.warn(
    'No working Cloudflare Images credential (need Account · Cloudflare Images · Edit). Skipping upload.',
  )
  await writeGithubEnv('CLOUDFLARE_IMAGES_AUTH_OK=0')
  process.exit(0)
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
      continue
    }
    if (ALLOWED.has(path.extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

function customId(fullPath) {
  const relative = path.relative(path.join(ROOT, '..'), fullPath).replaceAll('\\', '/')
  return relative.replace(/\.[^.]+$/, '')
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.png') return 'image/png'
  if (ext === '.webp') return 'image/webp'
  if (ext === '.gif') return 'image/gif'
  return 'application/octet-stream'
}

/** User-modifiable key-value store on the image. Must stay ≤1024 bytes. */
function imageMetadata(id) {
  const meta = JSON.stringify({
    git: id,
    site: IMAGES_CREATOR,
  })
  if (Buffer.byteLength(meta, 'utf8') <= 1024) {
    return meta
  }
  return JSON.stringify({ git: id.slice(0, 200) })
}

const FROM_ORIGIN = process.argv.includes('--from-origin')
const WRITE_HASH = process.argv.includes('--write-hash')
const HASH_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'lib',
  'cloudflare-images-hash.generated.ts',
)
const ORIGIN = (process.env.CLOUDFLARE_IMAGES_ORIGIN || 'https://www.arroyoskyeview.com').replace(
  /\/$/,
  '',
)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function buildUploadForm(filePath, id) {
  const form = new FormData()
  if (FROM_ORIGIN) {
    const relative = path.relative(path.join(ROOT, '..'), filePath).replaceAll('\\', '/')
    form.append('url', `${ORIGIN}/${relative}`)
  } else {
    const bytes = await readFile(filePath)
    form.append('file', new Blob([bytes], { type: mimeType(filePath) }), path.basename(filePath))
  }
  form.append('id', id)
  form.append('requireSignedURLs', 'false')
  form.append('creator', IMAGES_CREATOR)
  form.append('metadata', imageMetadata(id))
  return form
}

async function upload(filePath) {
  const id = customId(filePath)
  let last = { id, status: 0, json: null }
  for (let i = 0; i < 4; i++) {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        headers: authHeaders,
        body: await buildUploadForm(filePath, id),
      },
    )
    const json = await res.json().catch(() => null)
    last = { id, status: res.status, json }
    if (!isCloudflareRateLimit(last) || i === 3) {
      return last
    }
    const wait = Math.min(32000, 4000 * 2 ** i)
    console.log(`Upload ${id} HTTP ${res.status}; retry in ${wait}ms (${i + 1}/4)`)
    await sleep(wait)
  }
  return last
}

async function fetchAccountHash() {
  const listed = await listImages(authHeaders, ACCOUNT_ID, { perPage: 10 })
  return listed.hash
}

async function main() {
  await resolveAuth()
  await writeGithubEnv('CLOUDFLARE_IMAGES_AUTH_OK=1')
  const candidates = await walk(ROOT)
  const files = []
  for (const file of candidates) {
    if (await isRasterImageFile(file)) {
      files.push(file)
      continue
    }
    console.log(`SKIP ${customId(file)} (not a raster image)`)
  }
  if (files.length === 0) {
    console.error(`No raster images found under ${ROOT}`)
    process.exit(1)
  }

  let hash
  let failed = 0
  for (const file of files) {
    const result = await upload(file)
    const alreadyExists =
      result.status === 409 ||
      result.json?.errors?.some((error) => error?.code === 5408 || /already exist/i.test(error?.message ?? ''))
    const ok = result.json?.success === true
    if (alreadyExists) {
      console.log(`EXISTS ${result.id}`)
      continue
    }
    if (!ok) {
      failed += 1
      console.error(
        `FAIL ${result.id}: ${result.status}`,
        JSON.stringify(result.json?.errors || result.json),
      )
      if (result.status === 401 || result.status === 403) {
        console.warn('Cloudflare Images rejected the token; stopping further uploads.')
        await writeGithubEnv('CLOUDFLARE_IMAGES_AUTH_OK=0')
        process.exit(0)
      }
      continue
    }
    if (!hash) {
      hash = parseDeliveryHash(result.json.result?.variants?.[0])
    }
    console.log(`OK ${result.id}`)
  }

  if (!hash) {
    hash = await fetchAccountHash()
  }

  if (hash) {
    console.log(`\nNEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=${hash}`)
    console.log(`CLOUDFLARE_IMAGES_HASH=${hash}`)
    if (WRITE_HASH) {
      await writeFile(
        HASH_FILE,
        `/**
 * Written by scripts/upload-cloudflare-images.mjs --write-hash.
 * Do not default the Siena team hash — Arroyo custom IDs 404 until uploaded.
 */
export const GENERATED_CLOUDFLARE_IMAGES_HASH: string | undefined = ${JSON.stringify(hash)}
`,
      )
      console.log(`Wrote ${path.relative(path.join(ROOT, '..', '..'), HASH_FILE)}`)
    }
  } else {
    console.log(
      '\nCould not parse account hash from variants. Copy it from Cloudflare → Images → Developer Resources.',
    )
  }

  if (failed > 0) {
    process.exit(1)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
