import type { Metadata } from 'next'
import Header from './components/header'
import LuxuryHero from './components/luxury-hero'
import RealScoutOfficePriceBands from './components/realscout-office-price-bands'
import CommunityAtAGlance from './components/community-at-a-glance'
import LifeAtArroyo from './components/life-at-arroyo'
import ArroyoHubLinks from './components/arroyo-hub-links'
import AgentIntro from './components/agent-intro'
import LuxuryAeoAnswers from './components/luxury-aeo-answers'
import WhyChooseUs from './components/why-choose-us'
import HyperlocalHighlights from './components/hyperlocal-highlights'
import DrJanTestimonials from './components/dr-jan-testimonials'
import DrJanFAQ from './components/dr-jan-faq'
import VisitOurOffice from './components/visit-our-office'
import GbpLatestPosts from './components/gbp-latest-posts'
import RequestInfo from './components/request-info'
import PageSchemas from './components/page-schemas'
import Footer from './components/footer'
import AnalyticsTracker from './components/analytics-tracker'
import ReviewSchema from './components/review-schema'
import ProductSchemas from './components/product-schemas'
import { LUXURY_AEO_FAQS } from '@/lib/aeo-answers'
import { ARROYO_AVAILABLE_HOMES, ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'
import { LUXURY_HERO_IMAGE } from '@/lib/luxury-theme'

export const metadata: Metadata = {
  title:
    "Dr. Jan Duffy | Luxury Buyer's Agent for Arroyo at Skyeview, Skye Canyon Las Vegas 89166",
  description:
    "White-glove buyer representation at Arroyo at Skyeview in Skye Canyon, ZIP 89166. Dr. Jan Duffy represents buyers—not the builder. Private tours, 7–10 day build checks. Call (702) 903-4687.",
  openGraph: {
    title: "Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview Las Vegas",
    description:
      'Luxury new-construction buyer advocacy in Skye Canyon 89166. Register before the model. Construction monitoring through closing. (702) 903-4687.',
    images: [
      {
        url: '/images/brand/dr-jan-duffy.png',
        width: 800,
        height: 800,
        alt: "Dr. Jan Duffy, luxury buyer's agent for Arroyo at Skyeview in Skye Canyon Las Vegas 89166",
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview at Skye Canyon',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSchemas homes={[...ARROYO_AVAILABLE_HOMES]} />
      <PageSchemas
        pageType="homepage"
        url="/"
        title="Dr. Jan Duffy | Luxury Buyer's Agent for Arroyo at Skyeview, Skye Canyon Las Vegas 89166"
        description="White-glove buyer representation at Arroyo at Skyeview in Skye Canyon, ZIP 89166. Dr. Jan Duffy represents home buyers—not the builder. Call (702) 903-4687."
        breadcrumbs={[]}
        location="Skye Canyon"
        zipCode="89166"
        image="/images/brand/dr-jan-duffy.png"
        questions={[
          ...LUXURY_AEO_FAQS,
          {
            question: 'Where can I see available homes and floor plans?',
            answer:
              'Browse available homes, floor plans, the homesite map, and community overview at arroyoskyeview.com/arroyo-at-skyeview/. Dr. Jan Duffy quotes live inventory before you tour.',
          },
        ]}
        priceRange={ARROYO_PRICE_RANGE}
      />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <LuxuryHero imageSrc={LUXURY_HERO_IMAGE} />
        <RealScoutOfficePriceBands intro="Live MLS listings for Skye Canyon and northwest Las Vegas—compare options with Dr. Jan Duffy." />
        <CommunityAtAGlance />
        <LifeAtArroyo />
        <ArroyoHubLinks />
        <AgentIntro />
        <LuxuryAeoAnswers />
        <WhyChooseUs />
        <HyperlocalHighlights />
        <DrJanTestimonials />
        <DrJanFAQ />
        <GbpLatestPosts />
        <VisitOurOffice />
        <RequestInfo />
      </main>
      <Footer suppressRealScout />
      <AnalyticsTracker />
      <ReviewSchema />
    </div>
  )
}
