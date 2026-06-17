import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import InformationalPageContent from '../../components/informational-page-content'
import PeopleAlsoSearch from '../../components/people-also-search'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'New Homes in Zip Code 89144 | Southwest Las Vegas',
  description: 'Discover new construction homes in zip code 89144, southwest Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/areas/zip-89144',
  },
}

export default function Zip89144Page() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="zip"
        url="/areas/zip-89144"
        title="New Homes in Zip Code 89144 | Southwest Las Vegas, Nevada | Buyer's Agent"
        description="Discover new construction homes in zip code 89144, southwest Las Vegas, Nevada. Expert buyer's agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Zip Code 89144', url: '/areas/zip-89144' },
        ]}
        location="Southwest Las Vegas"
        zipCode="89144"
        questions={[
          {
            question: 'What is zip code 89144 and where is it located in Las Vegas?',
            answer: 'Zip code 89144 is located in southwest Las Vegas, Nevada, offering convenient access to the Las Vegas Strip, employment centers, and major shopping areas. The area features new construction developments with modern homes and good value.',
          },
          {
            question: 'What new construction developments are in zip code 89144?',
            answer: 'Zip code 89144 in southwest Las Vegas features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in this growing Las Vegas area.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner context="available homes" />
        <InformationalPageContent
          title="New Homes in Zip Code 89144"
          h1="New Construction Homes in Zip Code 89144: Southwest Las Vegas | Buyer's Agent"
          sections={[
            {
              h2: 'Welcome to Zip Code 89144: Southwest Las Vegas',
              content: 'Zip code 89144 is located in southwest Las Vegas, Nevada, offering residents convenient access to the Las Vegas Strip, major employment centers, shopping, and dining. This growing area features new construction developments with modern homes, good schools, and competitive pricing.',
              h3s: [
                {
                  h3: 'Southwest Las Vegas: Convenient Location',
                  content: 'Zip code 89144 in southwest Las Vegas offers a convenient location with easy access to the Las Vegas Strip (15-20 minutes), major employment centers, shopping centers, and dining options. The area provides good value for homebuyers seeking new construction homes.',
                },
                {
                  h3: 'New Construction Homes in Zip Code 89144',
                  content: 'Zip code 89144 features multiple new construction developments offering single-family homes, townhomes, and condominiums. These communities feature modern floor plans, energy-efficient construction, and quality finishes. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory in zip code 89144.',
                },
                {
                  h3: 'Location Benefits of Zip Code 89144',
                  content: 'Zip code 89144 in southwest Las Vegas offers excellent location benefits including proximity to the Las Vegas Strip (15-20 minutes), McCarran International Airport (20-25 minutes), major shopping centers, and convenient access to I-15 and the 215 Beltway for easy commuting.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy for Zip Code 89144 Homes',
              content: 'When purchasing a new construction home in zip code 89144, southwest Las Vegas, Nevada, working with Dr. Jan Duffy ensures you have expert buyer\'s agent representation. Dr. Jan represents YOU, not the builder, and provides comprehensive services at no extra cost to you.',
              h3s: [
                {
                  h3: 'Expert Buyer Representation',
                  content: 'Dr. Jan Duffy provides expert buyer representation for new construction homes in zip code 89144. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing.',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is zip code 89144 and where is it located?',
              answer: 'Zip code 89144 is located in southwest Las Vegas, Nevada, offering convenient access to the Las Vegas Strip, employment centers, and major shopping areas. The area features new construction developments with modern homes.',
            },
            {
              question: 'What new construction developments are in zip code 89144?',
              answer: 'Zip code 89144 features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in this southwest Las Vegas area.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy for zip code 89144 homes?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for new construction homes in zip code 89144. She offers construction monitoring, building standards inspection, and insider knowledge—all at no extra cost. Call (702) 903-4687.',
            },
          ]}
        />
        <section className="bg-muted py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Explore More Las Vegas Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/neighborhoods/southwest-las-vegas"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Southwest Las Vegas Neighborhood
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover new construction homes in southwest Las Vegas.
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
                  Explore new construction townhomes in Skye Canyon.
                </p>
              </Link>
              <Link
                href="/find-your-new-home/nevada/las-vegas-metro"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  All Las Vegas Metro Areas
                </h3>
                <p className="text-muted-foreground text-sm">
                  View all new construction homes across Las Vegas Metro.
                </p>
              </Link>
            </div>
          </div>
        </section>
        <PeopleAlsoSearch />
      </main>
      <Footer />
    </div>
  )
}

