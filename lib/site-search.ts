/** Google crawls this SearchAction placeholder as a literal query string. */
export const SEARCH_TERM_PLACEHOLDER = '{search_term_string}'

export function siteSearchQuery(
  raw: string | string[] | undefined,
): string {
  const value = Array.isArray(raw) ? raw[0] : raw
  const trimmed = typeof value === 'string' ? value.trim() : ''
  if (!trimmed || trimmed === SEARCH_TERM_PLACEHOLDER) {
    return ''
  }
  return trimmed.slice(0, 120)
}
