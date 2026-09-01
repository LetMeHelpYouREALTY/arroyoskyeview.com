import { cloudflareCustomId } from '@/lib/cloudflare-images'

/** Public Cloudflare account id (Images) shared across Dr. Jan Duffy sites. */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'

export type CloudflareImageUploadResult = {
  id: string
  status: number
  ok: boolean
  exists: boolean
  hash?: string
}

function parseHash(variant: unknown): string | undefined {
  if (typeof variant !== 'string') {
    return undefined
  }
  const match = variant.match(/imagedelivery\.net\/([^/]+)\//)
  return match?.[1]
}

export async function uploadCloudflareImageFromUrl(options: {
  token: string
  accountId: string
  localPath: string
  sourceUrl: string
}): Promise<CloudflareImageUploadResult> {
  const id = cloudflareCustomId(options.localPath)
  const form = new FormData()
  form.append('url', options.sourceUrl)
  form.append('id', id)
  form.append('requireSignedURLs', 'false')

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${options.accountId}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${options.token}` },
      body: form,
    },
  )

  const json: {
    success?: boolean
    errors?: Array<{ code?: number; message?: string }>
    result?: { variants?: string[] }
  } = await res.json().catch(() => ({}))

  const exists =
    res.status === 409 ||
    Boolean(
      json.errors?.some(
        (error) => error.code === 5408 || /already exist/i.test(error.message ?? ''),
      ),
    )
  const ok = json.success === true || exists
  const hash = parseHash(json.result?.variants?.[0])

  return { id, status: res.status, ok, exists, hash }
}
