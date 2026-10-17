/** Server-rendered JSON-LD: escape `<` so scripts cannot break out of the tag. */
export function jsonLdHtml(schema: Record<string, unknown> | unknown[]): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}
