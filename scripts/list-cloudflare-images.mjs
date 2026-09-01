/**
 * List Cloudflare Images for this account (v2, deprecated v1 fallback).
 *
 * Usage:
 *   npm run images:list
 *   npm run images:list -- --creator arroyoskyeview.com
 *   npm run images:list -- --site arroyoskyeview.com
 *
 * Requires CLOUDFLARE_API_TOKEN (Images Read or Images Write).
 */
import {
  cloudflareImagesCredentialWorks,
  uniqueAuthEmails,
} from './cloudflare-images-auth.mjs'
import {
  IMAGES_CREATOR,
  hashFromImages,
  listAllImages,
} from './cloudflare-images-list.mjs'

const ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'

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

function argValue(flag) {
  const index = process.argv.indexOf(flag)
  if (index === -1) {
    return undefined
  }
  const value = process.argv[index + 1]
  return value && !value.startsWith('--') ? value : ''
}

const creatorFlag = process.argv.includes('--creator')
  ? argValue('--creator') ?? IMAGES_CREATOR
  : undefined
const siteFlag = process.argv.includes('--site')
  ? argValue('--site') ?? IMAGES_CREATOR
  : undefined

const tokens = uniqueTokens()
if (tokens.length === 0) {
  console.error('Set CLOUDFLARE_API_TOKEN, then rerun: npm run images:list')
  process.exit(1)
}

const emails = uniqueAuthEmails([
  process.env.CLOUDFLARE_EMAIL?.trim() || process.env.CF_EMAIL?.trim() || '',
])

let headers
for (const token of tokens) {
  const probe = await cloudflareImagesCredentialWorks(token, emails)
  if (probe.locationRestricted) {
    console.error(
      'Token is IP-allowlisted on this machine (9109 from location). List from a Vercel build IP or an unrestricted token.',
    )
    process.exit(0)
  }
  if (probe.ok) {
    headers = probe.headers
    break
  }
  console.log(`Images probe HTTP ${probe.status}`)
}

if (!headers) {
  console.error('No working Cloudflare Images credential (need Images Read or Images Write).')
  process.exit(1)
}

const listed = await listAllImages(headers, ACCOUNT_ID, {
  creator: creatorFlag,
  metaSite: siteFlag,
})

if (!listed.ok) {
  console.error(`List ${listed.api} HTTP ${listed.status} ${listed.message || ''}`.trim())
  process.exit(1)
}

const hash = listed.hash || hashFromImages(listed.images)
console.log(
  `Cloudflare Images list (${listed.api}): ${listed.images.length} image(s)${hash ? ` hash=${hash}` : ''}`,
)
for (const image of listed.images) {
  const id = image?.id || '?'
  const filename = image?.filename || ''
  const uploaded = image?.uploaded || ''
  const variant = Array.isArray(image?.variants) ? image.variants[0] : ''
  console.log([id, filename, uploaded, variant].filter(Boolean).join('\t'))
}

if (hash) {
  console.log(`\nNEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=${hash}`)
  console.log(`CLOUDFLARE_IMAGES_HASH=${hash}`)
}
