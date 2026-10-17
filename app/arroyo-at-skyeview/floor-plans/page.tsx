import type { Metadata } from 'next'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import FloorPlans from '../../components/floor-plans'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import ProductSchemas from '../../components/product-schemas'
import { PageContent } from '../../components/page-section'
import { ARROYO_BASE_BREADCRUMB, ARROYO_FLOOR_PLANS } from '@/lib/arroyo-inventory'
import { arroyoHubSeo } from '@/lib/arroyo-hub-seo'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/floor-plans'
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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview floor plans' }],
  },
}

export default function ArroyoFloorPlansPage() {
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
        </>
      }
    >
      <LuxuryPageHero
        eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
        title="Floor Plans"
        subtitle="Beverly, Captiva, and Delray townhome layouts—compare square footage, bedrooms, and end-unit options."
      />
      <ArroyoHubNav currentPath={PATH} />
      <PageContent>
        <FloorPlans />
      </PageContent>
    </MarketingPageShell>
  )
}
