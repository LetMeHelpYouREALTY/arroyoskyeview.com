/** Canonical production origin (www + HTTPS). Matches middleware and metadataBase. */
export const SITE_URL = 'https://www.arroyoskyeview.com'

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
