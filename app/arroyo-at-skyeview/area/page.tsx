import type { Metadata } from 'next'
import Link from 'next/link'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import AreaInformation from '../../components/area-information'
import NeighborhoodLinksSection from '../../components/neighborhood-links-section'
import NearbyAmenitiesSection from '../../components/nearby-amenities-section'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import { PageContent } from '../../components/page-section'
import { ARROYO_BASE_BREADCRUMB } from '@/lib/arroyo-inventory'
import { arroyoHubSeo } from '@/lib/arroyo-hub-seo'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/area'
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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Skye Canyon area near Arroyo at Skyeview' }],
  },
}

export default function ArroyoAreaPage() {
  return (
    <MarketingPageShell
      showContactCta
      schema={
        <PageSchemas
          pageType="neighborhood"
          url={PATH}
          title={SEO.title}
          description={SEO.description}
          breadcrumbs={[
            ARROYO_BASE_BREADCRUMB,
            { name: 'Area Information', url: PATH },
          ]}
          location="Skye Canyon"
          zipCode="89166"
          questions={[
            {
              question: 'What schools serve Arroyo at Skyeview in zip code 89166?',
              answer:
                'Arroyo at Skyeview is served by Clark County School District schools including Roger Bryan Elementary, Sig Rogich Middle School, and Shadow Ridge High School. The area is popular with families prioritizing education quality.',
            },
            {
              question: 'What amenities are available in Skye Canyon near Arroyo at Skyeview?',
              answer:
                'Skye Canyon features a recreation center, fitness facilities, 15-acre Skye Canyon Park, trails, splash pads, sports courts, and community events across 1,700 acres. Red Rock Canyon is approximately 15 minutes away.',
            },
          ]}
        />
      }
    >
      <LuxuryPageHero
        eyebrow="Skye Canyon · Zip 89166"
        title="Area & Schools"
        subtitle="Northwest Las Vegas living with top schools, Skye Canyon amenities, and Red Rock Canyon in your backyard."
      >
        <p className="mt-6 max-w-2xl text-sm text-luxury-sand">
          For a deeper zip-level market profile, see our{' '}
          <Link href="/areas/zip-89166" className="font-medium text-luxury-champagne underline underline-offset-2 hover:text-luxury-ivory">
            Skye Canyon 89166 area page
          </Link>
          .
        </p>
      </LuxuryPageHero>
      <ArroyoHubNav currentPath={PATH} />
      <PageContent>
        <AreaInformation />
      </PageContent>
      <NearbyAmenitiesSection
        title="Map: Life Near Arroyo at Skyeview"
        subtitle="Filter restaurants, groceries, parks, schools, and healthcare around zip 89166—same map as our full amenities guide."
      />
      <NeighborhoodLinksSection location="Skye Canyon" zipCode="89166" />
    </MarketingPageShell>
  )
}
