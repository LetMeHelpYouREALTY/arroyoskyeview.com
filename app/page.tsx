import Link from 'next/link'
import PurpleSaleBanner from './components/purple-sale-banner'
import Header from './components/header'
import DrJanHero from './components/dr-jan-hero'
import LuxuryHero from './components/luxury-hero'
import HyperlocalHighlights from './components/hyperlocal-highlights'
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
import TrustBadges from './components/trust-badges'
import SocialProofBanner from './components/social-proof-banner'
import AnalyticsTracker from './components/analytics-tracker'
import ReviewSchema from './components/review-schema'
import UrgencyBanner from './components/urgency-banner'
import ConversionFunnel from './components/conversion-funnel'
import ExitIntentPopup from './components/exit-intent-popup'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'

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
        ]}
        priceRange={ARROYO_PRICE_RANGE}
        rating={{ value: '4.5', count: '8866' }}
      />
      <PurpleSaleBanner />
      <UrgencyBanner />
      <Header />
      <TrustBadges />
      <SocialProofBanner />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <LuxuryHero />
        <HyperlocalHighlights />
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
      <ExitIntentPopup />
    </div>
  )
}
