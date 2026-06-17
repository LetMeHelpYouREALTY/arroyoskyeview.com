import type { Metadata } from 'next'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Buyer Representation vs Builder\'s Agent: The Difference | Skye Canyon, Northwest Las Vegas',
  description: 'Learn why you need a buyer\'s agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy represents HOME BUYERS, not the builder. Construction monitoring and building standards inspection included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/services/buyer-representation',
  },
  openGraph: {
    title: 'Buyer Representation vs Builder\'s Agent: The Difference | Skye Canyon, Northwest Las Vegas',
    description: 'Learn why you need a buyer\'s agent for new construction homes in Skye Canyon and northwest Las Vegas. Dr. Jan Duffy represents HOME BUYERS, not the builder.',
    url: 'https://www.arroyoskyeview.com/services/buyer-representation',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buyer Representation Service',
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

export default function BuyerRepresentationPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/services/buyer-representation"
        title="Buyer Representation vs Builder's Agent: The Difference | Skye Canyon, Northwest Las Vegas"
        description="Learn why you need a buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy represents HOME BUYERS, not the builder. Construction monitoring and building standards inspection included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Services', url: '/work-with-dr-jan' },
          { name: 'Buyer Representation', url: '/services/buyer-representation' },
        ]}
        questions={[
          {
            question: 'What is buyer representation for new construction homes?',
            answer: 'Buyer representation means your agent represents YOU, the homebuyer, not the builder. Dr. Jan Duffy provides expert buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, including construction monitoring, building standards inspection, and insider knowledge—all at no extra cost to you.',
          },
          {
            question: 'What is the difference between a buyer\'s agent and a builder\'s agent?',
            answer: 'A builder\'s agent represents the builder\'s interests, while a buyer\'s agent represents YOUR interests. Dr. Jan Duffy is a buyer\'s agent who represents HOME BUYERS, not the builder. She provides construction monitoring, building standards inspection, and helps you get the best value—all at no extra cost because builders pay for buyer representation.',
          },
          {
            question: 'Does it cost more to use a buyer\'s agent for new construction?',
            answer: 'No—the commission is built into new construction home pricing whether you represent yourself or hire a buyer\'s agent. You\'re already paying for representation, so choose someone who protects YOUR interests. Dr. Jan Duffy provides expert buyer representation at no extra cost to you.',
          },
        ]}
      />
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buyer Representation vs Builder's Agent: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Learn why you need a buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy represents HOME BUYERS, not the builder.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">What is Buyer Representation?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Buyer representation means your agent represents YOU, the homebuyer, not the builder. When you work with Dr. Jan Duffy as your buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, she represents YOUR interests throughout the entire homebuying process.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Unlike a builder's agent who represents the builder's interests, Dr. Jan Duffy is committed to protecting YOUR investment, ensuring quality construction, and helping you get the best value for your new construction home.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Buyer's Agent vs Builder's Agent: Key Differences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Buyer's Agent (Dr. Jan Duffy)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Represents YOU, the homebuyer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Protects YOUR interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Construction monitoring every 7-10 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Building standards inspection at closing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Insider knowledge of inventory and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Helps you get the best value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>No extra cost to you (builders pay)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted border-2 border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Builder's Agent</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Represents the builder's interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Works to maximize builder's profit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>No construction monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>No independent inspection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Limited knowledge of other communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>May not negotiate best pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>You still pay the same price</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why You Need Buyer Representation for New Construction</h2>
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">Construction Monitoring</h3>
                <p className="text-muted-foreground mb-2">
                  Dr. Jan Duffy monitors your home's construction every 7-10 days throughout the build process in Skye Canyon (zip code 89166) and northwest Las Vegas communities. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars.
                </p>
                <p className="text-muted-foreground">
                  When the superintendent knows monitoring will happen, your home gets built right. A builder's agent doesn't provide this service.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">Building Standards Inspection</h3>
                <p className="text-muted-foreground mb-2">
                  Dr. Jan Duffy provides a complimentary building standards inspection at closing that identifies issues BEFORE your warranty matters. This specialized inspection ensures your new construction home in Skye Canyon or northwest Las Vegas is built to the highest standards.
                </p>
                <p className="text-muted-foreground">
                  A builder's agent won't provide an independent inspection—they work for the builder.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">Insider Knowledge</h3>
                <p className="text-muted-foreground mb-2">
                  Dr. Jan Duffy has insider knowledge of all new construction developments in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. She knows current pricing, available incentives, and inventory for all communities.
                </p>
                <p className="text-muted-foreground">
                  She knows which lots have the best views, which floor plans are most popular, and how to maximize your value when purchasing in Skye Canyon or northwest Las Vegas.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">Protection of Your Interests</h3>
                <p className="text-muted-foreground mb-2">
                  A buyer's agent protects YOUR interests, not the builder's. Dr. Jan Duffy helps you understand contracts, negotiate terms, and ensure you're getting the best value for your new construction home in Skye Canyon or northwest Las Vegas.
                </p>
                <p className="text-muted-foreground">
                  A builder's agent works to maximize the builder's profit, not protect your investment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Does Buyer Representation Cost More?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>No—buyer representation does not cost you anything extra.</strong> The commission is built into new construction home pricing whether you represent yourself, use a builder's agent, or hire a buyer's agent like Dr. Jan Duffy.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              You're already paying for representation, so choose someone who protects YOUR interests. Dr. Jan Duffy provides expert buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas at no extra cost to you because builders pay for buyer representation.
            </p>
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-lg">
              <p className="text-lg text-foreground font-semibold mb-2">
                You pay the same price whether you use a buyer's agent or not—so why not get expert representation that protects YOUR interests?
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">What Dr. Jan Duffy Provides as Your Buyer's Agent</h2>
            <p className="text-lg text-muted-foreground mb-4">
              When you work with Dr. Jan Duffy as your buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
              <li><strong>Expert Buyer Representation:</strong> She represents YOU, not the builder</li>
              <li><strong>Construction Monitoring:</strong> Every 7-10 days throughout the build process</li>
              <li><strong>Building Standards Inspection:</strong> Complimentary inspection at closing</li>
              <li><strong>Insider Knowledge:</strong> Current pricing, incentives, and inventory in Skye Canyon and northwest Las Vegas</li>
              <li><strong>Contract Review:</strong> Helps you understand and negotiate terms</li>
              <li><strong>Community Knowledge:</strong> Knows which lots, floor plans, and communities offer best value</li>
              <li><strong>No Extra Cost:</strong> Builders pay for buyer representation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How to Get Started with Buyer Representation</h2>
            <p className="text-lg text-muted-foreground mb-4">
              If you're considering a new construction home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada, contact Dr. Jan Duffy BEFORE visiting model homes. Proper registration ensures your buyer representation is protected.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Call Dr. Jan Duffy at <strong>(702) 903-4687</strong> to get started with expert buyer representation for new construction homes in Skye Canyon and northwest Las Vegas.
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">Important: Register Before Visiting</h3>
              <p className="text-muted-foreground mb-2">
                It's crucial to register correctly with builders to ensure your buyer's agent representation. Dr. Jan Duffy handles proper registration to protect your co-op benefits and ensure commission applies to your purchase.
              </p>
              <p className="text-muted-foreground">
                <strong>Call her BEFORE visiting model homes</strong> to ensure you get the full benefits of buyer representation.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services/construction-monitoring"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Construction Monitoring Service</h3>
                <p className="text-muted-foreground">
                  Learn how Dr. Jan Duffy monitors your home's construction every 7-10 days to catch issues early.
                </p>
              </Link>
              <Link
                href="/services/building-standards-inspection"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Building Standards Inspection</h3>
                <p className="text-muted-foreground">
                  Learn about the complimentary building standards inspection at closing that catches issues before warranty expires.
                </p>
              </Link>
            </div>
          </section>
        </div>

        <DrJanCTABanner context="buyer representation" />
    </MarketingPageShell>
  )
}