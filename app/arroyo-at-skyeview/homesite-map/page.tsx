import type { Metadata } from 'next'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import HomesiteMap from '../../components/homesite-map'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import { PageContent } from '../../components/page-section'
import { ARROYO_BASE_BREADCRUMB } from '@/lib/arroyo-inventory'
import { arroyoHubSeo } from '@/lib/arroyo-hub-seo'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/homesite-map'
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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview homesite map' }],
  },
}

export default function ArroyoHomesiteMapPage() {
  return (
    <MarketingPageShell
      showContactCta
      schema={
        <PageSchemas
          pageType="community"
          url={PATH}
          title={SEO.title}
          description={SEO.description}
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
      }
    >
      <LuxuryPageHero
        eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
        title="Homesite Map"
        subtitle="See lot positions, end units, and courtyard entries across the Arroyo at Skyeview community."
      />
      <ArroyoHubNav currentPath={PATH} />
      <PageContent>
        <HomesiteMap />
      </PageContent>
    </MarketingPageShell>
  )
}
