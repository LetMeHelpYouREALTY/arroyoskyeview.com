/**
 * Upsert public Cloudflare Images hash on the Vercel project so middleware
 * can rewrite /_next/image at runtime without a rebuild.
 *
 * Based on Vercel REST API (2026):
 * POST /v10/projects/{id}/env?upsert=true
 */
const TEAM_ID = process.env.VERCEL_ORG_ID || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'

export async function upsertCloudflareImagesHash(hash: string): Promise<boolean> {
  const token = process.env.VERCEL_TOKEN?.trim()
  const value = hash.trim()
  if (!token || !value) {
    return false
  }

  const url = new URL(`https://api.vercel.com/v10/projects/${PROJECT_ID}/env`)
  url.searchParams.set('teamId', TEAM_ID)
  url.searchParams.set('upsert', 'true')

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        key: 'CLOUDFLARE_IMAGES_HASH',
        value,
        type: 'plain',
        target: ['production', 'preview'],
        comment: 'Public Cloudflare Images account hash',
      },
      {
        key: 'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
        value,
        type: 'plain',
        target: ['production', 'preview'],
        comment: 'Public Cloudflare Images account hash',
      },
    ]),
  })

  return res.ok
}
