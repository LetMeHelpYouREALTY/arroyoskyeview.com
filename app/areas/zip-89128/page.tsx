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
  title: 'New Homes in Zip Code 89128 | Summerlin Area Las Vegas',
  description: 'Discover new construction homes in zip code 89128, Summerlin area, Las Vegas, Nevada. Expert buyer\'s agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/areas/zip-89128',
  },
}

export default function Zip89128Page() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="zip"
        url="/areas/zip-89128"
        title="New Homes in Zip Code 89128 | Summerlin Area, Las Vegas, Nevada | Buyer's Agent"
        description="Discover new construction homes in zip code 89128, Summerlin area, Las Vegas, Nevada. Expert buyer's agent representation with Dr. Jan Duffy. Construction monitoring and building standards inspection included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Zip Code 89128', url: '/areas/zip-89128' },
        ]}
        location="Summerlin Area"
        zipCode="89128"
        questions={[
          {
            question: 'What is zip code 89128 and where is it located in Las Vegas?',
            answer: 'Zip code 89128 is located in the Summerlin area of Las Vegas, Nevada, one of the city\'s most prestigious master-planned communities. The area offers luxury living, excellent schools, and world-class amenities.',
          },
          {
            question: 'What new construction developments are in zip code 89128, Summerlin area?',
            answer: 'Zip code 89128 in the Summerlin area features multiple new construction developments. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in this prestigious Las Vegas area. She provides expert buyer representation, construction monitoring, and building standards inspection.',
          },
          {
            question: 'What are the benefits of living in zip code 89128?',
            answer: 'Zip code 89128 in the Summerlin area offers luxury living, top-rated schools, golf courses, shopping at Downtown Summerlin, excellent dining options, and proximity to Red Rock Canyon. It\'s one of Las Vegas\'s most desirable areas for new construction homes.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner context="available homes" />
        <InformationalPageContent
          title="New Homes in Zip Code 89128"
          h1="New Construction Homes in Zip Code 89128: Summerlin Area, Las Vegas | Buyer's Agent"
          sections={[
            {
              h2: 'Welcome to Zip Code 89128: Summerlin Area, Las Vegas',
              content: 'Zip code 89128 encompasses part of the prestigious Summerlin master-planned community in Las Vegas, Nevada. This area is known for luxury living, world-class amenities, top-rated schools, and beautiful natural surroundings. Summerlin is one of Las Vegas\'s most desirable areas for new construction homes, offering residents a premium lifestyle with excellent quality of life.',
              h3s: [
                {
                  h3: 'Summerlin: A Premier Master-Planned Community',
                  content: 'Summerlin is one of the most prestigious master-planned communities in Las Vegas, spanning over 22,500 acres on the western edge of the city. Zip code 89128 is part of this premier community, offering residents luxury living, award-winning schools, golf courses, shopping at Downtown Summerlin, and proximity to Red Rock Canyon National Conservation Area.',
                },
                {
                  h3: 'New Construction Homes in Zip Code 89128, Summerlin Area',
                  content: 'Zip code 89128 in the Summerlin area features multiple new construction developments offering luxury homes, townhomes, and condominiums. These communities feature modern designs, premium finishes, energy-efficient construction, and resort-style amenities. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in zip code 89128.',
                },
                {
                  h3: 'Location Benefits of Zip Code 89128, Summerlin Area',
                  content: 'Zip code 89128 in the Summerlin area offers excellent location benefits including proximity to Red Rock Canyon (10-15 minutes), Downtown Summerlin shopping and dining (5-10 minutes), the Las Vegas Strip (20-25 minutes), and McCarran International Airport (25-30 minutes). The area provides a peaceful, upscale residential atmosphere while maintaining convenient access to city amenities and employment centers.',
                },
              ],
            },
            {
              h2: 'Schools in Zip Code 89128',
              content: 'Zip code 89128 is served by excellent schools in the Clark County School District, making it ideal for families prioritizing education. The area features highly rated elementary, middle, and high schools with strong academic programs.',
              h3s: [
                {
                  h3: 'Top-Rated Schools in Zip Code 89128',
                  content: 'Zip code 89128 in the Summerlin area is served by some of the highest-rated schools in Nevada, including top-performing elementary, middle, and high schools. The area\'s commitment to education makes it attractive for families with school-age children. Contact Dr. Jan Duffy for specific school information for zip code 89128.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy for Zip Code 89128 Homes',
              content: 'When purchasing a new construction home in zip code 89128, Summerlin area, Las Vegas, Nevada, working with Dr. Jan Duffy ensures you have expert buyer\'s agent representation. Dr. Jan is a New Construction Home Expert who specializes in new construction homes throughout Las Vegas, Nevada. She represents YOU, not the builder, and provides comprehensive services at no extra cost to you.',
              h3s: [
                {
                  h3: 'Construction Monitoring for Summerlin Homes',
                  content: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days throughout the build process. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars. Her monitoring ensures quality construction for your zip code 89128 home.',
                },
                {
                  h3: 'Building Standards Inspection',
                  content: 'Dr. Jan provides a complimentary building standards inspection at closing that identifies issues BEFORE your warranty matters. This specialized inspection ensures your zip code 89128 home is built to the highest standards.',
                },
                {
                  h3: 'Insider Knowledge of Zip Code 89128 Communities',
                  content: 'Dr. Jan Duffy, your buyer\'s agent, has insider knowledge of all new construction developments in zip code 89128, Summerlin area, Las Vegas, Nevada. She knows current pricing, available incentives, and inventory for all communities in this prestigious area. She knows which lots have the best views, which floor plans are most popular, and how to maximize your value when purchasing in zip code 89128.',
                },
              ],
            },
            {
              h2: 'Amenities and Lifestyle in Zip Code 89128',
              content: 'Zip code 89128 in the Summerlin area offers exceptional amenities and lifestyle opportunities. Summerlin features golf courses, parks, trails, shopping at Downtown Summerlin, excellent dining, and proximity to Red Rock Canyon for outdoor recreation.',
              h3s: [
                {
                  h3: 'Summerlin Recreation and Amenities',
                  content: 'Zip code 89128 residents enjoy access to Summerlin\'s extensive amenities including multiple golf courses, parks, trails, recreation centers, shopping at Downtown Summerlin, excellent restaurants, and cultural venues. The area is designed for active, luxury lifestyles.',
                },
                {
                  h3: 'Shopping and Dining in Zip Code 89128',
                  content: 'Zip code 89128 is home to Downtown Summerlin, a premier shopping and dining destination featuring upscale retailers, restaurants, and entertainment. The area also offers convenient access to other shopping centers throughout Las Vegas.',
                },
                {
                  h3: 'Outdoor Recreation Near Zip Code 89128',
                  content: 'Zip code 89128 is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is just 10-15 minutes away, offering world-class hiking, rock climbing, and scenic drives. The area also provides easy access to Mount Charleston (45 minutes) and Lake Mead (1 hour).',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is zip code 89128 and where exactly is it located in Las Vegas, Nevada?',
              answer: 'Zip code 89128 is located in the Summerlin area of Las Vegas, Nevada, one of the city\'s most prestigious master-planned communities. The area is on the western edge of Las Vegas, spanning over 22,500 acres, and offers luxury living, top-rated schools, golf courses, and world-class amenities.',
            },
            {
              question: 'What new construction developments are in zip code 89128, Summerlin area?',
              answer: 'Zip code 89128 in the Summerlin area features multiple new construction developments offering luxury homes, townhomes, and condominiums. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current inventory and available homes in this prestigious Las Vegas area.',
            },
            {
              question: 'What schools serve zip code 89128?',
              answer: 'Zip code 89128 is served by some of the highest-rated schools in Nevada, including top-performing elementary, middle, and high schools in the Clark County School District. The area\'s commitment to education makes it attractive for families.',
            },
            {
              question: 'What are property taxes like in zip code 89128?',
              answer: 'Nevada has relatively low property taxes. In zip code 89128 (Clark County), the average property tax rate is approximately 0.60-0.70% of assessed value. Nevada also has no state income tax.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy for zip code 89128 homes?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for new construction homes in zip code 89128. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Builders pay for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
          ]}
        />
        <section className="bg-gray-50 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore More Las Vegas Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/neighborhoods/summerlin-las-vegas"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Summerlin: Premier Master-Planned Community
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore luxury new construction homes in Summerlin, one of Las Vegas's most desirable areas.
                </p>
              </Link>
              <Link
                href="/areas/zip-89166"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Zip Code 89166: Skye Canyon
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover new construction townhomes in Skye Canyon, northwest Las Vegas.
                </p>
              </Link>
              <Link
                href="/find-your-new-home/nevada/las-vegas-metro"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  All Las Vegas Metro Areas
                </h3>
                <p className="text-gray-600 text-sm">
                  View all new construction homes across Las Vegas, Henderson, and surrounding areas.
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

