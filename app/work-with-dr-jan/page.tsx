import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanHero from '../components/dr-jan-hero'
import WhyChooseDrJan from '../components/why-choose-dr-jan'
import BuyerJourney from '../components/buyer-journey'
import DrJanTestimonials from '../components/dr-jan-testimonials'
import BestOpportunities from '../components/best-opportunities'
import DrJanFAQ from '../components/dr-jan-faq'
import Link from 'next/link'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Work with Dr. Jan Duffy | New Construction Home Expert | Las Vegas, Nevada',
  description: 'Expert buyer representation for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy represents YOU, not the builder. Construction monitoring, building standards inspection, insider knowledge. No extra cost. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/work-with-dr-jan',
  },
  openGraph: {
    title: 'Work with Dr. Jan Duffy | New Construction Home Expert | Las Vegas, Nevada',
    description: 'Expert buyer representation for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy represents YOU, not the builder. Construction monitoring, building standards inspection, insider knowledge. No extra cost. Call (702) 903-4687.',
    url: 'https://www.arroyoskyeview.com/work-with-dr-jan',
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

export default function WorkWithDrJanPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="about"
        url="/work-with-dr-jan"
        title="Work with Dr. Jan Duffy | New Construction Home Expert | Las Vegas, Nevada"
        description="Get expert buyer representation on new construction homes in Las Vegas, Nevada. Dr. Jan Duffy represents YOU, not the builder. Construction monitoring, building standards inspection, and insider knowledge—at no extra cost to you."
        breadcrumbs={[
          { name: 'Work with Dr. Jan', url: '/work-with-dr-jan' },
        ]}
        questions={[
          {
            question: 'Why should I work with Dr. Jan Duffy?',
            answer: 'Dr. Jan Duffy is a New Construction Home Expert providing expert buyer representation for new construction homes in Las Vegas, Nevada. She represents YOU, not the builder. Services include construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory and pricing.',
          },
          {
            question: 'How much does it cost to work with Dr. Jan Duffy?',
            answer: 'There is no extra cost to you. Builders pay for buyer representation on all new construction homes in Las Vegas, Nevada. The commission is built into home pricing whether you use an agent or not.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanHero />
        <WhyChooseDrJan />
        <BuyerJourney />
        <DrJanTestimonials />
        <BestOpportunities />
        <DrJanFAQ />
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              New Construction Homes in Las Vegas, Nevada with Dr. Jan's Buyer Representation
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore these featured new construction communities in Las Vegas, Nevada where Dr. Jan Duffy provides expert buyer representation. She represents YOU, not the builder—at no extra cost to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/"
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
      </main>
      <Footer />
    </div>
  )
}

