import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import OnlineHomebuyingHero from '../components/online-homebuying-hero'
import HowItWorks from '../components/online-how-it-works'
import Benefits from '../components/online-benefits'
import AvailableHomesOnline from '../components/available-homes-online'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Online Homebuying | Buy New Home Online Las Vegas',
  description: 'Buy your new construction home completely online in Las Vegas, Nevada. Industry-first Buy Now option. Expert guidance from your buyer\'s agent, Dr. Jan Duffy. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/online-homebuying',
  },
  openGraph: {
    title: 'Online Homebuying | Buy New Home Online Las Vegas',
    description: 'Buy your new construction home completely online in Las Vegas, Nevada. Industry-first Buy Now option. Expert guidance from your buyer\'s agent, Dr. Jan Duffy. Call (702) 903-4687.',
    url: 'https://www.arroyoskyeview.com/online-homebuying',
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

export default function OnlineHomebuyingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="process"
        url="/online-homebuying"
        title="Online Homebuying | New Construction Homes Las Vegas, Nevada"
        description="Purchase your new construction home completely online in Las Vegas, Nevada. Industry-first Buy Now option allows you to buy your dream home online from start to finish with your buyer's agent."
        breadcrumbs={[
          { name: 'Homebuyer Resources', url: '/' },
          { name: 'Online Homebuying', url: '/online-homebuying' },
        ]}
        questions={[
          {
            question: 'Can I really buy a home completely online?',
            answer: 'Yes, builders offer an industry-first "Buy Now" option that allows you to purchase your new construction home completely online from start to finish. Your buyer\'s agent, Dr. Jan Duffy, can guide you through the process.',
          },
          {
            question: 'What are the benefits of online homebuying?',
            answer: 'Online homebuying offers convenience, speed, and the ability to complete the purchase process from anywhere. You can view homes, select options, and complete paperwork online.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        <OnlineHomebuyingHero />
        <HowItWorks />
        <Benefits />
        <AvailableHomesOnline />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

