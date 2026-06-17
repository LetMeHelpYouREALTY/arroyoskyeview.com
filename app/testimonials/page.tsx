import type { Metadata } from 'next'
import DrJanTestimonials from '../components/dr-jan-testimonials'
import HomeownerReviews from '../components/homeowner-reviews'
import PageSchemas from '../components/page-schemas'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import ReviewSchema from '../components/review-schema'

import MarketingPageShell from '../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Dr. Jan Duffy - Buyer\'s Agent for Arroyo at Skyeview Homes',
  description: 'Read real testimonials from homebuyers who worked with Dr. Jan Duffy for new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). See why buyers trust Dr. Jan Duffy for expert buyer representation, construction monitoring, and building standards inspection.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy - Buyer\'s Agent',
    description: 'Read real testimonials from homebuyers who worked with Dr. Jan Duffy for new construction homes in Skye Canyon, northwest Las Vegas, Nevada. Expert buyer representation at no extra cost.',
    url: 'https://www.arroyoskyeview.com/testimonials',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Buyer\'s Agent Testimonials',
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

export default function TestimonialsPage() {
  return (
    <MarketingPageShell
      schema={
        <>
          <PageSchemas
        pageType="about"
        url="/testimonials"
        title="Client Testimonials & Reviews | Dr. Jan Duffy - Buyer's Agent for Arroyo at Skyeview Homes"
        description="Read real testimonials from homebuyers who worked with Dr. Jan Duffy for new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). See why buyers trust Dr. Jan Duffy for expert buyer representation, construction monitoring, and building standards inspection."
        breadcrumbs={[
          { name: 'Testimonials', url: '/testimonials' },
        ]}
        questions={[
          {
            question: 'What do homebuyers say about working with Dr. Jan Duffy?',
            answer: 'Homebuyers consistently praise Dr. Jan Duffy for her construction monitoring expertise, catching issues before they become costly problems. Clients appreciate that she represents HOME BUYERS, not the builder, and her building standards inspection provides peace of mind during the homebuying process.',
          },
          {
            question: 'Why do buyers choose Dr. Jan Duffy for new construction homes?',
            answer: 'Buyers choose Dr. Jan Duffy because she provides expert buyer representation at no extra cost, construction monitoring every 7-10 days, and insider knowledge of Skye Canyon communities in northwest Las Vegas, Nevada (zip code 89166). She works exclusively for homebuyers, not builders.',
          },
          {
            question: 'What makes Dr. Jan Duffy different from other buyer\'s agents?',
            answer: 'Dr. Jan Duffy is a New Construction Home Expert who specializes in construction monitoring, building standards inspection, and buyer representation for new construction homes in Las Vegas, Nevada. She monitors construction every 7-10 days and provides a complimentary building standards inspection at closing.',
          },
        ]}
      />
          <ReviewSchema />
        </>
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials & Reviews: Skye Canyon, Northwest Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              See why homebuyers trust Dr. Jan Duffy for expert buyer representation on new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166)
            </p>
          </div>
        </section>

        <DrJanTestimonials />

        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Homebuyers Choose Dr. Jan Duffy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">Construction Monitoring</h3>
                <p className="text-muted-foreground text-center">
                  Dr. Jan Duffy monitors your home's construction every 7-10 days, catching issues before they become costly problems after warranty expires.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">Buyer Representation</h3>
                <p className="text-muted-foreground text-center">
                  Dr. Jan Duffy represents HOME BUYERS, not the builder. She works exclusively for you, ensuring you get the best deal and quality construction.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">Building Standards Inspection</h3>
                <p className="text-muted-foreground text-center">
                  Complimentary building standards inspection at closing ensures everything is built to code before you move in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HomeownerReviews />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work with Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join hundreds of satisfied homebuyers who chose Dr. Jan Duffy for expert buyer representation on new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). She represents HOME BUYERS, not the builder—at no extra cost to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7029034687"
                  className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition text-center"
                >
                  Call Dr. Jan: (702) 903-4687
                </a>
                <a
                  href="/work-with-dr-jan"
                  className="bg-white text-primary border-2 border-luxury-champagne px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition text-center"
                >
                  Learn More About Dr. Jan
                </a>
              </div>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="testimonials" />
    </MarketingPageShell>
  )
}