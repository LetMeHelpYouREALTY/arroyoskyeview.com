import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import HomebuyingProcessHero from '../components/homebuying-process-hero'
import ProcessSteps from '../components/process-steps'
import HowWeMakeItEasy from '../components/how-we-make-it-easy'
import MoreWaysToStreamline from '../components/more-ways-to-streamline'
import RealScoutOfficePriceBands from '../components/realscout-office-price-bands'
import GetInTouch from '../components/get-in-touch'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Homebuying Process | Arroyo at Skyeview Homes Las Vegas',
  description: 'Learn the new home buying process for Arroyo at Skyeview Homes. From prequalification to closing, Dr. Jan Duffy guides you every step. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/homebuying-process',
  },
}

export default function HomebuyingProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="process"
        url="/homebuying-process"
        title="Homebuying Process | Arroyo at Skyeview Homes"
        description="Explore the homebuying process for Arroyo at Skyeview Homes. Learn about prequalification, house hunting, contracting, and closing on your new home."
        breadcrumbs={[
          { name: 'Homebuyer Resources', url: '/' },
          { name: 'Homebuying Process', url: '/homebuying-process' },
        ]}
        questions={[
          {
            question: 'What are the steps in the homebuying process?',
            answer: 'The homebuying process includes: 1) Prequalify, 2) House Hunt, 3) Contract, and 4) Close on your new home.',
          },
          {
            question: 'How long does the homebuying process take?',
            answer: 'The homebuying process typically takes 4-7 months from contract to closing for new construction homes.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner context="first-time homebuyer guide" />
        <HomebuyingProcessHero />
        <ProcessSteps />
        <HowWeMakeItEasy />
        <MoreWaysToStreamline />
        <RealScoutOfficePriceBands intro="Explore real inventory while you learn the homebuying process — Dr. Jan Duffy represents buyers, not the builder." />
        <GetInTouch />
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

