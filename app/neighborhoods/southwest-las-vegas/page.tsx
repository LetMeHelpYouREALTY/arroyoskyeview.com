import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import CrossCommunityLinks from '../../components/cross-community-links'

export const metadata: Metadata = {
  title: 'New Construction Homes in Southwest Las Vegas | Buyer\'s Agent',
  description: 'Discover new construction homes in Southwest Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy for new construction homes. Construction monitoring and building standards inspection included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/neighborhoods/southwest-las-vegas',
  },
  openGraph: {
    title: 'New Construction Homes in Southwest Las Vegas | Buyer\'s Agent',
    description: 'Discover new construction homes in Southwest Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included.',
    url: 'https://www.arroyoskyeview.com/neighborhoods/southwest-las-vegas',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Construction Homes in Southwest Las Vegas',
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

export default function SouthwestLasVegasPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="neighborhood"
        url="/neighborhoods/southwest-las-vegas"
        title="New Construction Homes in Southwest Las Vegas | Buyer's Agent"
        description="Discover new construction homes in Southwest Las Vegas, Nevada. Expert buyer's agent representation with Dr. Jan Duffy for new construction homes. Construction monitoring and building standards inspection included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Neighborhoods', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Southwest Las Vegas', url: '/neighborhoods/southwest-las-vegas' },
        ]}
        location="Southwest Las Vegas"
        zipCode="89148"
        questions={[
          {
            question: 'What new construction developments are available in Southwest Las Vegas?',
            answer: 'Southwest Las Vegas features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in Southwest Las Vegas, Nevada. She provides expert buyer representation, construction monitoring, and building standards inspection.',
          },
          {
            question: 'Why should I work with a buyer\'s agent for new construction in Southwest Las Vegas?',
            answer: 'Dr. Jan Duffy provides expert buyer representation for new construction homes in Southwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder, and offers construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory—all at no extra cost to you.',
          },
          {
            question: 'What are the benefits of living in Southwest Las Vegas?',
            answer: 'Southwest Las Vegas offers affordable housing, convenient access to the Las Vegas Strip and major employers, good schools, and proximity to outdoor recreation. The area is growing with new construction developments and amenities.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Homes in Southwest Las Vegas | Buyer's Agent Representation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover new construction homes in Southwest Las Vegas, Nevada. Get expert buyer representation with Dr. Jan Duffy—she represents HOME BUYERS, not the builder. Construction monitoring and building standards inspection included at no extra cost.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Southwest Las Vegas, Nevada</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Southwest Las Vegas is a rapidly growing area offering affordable new construction homes, convenient access to major employment centers, and proximity to the Las Vegas Strip. Located in southwest Las Vegas, this area provides residents with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Affordable housing options with new construction developments</li>
                  <li>Convenient access to the Las Vegas Strip (10-15 minutes)</li>
                  <li>Proximity to major employers and employment centers</li>
                  <li>Good schools in the Clark County School District</li>
                  <li>Growing retail and dining options</li>
                  <li>Easy access to I-15 and major highways</li>
                </ul>
                <p className="text-lg text-gray-700 mb-4">
                  Southwest Las Vegas is experiencing rapid growth with new construction communities offering modern homes at competitive prices. When buying new construction in Southwest Las Vegas, work with Dr. Jan Duffy—your buyer's agent who represents HOME BUYERS, not the builder.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose New Construction in Southwest Las Vegas?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
                    <p className="text-gray-700">
                      New construction homes in Southwest Las Vegas offer competitive pricing, making homeownership more accessible.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Location</h3>
                    <p className="text-gray-700">
                      Easy access to the Las Vegas Strip, major employers, shopping, and entertainment—all within 10-15 minutes.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Features</h3>
                    <p className="text-gray-700">
                      New construction homes feature modern designs, energy-efficient features, and builder warranties for peace of mind.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Community</h3>
                    <p className="text-gray-700">
                      Southwest Las Vegas is growing with new amenities, schools, and infrastructure improvements.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Buyer Representation for Southwest Las Vegas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Dr. Jan Duffy provides expert buyer representation for new construction homes in Southwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder, and offers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li><strong>Construction Monitoring:</strong> Dr. Jan monitors your home's construction every 7-10 days, catching issues before they become costly problems</li>
                  <li><strong>Building Standards Inspection:</strong> Complimentary building standards inspection at closing ensures everything is built to code</li>
                  <li><strong>Insider Knowledge:</strong> Real-time inventory tracking, current pricing, and available incentives for Southwest Las Vegas communities</li>
                  <li><strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who works for YOU</li>
                </ul>
                <p className="text-lg text-gray-700 mb-4">
                  Contact Dr. Jan Duffy at (702) 903-4687 to learn about available new construction homes in Southwest Las Vegas, Nevada.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <DrJanContactCard />
              
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Areas</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/neighborhoods/summerlin-las-vegas" className="text-blue-600 hover:text-blue-700 underline">
                      New Construction in Summerlin
                    </Link>
                  </li>
                  <li>
                    <Link href="/neighborhoods/henderson-las-vegas" className="text-blue-600 hover:text-blue-700 underline">
                      New Construction in Henderson
                    </Link>
                  </li>
                  <li>
                    <Link href="/neighborhoods/north-las-vegas" className="text-blue-600 hover:text-blue-700 underline">
                      New Construction in North Las Vegas
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-your-new-home/nevada/las-vegas-metro" className="text-blue-600 hover:text-blue-700 underline">
                      All Las Vegas Metro Communities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CrossCommunityLinks currentCommunity="Southwest Las Vegas" location="Southwest Las Vegas" />
        
        <DrJanCTABanner context="southwest-las-vegas" />
      </main>
      <Footer />
    </div>
  )
}

