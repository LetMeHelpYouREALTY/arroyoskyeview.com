import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import FloorPlans from '../../components/floor-plans'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import PageSchemas from '../../components/page-schemas'
import ProductSchemas from '../../components/product-schemas'
import { ARROYO_BASE_BREADCRUMB, ARROYO_FLOOR_PLANS } from '@/lib/arroyo-inventory'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/floor-plans'

export const metadata: Metadata = {
  title: 'Floor Plans at Arroyo at Skyeview | Beverly, Captiva & Delray Townhomes',
  description:
    'Compare Beverly, Captiva, and Delray floor plans at Arroyo at Skyeview in Skye Canyon, Las Vegas 89166. 1,531–1,729 sq ft townhomes with 2.5 baths. Dr. Jan Duffy, buyer\'s agent—(702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Floor Plans at Arroyo at Skyeview | Skye Canyon Las Vegas',
    description:
      'Three townhome floor plans at Arroyo at Skyeview: Beverly, Captiva, and Delray. Expert new construction buyer representation.',
    url: absoluteUrl(PATH),
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview floor plans' }],
  },
}

export default function ArroyoFloorPlansPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="community"
        url={PATH}
        title="Floor Plans at Arroyo at Skyeview | Beverly, Captiva & Delray Townhomes in Skye Canyon, Las Vegas NV"
        description="Explore Beverly, Captiva, and Delray floor plans at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (zip 89166). Townhomes from 1,531 to 1,729 square feet with 2.5 baths and 2-bay garages."
        breadcrumbs={[
          ARROYO_BASE_BREADCRUMB,
          { name: 'Floor Plans', url: PATH },
        ]}
        communityName="Arroyo at Skyeview"
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'What floor plans are available at Arroyo at Skyeview?',
            answer:
              'Arroyo at Skyeview offers three floor plans: the Beverly (1,531 sq ft, 3 bedrooms), the Captiva (1,643 sq ft, 3 bedrooms with loft), and the Delray (1,729 sq ft, 3–4 bedrooms end unit). All include 2.5 bathrooms and 2-bay garages.',
          },
          {
            question: 'How do I choose between Beverly, Captiva, and Delray at Arroyo?',
            answer:
              'The Beverly is the most compact interior unit; Captiva adds a loft for flexible space; Delray is the largest end unit with optional fourth bedroom. Dr. Jan Duffy can walk you through lot availability and which plan fits your lifestyle—call (702) 903-4687.',
          },
        ]}
      />
      <ProductSchemas floorPlans={[...ARROYO_FLOOR_PLANS]} />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <LuxuryPageHero
          eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
          title="Floor Plans"
          subtitle="Beverly, Captiva, and Delray townhome layouts—compare square footage, bedrooms, and end-unit options."
        />
        <ArroyoHubNav currentPath={PATH} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <FloorPlans />
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
