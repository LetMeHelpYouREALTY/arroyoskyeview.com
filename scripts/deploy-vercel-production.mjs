/**
 * Production-deploy this SHA on the Arroyo Vercel project after go-live
 * secrets actually land (Images hash, Images token, and/or Calendly PAT).
 * An Images token alone is enough: `npm run build` runs
 * ensure-cloudflare-images.mjs on Vercel (needed when GitHub runners are
 * IP-blocked with Cloudflare 9109).
 *
 * Vercel Git is still linked to DrJanDuffy/arroyoskyeview.com, so GitHub
 * Vercel Deploy is main-only. Zapier create-deployment worked with
 * gitOrg LetMeHelpYouREALTY + gitRef + gitSha; this uses the same shape.
 *
 * POST /v13/deployments
 * https://vercel.com/docs/rest-api/reference/endpoints/deployments/create-a-new-deployment
 *
 * Do not orange-cloud the Vercel apex.
 */
const TEAM_ID = process.env.VERCEL_ORG_ID || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const PROJECT_ID = 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'
const TOKEN = process.env.VERCEL_TOKEN?.trim()
const GIT_ORG = 'LetMeHelpYouREALTY'
const GIT_REPO = 'arroyoskyeview.com'
const REF = process.env.GITHUB_REF_NAME?.trim() || process.env.GITHUB_REF?.replace(/^refs\/heads\//, '')
const SHA = process.env.GITHUB_SHA?.trim()

function hasGoLivePayload() {
  const imagesHash =
    process.env.CLOUDFLARE_IMAGES_HASH?.trim() ||
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim()
  const imagesToken = process.env.CLOUDFLARE_API_TOKEN?.trim()
  const calendly =
    process.env.CALENDLY_API_TOKEN?.trim() ||
    process.env.CALENDLY_PERSONAL_ACCESS_TOKEN?.trim() ||
    process.env.CALENDLY_PAT?.trim()
  return {
    imagesHash: Boolean(imagesHash),
    imagesToken: Boolean(imagesToken),
    calendly: Boolean(calendly),
  }
}

async function main() {
  if (!TOKEN) {
    console.log('Skip production deploy: VERCEL_TOKEN is not set.')
    return
  }

  const landed = hasGoLivePayload()
  if (!landed.imagesHash && !landed.imagesToken && !landed.calendly) {
    console.log(
      'Skip production deploy: no CLOUDFLARE_IMAGES_HASH, CLOUDFLARE_API_TOKEN, or CALENDLY_API_TOKEN.',
    )
    return
  }

  if (!REF || !SHA || SHA.length < 40) {
    console.log('Skip production deploy: GITHUB_SHA / branch ref missing.')
    return
  }

  const url = new URL('https://api.vercel.com/v13/deployments')
  url.searchParams.set('teamId', TEAM_ID)
  url.searchParams.set('forceNew', '1')

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'arroyoskyeview.com',
      project: PROJECT_ID,
      target: 'production',
      gitSource: {
        type: 'github',
        org: GIT_ORG,
        repo: GIT_REPO,
        ref: REF,
        sha: SHA,
      },
    }),
  })

  const json = await res.json().catch(() => null)
  const id = typeof json?.id === 'string' ? json.id : ''
  const readyState = typeof json?.readyState === 'string' ? json.readyState : ''
  const error = json?.error?.message || json?.errorCode || ''
  console.log(
    `Vercel production deploy HTTP ${res.status} id=${id || 'none'} state=${readyState || 'n/a'} imagesHash=${landed.imagesHash} imagesToken=${landed.imagesToken} calendly=${landed.calendly}${error ? ` error=${String(error).slice(0, 160)}` : ''}`,
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(0)
})
