import Link from 'next/link'
import PurpleSaleBanner from './components/purple-sale-banner'
import Header from './components/header'
import DrJanHero from './components/dr-jan-hero'
import LuxuryHero from './components/luxury-hero'
import HyperlocalHighlights from './components/hyperlocal-highlights'
import NearbyAmenitiesSection from './components/nearby-amenities-section'
import ArroyoHubLinks from './components/arroyo-hub-links'
import WhyChooseDrJan from './components/why-choose-dr-jan'
import BuyerJourney from './components/buyer-journey'
import DrJanTestimonials from './components/dr-jan-testimonials'
import BestOpportunities from './components/best-opportunities'
import DrJanFAQ from './components/dr-jan-faq'
import RealScoutOfficePriceBands from './components/realscout-office-price-bands'
import SimilarCommunities from './components/similar-communities'
import HomeownerReviews from './components/homeowner-reviews'
import RequestInfo from './components/request-info'
import PeopleAlsoSearch from './components/people-also-search'
import HomepageFAQPreview from './components/homepage-faq-preview'
import PageSchemas from './components/page-schemas'
import Footer from './components/footer'
import StickyPhoneCTA from './components/sticky-phone-cta'
import AnalyticsTracker from './components/analytics-tracker'
import ReviewSchema from './components/review-schema'
import HomepageStructuredData from './components/homepage-structured-data'
import ConversionFunnel from './components/conversion-funnel'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="homepage"
        url="/"
        title="Arroyo at Skyeview | Skye Canyon Townhomes, NV"
        description="New townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (89166). Buyer agent Dr. Jan Duffy represents you—not the builder. (702) 903-4687."
        breadcrumbs={[]}
        location="Skye Canyon"
        zipCode="89166"
        priceRange={ARROYO_PRICE_RANGE}
      />
      <HomepageStructuredData />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <LuxuryHero />
        <HyperlocalHighlights />
        <NearbyAmenitiesSection />
        <DrJanHero />
        <RealScoutOfficePriceBands intro="See live MLS listings below the hero to compare options quickly with Dr. Jan Duffy." />
        <ConversionFunnel />
        <ArroyoHubLinks />
        <section className="border-y border-border bg-card/40 py-10">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground">
              Ready to tour inventory?{' '}
              <Link
                href="/arroyo-at-skyeview/available-homes"
                className="font-medium text-primary underline underline-offset-2 hover:text-luxury-champagne"
              >
                View available homes at Arroyo at Skyeview
              </Link>
              {' '}or{' '}
              <Link
                href="/arroyo-at-skyeview/floor-plans"
                className="font-medium text-primary underline underline-offset-2 hover:text-luxury-champagne"
              >
                compare Beverly, Captiva &amp; Delray floor plans
              </Link>
              .
            </p>
          </div>
        </section>
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />
        <HomepageFAQPreview />
        <SimilarCommunities />
        <PeopleAlsoSearch />
        <HomeownerReviews />
        <RequestInfo />
      </main>
      <Footer suppressRealScout />
      <StickyPhoneCTA />
      <AnalyticsTracker />
      <ReviewSchema />
    </div>
  )
}
