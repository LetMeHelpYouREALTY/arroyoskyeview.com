import type { Metadata } from 'next'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction vs Resale Homes | Which is Right for You?',
  description: 'Compare new construction homes vs resale homes in Las Vegas, Nevada. Learn about the pros and cons of each, costs, timeline, and which option is best for you. Expert guidance from Dr. Jan Duffy, your buyer\'s agent. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/new-construction-vs-resale',
  },
  openGraph: {
    title: 'New Construction vs Resale Homes | Which is Right for You?',
    description: 'Compare new construction homes vs resale homes in Las Vegas, Nevada. Learn about the pros and cons of each, costs, timeline, and which option is best for you.',
    url: 'https://www.arroyoskyeview.com/buyers/new-construction-vs-resale',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Construction vs Resale Homes Comparison',
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

export default function NewConstructionVsResalePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="buyer-guide"
        url="/buyers/new-construction-vs-resale"
        title="New Construction vs Resale Homes | Which is Right for You?"
        description="Compare new construction homes vs resale homes in Las Vegas, Nevada. Learn about the pros and cons of each, costs, timeline, and which option is best for you. Expert guidance from Dr. Jan Duffy, your buyer's agent. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Buyer Guides', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'New Construction vs Resale', url: '/buyers/new-construction-vs-resale' },
        ]}
        questions={[
          {
            question: 'What are the differences between new construction and resale homes?',
            answer: 'New construction homes are brand new, built to modern standards, and come with builder warranties. Resale homes are previously owned, may need updates, and typically have established neighborhoods. New construction offers customization options and modern features, while resale homes offer immediate move-in and established landscaping.',
          },
          {
            question: 'Which is better: new construction or resale?',
            answer: 'The best choice depends on your priorities. New construction offers modern features, customization, and warranties but may have longer timelines. Resale homes offer immediate move-in and established neighborhoods but may need updates. Dr. Jan Duffy helps you determine which option is best for your situation.',
          },
          {
            question: 'Do new construction homes cost more than resale homes?',
            answer: 'New construction homes may have higher initial prices, but they often include modern features, energy efficiency, and builder warranties that can save money long-term. Builder incentives and financing options can also make new construction competitive with resale homes.',
          },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Construction vs Resale: Skye Canyon, Northwest Las Vegas | Buyer's Agent Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Compare new construction and resale homes in Las Vegas, Nevada. Learn about the pros and cons of each option to make the best decision for your situation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Comparison: New Construction vs Resale</h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-6 py-4 text-left font-bold text-foreground">Factor</th>
                    <th className="border border-border px-6 py-4 text-center font-bold text-foreground">New Construction</th>
                    <th className="border border-border px-6 py-4 text-center font-bold text-foreground">Resale Homes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Move-In Timeline</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">3-12 months (construction time)</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">30-60 days (closing process)</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Customization</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">High - Choose finishes, upgrades, layout</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Low - Limited to existing features</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Modern Features</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Yes - Latest technology and design</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Varies - May need updates</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Energy Efficiency</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">High - Modern building standards</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Varies - Depends on age</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Warranty</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Yes - Builder warranty included</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">No - As-is condition</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Maintenance</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Low - Everything is new</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Varies - May need immediate repairs</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Price Negotiation</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Limited - Builder incentives available</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">More flexible - Can negotiate price</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Neighborhood</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">New - Growing community</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Established - Mature neighborhood</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-6 py-4 font-semibold text-foreground">Landscaping</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Minimal - You design and install</td>
                    <td className="border border-border px-6 py-4 text-muted-foreground">Established - Already in place</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Advantages of New Construction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Modern Features</h3>
                <p className="text-muted-foreground">
                  New construction homes include the latest technology, energy-efficient systems, and modern design features that older homes may lack.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Customization</h3>
                <p className="text-muted-foreground">
                  Choose your finishes, upgrades, and sometimes even floor plan modifications to create your perfect home.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Builder Warranty</h3>
                <p className="text-muted-foreground">
                  New construction homes come with builder warranties covering major systems and structural components for peace of mind.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground">
                  Modern building standards mean lower utility bills and better environmental impact compared to older homes.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Low Maintenance</h3>
                <p className="text-muted-foreground">
                  Everything is new, so you won't face immediate repair or replacement costs like you might with resale homes.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Builder Incentives</h3>
                <p className="text-muted-foreground">
                  Many builders offer incentives like rate buy-downs, closing cost assistance, and design center credits.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Advantages of Resale Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Immediate Move-In</h3>
                <p className="text-muted-foreground">
                  Resale homes are ready to move into immediately, typically within 30-60 days of contract acceptance.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Established Neighborhoods</h3>
                <p className="text-muted-foreground">
                  Resale homes are often in mature neighborhoods with established schools, amenities, and community character.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Price Negotiation</h3>
                <p className="text-muted-foreground">
                  More flexibility to negotiate price, repairs, and closing costs compared to new construction.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Established Landscaping</h3>
                <p className="text-muted-foreground">
                  Mature trees, established gardens, and completed landscaping add value and character.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Proven Neighborhood</h3>
                <p className="text-muted-foreground">
                  You can see how the neighborhood has developed over time and what it's like to live there.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Character & History</h3>
                <p className="text-muted-foreground">
                  Older homes may have unique architectural features and character that new construction lacks.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Which Option is Right for You?</h2>
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Choose New Construction if:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>You want modern features and energy efficiency</li>
                <li>You value customization and choosing your finishes</li>
                <li>You prefer low maintenance and builder warranties</li>
                <li>You're flexible on move-in timeline</li>
                <li>You want to be part of a growing community</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Choose Resale if:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You need to move in quickly</li>
                <li>You prefer established neighborhoods</li>
                <li>You want more price negotiation flexibility</li>
                <li>You value mature landscaping and character</li>
                <li>You want to see the neighborhood before buying</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Expert Guidance for Your Decision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dr. Jan Duffy specializes in new construction homes in Las Vegas, Nevada, including Arroyo at Skyeview Homes and other Skye Canyon communities. She provides expert buyer representation to help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-8 ml-4">
              <li>Understand the differences between new construction and resale</li>
              <li>Evaluate which option fits your needs and timeline</li>
              <li>Navigate the new construction process with confidence</li>
              <li>Get the best deal with builder incentives and pricing</li>
              <li>Protect your investment with construction monitoring and building standards inspection</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <p className="text-lg text-muted-foreground">
                <strong>Ready to explore new construction homes?</strong> Contact Dr. Jan Duffy at (702) 903-4687 to learn about available new construction homes in Las Vegas, Nevada. She represents HOME BUYERS, not the builder—at no extra cost to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/buyers/first-time-homebuyer"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">First-Time Homebuyer Guide</h3>
                <p className="text-muted-foreground">
                  Complete guide for first-time homebuyers, including new construction and resale options.
                </p>
              </Link>
              <Link
                href="/work-with-dr-jan"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Work with Dr. Jan Duffy</h3>
                <p className="text-muted-foreground">
                  Learn about Dr. Jan Duffy's expert buyer representation for new construction homes.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="new-construction-vs-resale" />
      </main>
      <Footer />
    </div>
  )
}

