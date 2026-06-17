import type { Metadata } from 'next'
import Link from 'next/link'
import LuxuryPageHero from '../../components/luxury-page-hero'
import ArroyoHubNav from '../../components/arroyo-hub-nav'
import Overview from '../../components/overview'
import CommunityContentExpansion from '../../components/community-content-expansion'
import CrossCommunityLinks from '../../components/cross-community-links'
import MarketingPageShell from '../../components/marketing-page-shell'
import PageSchemas from '../../components/page-schemas'
import { PageContent } from '../../components/page-section'
import { ARROYO_BASE_BREADCRUMB, ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/arroyo-at-skyeview/overview'

export const metadata: Metadata = {
  title: 'Arroyo at Skyeview Overview | New Townhomes in Skye Canyon, Las Vegas 89166',
  description:
    'Community overview for Arroyo at Skyeview—Century Communities townhomes in Skye Canyon, northwest Las Vegas (zip 89166). Starting from $392,640. Buyer\'s agent Dr. Jan Duffy—(702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Arroyo at Skyeview Overview | Skye Canyon Las Vegas',
    description:
      'Learn about Arroyo at Skyeview new construction townhomes in Skye Canyon, zip 89166, with expert buyer representation.',
    url: absoluteUrl(PATH),
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Arroyo at Skyeview community overview' }],
  },
}

export default function ArroyoOverviewPage() {
  return (
    <MarketingPageShell
      showContactCta
      schema={
        <PageSchemas
          pageType="community"
          url={PATH}
          title="Arroyo at Skyeview Overview | New Construction Townhomes in Skye Canyon, Northwest Las Vegas NV 89166"
          description="Arroyo at Skyeview is a Century Communities townhome development in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Modern 2–4 bedroom townhomes with premium finishes starting from $392,640."
          breadcrumbs={[
            ARROYO_BASE_BREADCRUMB,
            { name: 'Overview', url: PATH },
          ]}
          communityName="Arroyo at Skyeview"
          location="Skye Canyon"
          zipCode="89166"
          priceRange={ARROYO_PRICE_RANGE}
          questions={[
            {
              question: 'What is Arroyo at Skyeview and who is the builder?',
              answer:
                'Arroyo at Skyeview is a residential community of new construction townhomes built by Century Communities in Skye Canyon, northwest Las Vegas, Nevada (zip 89166). The community features modern two-story townhomes with quartz countertops, open layouts, and courtyard entries.',
            },
            {
              question: 'What makes Arroyo at Skyeview different from other Skye Canyon communities?',
              answer:
                'Arroyo at Skyeview focuses on attainable luxury townhomes with three distinct floor plans, end-unit options, and proximity to Skye Canyon Park amenities. Compare with Sierra, Terra, and Ironwood—Dr. Jan Duffy helps buyers evaluate all Skye Canyon inventory.',
            },
          ]}
        />
      }
    >
      <LuxuryPageHero
        eyebrow="Arroyo at Skyeview · Skye Canyon 89166"
        title="Community Overview"
        subtitle="Century Communities townhomes in a 1,700-acre master plan—finishes, lifestyle, and what to expect when you buy new construction."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/arroyo-at-skyeview/available-homes"
            className="rounded-md bg-luxury-champagne px-5 py-2.5 text-sm font-medium text-luxury-navy transition-colors hover:bg-luxury-sand"
          >
            View available homes
          </Link>
          <Link
            href="/arroyo-at-skyeview/floor-plans"
            className="rounded-md border border-luxury-champagne/50 px-5 py-2.5 text-sm font-medium text-luxury-ivory transition-colors hover:bg-luxury-champagne/10"
          >
            Compare floor plans
          </Link>
        </div>
      </LuxuryPageHero>
      <ArroyoHubNav currentPath={PATH} />
      <PageContent>
        <Overview />
      </PageContent>
      <CommunityContentExpansion
        communityName="Arroyo at Skyeview"
        location="Skye Canyon"
        zipCode="89166"
        homeType="Townhomes"
        questions={[
          {
            question: 'What is Arroyo at Skyeview and where exactly is it located?',
            answer:
              'Arroyo at Skyeview Homes is a residential community of modern new construction townhomes in Skye Canyon, a premier 1,700-acre master-planned community in northwest Las Vegas, Nevada (zip code 89166). The community is near US-95 and the 215 Beltway. Dr. Jan Duffy represents home buyers—not the builder.',
          },
          {
            question: 'What are the prices for Arroyo at Skyeview Homes?',
            answer: `Arroyo at Skyeview Homes start from $392,640, with prices ranging up to $424,590 depending on floor plan and lot. Contact Dr. Jan Duffy at (702) 903-4687 for current pricing and incentives.`,
          },
          {
            question: 'What floor plans are available at Arroyo at Skyeview?',
            answer:
              'Three floor plans: Beverly (1,531 sq ft), Captiva (1,643 sq ft with loft), and Delray (1,729 sq ft end unit). All include 2.5 bathrooms and 2-bay garages.',
          },
          {
            question: 'Why work with Dr. Jan Duffy when buying at Arroyo at Skyeview?',
            answer:
              'Dr. Jan Duffy is a buyer\'s agent who represents you—not the builder. She offers construction monitoring, a complimentary building standards inspection at closing, and insider knowledge of inventory. Builder-paid representation means no extra cost to you.',
          },
        ]}
      />
      <CrossCommunityLinks currentCommunity="Arroyo at Skyeview" location="Skye Canyon" />
    </MarketingPageShell>
  )
}
