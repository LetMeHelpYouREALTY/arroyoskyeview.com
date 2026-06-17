import type { Metadata } from 'next'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Luxury Homes $500K+ Las Vegas | Premium New Construction',
  description: 'Find luxury new construction homes $500K+ in Las Vegas, Nevada. Premium new construction homes with luxury features in master-planned communities. Expert buyer\'s agent guidance. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/500k-plus',
  },
}

export default function Homes500kPlusPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="property-type"
        url="/homes/500k-plus"
        title="Luxury Homes $500K+ Las Vegas | Premium New Construction | Buyer's Agent"
        description="Find luxury new construction homes $500K+ in Las Vegas, Nevada. Discover premium new construction homes with luxury features, premium finishes, and desirable locations in master-planned communities with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/500k-plus' },
          { name: 'Luxury Homes $500K+', url: '/homes/500k-plus' },
        ]}
        priceRange="$500,000+"
        questions={[
          {
            question: 'What luxury new construction homes are available $500K+ in Las Vegas, Nevada?',
            answer: 'Luxury new construction homes $500K+ are available in premier master-planned communities throughout Las Vegas, Nevada including Summerlin, Skye Canyon, and Henderson. These homes feature premium finishes, larger square footage, and desirable locations. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability.',
          },
          {
            question: 'What financing options are available for luxury homes $500K+?',
            answer: 'Luxury homes $500K+ typically require jumbo loans or conventional loans with larger down payments. Builder incentives may be available. Dr. Jan Duffy can connect you with lenders who specialize in luxury home financing.',
          },
          {
            question: 'What features can I expect in luxury homes $500K+?',
            answer: 'Luxury homes $500K+ typically feature premium finishes, high-end appliances, larger square footage, desirable lot locations, energy-efficient systems, and locations in premier master-planned communities. Dr. Jan Duffy can show you available luxury options.',
          },
        ]}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury New Construction Homes $500K+ in Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover luxury new construction homes $500,000+ in Las Vegas, Nevada. Premium homes with luxury features, premium finishes, and desirable locations in master-planned communities with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Luxury New Construction in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Luxury new construction homes $500K+ in Las Vegas, Nevada offer the ultimate in modern living. These premium homes are typically located in premier master-planned communities like Summerlin, Skye Canyon, and Henderson, featuring luxury finishes, larger square footage, and desirable lot locations.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With current builder incentives and competitive pricing, luxury new construction offers exceptional value. Your buyer's agent, Dr. Jan Duffy, helps you find the perfect luxury home and maximize your investment.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Luxury Features in Homes $500K+</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Premium Finishes</h3>
                    <p className="text-muted-foreground">
                      High-end flooring, countertops, cabinetry, and fixtures that create a luxury living experience.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Larger Square Footage</h3>
                    <p className="text-muted-foreground">
                      Spacious floor plans typically 2,500+ square feet with multiple living areas and master suites.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">High-End Appliances</h3>
                    <p className="text-muted-foreground">
                      Professional-grade appliances, smart home technology, and modern conveniences throughout.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Desirable Locations</h3>
                    <p className="text-muted-foreground">
                      Premium lots in premier master-planned communities with excellent schools and amenities.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Energy Efficiency</h3>
                    <p className="text-muted-foreground">
                      State-of-the-art energy-efficient systems that reduce utility costs while protecting the environment.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Customization Options</h3>
                    <p className="text-muted-foreground">
                      Ability to customize finishes, flooring, and design elements to match your personal style.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Financing Options for Luxury Homes $500K+</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Luxury homes $500K+ typically require specialized financing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Jumbo Loans:</strong> For amounts above conventional loan limits ($766,550+ in most areas)</li>
                  <li><strong>Conventional Loans:</strong> Up to loan limits with competitive rates</li>
                  <li><strong>Portfolio Loans:</strong> Alternative financing options for luxury properties</li>
                  <li><strong>Builder Financing:</strong> Some builders offer financing programs</li>
                  <li><strong>Builder Incentives:</strong> Rate buy-downs and closing cost assistance may be available</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Dr. Jan Duffy can connect you with lenders who specialize in luxury home financing and help you understand all available options.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Premier Master-Planned Communities</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Luxury new construction homes $500K+ are typically located in premier master-planned communities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Summerlin:</strong> Premier master-planned community with luxury amenities and top-rated schools</li>
                  <li><strong>Skye Canyon:</strong> Northwest Las Vegas community with modern homes and extensive amenities</li>
                  <li><strong>Henderson:</strong> Family-friendly area with excellent schools and lower crime rates</li>
                  <li><strong>Other Premier Communities:</strong> Various luxury communities throughout Las Vegas Metro</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Working with Dr. Jan Duffy for Luxury Homes</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When purchasing a luxury home $500K+, working with Dr. Jan Duffy ensures you have expert buyer representation at no extra cost to you. She helps you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Identify the best luxury communities and floor plans</li>
                  <li>Understand builder incentives and customization options</li>
                  <li>Navigate jumbo loan financing and specialized lenders</li>
                  <li>Get construction monitoring and building standards inspection included</li>
                  <li>Access insider knowledge of premium inventory and pricing</li>
                  <li>Maximize your investment with expert negotiation</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Builders pay for buyer representation, so there's no extra cost. Call Dr. Jan Duffy at (702) 903-4687 to explore luxury options.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <DrJanContactCard />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Explore Other Price Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/homes/under-300k"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Homes Under $300k
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover entry-level new construction homes perfect for first-time buyers.
                </p>
              </Link>
              <Link
                href="/homes/under-400k"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Homes Under $400k
                </h3>
                <p className="text-muted-foreground text-sm">
                  Explore affordable new construction homes including Arroyo at Skyeview.
                </p>
              </Link>
              <Link
                href="/homes/400k-500k"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Homes $400K-$500K
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover mid-range new construction homes perfect for families.
                </p>
              </Link>
            </div>
          </div>
        </section>
    </MarketingPageShell>
  )
}