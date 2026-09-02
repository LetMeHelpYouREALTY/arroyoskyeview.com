/**
 * RealScout embed: office listings widget (realscout-office-listings).
 * Uses realscout-web-components.umd.js in root layout (not dl.js).
 */
export const REALSCOUT_AGENT_ENCODED_ID =
  process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID ?? 'QWdlbnQtMjI1MDUw'

/** Matches RealScout embed generator defaults unless overridden by env */
export const REALSCOUT_OFFICE_SORT_ORDER =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_SORT_ORDER ?? 'PRICE_LOW'

export const REALSCOUT_OFFICE_LISTING_STATUS =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_LISTING_STATUS ?? 'For Sale'

/** Leading comma is intentional per RealScout embed */
export const REALSCOUT_OFFICE_PROPERTY_TYPES =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PROPERTY_TYPES ?? ',SFR'

export const REALSCOUT_OFFICE_PRICE_MIN =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PRICE_MIN ?? '500000'

export const REALSCOUT_OFFICE_PRICE_MAX =
  process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_PRICE_MAX ?? '800000'

/** Presets for multi-band MLS sections (replaces hero carousels) */
export type RealScoutPriceBand = {
  id: string
  title: string
  description: string
  priceMin: string
  priceMax: string
}

export const REALSCOUT_OFFICE_PRICE_BANDS: RealScoutPriceBand[] = [
  {
    id: 'under-400k',
    title: 'Under $400,000',
    description: 'Affordable single-family and townhome options across the Las Vegas valley.',
    priceMin: '150000',
    priceMax: '399999',
  },
  {
    id: '400-500k',
    title: '$400,000 – $500,000',
    description: 'Mid-range new and resale homes in Skye Canyon and nearby communities.',
    priceMin: '400000',
    priceMax: '499999',
  },
  {
    id: '500-800k',
    title: '$500,000 – $800,000',
    description: 'Move-up homes and larger floor plans — aligns with many new construction neighborhoods.',
    priceMin: '500000',
    priceMax: '800000',
  },
  {
    id: '800k-plus',
    title: '$800,000 and above',
    description: 'Luxury and estate-style inventory across Las Vegas and Henderson.',
    priceMin: '800000',
    priceMax: '35000000',
  },
]

/**
 * Routes that render `RealScoutOfficePriceBands` (multi-band MLS). The footer
 * omits the default single-band RealScout strip on these paths to avoid duplicate
 * embeds. Add a path when you place `<RealScoutOfficePriceBands />` on a page.
 */
export const REALSCOUT_PRICE_BANDS_ROUTE_PATHS: ReadonlySet<string> = new Set([
  '/',
  '/sierra-at-skyeview',
  '/terra-at-skyeview',
  '/ironwood',
  '/homestead-west',
  '/eaglepointe-skye-canyon',
  '/homebuying-process',
])
