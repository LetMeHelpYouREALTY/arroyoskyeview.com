import type { MetadataRoute } from 'next'
import { buildSitemapEntries } from '@/lib/sitemap-routes'

/** Regenerate sitemap daily so lastModified reflects fresh crawl signals. */
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries()
}
