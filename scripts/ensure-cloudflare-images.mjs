/**
 * Upload site rasters to Cloudflare Images during `npm run build` when
 * CLOUDFLARE_API_TOKEN is present (Vercel Production env). Writes the
 * public account hash so middleware and SiteImage can serve imagedelivery.net
 * from that deployment without a second env round-trip.
 *
 * Skips (exit 0) when the token is missing so local/preview builds still work.
 * Upload failures do not fail the site build.
 */
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const TOKEN = process.env.CLOUDFLARE_API_TOKEN?.trim()
if (!TOKEN) {
  console.log('Skipping Cloudflare Images upload (CLOUDFLARE_API_TOKEN unset)')
  process.exit(0)
}

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'upload-cloudflare-images.mjs')
const result = spawnSync(process.execPath, [script, '--write-hash'], {
  stdio: 'inherit',
  env: process.env,
})

if (result.status !== 0) {
  console.warn(
    'Cloudflare Images upload did not complete; continuing the site build with local /images fallback.',
  )
}

process.exit(0)
