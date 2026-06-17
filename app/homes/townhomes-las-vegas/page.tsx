import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Townhomes for Sale Las Vegas | New Construction Townhomes',
  description: 'Find new construction townhomes in Las Vegas, Nevada. Modern townhomes with 2-4 bedrooms, premium finishes. Expert buyer\'s agent representation with Dr. Jan Duffy. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homes/townhomes-las-vegas',
  },
}

export default function TownhomesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="property-type"
        url="/homes/townhomes-las-vegas"
        title="Townhomes for Sale Las Vegas | New Construction Townhomes | Buyer's Agent"
        description="Find new construction townhomes in Las Vegas, Nevada. Modern townhomes with 2-4 bedrooms, premium finishes, and low-maintenance living. Expert buyer's agent representation included."
        breadcrumbs={[
          { name: 'Homes', url: '/homes/townhomes-las-vegas' },
          { name: 'Townhomes', url: '/homes/townhomes-las-vegas' },
        ]}
        questions={[
          {
            question: 'What townhome communities are available in Las Vegas, Nevada?',
            answer: 'New construction townhomes are available in Skye Canyon, Las Vegas, Nevada including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability.',
          },
          {
            question: 'What are the benefits of buying a townhome?',
            answer: 'Townhomes offer low-maintenance living, modern designs, and often include amenities like garages and outdoor spaces. They\'re perfect for first-time buyers, downsizers, and those seeking convenience.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        {/* Hero Section */}
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Townhomes in Las Vegas: Skye Canyon | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover modern new construction townhomes in Las Vegas, Nevada. Perfect for first-time buyers, downsizers, and investors seeking low-maintenance living with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose a Townhome?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Townhomes offer the perfect balance of homeownership and convenience. New construction townhomes in Las Vegas, Nevada provide modern living spaces with low-maintenance lifestyles, ideal for busy professionals, first-time buyers, and active adults.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Low Maintenance</h3>
                    <p className="text-muted-foreground">
                      Exterior maintenance and landscaping are typically handled by the community, giving you more time to enjoy life.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Affordable Entry</h3>
                    <p className="text-muted-foreground">
                      Townhomes often provide more space and features per dollar than single-family homes in the same area.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Modern Features</h3>
                    <p className="text-muted-foreground">
                      New construction townhomes include modern floor plans, energy-efficient systems, and premium finishes.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Community Amenities</h3>
                    <p className="text-muted-foreground">
                      Many townhome communities include shared amenities like pools, parks, and recreational facilities.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">New Construction Townhomes in Las Vegas, Nevada</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Several new construction townhome communities are available in Las Vegas, Nevada, including:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border border-border rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/" className="text-primary hover:text-primary">
                        Arroyo at Skyeview: 2-story townhomes starting at $392,640
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">2-story townhomes with 2-4 bedrooms, 2.5 baths, and 2-bay garages in Skye Canyon</p>
                    <p className="text-primary font-semibold">Starting from $392,640</p>
                  </div>
                  <div className="border border-border rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/sierra-at-skyeview" className="text-primary hover:text-primary">
                        Sierra at Skyeview: Skye Canyon townhomes with 2-4 bedrooms
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">New construction townhomes in Skye Canyon with modern floor plans and premium finishes</p>
                    <p className="text-primary font-semibold">Starting from $392,640</p>
                  </div>
                  <div className="border border-border rounded-lg p-6 hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/terra-at-skyeview" className="text-primary hover:text-primary">
                        Terra at Skyeview: New construction townhomes in northwest Las Vegas
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">Modern townhomes in Skye Canyon with energy-efficient features and contemporary designs</p>
                    <p className="text-primary font-semibold">Starting from $392,640</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Townhome Features</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  New construction townhomes in Las Vegas, Nevada typically include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Open-concept floor plans perfect for modern living</li>
                  <li>2-4 bedrooms and 2-3 bathrooms</li>
                  <li>Attached 2-car garages</li>
                  <li>Energy-efficient appliances and systems</li>
                  <li>Premium finishes and modern design</li>
                  <li>Low-maintenance exteriors</li>
                  <li>Builder warranties included</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Expert Buyer Representation</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When buying a new construction townhome in Las Vegas, Nevada, Dr. Jan Duffy, your buyer's agent, provides expert buyer representation including construction monitoring, building standards inspection, and insider knowledge of available inventory. She represents YOU, not the builder.
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
      </main>
      <Footer />
    </div>
  )
}

