/**
 * Upload site rasters to Cloudflare Images during `npm run build`.
 *
 * 1. Probe imagedelivery.net custom IDs (no token). If every manifest
 *    path returns 200, write the public hash so SiteImage SSR points at
 *    imagedelivery.net — this is how the hosted-images Worker (Images
 *    binding, no IP-allowlisted REST token) lands in production HTML.
 * 2. If a REST token is present, try POST /images/v1 (may 401/9109).
 * 3. Probe again after upload.
 *
 * Upload failures do not fail the site build.
 */
import { spawnSync } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const TEAM_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const PROBE_HASH =
  process.env.CLOUDFLARE_IMAGES_HASH?.trim() ||
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() ||
  TEAM_HASH
const ROOT = path.dirname(fileURLToPath(import.meta.url))
const HASH_FILE = path.join(ROOT, '..', 'lib', 'cloudflare-images-hash.generated.ts')
const MANIFEST = path.join(ROOT, '..', 'lib', 'cloudflare-image-manifest.ts')

function customId(localPath) {
  return localPath.replace(/^\/+/, '').replace(/\.[^.]+$/, '')
}

async function readManifestPaths() {
  const src = await readFile(MANIFEST, 'utf8')
  return [...src.matchAll(/'(\/images\/[^']+)'/g)].map((match) => match[1])
}

async function deliveryStatus(hash, imageId) {
  const url = `https://imagedelivery.net/${hash}/${imageId}/public`
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: { Range: 'bytes=0-0' },
      signal: AbortSignal.timeout(8000),
    })
    return res.status
  } catch {
    return 0
  }
}

async function writeGithubEnv(hash) {
  const githubEnv = process.env.GITHUB_ENV
  if (!githubEnv) {
    return
  }
  await writeFile(
    githubEnv,
    `CLOUDFLARE_IMAGES_HASH=${hash}\nNEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=${hash}\n`,
    { flag: 'a' },
  )
  console.log('Exported Cloudflare Images hash to GITHUB_ENV for production deploy')
}

async function writeGeneratedHash(hash) {
  await writeFile(
    HASH_FILE,
    `/**
 * Written by scripts/ensure-cloudflare-images.mjs after Arroyo custom IDs
 * returned HTTP 200 on imagedelivery.net.
 */
export const GENERATED_CLOUDFLARE_IMAGES_HASH: string | undefined = ${JSON.stringify(hash)}
`,
  )
  console.log(`Wrote Cloudflare Images hash ${hash} to lib/cloudflare-images-hash.generated.ts`)
  await writeGithubEnv(hash)
}

async function probeAndWriteHash() {
  const paths = await readManifestPaths()
  if (paths.length === 0) {
    console.warn('Cloudflare Images manifest had no /images paths')
    return false
  }
  const statuses = await Promise.all(
    paths.map((localPath) => deliveryStatus(PROBE_HASH, customId(localPath))),
  )
  const ready = statuses.filter((status) => status === 200).length
  console.log(
    `Cloudflare Images custom IDs: ${ready}/${paths.length} HTTP 200 on ${PROBE_HASH}`,
  )
  if (ready === paths.length) {
    await writeGeneratedHash(PROBE_HASH)
    return true
  }
  return false
}

function tryRestUpload() {
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  if (!token) {
    console.log('Skipping Cloudflare Images REST upload (CLOUDFLARE_API_TOKEN unset)')
    return
  }
  const authOk = process.env.CLOUDFLARE_IMAGES_AUTH_OK?.trim()
  if (authOk === 'location-restricted' || authOk === '0' || authOk === 'rate-limited') {
    console.log(`Skipping Cloudflare Images REST upload (CLOUDFLARE_IMAGES_AUTH_OK=${authOk})`)
    return
  }
  const script = path.join(ROOT, 'upload-cloudflare-images.mjs')
  const result = spawnSync(process.execPath, [script, '--write-hash'], {
    stdio: 'inherit',
    env: process.env,
  })
  if (result.status !== 0) {
    console.warn(
      'Cloudflare Images REST upload did not complete; continuing the site build.',
    )
  }
}

const alreadyReady = await probeAndWriteHash()
if (!alreadyReady) {
  tryRestUpload()
  await probeAndWriteHash()
}

process.exit(0)
