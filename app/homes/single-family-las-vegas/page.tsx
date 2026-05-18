import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Single Family Homes Las Vegas | New Construction',
  description: 'Find new construction single-family homes in Las Vegas. Spacious homes with modern designs and premium finishes. Expert buyer representation. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/single-family-las-vegas',
  },
  openGraph: {
    title: 'Single Family Homes Las Vegas | New Construction',
    description: 'Find new construction single-family homes in Las Vegas. Spacious homes with modern designs and premium finishes. Expert buyer representation. Call (702) 903-4687.',
    url: 'https://www.arroyoskyeview.com/homes/single-family-las-vegas',
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

export default function SingleFamilyHomesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="property-type"
        url="/homes/single-family-las-vegas"
        title="Single Family Homes Las Vegas | New Construction | Buyer's Agent"
        description="Find new construction single-family homes in Las Vegas, Nevada. Spacious single-family homes with modern designs, premium finishes, and expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/single-family-las-vegas' },
          { name: 'Single Family Homes', url: '/homes/single-family-las-vegas' },
        ]}
        questions={[
          {
            question: 'What single-family home communities are available in Las Vegas, Nevada?',
            answer: 'New construction single-family homes are available in communities throughout Las Vegas, Nevada including Skye Canyon, Summerlin, and Henderson. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability.',
          },
          {
            question: 'What are the benefits of buying a single-family home?',
            answer: 'Single-family homes offer more privacy, space, and the ability to customize your property. They\'re ideal for families and those who want their own yard and no shared walls.',
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
              New Construction Single-Family Homes in Las Vegas: Skye Canyon | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover spacious new construction single-family homes in Las Vegas, Nevada. Perfect for growing families seeking privacy, space, and modern living with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Single-Family Home?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Single-family homes offer the ultimate in privacy, space, and customization. New construction single-family homes in Las Vegas, Nevada are designed for modern families with features that enhance daily living.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Space</h3>
                    <p className="text-gray-700">
                      Detached homes provide complete privacy with your own yard and no shared walls.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customization</h3>
                    <p className="text-gray-700">
                      More flexibility to customize your home with finishes, layouts, and features that match your lifestyle.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Space</h3>
                    <p className="text-gray-700">
                      Private yards perfect for outdoor entertaining, play areas, or gardening.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Value</h3>
                    <p className="text-gray-700">
                      Single-family homes typically offer strong appreciation potential and resale value.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">New Construction Single-Family Homes in Las Vegas, Nevada</h2>
                <p className="text-lg text-gray-700 mb-4">
                  New construction single-family homes are available across Las Vegas, Nevada in master-planned communities with excellent amenities, schools, and location benefits.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Each home is built with quality construction, modern floor plans, and energy-efficient features designed to enhance your lifestyle and reduce utility costs.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/eaglepointe-skye-canyon" className="text-blue-600 hover:text-blue-700">
                        Eaglepointe at Skye Canyon: Master-planned community homes
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-2">New construction single-family homes in Skye Canyon with modern designs and premium finishes</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/ironwood" className="text-blue-600 hover:text-blue-700">
                        Ironwood: Las Vegas Metro single-family homes
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-2">Spacious new construction homes in Las Vegas Metro with contemporary floor plans</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/homestead-west" className="text-blue-600 hover:text-blue-700">
                        Homestead West: New construction single-family homes
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-2">Modern single-family homes in Las Vegas with energy-efficient features</p>
                  </div>
                  <p className="text-gray-600 mt-4">
                    <Link href="/find-your-new-home/nevada/las-vegas-metro" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Browse all Las Vegas Metro new construction communities →
                    </Link>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Single-Family Home Features</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
                  <li>Spacious floor plans with 3-5+ bedrooms</li>
                  <li>Multiple bathrooms and living spaces</li>
                  <li>2-3 car garages</li>
                  <li>Private yards and outdoor spaces</li>
                  <li>Modern kitchens with premium appliances</li>
                  <li>Energy-efficient HVAC and insulation</li>
                  <li>Builder warranties included</li>
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

