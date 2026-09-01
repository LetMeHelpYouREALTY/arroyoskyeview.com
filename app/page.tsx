import Header from './components/header'
import LuxuryHero from './components/luxury-hero'
import RealScoutOfficePriceBands from './components/realscout-office-price-bands'
import CommunityAtAGlance from './components/community-at-a-glance'
import LifeAtArroyo from './components/life-at-arroyo'
import ArroyoHubLinks from './components/arroyo-hub-links'
import AgentIntro from './components/agent-intro'
import WhyChooseUs from './components/why-choose-us'
import HyperlocalHighlights from './components/hyperlocal-highlights'
import DrJanTestimonials from './components/dr-jan-testimonials'
import DrJanFAQ from './components/dr-jan-faq'
import VisitOurOffice from './components/visit-our-office'
import RequestInfo from './components/request-info'
import PageSchemas from './components/page-schemas'
import Footer from './components/footer'
import AnalyticsTracker from './components/analytics-tracker'
import ReviewSchema from './components/review-schema'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'
import { LUXURY_HERO_IMAGE } from '@/lib/luxury-theme'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="homepage"
        url="/"
        title="Arroyo at Skyeview Homes | New Construction Townhomes in Skye Canyon, Northwest Las Vegas, Nevada (Zip Code 89166)"
        description="Arroyo at Skyeview Homes offers modern new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Starting from $392,640. Dr. Jan Duffy is your buyer's agent—she represents HOME BUYERS, not the builder. Call (702) 903-4687."
        breadcrumbs={[]}
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'What is Arroyo at Skyeview Homes and where is it located?',
            answer:
              'Arroyo at Skyeview Homes is a community of new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip 89166), near US-95 and the 215 Beltway. Dr. Jan Duffy represents home buyers—not the builder.',
          },
          {
            question: 'Where can I see available homes and floor plans?',
            answer:
              'Browse dedicated pages for available homes, floor plans, homesite map, community overview, and area schools at arroyoskyeview.com/arroyo-at-skyeview/.',
          },
          {
            question: 'Where is the office and what are the hours?',
            answer:
              'Arroyo at Skyeview | Homes by Dr. Jan Duffy is at 8912 Vanhoy Creek St, Las Vegas, NV 89166. Hours are Monday through Sunday, 9:00 AM to 6:00 PM. Call (702) 903-4687.',
          },
        ]}
        priceRange={ARROYO_PRICE_RANGE}
        rating={{ value: '4.5', count: '8866' }}
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
        <WhyChooseUs />
        <HyperlocalHighlights />
        <DrJanTestimonials />
        <DrJanFAQ />
        <VisitOurOffice />
        <RequestInfo />
      </main>
      <Footer suppressRealScout />
      <AnalyticsTracker />
      <ReviewSchema />
    </div>
  )
}
