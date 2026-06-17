import type { Metadata } from 'next'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import CrossCommunityLinks from '../../components/cross-community-links'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'New Construction Homes in Centennial Hills, Las Vegas | Buyer\'s Agent',
  description: 'Discover new construction homes in Centennial Hills, Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy for new construction homes. Construction monitoring and building standards inspection included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/neighborhoods/centennial-hills',
  },
  openGraph: {
    title: 'New Construction Homes in Centennial Hills, Las Vegas | Buyer\'s Agent',
    description: 'Discover new construction homes in Centennial Hills, Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included.',
    url: 'https://www.arroyoskyeview.com/neighborhoods/centennial-hills',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Construction Homes in Centennial Hills',
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

export default function CentennialHillsPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="neighborhood"
        url="/neighborhoods/centennial-hills"
        title="New Construction Homes in Centennial Hills, Las Vegas | Buyer's Agent"
        description="Discover new construction homes in Centennial Hills, Las Vegas, Nevada. Expert buyer's agent representation with Dr. Jan Duffy for new construction homes. Construction monitoring and building standards inspection included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Neighborhoods', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Centennial Hills', url: '/neighborhoods/centennial-hills' },
        ]}
        location="Centennial Hills"
        zipCode="89149"
        questions={[
          {
            question: 'What new construction developments are available in Centennial Hills?',
            answer: 'Centennial Hills features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in Centennial Hills, Las Vegas, Nevada. She provides expert buyer representation, construction monitoring, and building standards inspection.',
          },
          {
            question: 'Why should I work with a buyer\'s agent for new construction in Centennial Hills?',
            answer: 'Dr. Jan Duffy provides expert buyer representation for new construction homes in Centennial Hills, Las Vegas, Nevada. She represents HOME BUYERS, not the builder, and offers construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory—all at no extra cost to you.',
          },
          {
            question: 'What are the benefits of living in Centennial Hills?',
            answer: 'Centennial Hills offers family-friendly neighborhoods, good schools, convenient access to major employers, and proximity to outdoor recreation including Red Rock Canyon. The area is growing with new construction developments and amenities.',
          },
        ]}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        
        {/* Hero Section */}
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Homes in Centennial Hills, Las Vegas | Buyer's Agent Representation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover new construction homes in Centennial Hills, Las Vegas, Nevada. Get expert buyer representation with Dr. Jan Duffy—she represents HOME BUYERS, not the builder. Construction monitoring and building standards inspection included at no extra cost.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">About Centennial Hills, Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Centennial Hills is a master-planned community in northwest Las Vegas, Nevada, offering family-friendly neighborhoods, excellent schools, and convenient access to major employment centers. Located in northwest Las Vegas, Centennial Hills provides residents with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Family-friendly neighborhoods with parks and trails</li>
                  <li>Top-rated schools in the Clark County School District</li>
                  <li>Convenient access to major employers and shopping</li>
                  <li>Proximity to Red Rock Canyon National Conservation Area (15 minutes)</li>
                  <li>Growing retail and dining options</li>
                  <li>New construction developments with modern homes</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Centennial Hills is experiencing growth with new construction communities offering modern homes at competitive prices. When buying new construction in Centennial Hills, work with Dr. Jan Duffy—your buyer's agent who represents HOME BUYERS, not the builder.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose New Construction in Centennial Hills?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Family-Friendly</h3>
                    <p className="text-muted-foreground">
                      Centennial Hills offers safe, family-friendly neighborhoods with parks, trails, and excellent schools perfect for families.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Modern Features</h3>
                    <p className="text-muted-foreground">
                      New construction homes feature modern designs, energy-efficient features, and builder warranties for peace of mind.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Convenient Location</h3>
                    <p className="text-muted-foreground">
                      Easy access to major employment centers, shopping, and outdoor recreation including Red Rock Canyon.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Growing Community</h3>
                    <p className="text-muted-foreground">
                      Centennial Hills is growing with new amenities, schools, and infrastructure improvements.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Expert Buyer Representation for Centennial Hills</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Dr. Jan Duffy provides expert buyer representation for new construction homes in Centennial Hills, Las Vegas, Nevada. She represents HOME BUYERS, not the builder, and offers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Construction Monitoring:</strong> Dr. Jan monitors your home's construction every 7-10 days, catching issues before they become costly problems</li>
                  <li><strong>Building Standards Inspection:</strong> Complimentary building standards inspection at closing ensures everything is built to code</li>
                  <li><strong>Insider Knowledge:</strong> Real-time inventory tracking, current pricing, and available incentives for Centennial Hills communities</li>
                  <li><strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who works for YOU</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Contact Dr. Jan Duffy at (702) 903-4687 to learn about available new construction homes in Centennial Hills, Las Vegas, Nevada.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <DrJanContactCard />
              
              <div className="bg-muted rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Related Areas</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/neighborhoods/summerlin-las-vegas" className="text-primary hover:text-primary underline">
                      New Construction in Summerlin
                    </Link>
                  </li>
                  <li>
                    <Link href="/neighborhoods/north-las-vegas" className="text-primary hover:text-primary underline">
                      New Construction in North Las Vegas
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/zip-89166" className="text-primary hover:text-primary underline">
                      New Construction in Skye Canyon (Zip 89166)
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-your-new-home/nevada/las-vegas-metro" className="text-primary hover:text-primary underline">
                      All Las Vegas Metro Communities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CrossCommunityLinks currentCommunity="Centennial Hills" location="Centennial Hills" />
        
        <DrJanCTABanner context="centennial-hills" />
    </MarketingPageShell>
  )
}