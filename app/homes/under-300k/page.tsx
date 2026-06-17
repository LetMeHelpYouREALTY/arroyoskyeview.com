import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Homes Under $300k Las Vegas | Entry-Level New Construction',
  description: 'Find new construction homes under $300k in Las Vegas, Nevada. Entry-level new construction homes perfect for first-time buyers. Expert buyer\'s agent guidance. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/under-300k',
  },
}

export default function Under300kPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="property-type"
        url="/homes/under-300k"
        title="Homes Under $300k Las Vegas | Entry-Level New Construction | Buyer's Agent"
        description="Find new construction homes under $300k in Las Vegas, Nevada. Discover entry-level new construction homes perfect for first-time buyers and budget-conscious homebuyers with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/under-300k' },
          { name: 'Homes Under $300k', url: '/homes/under-300k' },
        ]}
        priceRange="Under $300,000"
        questions={[
          {
            question: 'What new construction homes are available under $300k in Las Vegas, Nevada?',
            answer: 'While inventory under $300k is limited, builders occasionally offer entry-level homes, condominiums, or townhomes in this price range. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability and pricing in Las Vegas, Nevada.',
          },
          {
            question: 'What financing options are available for homes under $300k?',
            answer: 'Homes under $300k may qualify for FHA loans with as little as 3.5% down, conventional loans with 5% down, VA loans with 0% down for veterans, and down payment assistance programs. Dr. Jan Duffy can help you explore all financing options.',
          },
          {
            question: 'Are there first-time buyer programs for homes under $300k?',
            answer: 'Yes, first-time homebuyers may qualify for down payment assistance programs, FHA loans, and state-specific programs when purchasing homes under $300k. Dr. Jan Duffy can help you understand available programs in Nevada.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Homes Under $300k in Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover entry-level new construction homes under $300,000 in Las Vegas, Nevada. Perfect for first-time buyers seeking affordable homeownership with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Entry-Level New Construction in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Finding new construction homes under $300k in Las Vegas, Nevada can be challenging, but it's not impossible. Entry-level homes, condominiums, and townhomes may be available in this price range, especially with current builder incentives including rate buy-downs and closing cost assistance.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Your buyer's agent, Dr. Jan Duffy, helps you explore all options in your budget range and can identify communities that may fit your needs. With builder incentives, a home priced slightly above $300k may become affordable with rate buy-downs and closing cost assistance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Consider New Construction Under $300k?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Energy Efficiency</h3>
                    <p className="text-muted-foreground">
                      New homes feature modern energy-efficient systems that can significantly reduce your monthly utility bills compared to older homes.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Builder Warranties</h3>
                    <p className="text-muted-foreground">
                      Comprehensive warranties protect you from unexpected repair costs, providing peace of mind for first-time buyers.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">No Competition</h3>
                    <p className="text-muted-foreground">
                      Avoid bidding wars and cash offers common in the resale market. New construction offers more availability and less competition.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Builder Incentives</h3>
                    <p className="text-muted-foreground">
                      Current incentives including rate buy-downs and closing cost assistance can make new construction more affordable than expected.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Financing Options for Homes Under $300k</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Homes under $300k may qualify for various financing options designed to help first-time buyers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>FHA Loans:</strong> 3.5% down payment required, credit scores as low as 580</li>
                  <li><strong>Conventional Loans:</strong> As little as 5% down for qualified buyers</li>
                  <li><strong>VA Loans:</strong> 0% down for veterans and active military personnel</li>
                  <li><strong>USDA Loans:</strong> 0% down for eligible rural areas (if applicable)</li>
                  <li><strong>Down Payment Assistance:</strong> Nevada programs may provide grants or loans</li>
                  <li><strong>Builder Incentives:</strong> Closing cost assistance and rate buy-downs can reduce upfront costs</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Dr. Jan Duffy can connect you with trusted lenders who specialize in first-time buyer programs and help you understand all available financing options.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">First-Time Buyer Programs</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  If you're a first-time homebuyer looking for homes under $300k, you may qualify for special programs:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Nevada Housing Division Programs</h3>
                    <p className="text-muted-foreground">
                      Nevada offers down payment assistance programs for first-time buyers, including grants and low-interest loans that can help with down payment and closing costs.
                    </p>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">FHA First-Time Buyer Benefits</h3>
                    <p className="text-muted-foreground">
                      FHA loans are popular with first-time buyers because they require lower down payments and accept lower credit scores than conventional loans.
                    </p>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Builder First-Time Buyer Incentives</h3>
                    <p className="text-muted-foreground">
                      Some builders offer special incentives for first-time buyers, including additional closing cost assistance or design center credits.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Working with Dr. Jan Duffy for Entry-Level Homes</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When searching for homes under $300k, working with Dr. Jan Duffy ensures you have expert buyer representation at no extra cost to you. She helps you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Identify all available options in your budget range</li>
                  <li>Understand builder incentives that can make homes more affordable</li>
                  <li>Navigate first-time buyer programs and financing options</li>
                  <li>Get construction monitoring and building standards inspection included</li>
                  <li>Access insider knowledge of current inventory and pricing</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Builders pay for buyer representation, so there's no extra cost to you. Call Dr. Jan Duffy at (702) 903-4687 to explore your options.
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
                href="/homes/under-400k"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Homes Under $400k
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover affordable new construction homes under $400k including Arroyo at Skyeview.
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
                  Explore mid-range new construction homes perfect for families.
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
      </main>
      <Footer />
    </div>
  )
}

