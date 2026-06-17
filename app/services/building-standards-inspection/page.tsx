import type { Metadata } from 'next'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Building Standards Inspection Service | Protect Your New Construction Home',
  description: 'Building standards inspection service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy provides complimentary building standards inspection at closing to ensure everything is built to code. Expert buyer representation included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/services/building-standards-inspection',
  },
  openGraph: {
    title: 'Building Standards Inspection Service | Protect Your New Construction Home',
    description: 'Building standards inspection service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy provides complimentary building standards inspection at closing.',
    url: 'https://www.arroyoskyeview.com/services/building-standards-inspection',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Building Standards Inspection Service',
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

export default function BuildingStandardsInspectionPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/services/building-standards-inspection"
        title="Building Standards Inspection Service | Protect Your New Construction Home"
        description="Building standards inspection service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy provides complimentary building standards inspection at closing to ensure everything is built to code. Expert buyer representation included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Services', url: '/work-with-dr-jan' },
          { name: 'Building Standards Inspection', url: '/services/building-standards-inspection' },
        ]}
        questions={[
          {
            question: 'What is a building standards inspection for new construction homes?',
            answer: 'A building standards inspection is a comprehensive inspection performed at closing to ensure your new construction home meets all building codes and standards. Dr. Jan Duffy provides this complimentary inspection as part of her buyer representation services for new construction homes in Las Vegas, Nevada.',
          },
          {
            question: 'Why is a building standards inspection important?',
            answer: 'A building standards inspection catches issues before you take possession, ensuring everything is built to code and documented. Issues found before closing can be addressed by the builder, protecting your investment and ensuring quality construction.',
          },
          {
            question: 'When does the building standards inspection occur?',
            answer: 'The building standards inspection occurs before closing, typically 1-2 weeks before your closing date. This gives time to address any issues found before you take possession of your new construction home.',
          },
        ]}
      />
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Standards Inspection Service: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Protect your new construction home investment with a comprehensive building standards inspection. Dr. Jan Duffy provides this complimentary inspection at closing to ensure everything is built to code.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <p className="text-lg text-muted-foreground">
                <strong>Complimentary Service:</strong> Dr. Jan Duffy provides building standards inspection at closing as part of her buyer representation services. This inspection ensures your new construction home meets all building codes and standards before you take possession.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What is a Building Standards Inspection?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A building standards inspection is a comprehensive inspection performed before closing on your new construction home. This inspection verifies that your home meets all building codes, construction standards, and quality requirements before you take possession.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Unlike a standard home inspection for resale homes, a building standards inspection for new construction focuses on code compliance, construction quality, and ensuring everything is built according to plans and specifications.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">Why Building Standards Inspection Matters</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Catch Issues Before Closing</h3>
                  <p className="text-muted-foreground">
                    Issues found before closing can be documented and addressed by the builder before you take possession. This protects your investment and ensures quality construction.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Ensure Code Compliance</h3>
                  <p className="text-muted-foreground">
                    The inspection verifies that your home meets all local building codes and construction standards. Code violations can be costly to fix after closing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Document Everything</h3>
                  <p className="text-muted-foreground">
                    All findings are documented with photos and detailed reports. This documentation protects you if issues arise during the warranty period.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Peace of Mind</h3>
                  <p className="text-muted-foreground">
                    Knowing an expert has thoroughly inspected your home before closing gives you confidence that everything is built correctly and meets quality standards.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What's Inspected During Building Standards Inspection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Structural Systems</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Foundation integrity</li>
                  <li>Framing structure</li>
                  <li>Load-bearing walls</li>
                  <li>Roof structure</li>
                  <li>Structural components</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Electrical Systems</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Electrical panel and wiring</li>
                  <li>Outlets and switches</li>
                  <li>GFCI protection</li>
                  <li>Light fixtures</li>
                  <li>Code compliance</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Plumbing Systems</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Water supply lines</li>
                  <li>Drainage systems</li>
                  <li>Fixtures and faucets</li>
                  <li>Water heater</li>
                  <li>Leak detection</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">HVAC Systems</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Heating and cooling units</li>
                  <li>Ductwork</li>
                  <li>Thermostat operation</li>
                  <li>Air quality</li>
                  <li>Energy efficiency</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Windows & Doors</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Proper installation</li>
                  <li>Operation and functionality</li>
                  <li>Weather sealing</li>
                  <li>Lock mechanisms</li>
                  <li>Energy efficiency</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Appliances & Finishes</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Appliance installation</li>
                  <li>Appliance operation</li>
                  <li>Flooring quality</li>
                  <li>Paint and finishes</li>
                  <li>Overall workmanship</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">How Building Standards Inspection Works</h2>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 1: Schedule Inspection</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy schedules the building standards inspection 1-2 weeks before your closing date. This timing allows for any issues to be addressed before closing.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 2: Comprehensive Inspection</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy performs a thorough inspection of all systems, structural components, and finishes. She checks for code compliance, quality issues, and any defects.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 3: Documentation</h3>
                <p className="text-muted-foreground">
                  All findings are documented with photos and detailed notes. This documentation is provided to you and can be shared with the builder if issues need to be addressed.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 4: Issue Resolution</h3>
                <p className="text-muted-foreground">
                  If issues are found, Dr. Jan Duffy works with the builder to ensure they're addressed before closing. She represents YOUR interests throughout this process.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Building Standards Inspection vs. Standard Home Inspection</h2>
            <div className="bg-muted rounded-lg p-6 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                A building standards inspection for new construction differs from a standard home inspection for resale homes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Focus:</strong> Building standards inspection focuses on code compliance and construction quality, while standard inspections focus on existing condition</li>
                <li><strong>Timing:</strong> Building standards inspection occurs before closing, while standard inspections occur during the purchase process</li>
                <li><strong>Purpose:</strong> Building standards inspection ensures everything is built correctly, while standard inspections identify existing issues</li>
                <li><strong>Documentation:</strong> Building standards inspection documents code compliance and quality, while standard inspections document existing defects</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Building Standards Inspection Included with Buyer Representation</h3>
              <p className="text-muted-foreground mb-4">
                When you work with Dr. Jan Duffy for new construction homes in Las Vegas, Nevada, building standards inspection is included as part of her buyer representation services. You also get:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Construction monitoring every 7-10 days during build</li>
                <li>Building standards inspection at closing</li>
                <li>Issue documentation and resolution</li>
                <li>Expert guidance throughout the process</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who provides building standards inspection and protects YOUR interests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/services/construction-monitoring"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Construction Monitoring Service</h3>
                <p className="text-muted-foreground">
                  Learn about Dr. Jan Duffy's construction monitoring service that catches issues during the build process.
                </p>
              </Link>
              <Link
                href="/services/construction-monitoring"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">New Construction Inspections Guide</h3>
                <p className="text-muted-foreground">
                  Complete guide to inspections for new construction homes, including building standards inspection.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="building-standards-inspection" />
    </MarketingPageShell>
  )
}