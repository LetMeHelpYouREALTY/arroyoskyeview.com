import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import PageSchemas from '../components/page-schemas'
import DrJanCTABanner from '../components/dr-jan-cta-banner'

export const metadata: Metadata = {
  title: 'Free Resources for New Construction Homebuyers | Dr. Jan Duffy',
  description: 'Free resources and guides for new construction homebuyers in Las Vegas, Nevada. Download buyer\'s guides, checklists, and expert tips from Dr. Jan Duffy, your buyer\'s agent for Arroyo at Skyeview Homes and Skye Canyon communities.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/resources',
  },
  openGraph: {
    title: 'Free Resources for New Construction Homebuyers | Dr. Jan Duffy',
    description: 'Free resources and guides for new construction homebuyers in Las Vegas, Nevada. Download buyer\'s guides, checklists, and expert tips.',
    url: 'https://www.arroyoskyeview.com/resources',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Construction Homebuyer Resources',
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

const resources = [
  {
    title: 'First-Time Homebuyer Guide',
    description: 'Complete guide to buying your first new construction home in Las Vegas, Nevada. Learn about down payment assistance, financing options, and the homebuying process.',
    href: '/buyers/first-time-homebuyer',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Builder Incentives Guide',
    description: 'Current builder incentives and promotions for Arroyo at Skyeview Homes and Skye Canyon communities. Learn about rate buy-downs, closing cost assistance, and how to maximize your savings.',
    href: '/buyers/builder-incentives-guide',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'New Construction Homebuying Process',
    description: 'Step-by-step guide to the new construction homebuying process from pre-registration to closing. Understand each step and what to expect when buying a new construction home.',
    href: '/homebuying-process',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Work with Dr. Jan Duffy',
    description: 'Learn why Dr. Jan Duffy is the best buyer\'s agent for new construction homes in Las Vegas, Nevada. Expert buyer representation, construction monitoring, and building standards inspection—at no extra cost to you.',
    href: '/work-with-dr-jan',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

const checklists = [
  {
    title: 'New Construction Home Inspection Checklist',
    description: 'Comprehensive checklist for new construction home inspections. Know what to look for during construction monitoring and final walkthrough.',
    comingSoon: true,
  },
  {
    title: 'Pre-Closing Checklist',
    description: 'Everything you need to prepare before closing on your new construction home. Documents, payments, and final steps.',
    comingSoon: true,
  },
  {
    title: 'Moving to Las Vegas Checklist',
    description: 'Complete checklist for moving to Las Vegas, Nevada. Utilities, address changes, and local services.',
    comingSoon: true,
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="buyer-guide"
        url="/resources"
        title="Free Resources for New Construction Homebuyers | Dr. Jan Duffy"
        description="Free resources and guides for new construction homebuyers in Las Vegas, Nevada. Download buyer's guides, checklists, and expert tips from Dr. Jan Duffy, your buyer's agent for Arroyo at Skyeview Homes and Skye Canyon communities."
        breadcrumbs={[
          { name: 'Resources', url: '/resources' },
        ]}
        questions={[
          {
            question: 'What free resources are available for new construction homebuyers?',
            answer: 'Dr. Jan Duffy provides free buyer\'s guides, checklists, and expert tips for new construction homebuyers in Las Vegas, Nevada, including first-time homebuyer guides, builder incentives guides, and homebuying process guides.',
          },
          {
            question: 'Where can I find guides for buying new construction homes?',
            answer: 'Visit the Resources page on arroyoskyeview.com for free guides including the First-Time Homebuyer Guide, Builder Incentives Guide, and New Construction Homebuying Process guide. All resources are free and available online.',
          },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Resources for New Construction Homebuyers: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert guides, checklists, and tips to help you navigate the new construction homebuying process in Las Vegas, Nevada
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Buyer's Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="bg-white border-2 border-border rounded-lg p-8 hover:border-luxury-champagne hover:shadow-lg transition group"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-primary mr-6 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <span className="text-primary font-semibold group-hover:underline">
                        Read Guide →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Checklists & Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {checklists.map((checklist, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-border"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {checklist.comingSoon && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {checklist.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {checklist.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg">
              <p className="text-muted-foreground">
                <strong>Want these checklists delivered to your inbox?</strong> Contact Dr. Jan Duffy at (702) 903-4687 or{' '}
                <Link href="/contact-us" className="text-primary hover:text-primary underline font-semibold">
                  request them here
                </Link>
                . She'll send you these helpful resources plus insider tips for buying new construction homes in Las Vegas, Nevada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Personalized Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Dr. Jan Duffy provides expert buyer representation for new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). She represents HOME BUYERS, not the builder—at no extra cost to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7029034687"
                  className="bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-muted transition"
                >
                  Call Dr. Jan: (702) 903-4687
                </a>
                <Link
                  href="/work-with-dr-jan"
                  className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-400 transition"
                >
                  Learn More About Dr. Jan
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="resources" />
      </main>
      <Footer />
    </div>
  )
}

