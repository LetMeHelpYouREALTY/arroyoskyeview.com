import type { Metadata } from 'next'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import AvailableHomes from '../../components/available-homes'
import AlreadyTaken from '../../components/already-taken'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import ProductSchemas from '../../components/product-schemas'
import { PageContent } from '../../components/page-section'
import {
  ARROYO_AVAILABLE_HOMES,
  ARROYO_BASE_BREADCRUMB,
  ARROYO_PRICE_RANGE,
} from '@/lib/arroyo-inventory'
import { arroyoHubSeo } from '@/lib/arroyo-hub-seo'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/available-homes'
const SEO = arroyoHubSeo(PATH)

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: absoluteUrl(PATH),
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview available homes' }],
  },
}

export default function ArroyoAvailableHomesPage() {
  return (
    <MarketingPageShell
      showContactCta
      schema={
        <>
          <PageSchemas
            pageType="community"
            url={PATH}
            title={SEO.title}
            description={SEO.description}
            breadcrumbs={[
              ARROYO_BASE_BREADCRUMB,
              { name: 'Available Homes', url: PATH },
            ]}
            communityName="Arroyo at Skyeview"
            location="Skye Canyon"
            zipCode="89166"
            priceRange={ARROYO_PRICE_RANGE}
            questions={[
              {
                question: 'What homes are currently available at Arroyo at Skyeview?',
                answer:
                  'Arroyo at Skyeview has move-in ready townhomes on Grabill Spruce Street in Skye Canyon, zip 89166. Inventory includes Beverly, Captiva, and Delray floor plans with prices from $392,640. Contact Dr. Jan Duffy at (702) 903-4687 for real-time availability.',
              },
              {
                question: 'What are the prices for available homes at Arroyo at Skyeview?',
                answer: `Current available homes at Arroyo at Skyeview range from ${ARROYO_PRICE_RANGE}, depending on floor plan, lot, and finishes. Builder incentives may reduce your effective cost—Dr. Jan Duffy tracks current promotions.`,
              },
            ]}
          />
          <ProductSchemas homes={[...ARROYO_AVAILABLE_HOMES]} />
        </>
      }
    >
      <LuxuryPageHero
        eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
        title="Available Homes"
        subtitle="Move-in ready townhomes on Grabill Spruce St with builder incentives and buyer representation from Dr. Jan Duffy."
      />
      <ArroyoHubNav currentPath={PATH} />
      <PageContent>
        <AvailableHomes />
        <div className="mt-12">
          <AlreadyTaken />
        </div>
      </PageContent>
    </MarketingPageShell>
  )
}
