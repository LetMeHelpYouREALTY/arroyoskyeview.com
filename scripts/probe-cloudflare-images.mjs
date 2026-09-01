/**
 * HEAD Cloudflare Images custom IDs for this site.
 * Usage: node scripts/probe-cloudflare-images.mjs
 * Optional: NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH (defaults to the team hash).
 */
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || 'byE6BTe9lNqo21V57n4aPQ'
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])

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

const files = await walk(ROOT)
let ok = 0
let missing = 0
for (const file of files) {
  const id = customId(file)
  const url = `https://imagedelivery.net/${HASH}/${id}/public`
  const res = await fetch(url, { method: 'HEAD' })
  if (res.ok) {
    ok += 1
    continue
  }
  missing += 1
  console.log(`${res.status} ${id}`)
}

console.log(
  `\nCloudflare Images probe: ${ok} ok, ${missing} missing (hash ${HASH}, ${files.length} files)`,
)
process.exit(missing > 0 ? 1 : 0)
