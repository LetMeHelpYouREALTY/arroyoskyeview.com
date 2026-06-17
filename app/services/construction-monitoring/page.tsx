import type { Metadata } from 'next'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Construction Monitoring Service | Protect Your New Construction Home Investment',
  description: 'Construction monitoring service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy monitors your home\'s construction every 7-10 days, catching issues before they become costly problems. Expert buyer representation included. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/services/construction-monitoring',
  },
  openGraph: {
    title: 'Construction Monitoring Service | Protect Your New Construction Home Investment',
    description: 'Construction monitoring service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy monitors your home\'s construction every 7-10 days.',
    url: 'https://www.arroyoskyeview.com/services/construction-monitoring',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Construction Monitoring Service',
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

export default function ConstructionMonitoringPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/services/construction-monitoring"
        title="Construction Monitoring Service | Protect Your New Construction Home Investment"
        description="Construction monitoring service for new construction homes in Las Vegas, Nevada. Dr. Jan Duffy monitors your home's construction every 7-10 days, catching issues before they become costly problems. Expert buyer representation included. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Services', url: '/work-with-dr-jan' },
          { name: 'Construction Monitoring', url: '/services/construction-monitoring' },
        ]}
        questions={[
          {
            question: 'What is construction monitoring for new construction homes?',
            answer: 'Construction monitoring involves regular visits to your home\'s construction site every 7-10 days to check progress, verify quality, and catch issues before they become costly problems. Dr. Jan Duffy provides this service as part of her buyer representation for new construction homes in Las Vegas, Nevada.',
          },
          {
            question: 'Why is construction monitoring important?',
            answer: 'Construction monitoring catches issues during construction when they can be fixed easily and at no cost to you. Issues caught after warranty expires can cost thousands of dollars. Dr. Jan Duffy\'s construction monitoring has saved clients $3,000+ in repair costs.',
          },
          {
            question: 'How often does construction monitoring occur?',
            answer: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days throughout the build process. This regular monitoring ensures quality construction and catches issues early.',
          },
        ]}
      />
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Monitoring Service: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Protect your new construction home investment with expert construction monitoring. Dr. Jan Duffy monitors your home's construction every 7-10 days, catching issues before they become costly problems.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <p className="text-lg text-muted-foreground">
                <strong>Real Example:</strong> Dr. Jan Duffy caught structural issues during construction monitoring that would've cost clients $3,000+ to fix after warranty expired. Her construction monitoring protects YOUR interests.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What is Construction Monitoring?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Construction monitoring is a service where Dr. Jan Duffy, your buyer's agent, visits your home's construction site every 7-10 days throughout the build process. During these visits, she checks construction quality, verifies workmanship, and catches issues before they become costly problems.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">Why Construction Monitoring Matters</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Catch Issues Early</h3>
                  <p className="text-muted-foreground">
                    Issues caught during construction can be fixed easily and at no cost to you. Once drywall goes up or warranty expires, repairs become expensive and complicated.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Ensure Quality Construction</h3>
                  <p className="text-muted-foreground">
                    When superintendents know your buyer's agent is monitoring construction, they take special care to follow construction standards and ensure quality workmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Protect Your Investment</h3>
                  <p className="text-muted-foreground">
                    Your new construction home is likely your largest investment. Construction monitoring protects that investment by ensuring quality construction from day one.
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
                    Knowing an expert is monitoring your home's construction gives you peace of mind throughout the build process.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What's Checked During Construction Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Foundation & Framing</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Foundation quality and integrity</li>
                  <li>Framing structure and alignment</li>
                  <li>Structural components</li>
                  <li>Load-bearing walls</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Plumbing & Electrical</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Plumbing rough-in quality</li>
                  <li>Electrical wiring and outlets</li>
                  <li>HVAC installation</li>
                  <li>Code compliance</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Insulation & Energy Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Insulation installation</li>
                  <li>Energy-efficient features</li>
                  <li>Windows and doors</li>
                  <li>Air sealing</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Overall Quality</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Workmanship quality</li>
                  <li>Material quality</li>
                  <li>Construction standards</li>
                  <li>Timeline adherence</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">How Construction Monitoring Works</h2>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 1: Regular Site Visits</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy visits your construction site every 7-10 days throughout the build process. These visits are scheduled to coincide with key construction milestones.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 2: Quality Checks</h3>
                <p className="text-muted-foreground">
                  During each visit, Dr. Jan checks construction quality, verifies workmanship, and looks for potential issues. She documents everything with photos and notes.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 3: Issue Identification</h3>
                <p className="text-muted-foreground">
                  If issues are found, Dr. Jan documents them immediately and communicates with the builder to ensure they're addressed before construction continues.
                </p>
              </div>
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 4: Regular Updates</h3>
                <p className="text-muted-foreground">
                  You receive regular updates on construction progress, quality findings, and any issues that need attention. You're always informed about your home's construction.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Construction Monitoring Included with Buyer Representation</h3>
              <p className="text-muted-foreground mb-4">
                When you work with Dr. Jan Duffy for new construction homes in Las Vegas, Nevada, construction monitoring is included as part of her buyer representation services. You also get:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Construction monitoring every 7-10 days</li>
                <li>Building standards inspection at closing</li>
                <li>Insider knowledge of available inventory and pricing</li>
                <li>Expert guidance throughout the process</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who provides construction monitoring and protects YOUR interests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/services/building-standards-inspection"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">New Construction Inspections Guide</h3>
                <p className="text-muted-foreground">
                  Complete guide to inspections for new construction homes, including what to look for and when.
                </p>
              </Link>
              <Link
                href="/work-with-dr-jan"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Work with Dr. Jan Duffy</h3>
                <p className="text-muted-foreground">
                  Learn more about Dr. Jan Duffy's buyer representation services, including construction monitoring.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="construction-monitoring" />
    </MarketingPageShell>
  )
}