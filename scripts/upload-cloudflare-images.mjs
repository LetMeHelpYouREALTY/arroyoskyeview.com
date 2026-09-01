/**
 * Upload public/images assets to Cloudflare Images using custom IDs that
 * match lib/cloudflare-images.ts (e.g. images/hero/hero-5).
 *
 * Based on Cloudflare Images API (docs updated 2026-04-21):
 * POST https://api.cloudflare.com/client/v4/accounts/{account_id}/images/v1
 * https://developers.cloudflare.com/images/storage/upload-images/methods/
 * Custom IDs: https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *
 * Requires CLOUDFLARE_API_TOKEN (Account · Cloudflare Images · Edit).
 * CLOUDFLARE_ACCOUNT_ID defaults to the team Images account used by
 * sienalasvegas.com / villagestulesprings (public account id).
 * After a successful run, `npm run build` writes the hash into
 * lib/cloudflare-images-hash.generated.ts (--write-hash) so delivery
 * works without a separate NEXT_PUBLIC env var. You can still set
 * CLOUDFLARE_IMAGES_HASH on Vercel for runtime middleware rewrites.
 *
 * Do not orange-cloud the Vercel apex. Images belong on imagedelivery.net
 * (or a gray-cloud images.arroyoskyeview.com custom host).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isRasterImageFile } from './raster-image.mjs'

/** Public Cloudflare account id (Images) shared across Dr. Jan Duffy sites. */
const DEFAULT_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || DEFAULT_ACCOUNT_ID
const TOKEN = process.env.CLOUDFLARE_API_TOKEN
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])

if (!TOKEN) {
  console.error(
    'Set CLOUDFLARE_API_TOKEN (Images:Edit), then rerun:\n  npm run images:upload',
  )
  process.exit(1)
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

async function upload(filePath) {
  const id = customId(filePath)
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

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}` },
      body: form,
    },
  )
  const json = await res.json()
  return { id, status: res.status, json }
}

async function fetchAccountHash() {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1?per_page=1`,
    { headers: { Authorization: `Bearer ${TOKEN}` } },
  )
  const json = await res.json()
  const variant = json?.result?.images?.[0]?.variants?.[0]
  if (typeof variant === 'string') {
    const match = variant.match(/imagedelivery\.net\/([^/]+)\//)
    return match?.[1]
  }
  return undefined
}

async function main() {
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
      continue
    }
    const variant = result.json.result?.variants?.[0]
    if (!hash && typeof variant === 'string') {
      const match = variant.match(/imagedelivery\.net\/([^/]+)\//)
      hash = match?.[1]
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
