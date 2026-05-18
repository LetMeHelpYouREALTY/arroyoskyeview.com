import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import PageSchemas from '../../components/page-schemas'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction Home Inspections FAQ | Skye Canyon, Northwest Las Vegas',
  description: 'Get answers to inspection questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, and what to look for. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/faq/inspections',
  },
}

const inspectionFAQs = [
  {
    question: 'Do I need a home inspection for a new construction home in Skye Canyon (zip code 89166) or northwest Las Vegas?',
    answer: 'Yes, you should get a home inspection even for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy provides a complimentary building standards inspection at closing that catches issues BEFORE your warranty matters, potentially saving thousands of dollars. Even new homes can have issues that need to be addressed.',
  },
  {
    question: 'What is construction monitoring for new construction homes in northwest Las Vegas?',
    answer: 'Construction monitoring involves regular visits to your home\'s construction site every 7-10 days to check progress, verify quality, and catch issues before they become costly problems. Dr. Jan Duffy provides this service as part of her buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. This proactive approach catches issues during construction when they can be fixed easily.',
  },
  {
    question: 'What is a building standards inspection for new construction in Skye Canyon?',
    answer: 'A building standards inspection is a specialized inspection for new construction homes that identifies issues BEFORE your warranty matters. Dr. Jan Duffy provides a complimentary building standards inspection at closing for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. This inspection ensures your home is built to the highest standards and catches issues early.',
  },
  {
    question: 'How often does construction monitoring occur for new construction in northwest Las Vegas?',
    answer: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days throughout the build process for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. This regular monitoring ensures quality construction and catches issues early when they can be fixed at no cost to you.',
  },
  {
    question: 'What does construction monitoring check for in Skye Canyon new construction homes?',
    answer: 'Construction monitoring for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada checks for proper installation of systems, quality of workmanship, adherence to building codes, and potential issues that could become costly problems. Dr. Jan Duffy monitors foundation, framing, electrical, plumbing, HVAC, and finishing work.',
  },
  {
    question: 'Why is construction monitoring important for new construction in northwest Las Vegas?',
    answer: 'Construction monitoring catches issues during construction when they can be fixed easily and at no cost to you. Issues caught after warranty expires can cost thousands of dollars. For new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, Dr. Jan Duffy\'s construction monitoring has saved clients $3,000+ in repair costs. When the superintendent knows monitoring will happen, your home gets built right.',
  },
  {
    question: 'What happens if issues are found during construction monitoring in Skye Canyon?',
    answer: 'If issues are found during construction monitoring for your new home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada, Dr. Jan Duffy documents them and works with the builder to ensure they\'re fixed before closing. This proactive approach prevents issues from becoming costly problems after you move in.',
  },
  {
    question: 'When should I get a building standards inspection for new construction in northwest Las Vegas?',
    answer: 'A building standards inspection for new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada should be performed at closing, before you take possession. Dr. Jan Duffy provides a complimentary building standards inspection at closing that identifies issues BEFORE your warranty matters.',
  },
  {
    question: 'What does a building standards inspection cover for new construction in Skye Canyon?',
    answer: 'A building standards inspection for new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada covers structural elements, electrical systems, plumbing, HVAC, roofing, windows, doors, and finishing work. The inspection ensures your home meets building standards and identifies any issues that need to be addressed before closing.',
  },
  {
    question: 'How much does a building standards inspection cost for new construction in northwest Las Vegas?',
    answer: 'Dr. Jan Duffy provides a complimentary building standards inspection at closing for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. This inspection is included as part of her buyer representation services at no extra cost to you because builders pay for buyer representation.',
  },
  {
    question: 'Can I use a regular home inspector for new construction in Skye Canyon?',
    answer: 'While you can use a regular home inspector for new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, a building standards inspection is specifically designed for new construction and checks for issues unique to new homes. Dr. Jan Duffy provides a specialized building standards inspection that\'s included in her buyer representation.',
  },
  {
    question: 'What if the builder says I don\'t need an inspection for new construction in northwest Las Vegas?',
    answer: 'Even if the builder says you don\'t need an inspection for new construction in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada, you should still get one. New homes can have issues, and an inspection protects your investment. Dr. Jan Duffy provides a complimentary building standards inspection at closing as part of her buyer representation.',
  },
  {
    question: 'How does construction monitoring differ from a final inspection in Skye Canyon?',
    answer: 'Construction monitoring for new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada occurs throughout the build process (every 7-10 days), while a final inspection occurs at closing. Monitoring catches issues during construction, while the final inspection verifies everything is complete and correct. Dr. Jan Duffy provides both services.',
  },
  {
    question: 'What should I look for during a walkthrough of new construction in northwest Las Vegas?',
    answer: 'During a walkthrough of new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, look for proper installation of fixtures, quality of finishes, functionality of systems, and any visible defects. Dr. Jan Duffy accompanies you on walkthroughs and provides expert guidance on what to look for.',
  },
  {
    question: 'Are there warranties for new construction homes in Skye Canyon?',
    answer: 'Yes, new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada come with builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). Dr. Jan Duffy\'s building standards inspection at closing catches issues before your warranty matters.',
  },
]

export default function InspectionsFAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="faq"
        url="/faq/inspections"
        title="New Construction Home Inspections FAQ | Skye Canyon, Northwest Las Vegas"
        description="Get answers to inspection questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, and what to look for. Expert guidance from Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'FAQ', url: '/faq' },
          { name: 'Inspections FAQ', url: '/faq/inspections' },
        ]}
        questions={inspectionFAQs.slice(0, 3)}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Home Inspections FAQ: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Get answers to inspection questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Expert guidance from Dr. Jan Duffy, your buyer's agent.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspections for New Construction in Skye Canyon & Northwest Las Vegas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Inspections are crucial for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Construction monitoring and building standards inspection protect your investment and catch issues early. This FAQ addresses common inspection questions for new construction homes.
                </p>
              </section>

              <section className="mb-12">
                <div className="space-y-6">
                  {inspectionFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Expert Inspection Services</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Dr. Jan Duffy, your buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, provides construction monitoring every 7-10 days and a complimentary building standards inspection at closing. These services are included in her buyer representation at no extra cost to you.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Call Dr. Jan Duffy at <strong>(702) 903-4687</strong> to learn more about inspection services for your new construction home in Skye Canyon or northwest Las Vegas.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link
                    href="/services/building-standards-inspection"
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Inspections Guide</h3>
                    <p className="text-gray-700">
                      Comprehensive guide to inspections for new construction homes.
                    </p>
                  </Link>
                  <Link
                    href="/services/construction-monitoring"
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Construction Monitoring Service</h3>
                    <p className="text-gray-700">
                      Learn about construction monitoring for new construction homes.
                    </p>
                  </Link>
                </div>
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

