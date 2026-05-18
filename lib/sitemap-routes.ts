import type { MetadataRoute } from 'next'
import { SITE_URL } from './site-url'

/**
 * Sitemap intent tiers for SEO, local/geo discovery, and AEO (answerable pages).
 * Priority/changeFrequency are hints; accurate canonical URLs and lastModified matter most.
 */
export type SitemapTier =
  | 'core'
  | 'geo-community'
  | 'geo-market'
  | 'aeo-faq'
  | 'aeo-guide'
  | 'blog'
  | 'conversion'
  | 'legal'

type SitemapRouteDef = {
  path: string
  tier: SitemapTier
  /** Override default changeFrequency for this path */
  changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']
  /** Override default priority for this path */
  priority?: number
}

const TIER_DEFAULTS: Record<
  SitemapTier,
  Pick<MetadataRoute.Sitemap[number], 'changeFrequency' | 'priority'>
> = {
  core: { changeFrequency: 'weekly', priority: 1 },
  'geo-community': { changeFrequency: 'weekly', priority: 0.9 },
  'geo-market': { changeFrequency: 'weekly', priority: 0.85 },
  'aeo-faq': { changeFrequency: 'monthly', priority: 0.88 },
  'aeo-guide': { changeFrequency: 'monthly', priority: 0.85 },
  blog: { changeFrequency: 'monthly', priority: 0.75 },
  conversion: { changeFrequency: 'weekly', priority: 0.8 },
  legal: { changeFrequency: 'yearly', priority: 0.3 },
}

/** Stable lastModified for rarely updated legal/policy pages (ISO date). */
const LEGAL_LAST_MODIFIED = new Date('2025-01-15')

const PUBLIC_ROUTES: SitemapRouteDef[] = [
  // Core
  { path: '/', tier: 'core' },
  { path: '/about-us', tier: 'core' },
  { path: '/contact-us', tier: 'core' },
  { path: '/work-with-dr-jan', tier: 'core', priority: 0.95 },
  { path: '/testimonials', tier: 'conversion' },

  // Geo — communities & Skye Canyon inventory
  { path: '/sierra-at-skyeview', tier: 'geo-community' },
  { path: '/terra-at-skyeview', tier: 'geo-community' },
  { path: '/ironwood', tier: 'geo-community' },
  { path: '/homestead-west', tier: 'geo-community' },
  { path: '/eaglepointe-skye-canyon', tier: 'geo-community' },
  { path: '/find-your-new-home/nevada/las-vegas-metro', tier: 'geo-market', priority: 0.9 },

  // Geo — neighborhoods
  { path: '/neighborhoods/summerlin-las-vegas', tier: 'geo-community' },
  { path: '/neighborhoods/henderson-las-vegas', tier: 'geo-community' },
  { path: '/neighborhoods/centennial-hills', tier: 'geo-community' },
  { path: '/neighborhoods/southwest-las-vegas', tier: 'geo-community' },
  { path: '/neighborhoods/north-las-vegas', tier: 'geo-community' },

  // Geo — ZIP / hyperlocal
  { path: '/areas/zip-89166', tier: 'geo-community', priority: 0.92 },
  { path: '/areas/zip-89128', tier: 'geo-community' },
  { path: '/areas/zip-89135', tier: 'geo-community' },
  { path: '/areas/zip-89144', tier: 'geo-community' },
  { path: '/areas/zip-89117', tier: 'geo-community' },

  // Geo — price & property-type landing pages
  { path: '/homes/single-family-las-vegas', tier: 'geo-market' },
  { path: '/homes/townhomes-las-vegas', tier: 'geo-market' },
  { path: '/homes/under-300k', tier: 'geo-market' },
  { path: '/homes/under-400k', tier: 'geo-market' },
  { path: '/homes/400k-500k', tier: 'geo-market' },
  { path: '/homes/500k-plus', tier: 'geo-market' },

  // AEO — FAQ & answer hubs (high value for AI/snippets)
  { path: '/faq', tier: 'aeo-faq', priority: 0.9 },
  { path: '/faq/las-vegas-hyperlocal', tier: 'aeo-faq', priority: 0.92 },
  { path: '/faq/financing', tier: 'aeo-faq', priority: 0.9 },
  { path: '/faq/inspections', tier: 'aeo-faq', priority: 0.9 },

  // AEO — buyer guides & process
  { path: '/homebuying-process', tier: 'aeo-guide' },
  { path: '/online-homebuying', tier: 'aeo-guide', priority: 0.88 },
  { path: '/resources', tier: 'aeo-guide' },
  { path: '/buyers/first-time-homebuyer', tier: 'aeo-guide', priority: 0.88 },
  { path: '/buyers/builder-incentives-guide', tier: 'aeo-guide', priority: 0.88 },
  { path: '/buyers/moving-to-las-vegas', tier: 'aeo-guide', priority: 0.88 },
  { path: '/buyers/financing-new-construction', tier: 'aeo-guide' },
  { path: '/buyers/new-construction-vs-resale', tier: 'aeo-guide' },
  { path: '/buyers/closing-process-guide', tier: 'aeo-guide' },
  { path: '/buyers/inspections-new-construction', tier: 'aeo-guide' },

  // Services
  { path: '/services/buyer-representation', tier: 'aeo-guide', priority: 0.88 },
  { path: '/services/construction-monitoring', tier: 'aeo-guide', priority: 0.88 },
  { path: '/services/building-standards-inspection', tier: 'aeo-guide', priority: 0.88 },

  // Blog / market insights
  { path: '/blog/housing-market-crash-2025', tier: 'blog' },
  { path: '/blog/buying-home-with-student-loans', tier: 'blog' },
  { path: '/blog/market-passed-you-by', tier: 'blog' },
  { path: '/blog/sale-crosses-finish-line', tier: 'blog' },
  { path: '/blog/new-home-inventory-2x', tier: 'blog' },

  // Legal (low priority, infrequent updates)
  { path: '/legal', tier: 'legal' },
  { path: '/privacy-policy', tier: 'legal' },
  { path: '/terms-of-use', tier: 'legal' },
  { path: '/accessibility', tier: 'legal' },
]

export function buildSitemapEntries(
  generatedAt: Date = new Date(),
): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => {
    const defaults = TIER_DEFAULTS[route.tier]
    const lastModified = route.tier === 'legal' ? LEGAL_LAST_MODIFIED : generatedAt

    return {
      url: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency ?? defaults.changeFrequency,
      priority: route.priority ?? defaults.priority,
    }
  })
}
