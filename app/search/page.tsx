import type { Metadata } from 'next'
import Link from 'next/link'
import MarketingPageShell from '../components/marketing-page-shell'
import PageSchemas from '../components/page-schemas'
import { PageContent } from '../components/page-section'
import RealScoutOfficeWidget from '../components/realscout-office-widget'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'
import { siteSearchQuery } from '@/lib/site-search'

type SearchPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const params = await searchParams
  const query = siteSearchQuery(params.q)
  const title = query
    ? `Search “${query}” | Arroyo at Skyeview Las Vegas`
    : 'Search Homes | Arroyo at Skyeview, Skye Canyon Las Vegas 89166'
  const description = query
    ? `Live MLS results and buyer guides matching “${query}” for Skye Canyon and northwest Las Vegas. Call ${SITE_CONTACT.phoneDisplay}.`
    : `Search new construction and resale homes in Skye Canyon ZIP 89166 with Dr. Jan Duffy. Live MLS via RealScout. Call ${SITE_CONTACT.phoneDisplay}.`

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/search`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/search`,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Arroyo at Skyeview at Skye Canyon',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const GUIDE_LINKS = [
  { href: '/arroyo-at-skyeview/available-homes', label: 'Available homes at Arroyo' },
  { href: '/faq/financing', label: 'Financing FAQ' },
  { href: '/faq/inspections', label: 'Inspections FAQ' },
  { href: '/buyers/closing-process-guide', label: 'Closing process' },
  { href: '/schedule', label: 'Schedule a consultation' },
] as const

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const query = siteSearchQuery(params.q)

  return (
    <MarketingPageShell
      schema={
        <PageSchemas
          pageType="property-type"
          url="/search"
          title="Search Las Vegas homes | Arroyo at Skyeview"
          description="Search new construction and MLS listings in Skye Canyon and northwest Las Vegas with buyer representation from Dr. Jan Duffy."
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Search', url: '/search' },
          ]}
        />
      }
    >
      <PageContent>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {query ? `Search results for “${query}”` : 'Search Skye Canyon and Las Vegas homes'}
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Live MLS listings via RealScout. Dr. Jan Duffy represents buyers—not the
          builder—at Arroyo at Skyeview in Skye Canyon ZIP 89166. Call{' '}
          <a
            className="font-semibold text-primary hover:underline"
            href={`tel:${SITE_CONTACT.phoneTel}`}
          >
            {SITE_CONTACT.phoneDisplay}
          </a>
          .
        </p>

        <form action="/search" method="get" className="mt-8 flex max-w-xl gap-2" role="search">
          <label htmlFor="site-search-q" className="sr-only">
            Search homes
          </label>
          <input
            id="site-search-q"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="City, ZIP, or neighborhood"
            className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Search
          </button>
        </form>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {GUIDE_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold text-primary hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </PageContent>

      <RealScoutOfficeWidget
        heading="Live MLS listings"
        description="Filter by price and property type, then book a private tour with Dr. Jan Duffy."
      />
      <DrJanCTABanner context="search" />
    </MarketingPageShell>
  )
}
