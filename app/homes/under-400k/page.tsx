import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Homes Under $400k Las Vegas | Affordable New Construction',
  description: 'Find new construction homes under $400k in Las Vegas, Nevada. Affordable new construction homes perfect for first-time buyers. Expert buyer\'s agent guidance. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/under-400k',
  },
}

export default function Under400kPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="property-type"
        url="/homes/under-400k"
        title="Homes Under $400k Las Vegas | Affordable New Construction | Buyer's Agent"
        description="Find new construction homes under $400k in Las Vegas, Nevada. Discover affordable new construction homes perfect for first-time buyers and budget-conscious homebuyers with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/under-400k' },
          { name: 'Homes Under $400k', url: '/homes/under-400k' },
        ]}
        priceRange="Under $400,000"
        questions={[
          {
            question: 'What new construction homes are available under $400k in Las Vegas, Nevada?',
            answer: 'Builders offer homes under $400k including townhomes in Skye Canyon, Las Vegas, Nevada like Arroyo at Skyeview starting from $392,640. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability.',
          },
          {
            question: 'What financing options are available for homes under $400k?',
            answer: 'Homes under $400k may qualify for FHA loans with as little as 3.5% down, conventional loans, and down payment assistance programs. Dr. Jan Duffy can help you explore financing options.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Homes Under $400k in Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover affordable new construction homes under $400,000 in Las Vegas, Nevada. Perfect for first-time buyers and those seeking great value with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable New Construction in Las Vegas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Finding quality new construction homes under $400k in Las Vegas, Nevada is possible. These homes offer modern features, energy efficiency, and builder warranties at an affordable price point. Your buyer's agent, Dr. Jan Duffy, helps you find the best options.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With current builder incentives including rate buy-downs and closing cost assistance, you may find that a new construction home fits your budget better than expected.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Communities Under $400k</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/" className="text-blue-600 hover:text-blue-700">
                        Arroyo at Skyeview
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-2">Townhomes in Skye Canyon starting from $392,640</p>
                    <p className="text-blue-600 font-semibold">2-4 bedrooms, 2.5 baths, 2-car garages</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6">
                  Inventory and pricing change frequently. Contact Dr. Jan Duffy for current availability and pricing in your budget range.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Buy New Construction Under $400k?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Features</h3>
                    <p className="text-gray-700">
                      New homes include energy-efficient systems, modern appliances, and contemporary designs that can save you money on utilities.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Builder Warranties</h3>
                    <p className="text-gray-700">
                      Comprehensive warranties protect you from unexpected repair costs, providing peace of mind.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Builder Incentives</h3>
                    <p className="text-gray-700">
                      Current incentives can reduce your monthly payment and closing costs, making new construction more affordable.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">No Competition</h3>
                    <p className="text-gray-700">
                      Avoid bidding wars and cash offers common in the resale market. New construction offers more availability.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Options for Homes Under $400k</h2>
                <p className="text-lg text-gray-700 mb-4">
                  With homes under $400k, you may qualify for various financing options:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li><strong>FHA Loans:</strong> 3.5% down payment required</li>
                  <li><strong>Conventional Loans:</strong> As little as 5% down for qualified buyers</li>
                  <li><strong>VA Loans:</strong> 0% down for veterans and active military</li>
                  <li><strong>Down Payment Assistance:</strong> Nevada programs may be available</li>
                  <li><strong>Builder Incentives:</strong> Closing cost assistance and rate buy-downs</li>
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <DrJanContactCard />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

