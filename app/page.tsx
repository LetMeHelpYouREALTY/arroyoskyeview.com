'use client'

import { useState } from 'react'
import PurpleSaleBanner from './components/purple-sale-banner'
import Header from './components/header'
import DrJanHero from './components/dr-jan-hero'
import LuxuryHero from './components/luxury-hero'
import HyperlocalHighlights from './components/hyperlocal-highlights'
import WhyChooseDrJan from './components/why-choose-dr-jan'
import BuyerJourney from './components/buyer-journey'
import DrJanTestimonials from './components/dr-jan-testimonials'
import BestOpportunities from './components/best-opportunities'
import DrJanFAQ from './components/dr-jan-faq'
import RealScoutOfficePriceBands from './components/realscout-office-price-bands'
import AvailableHomes from './components/available-homes'
import AlreadyTaken from './components/already-taken'
import FloorPlans from './components/floor-plans'
import HomesiteMap from './components/homesite-map'
import Overview from './components/overview'
import AreaInformation from './components/area-information'
import HomebuyerResources from './components/homebuyer-resources'
import SimilarCommunities from './components/similar-communities'
import HomeownerReviews from './components/homeowner-reviews'
import RequestInfo from './components/request-info'
import PeopleAlsoSearch from './components/people-also-search'
import HomepageContentSection from './components/homepage-content-section'
import PageSchemas from './components/page-schemas'
import Footer from './components/footer'
import StickyPhoneCTA from './components/sticky-phone-cta'
import TrustBadges from './components/trust-badges'
import SocialProofBanner from './components/social-proof-banner'
import HomepageFAQPreview from './components/homepage-faq-preview'
import AnalyticsTracker from './components/analytics-tracker'
import ReviewSchema from './components/review-schema'
import UrgencyBanner from './components/urgency-banner'
import ConversionFunnel from './components/conversion-funnel'
import ProductSchemas from './components/product-schemas'
import ExitIntentPopup from './components/exit-intent-popup'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'homes' | 'plans' | 'map' | 'overview' | 'area' | 'resources'>('homes')

  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="homepage"
        url="/"
        title="Arroyo at Skyeview Homes | New Construction Townhomes in Skye Canyon, Northwest Las Vegas, Nevada (Zip Code 89166)"
        description="Arroyo at Skyeview Homes offers modern new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Starting from $392,640. Located near US-95 and the 215 Beltway. Dr. Jan Duffy is your buyer's agent—she represents HOME BUYERS, not the builder. Expert buyer representation, construction monitoring, building standards inspection & insider knowledge. Call (702) 903-4687."
        breadcrumbs={[]}
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'What is Arroyo at Skyeview Homes and where exactly is it located in Las Vegas, Nevada?',
            answer: 'Arroyo at Skyeview Homes is a residential community of modern new construction townhomes located in Skye Canyon, a premier 1,700-acre master-planned community in northwest Las Vegas, Nevada (zip code 89166). The community is situated near the intersection of US-95 and the 215 Beltway, approximately 20-25 minutes northwest of the Las Vegas Strip, 15 minutes west of Red Rock Canyon National Conservation Area, and 30 minutes northwest of Mount Charleston. This northwest Las Vegas location offers easy access to major employment centers while maintaining a peaceful residential atmosphere. When buying Arroyo at Skyeview Homes, work with Dr. Jan Duffy—your buyer\'s agent who represents HOME BUYERS, not the builder.',
          },
          {
            question: 'What are the prices for Arroyo at Skyeview Homes?',
            answer: 'Arroyo at Skyeview Homes start from $392,640, with prices ranging up to $424,590 depending on the floor plan and lot location. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current pricing and incentives.',
          },
          {
            question: 'What floor plans are available at Arroyo at Skyeview Homes?',
            answer: 'Arroyo at Skyeview Homes offers three distinct floor plans: the Beverly (1,531 sq ft, 3 bedrooms), the Captiva (1,643 sq ft, 3 bedrooms), and the Delray (1,729 sq ft, 3-4 bedrooms). All plans include 2.5 bathrooms and 2-bay garages. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 to learn more about available floor plans.',
          },
        ]}
        priceRange="$392,640 - $424,590"
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
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />

        {/* SEO-rich supporting content stays on page but no longer blocks inventory discovery */}
        <HomepageContentSection />
        <HomepageFAQPreview />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="border-b border-border mb-8">
            <nav className="-mb-px flex flex-wrap space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('homes')}
                className={`${
                  activeTab === 'homes'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Available Homes
              </button>
              <button
                onClick={() => setActiveTab('plans')}
                className={`${
                  activeTab === 'plans'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Floor Plans
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`${
                  activeTab === 'map'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Homesite Map
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`${
                  activeTab === 'overview'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('area')}
                className={`${
                  activeTab === 'area'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Area Information
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`${
                  activeTab === 'resources'
                    ? 'border-luxury-champagne text-primary'
                    : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Homebuyer Resources
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'homes' && (
              <div>
                <AvailableHomes />
                <div className="mt-12">
                  <AlreadyTaken />
                </div>
              </div>
            )}
            {activeTab === 'plans' && <FloorPlans />}
            {activeTab === 'map' && <HomesiteMap />}
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'area' && <AreaInformation />}
            {activeTab === 'resources' && <HomebuyerResources />}
          </div>
        </div>

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
      <ProductSchemas
        floorPlans={[
          {
            name: 'Beverly',
            price: 364990,
            sqft: 1531,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            description: 'Interior Unit',
            image: '/images/floor-plans/beverly-model.jpg',
          },
          {
            name: 'Captiva',
            price: 374990,
            sqft: 1643,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            description: '3 Bed + Loft',
            image: '/images/floor-plans/captiva-model.jpg',
          },
          {
            name: 'Delray',
            price: 384990,
            sqft: 1729,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            description: 'End Unit',
            image: '/images/floor-plans/delray-model.jpg',
          },
        ]}
        homes={[
          {
            address: '8933 Grabill Spruce St',
            lot: 'ARR224',
            floorPlan: 'Delray',
            price: 424590,
            sqft: 1729,
            bedrooms: 4,
            bathrooms: 2.5,
            parking: 2,
            completion: 'Dec. Move In',
            features: ['Gray cabinets'],
            image: '/images/homes/homes-1.jpg',
          },
          {
            address: '8925 Grabill Spruce St',
            lot: 'ARR223',
            floorPlan: 'Captiva',
            price: 405720,
            sqft: 1643,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            completion: 'Dec. Move In',
            features: ['LVP Flooring', 'White Cabinets'],
            image: '/images/homes/homes-2.jpg',
          },
          {
            address: '8942 Grabill Spruce St',
            lot: 'ARR183',
            floorPlan: 'Delray',
            price: 416960,
            sqft: 1729,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            completion: 'Dec. Move In',
            features: ['End Unit', 'White Cabinets'],
            image: '/images/homes/homes-3.jpg',
          },
          {
            address: '8917 Grabill Spruce St',
            lot: 'ARR222',
            floorPlan: 'Beverly',
            price: 392640,
            sqft: 1531,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            completion: 'Dec. Move In',
            features: ['LG Kitchen Appliances', 'Java Cabinets'],
            image: '/images/homes/homes-4.jpg',
          },
          {
            address: '8909 Grabill Spruce St',
            lot: 'ARR221',
            floorPlan: 'Captiva',
            price: 411090,
            sqft: 1643,
            bedrooms: 3,
            bathrooms: 2.5,
            parking: 2,
            completion: 'Dec. Move In',
            features: ['End unit', 'Courtyard Entry'],
            image: '/images/homes/homes-5.jpg',
          },
        ]}
      />
    </div>
  )
}
