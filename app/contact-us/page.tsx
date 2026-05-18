import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import WhyWorkWithDrJan from '../components/why-work-with-dr-jan'
import ContactHero from '../components/contact-hero'
import ContactForm from '../components/contact-form'
import ContactLocations from '../components/contact-locations'
import ContactMethods from '../components/contact-methods'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Buyer\'s Agent for Arroyo at Skyeview Homes | Skye Canyon, Northwest Las Vegas',
  description: 'Contact Dr. Jan Duffy, your buyer\'s agent for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder. Call (702) 903-4687 or email info@arroyoskyeview.com. Located at 8912 Vanhoy Crk St, Las Vegas, NV 89166.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/contact-us',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Buyer\'s Agent for Arroyo at Skyeview Homes',
    description: 'Contact Dr. Jan Duffy, your buyer\'s agent for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder. Call (702) 903-4687.',
    url: 'https://www.arroyoskyeview.com/contact-us',
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

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="contact"
        url="/contact-us"
        title="Contact Dr. Jan Duffy | Buyer's Agent for Arroyo at Skyeview Homes"
        description="Contact Dr. Jan Duffy, your buyer's agent for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder. Call (702) 903-4687 for expert buyer representation."
        breadcrumbs={[
          { name: 'Contact Us', url: '/contact-us' },
        ]}
        questions={[
          {
            question: 'How can I contact Dr. Jan Duffy?',
            answer: 'You can contact Dr. Jan Duffy by calling (702) 903-4687 or visiting the contact page for more information.',
          },
          {
            question: 'What services does Dr. Jan Duffy provide for home buyers?',
            answer: 'Dr. Jan Duffy provides expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder. Services include construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of Arroyo at Skyeview Homes and northwest Las Vegas communities. Builders pay for buyer representation, so there\'s no extra cost to you.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <ContactHero />
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <DrJanCTABanner context="contact page" />
          </div>
        </div>
        <WhyWorkWithDrJan />
        <ContactForm />
        <ContactLocations />
        <ContactMethods />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

