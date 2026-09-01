import type { Metadata } from 'next'
import DrJanHero from '../components/dr-jan-hero'
import WhyChooseDrJan from '../components/why-choose-dr-jan'
import BuyerJourney from '../components/buyer-journey'
import DrJanTestimonials from '../components/dr-jan-testimonials'
import BestOpportunities from '../components/best-opportunities'
import DrJanFAQ from '../components/dr-jan-faq'
import Link from 'next/link'
import PageSchemas from '../components/page-schemas'

import LuxuryAeoAnswers from '../components/luxury-aeo-answers'
import { LUXURY_AEO_FAQS } from '@/lib/aeo-answers'
import MarketingPageShell from '../components/marketing-page-shell'

export const metadata: Metadata = {
  title: "Work with Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview Las Vegas 89166",
  description:
    "White-glove buyer representation at Arroyo at Skyeview in Skye Canyon 89166. Dr. Jan Duffy represents you—not the builder. Construction monitoring every 7–10 days. Call (702) 903-4687.",
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/work-with-dr-jan',
  },
  openGraph: {
    title: "Work with Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview",
    description:
      "Private tours, contract advocacy, and 7–10 day construction checks at Arroyo at Skyeview, Skye Canyon Las Vegas 89166.",
    url: 'https://www.arroyoskyeview.com/work-with-dr-jan',
    type: 'website',
    images: [
      {
        url: '/images/brand/dr-jan-duffy.png',
        width: 800,
        height: 800,
        alt: "Dr. Jan Duffy, luxury buyer's agent for Arroyo at Skyeview",
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

export default function WorkWithDrJanPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="about"
        url="/work-with-dr-jan"
        title="Work with Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview Las Vegas 89166"
        description="White-glove buyer representation at Arroyo at Skyeview in Skye Canyon 89166. Dr. Jan Duffy represents you—not the builder."
        breadcrumbs={[
          { name: 'Work with Dr. Jan', url: '/work-with-dr-jan' },
        ]}
        image="/images/brand/dr-jan-duffy.png"
        questions={LUXURY_AEO_FAQS}
      />
      }
      showContactCta={true}
    >
      <DrJanHero />
        <LuxuryAeoAnswers />
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Arroyo at Skyeview and Skye Canyon with Dr. Jan&apos;s buyer representation
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore new-construction communities in northwest Las Vegas 89166 where Dr. Jan Duffy provides luxury buyer advocacy—not the builder sales office.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/arroyo-at-skyeview/available-homes"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  See available homes at Arroyo at Skyeview
                </h3>
                <p className="text-muted-foreground text-sm">
                  Townhomes starting at $392,640 in Skye Canyon with construction monitoring and expert representation.
                </p>
              </Link>
              <Link
                href="/sierra-at-skyeview"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Explore Sierra at Skyeview new construction
                </h3>
                <p className="text-muted-foreground text-sm">
                  New construction townhomes in Skye Canyon with Dr. Jan's insider knowledge and monitoring.
                </p>
              </Link>
              <Link
                href="/areas/zip-89166"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Browse all Skye Canyon communities
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover all new construction homes in Skye Canyon, Las Vegas, Nevada with expert buyer representation included.
                </p>
              </Link>
            </div>
          </div>
        </section>
    </MarketingPageShell>
  )
}