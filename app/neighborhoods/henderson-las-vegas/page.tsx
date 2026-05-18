import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

export const metadata: Metadata = {
  title: 'New Homes in Henderson Las Vegas | New Construction Homes',
  description: 'Discover new construction homes in Henderson, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/neighborhoods/henderson-las-vegas',
  },
}

export default function HendersonPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="neighborhood"
        url="/neighborhoods/henderson-las-vegas"
        title="New Homes in Henderson Las Vegas | New Construction Homes | Buyer's Agent"
        description="Discover new construction homes in Henderson, Nevada. Find new construction homes with expert buyer's agent representation from Dr. Jan Duffy. Construction monitoring and insider knowledge included."
        breadcrumbs={[
          { name: 'Neighborhoods', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Henderson', url: '/neighborhoods/henderson-las-vegas' },
        ]}
        location="Henderson"
        zipCode="89011"
        questions={[
          {
            question: 'What new construction developments are in Henderson?',
            answer: 'Henderson features new construction developments including The Townes at Union Village. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory in Henderson, Nevada.',
          },
          {
            question: 'What are the benefits of living in Henderson?',
            answer: 'Henderson offers family-friendly neighborhoods, excellent schools, lower crime rates, and proximity to Lake Las Vegas and outdoor recreation. It\'s one of Nevada\'s safest cities.',
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
              New Construction Homes in Henderson, Nevada | Buyer's Agent Representation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover exceptional new construction homes in Henderson, Nevada's second-largest city. Get expert buyer's agent representation with Dr. Jan Duffy for new construction homes.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Henderson, Nevada</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson is Nevada's second-largest city and consistently ranked as one of the safest cities in America. Located just southeast of Las Vegas, Henderson offers a family-friendly atmosphere with excellent schools, beautiful parks, and a strong sense of community.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson features several master-planned communities and offers residents:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Top-rated public and private schools</li>
                  <li>Extensive park system and recreational facilities</li>
                  <li>Premium shopping and dining options</li>
                  <li>Proximity to Lake Las Vegas and Lake Mead</li>
                  <li>Lower property taxes than many areas</li>
                  <li>Safe neighborhoods with active community involvement</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">New Construction Homes in Henderson, Nevada</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Builders offer new construction homes in Henderson, Nevada, including communities like The Townes at Union Village. These homes feature modern designs, energy-efficient construction, and premium finishes.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you're a first-time homebuyer or looking to upgrade, Henderson offers diverse housing options with excellent value and quality of life.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Henderson?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Security</h3>
                    <p className="text-gray-700">
                      Henderson consistently ranks among the safest cities in America, providing peace of mind for families.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Living</h3>
                    <p className="text-gray-700">
                      Competitive home prices and lower property taxes make Henderson an attractive option for homebuyers.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Excellent Schools</h3>
                    <p className="text-gray-700">
                      Henderson is home to some of the highest-rated schools in Nevada, making it ideal for families with children.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recreation & Amenities</h3>
                    <p className="text-gray-700">
                      Close to Lake Las Vegas, Lake Mead, and numerous parks and trails for outdoor enthusiasts.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Buyer Representation</h2>
                <p className="text-lg text-gray-700 mb-4">
                  When buying a new construction home in Henderson, Dr. Jan Duffy provides expert representation to ensure you get the best value and protection throughout the process.
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
        <section className="bg-gray-50 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              New Construction Homes in Las Vegas Metro
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore new construction developments across Las Vegas, Nevada, including nearby areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/areas/zip-89166"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Skye Canyon: Master-planned community in northwest Las Vegas
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover Arroyo at Skyeview, Sierra at Skyeview, Terra at Skyeview, and Eaglepointe at Skye Canyon.
                </p>
              </Link>
              <Link
                href="/neighborhoods/summerlin-las-vegas"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Summerlin: Premier master-planned community
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore luxury new construction homes in Summerlin, one of Las Vegas's most desirable areas.
                </p>
              </Link>
              <Link
                href="/find-your-new-home/nevada/las-vegas-metro"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Browse all Las Vegas Metro new construction communities
                </h3>
                <p className="text-gray-600 text-sm">
                  View all new construction homes across Las Vegas, Henderson, and surrounding areas in Nevada.
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

