import type { Metadata } from 'next'
import Link from 'next/link'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import AreaInformation from '../../components/area-information'
import NeighborhoodLinksSection from '../../components/neighborhood-links-section'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import { PageContent } from '../../components/page-section'
import { ARROYO_BASE_BREADCRUMB } from '@/lib/arroyo-inventory'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/area'

export const metadata: Metadata = {
  title: 'Skye Canyon Area Guide | Schools, Amenities & Life Near Arroyo at Skyeview 89166',
  description:
    'Area information for Arroyo at Skyeview in Skye Canyon, zip 89166—schools, parks, shopping, Red Rock Canyon access, and northwest Las Vegas lifestyle. Dr. Jan Duffy—(702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Skye Canyon Area Guide | Arroyo at Skyeview Las Vegas',
    description:
      'Schools, amenities, and outdoor recreation near Arroyo at Skyeview in Skye Canyon, northwest Las Vegas zip 89166.',
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
          title="Skye Canyon Area Guide | Schools, Amenities & Recreation Near Arroyo at Skyeview, Las Vegas NV 89166"
          description="Explore schools, shopping, parks, and outdoor recreation near Arroyo at Skyeview in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166)."
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
      <NeighborhoodLinksSection location="Skye Canyon" zipCode="89166" />
    </MarketingPageShell>
  )
}
