import { cloudflareCustomId } from '@/lib/cloudflare-images'
import {
  CLOUDFLARE_IMAGES_CREATOR,
  fetchCloudflareImagesHash,
  parseCloudflareDeliveryHash,
} from '@/lib/cloudflare-images-list'

/** Public Cloudflare account id (Images) shared across Dr. Jan Duffy sites. */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'

export { fetchCloudflareImagesHash }

export type CloudflareImageUploadResult = {
  id: string
  status: number
  ok: boolean
  exists: boolean
  hash?: string
}

function utf8ByteLength(value: string): number {
  return new TextEncoder().encode(value).length
}

function imageMetadata(id: string): string {
  const meta = JSON.stringify({
    git: id,
    site: CLOUDFLARE_IMAGES_CREATOR,
  })
  return utf8ByteLength(meta) <= 1024
    ? meta
    : JSON.stringify({ git: id.slice(0, 200) })
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
  form.append('creator', CLOUDFLARE_IMAGES_CREATOR)
  form.append('metadata', imageMetadata(id))

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
  const hash = parseCloudflareDeliveryHash(json.result?.variants?.[0])

  return { id, status: res.status, ok, exists, hash }
}
