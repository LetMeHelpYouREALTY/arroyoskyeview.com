/**
 * Follow Up Boss Pixel (Widget Tracker) — Home Activity + website tracking.
 * Current loader is widgetbe.com/agent (verified on live Heritage Stonebridge).
 * Pixel ID from FUB Admin → Integrations → Follow Up Boss Pixel (WT-XXXXXXX).
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

export function getFubPixelScriptUrl(): string {
  return 'https://widgetbe.com/agent'
}
