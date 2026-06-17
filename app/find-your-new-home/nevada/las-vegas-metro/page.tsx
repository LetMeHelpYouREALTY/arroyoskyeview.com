import type { Metadata } from 'next'
import DrJanCTABanner from '../../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../../components/dr-jan-contact-card'
import LasVegasMetroHero from '../../../components/las-vegas-metro-hero'
import CommunityListings from '../../../components/community-listings'
import MapView from '../../../components/map-view'
import ZipCodeMap from '../../../components/zipcode-map'
import PageSchemas from '../../../components/page-schemas'

import MarketingPageShell from '../../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Find Your New Home in Las Vegas Metro, Nevada | New Construction Homes',
  description: 'Discover new construction homes and communities throughout Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities in Las Vegas, Henderson, Summerlin, Skye Canyon, and surrounding areas with expert buyer\'s agent representation.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/find-your-new-home/nevada/las-vegas-metro',
  },
  openGraph: {
    title: 'Find Your New Home in Las Vegas Metro, Nevada | New Construction Homes',
    description: 'Discover new construction homes and communities throughout Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities in Las Vegas, Henderson, Summerlin, Skye Canyon, and surrounding areas with expert buyer\'s agent representation.',
    url: 'https://www.arroyoskyeview.com/find-your-new-home/nevada/las-vegas-metro',
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

export default function LasVegasMetroPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="neighborhood"
        url="/find-your-new-home/nevada/las-vegas-metro"
        title="Find Your New Home in Las Vegas Metro, Nevada | New Construction Homes"
        description="Discover new construction homes and communities throughout Las Vegas Metro, Nevada. Browse available homes, floor plans, and communities in Las Vegas, Henderson, Summerlin, Skye Canyon (zip code 89166), and surrounding areas with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
        ]}
        location="Las Vegas Metro"
        questions={[
          {
            question: 'What new construction communities are available in Las Vegas Metro, Nevada?',
            answer: 'New construction communities are available throughout Las Vegas Metro, Nevada including Skye Canyon (zip code 89166) in northwest Las Vegas, Summerlin, Henderson, and other premier locations. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory in these Las Vegas Metro areas.',
          },
          {
            question: 'How do I find available homes in Las Vegas Metro?',
            answer: 'You can browse available homes, floor plans, and communities on this page. Contact Dr. Jan Duffy at (702) 903-4687 for real-time inventory and current pricing.',
          },
        ]}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        <LasVegasMetroHero />
        <CommunityListings />
        <MapView />
        <ZipCodeMap />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <DrJanContactCard />
          </div>
        </div>
    </MarketingPageShell>
  )
}