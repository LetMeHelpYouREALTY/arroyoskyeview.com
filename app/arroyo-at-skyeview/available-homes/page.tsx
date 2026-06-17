import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import AvailableHomes from '../../components/available-homes'
import AlreadyTaken from '../../components/already-taken'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import PageSchemas from '../../components/page-schemas'
import ProductSchemas from '../../components/product-schemas'
import {
  ARROYO_AVAILABLE_HOMES,
  ARROYO_BASE_BREADCRUMB,
  ARROYO_PRICE_RANGE,
} from '@/lib/arroyo-inventory'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/available-homes'

export const metadata: Metadata = {
  title: 'Available Homes at Arroyo at Skyeview | Move-In Ready Townhomes, Skye Canyon 89166',
  description:
    'Browse move-in ready townhomes at Arroyo at Skyeview on Grabill Spruce St, Skye Canyon, northwest Las Vegas (zip 89166). Prices from $392,640. Dr. Jan Duffy represents buyers—call (702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Available Homes at Arroyo at Skyeview | Skye Canyon Las Vegas',
    description:
      'Move-in ready new construction townhomes at Arroyo at Skyeview in Skye Canyon, zip 89166. Expert buyer representation from Dr. Jan Duffy.',
    url: absoluteUrl(PATH),
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview available homes' }],
  },
}

export default function ArroyoAvailableHomesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="community"
        url={PATH}
        title="Available Homes at Arroyo at Skyeview | New Construction Townhomes in Skye Canyon, Las Vegas NV 89166"
        description="Browse available move-in ready townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Prices from $392,640 with expert buyer representation from Dr. Jan Duffy."
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
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <LuxuryPageHero
          eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
          title="Available Homes"
          subtitle="Move-in ready townhomes on Grabill Spruce St with builder incentives and buyer representation from Dr. Jan Duffy."
        />
        <ArroyoHubNav currentPath={PATH} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <AvailableHomes />
          <div className="mt-12">
            <AlreadyTaken />
          </div>
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
