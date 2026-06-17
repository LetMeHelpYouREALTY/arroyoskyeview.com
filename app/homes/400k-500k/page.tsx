import type { Metadata } from 'next'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Homes $400K-$500K Las Vegas | Mid-Range New Construction',
  description: 'Find new construction homes $400K-$500K in Las Vegas, Nevada. Mid-range new construction homes perfect for families and move-up buyers. Expert buyer\'s agent guidance. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/400k-500k',
  },
}

export default function Homes400k500kPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="property-type"
        url="/homes/400k-500k"
        title="Homes $400K-$500K Las Vegas | Mid-Range New Construction | Buyer's Agent"
        description="Find new construction homes $400K-$500K in Las Vegas, Nevada. Discover mid-range new construction homes perfect for families and move-up buyers with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/400k-500k' },
          { name: 'Homes $400K-$500K', url: '/homes/400k-500k' },
        ]}
        priceRange="$400,000 - $500,000"
        questions={[
          {
            question: 'What new construction homes are available $400K-$500K in Las Vegas, Nevada?',
            answer: 'The $400K-$500K price range offers excellent options for new construction homes in Las Vegas, Nevada including single-family homes, larger townhomes, and move-up buyer communities. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability.',
          },
          {
            question: 'What financing options are available for homes $400K-$500K?',
            answer: 'Homes in the $400K-$500K range typically qualify for conventional loans with competitive rates, FHA loans up to loan limits, VA loans for veterans, and jumbo loans if needed. Builder incentives may also be available. Dr. Jan Duffy can help you explore financing options.',
          },
          {
            question: 'What features can I expect in homes $400K-$500K?',
            answer: 'Homes in the $400K-$500K range typically feature larger square footage, premium finishes, upgraded appliances, energy-efficient systems, and desirable locations in master-planned communities. Dr. Jan Duffy can show you available options.',
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
              New Construction Homes $400K-$500K in Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover mid-range new construction homes $400,000-$500,000 in Las Vegas, Nevada. Perfect for families and move-up buyers seeking quality, space, and modern features with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Mid-Range New Construction in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  The $400K-$500K price range offers excellent value for new construction homes in Las Vegas, Nevada. This range typically includes single-family homes, larger townhomes, and move-up buyer communities with premium features, more square footage, and desirable locations in master-planned communities.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With current builder incentives including rate buy-downs and closing cost assistance, you may find that homes in this range offer exceptional value. Your buyer's agent, Dr. Jan Duffy, helps you find the best options and maximize your value.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect in Homes $400K-$500K</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">More Square Footage</h3>
                    <p className="text-muted-foreground">
                      Homes in this range typically offer 1,800-3,000+ square feet, providing ample space for families and entertaining.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Premium Finishes</h3>
                    <p className="text-muted-foreground">
                      Expect upgraded flooring, countertops, cabinetry, and fixtures that enhance your home's value and appeal.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Energy Efficiency</h3>
                    <p className="text-muted-foreground">
                      Modern energy-efficient systems, windows, and appliances help reduce utility costs while protecting the environment.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Desirable Locations</h3>
                    <p className="text-muted-foreground">
                      Homes in this range are often located in premier master-planned communities with excellent schools and amenities.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Financing Options for Homes $400K-$500K</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Homes in the $400K-$500K range typically qualify for various financing options:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Conventional Loans:</strong> Competitive rates with 5-20% down payment</li>
                  <li><strong>FHA Loans:</strong> Up to FHA loan limits with 3.5% down</li>
                  <li><strong>VA Loans:</strong> 0% down for veterans and active military</li>
                  <li><strong>Jumbo Loans:</strong> For amounts above conventional loan limits</li>
                  <li><strong>Builder Incentives:</strong> Rate buy-downs and closing cost assistance</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Dr. Jan Duffy can connect you with trusted lenders who specialize in mid-range home financing and help you understand all available options.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Perfect for Move-Up Buyers</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  The $400K-$500K range is ideal for move-up buyers who are ready to upgrade from their first home. Benefits include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>More space for growing families</li>
                  <li>Premium features and finishes</li>
                  <li>Better locations in master-planned communities</li>
                  <li>Modern energy-efficient systems</li>
                  <li>Builder warranties for peace of mind</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Working with Dr. Jan Duffy for Mid-Range Homes</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When purchasing a home in the $400K-$500K range, working with Dr. Jan Duffy ensures you have expert buyer representation at no extra cost to you. She helps you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Identify the best communities and floor plans in your price range</li>
                  <li>Understand builder incentives that can maximize your value</li>
                  <li>Navigate financing options for mid-range homes</li>
                  <li>Get construction monitoring and building standards inspection included</li>
                  <li>Access insider knowledge of current inventory and pricing</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Builders pay for buyer representation, so there's no extra cost. Call Dr. Jan Duffy at (702) 903-4687 to explore your options.
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
                href="/homes/500k-plus"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Luxury Homes $500K+
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover luxury new construction homes with premium features.
                </p>
              </Link>
            </div>
          </div>
        </section>
    </MarketingPageShell>
  )
}