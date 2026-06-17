import type { Metadata } from 'next'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import RealScoutOfficePriceBands from '../components/realscout-office-price-bands'
import AvailableHomes from '../components/available-homes'
import FloorPlans from '../components/floor-plans'
import Overview from '../components/overview'
import SimilarCommunities from '../components/similar-communities'
import CommunityContentExpansion from '../components/community-content-expansion'
import CrossCommunityLinks from '../components/cross-community-links'
import BuyerResourcesSection from '../components/buyer-resources-section'
import NeighborhoodLinksSection from '../components/neighborhood-links-section'
import PeopleAlsoSearch from '../components/people-also-search'
import PageSchemas from '../components/page-schemas'

import MarketingPageShell from '../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Homestead West | New Construction Homes Las Vegas, Nevada',
  description: 'Homestead West offers new construction homes in Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homestead-west',
  },
  openGraph: {
    title: 'Homestead West | New Construction Homes Las Vegas, Nevada',
    description: 'Homestead West offers new construction homes in Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Call (702) 903-4687.',
    url: 'https://www.arroyoskyeview.com/homestead-west',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HomesteadWestPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="community"
        url="/homestead-west"
        title="Homestead West | New Construction Homes in Las Vegas, Nevada"
        description="Homestead West is a residential community in Las Vegas, Nevada. Discover new construction homes and floor plans with expert buyer's agent representation from Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Homestead West', url: '/homestead-west' },
        ]}
        communityName="Homestead West"
        location="Las Vegas"
        zipCode="89166"
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner context="pre-construction pricing" />
        <RealScoutOfficePriceBands />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AvailableHomes />
          <div className="mt-12">
            <FloorPlans />
          </div>
          <div className="mt-12">
            <Overview />
          </div>
          <div className="mt-12">
            <BuyerResourcesSection />
          </div>
          <div className="mt-12">
            <DrJanContactCard />
          </div>
        </div>
        <CommunityContentExpansion
          communityName="Homestead West"
          location="Las Vegas"
          zipCode="89166"
          homeType="New Homes"
          questions={[
            {
              question: 'What is Homestead West?',
              answer: 'Homestead West is a residential community in Las Vegas, Nevada. The development offers new construction homes with modern designs, premium finishes, and energy-efficient features, representing quality construction and contemporary living.',
            },
            {
              question: 'Where is Homestead West located in Las Vegas?',
              answer: 'Homestead West is located in Las Vegas, providing residents with convenient access to Las Vegas\'s amenities while maintaining a peaceful residential atmosphere. Contact Dr. Jan Duffy at (702) 903-4687 for specific location details, zip code information, and current availability.',
            },
            {
              question: 'What types of homes are available at Homestead West?',
              answer: 'Homestead West offers new construction homes with modern floor plans, energy-efficient features, and premium finishes. The homes are designed for contemporary living with quality construction. Contact Dr. Jan Duffy for current availability and floor plan options.',
            },
            {
              question: 'What are the prices for homes at Homestead West?',
              answer: 'Pricing at Homestead West varies based on floor plan, lot location, and available features. With current builder incentives including rate buy-downs and closing cost assistance, homes may be more affordable than expected. Dr. Jan Duffy has real-time knowledge of current pricing.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy when buying at Homestead West?',
              answer: 'Dr. Jan Duffy is a New Construction Home Expert and buyer\'s agent who provides expert buyer representation for new construction homes including Homestead West in Las Vegas, Nevada. She represents YOU, not the builder. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Builders pay for buyer\'s agent representation, so there\'s no extra cost to you. Call (702) 903-4687.',
            },
            {
              question: 'What schools serve the Homestead West community?',
              answer: 'Homestead West is served by schools in the Clark County School District. The specific schools depend on the exact location. Contact Dr. Jan Duffy for detailed information about schools serving the Homestead West community and school quality ratings.',
            },
            {
              question: 'How long does it take to build a home at Homestead West?',
              answer: 'Construction timelines typically range from 4-7 months depending on the specific home and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days throughout the process.',
            },
            {
              question: 'What amenities are available near Homestead West?',
              answer: 'Homestead West residents have access to local amenities depending on the specific location. New construction communities in Las Vegas, Nevada typically feature nearby shopping, dining, schools, and recreational facilities. Contact Dr. Jan Duffy, your buyer\'s agent, for specific information about amenities near Homestead West.',
            },
            {
              question: 'What builder incentives are available at Homestead West?',
              answer: 'With 2x the normal new home inventory in Las Vegas, Nevada, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. Dr. Jan Duffy, your buyer\'s agent, has insider knowledge of current builder incentives at Homestead West.',
            },
            {
              question: 'What are property taxes like for Homestead West?',
              answer: 'Nevada has relatively low property taxes. In Clark County, the average property tax rate is approximately 0.60-0.70% of assessed value. Nevada also has no state income tax, making it attractive for homeowners. Contact Dr. Jan Duffy for specific property tax information for Homestead West.',
            },
          ]}
        />
        <NeighborhoodLinksSection location="Las Vegas" />
        <CrossCommunityLinks currentCommunity="Homestead West" location="Las Vegas" />
        <PeopleAlsoSearch />
        <SimilarCommunities />
    </MarketingPageShell>
  )
}