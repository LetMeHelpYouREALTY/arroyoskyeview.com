import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import HomesiteMap from '../../components/homesite-map'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import PageSchemas from '../../components/page-schemas'
import { ARROYO_BASE_BREADCRUMB } from '@/lib/arroyo-inventory'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/homesite-map'

export const metadata: Metadata = {
  title: 'Homesite Map | Arroyo at Skyeview Lot Locations, Skye Canyon 89166',
  description:
    'Interactive homesite map for Arroyo at Skyeview on Grabill Spruce St, Skye Canyon, Las Vegas 89166. Explore end units, courtyard entries, and lot availability with Dr. Jan Duffy—(702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Homesite Map | Arroyo at Skyeview Skye Canyon',
    description:
      'Explore lot locations and homesite options at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas.',
    url: absoluteUrl(PATH),
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview homesite map' }],
  },
}

export default function ArroyoHomesiteMapPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="community"
        url={PATH}
        title="Homesite Map | Arroyo at Skyeview Lot Locations in Skye Canyon, Las Vegas NV 89166"
        description="View the homesite map for Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (zip 89166). Explore lot locations, end units, and courtyard entries on Grabill Spruce Street."
        breadcrumbs={[
          ARROYO_BASE_BREADCRUMB,
          { name: 'Homesite Map', url: PATH },
        ]}
        communityName="Arroyo at Skyeview"
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'How do I read the Arroyo at Skyeview homesite map?',
            answer:
              'The homesite map shows available and reserved lots along Grabill Spruce Street in Arroyo at Skyeview. End units and courtyard-entry homes are often premium lots—Dr. Jan Duffy can explain which sites match your preferences.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <LuxuryPageHero
          eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
          title="Homesite Map"
          subtitle="See lot positions, end units, and courtyard entries across the Arroyo at Skyeview community."
        />
        <ArroyoHubNav currentPath={PATH} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <HomesiteMap />
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
