/**
 * Follow Up Boss Pixel (Widget Tracker) — Home Activity + website tracking.
 * Pixel ID from FUB Admin → Integrations → Follow Up Boss Pixel (WT-XXXXXXX).
 * Same team pixel as other Dr. Jan Duffy sites (Berkshire Hathaway HomeServices).
 */
const DEFAULT_FUB_PIXEL_ID = 'WT-XQHVYQWW'

export function getFubPixelId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_FUB_PIXEL_ID?.trim()
  if (id) {
    return id
  }
  return DEFAULT_FUB_PIXEL_ID
}

export function isFubPixelEnabled(): boolean {
  return Boolean(getFubPixelId())
}

export function getFubPixelScriptUrl(pixelId: string): string {
  return `https://widget.followupboss.com/${pixelId}.js`
}
