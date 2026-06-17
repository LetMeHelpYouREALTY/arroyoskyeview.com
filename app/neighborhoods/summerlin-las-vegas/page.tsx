import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

export const metadata: Metadata = {
  title: 'New Homes in Summerlin Las Vegas | New Construction Homes',
  description: 'Discover new construction homes in Summerlin, Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/neighborhoods/summerlin-las-vegas',
  },
}

export default function SummerlinPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="neighborhood"
        url="/neighborhoods/summerlin-las-vegas"
        title="New Homes in Summerlin Las Vegas | New Construction Homes | Buyer's Agent"
        description="Discover new construction homes in Summerlin, Las Vegas, Nevada. Find new construction homes with expert buyer's agent representation from Dr. Jan Duffy. Construction monitoring and insider knowledge included."
        breadcrumbs={[
          { name: 'Neighborhoods', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Summerlin', url: '/neighborhoods/summerlin-las-vegas' },
        ]}
        location="Summerlin"
        zipCode="89149"
        questions={[
          {
            question: 'What new construction developments are in Summerlin?',
            answer: 'Summerlin features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in Summerlin, Las Vegas, Nevada.',
          },
          {
            question: 'What are the benefits of living in Summerlin?',
            answer: 'Summerlin offers luxury living, golf courses, excellent schools, shopping, dining, and recreational amenities. It\'s one of Las Vegas\'s most desirable master-planned communities.',
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
              New Construction Homes in Summerlin, Las Vegas | Buyer's Agent Representation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Discover premier new construction homes in Summerlin, one of Las Vegas's most desirable master-planned communities. Get expert representation with Dr. Jan Duffy.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">About Summerlin, Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Summerlin is one of the most prestigious master-planned communities in Las Vegas, offering residents a premium lifestyle with world-class amenities, top-rated schools, and beautiful natural surroundings.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Located on the western edge of Las Vegas, Summerlin spans over 22,500 acres and features multiple villages, each with its own unique character and amenities. The community is known for its:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Championship golf courses and country clubs</li>
                  <li>Extensive trail systems and parks</li>
                  <li>Top-rated public and private schools</li>
                  <li>Premium shopping and dining destinations</li>
                  <li>Proximity to Red Rock Canyon National Conservation Area</li>
                  <li>Strong community events and activities</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">New Construction Homes in Summerlin</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Builders offer exceptional new construction homes in the Summerlin area, Las Vegas, Nevada, designed for modern living with premium finishes and energy-efficient features.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Whether you're looking for a single-family home, townhome, or luxury residence, Summerlin provides diverse housing options to suit various lifestyles and budgets.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Summerlin?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Quality of Life</h3>
                    <p className="text-muted-foreground">
                      Summerlin consistently ranks among the best places to live in Nevada, offering a perfect blend of urban convenience and natural beauty.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Investment Value</h3>
                    <p className="text-muted-foreground">
                      Properties in Summerlin have historically maintained strong values and appreciation rates, making it an excellent long-term investment.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Family-Friendly</h3>
                    <p className="text-muted-foreground">
                      With award-winning schools, safe neighborhoods, and abundant recreational facilities, Summerlin is ideal for families.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Location Benefits</h3>
                    <p className="text-muted-foreground">
                      Just 20 minutes from the Las Vegas Strip and McCarran Airport, while maintaining a peaceful residential atmosphere.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Expert Buyer Representation</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When buying a new construction home in Summerlin, working with Dr. Jan Duffy ensures you have expert representation throughout the process. Dr. Jan provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Insider knowledge of available new construction homes in Las Vegas, Nevada</li>
                  <li>Construction monitoring during your home's build</li>
                  <li>Building standards inspection at closing</li>
                  <li>Negotiation expertise for best pricing and incentives</li>
                  <li>No additional cost - builders pay for buyer's agent representation</li>
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
        <section className="bg-muted py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              New Construction Homes in Las Vegas Metro
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore new construction developments across Las Vegas, Nevada, including nearby areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/areas/zip-89128"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89128: Summerlin Area
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover luxury new construction homes in zip code 89128, Summerlin area.
                </p>
              </Link>
              <Link
                href="/areas/zip-89166"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89166: Skye Canyon
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover Arroyo at Skyeview, Sierra at Skyeview, Terra at Skyeview, and Eaglepointe at Skye Canyon.
                </p>
              </Link>
              <Link
                href="/find-your-new-home/nevada/las-vegas-metro"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Browse all Las Vegas Metro new construction communities
                </h3>
                <p className="text-muted-foreground text-sm">
                  View all new construction homes across Las Vegas, Henderson, and surrounding areas in Nevada.
                </p>
              </Link>
              <Link
                href="/neighborhoods/henderson-las-vegas"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Henderson: Family-friendly neighborhoods with excellent schools
                </h3>
                <p className="text-muted-foreground text-sm">
                  Explore new construction homes in Henderson, Nevada with your buyer's agent.
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

