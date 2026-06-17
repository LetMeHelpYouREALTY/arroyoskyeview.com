import type { Metadata } from 'next'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'New Construction Home Inspections Guide | Las Vegas Buyer\'s Guide',
  description: 'Complete guide to new construction home inspections in Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, pre-drywall inspection, and final walkthrough. Expert guidance from Dr. Jan Duffy, your buyer\'s agent.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/inspections-new-construction',
  },
  openGraph: {
    title: 'New Construction Home Inspections Guide | Las Vegas Buyer\'s Guide',
    description: 'Complete guide to new construction home inspections in Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, and final walkthrough.',
    url: 'https://www.arroyoskyeview.com/buyers/inspections-new-construction',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Construction Home Inspections Guide',
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

export default function InspectionsNewConstructionPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/buyers/inspections-new-construction"
        title="New Construction Home Inspections Guide | Las Vegas Buyer's Guide"
        description="Complete guide to new construction home inspections in Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, pre-drywall inspection, and final walkthrough. Expert guidance from Dr. Jan Duffy, your buyer's agent."
        breadcrumbs={[
          { name: 'Buyer Guides', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'New Construction Inspections', url: '/buyers/inspections-new-construction' },
        ]}
        questions={[
          {
            question: 'Do I need a home inspection for a new construction home?',
            answer: 'Yes, even new construction homes should be inspected. Dr. Jan Duffy provides construction monitoring every 7-10 days during your home\'s build and a complimentary building standards inspection at closing. This ensures everything is built to code before you move in.',
          },
          {
            question: 'What is construction monitoring for new construction homes?',
            answer: 'Construction monitoring involves regular visits to your home\'s construction site every 7-10 days to check progress, verify quality, and catch issues before they become costly problems. Dr. Jan Duffy provides this service as part of her buyer representation.',
          },
          {
            question: 'What is a building standards inspection?',
            answer: 'A building standards inspection is a comprehensive inspection performed at closing to ensure your new construction home meets all building codes and standards. Dr. Jan Duffy provides this complimentary inspection as part of her buyer representation services.',
          },
        ]}
      />
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Construction Home Inspections Guide: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Complete guide to inspections for new construction homes in Las Vegas, Nevada. Learn about construction monitoring, building standards inspection, and what to look for.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Types of Inspections for New Construction</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Construction Monitoring (Every 7-10 Days)</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Dr. Jan Duffy monitors your home's construction every 7-10 days throughout the build process. This ongoing monitoring helps catch issues early, before they become costly problems after warranty expires.
                </p>
                <p className="text-lg text-muted-foreground mb-3">
                  <strong>What's checked during construction monitoring:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Foundation and framing quality</li>
                  <li>Plumbing and electrical rough-in</li>
                  <li>HVAC installation</li>
                  <li>Insulation and energy efficiency</li>
                  <li>Window and door installation</li>
                  <li>Overall construction quality and workmanship</li>
                </ul>
                <p className="text-lg text-muted-foreground mt-4">
                  <strong>Why it matters:</strong> Catching issues during construction means they can be fixed before drywall goes up, saving you thousands of dollars in repairs later.
                </p>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Pre-Drywall Inspection</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  A pre-drywall inspection occurs after framing, plumbing, and electrical are complete but before drywall is installed. This is your last chance to see what's behind the walls.
                </p>
                <p className="text-lg text-muted-foreground mb-3">
                  <strong>What's checked:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Framing quality and structural integrity</li>
                  <li>Electrical wiring and outlets</li>
                  <li>Plumbing pipes and connections</li>
                  <li>HVAC ductwork</li>
                  <li>Insulation installation</li>
                  <li>Moisture barriers</li>
                </ul>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Building Standards Inspection (At Closing)</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Dr. Jan Duffy provides a complimentary building standards inspection at closing. This comprehensive inspection ensures everything is built to code and meets quality standards before you take possession.
                </p>
                <p className="text-lg text-muted-foreground mb-3">
                  <strong>What's checked:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>All systems functioning properly (HVAC, plumbing, electrical)</li>
                  <li>Windows and doors operate correctly</li>
                  <li>Appliances installed and working</li>
                  <li>Flooring and finishes quality</li>
                  <li>Exterior elements (siding, roofing, gutters)</li>
                  <li>Code compliance and safety standards</li>
                </ul>
                <p className="text-lg text-muted-foreground mt-4">
                  <strong>Why it matters:</strong> This inspection catches any issues before your warranty period begins, ensuring everything is documented and can be addressed by the builder.
                </p>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Final Walkthrough</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  The final walkthrough happens just before closing. This is your opportunity to verify everything is complete and in good condition.
                </p>
                <p className="text-lg text-muted-foreground mb-3">
                  <strong>What to check:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>All requested repairs completed</li>
                  <li>All appliances and systems working</li>
                  <li>No damage from construction or move-in</li>
                  <li>All included features present</li>
                  <li>Clean condition throughout</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Why Inspections Matter for New Construction</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Many buyers assume new construction homes don't need inspections, but this is a common misconception. Even new homes can have issues:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Construction defects:</strong> Mistakes happen during construction that need to be caught early</li>
                <li><strong>Code violations:</strong> Not all builders follow codes perfectly</li>
                <li><strong>Quality issues:</strong> Workmanship can vary between crews and subcontractors</li>
                <li><strong>Warranty protection:</strong> Issues found before closing are covered by the builder</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                <strong>Real example:</strong> Dr. Jan Duffy caught structural issues during construction monitoring that would've cost clients $3,000+ to fix after warranty expired. Her construction monitoring and building standards inspection protect YOUR interests.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What to Look For During Inspections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Structural Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Cracks in foundation</li>
                  <li>Uneven floors</li>
                  <li>Doors and windows that don't close properly</li>
                  <li>Walls that aren't plumb</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Electrical Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Outlets not working</li>
                  <li>Improper wiring</li>
                  <li>Missing GFCI outlets</li>
                  <li>Electrical panel issues</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Plumbing Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Leaks or water damage</li>
                  <li>Low water pressure</li>
                  <li>Drainage problems</li>
                  <li>Water heater issues</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">HVAC Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>System not cooling/heating properly</li>
                  <li>Ductwork problems</li>
                  <li>Thermostat issues</li>
                  <li>Air quality concerns</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Inspection Services Included</h3>
              <p className="text-muted-foreground mb-4">
                When you work with Dr. Jan Duffy for new construction homes in Las Vegas, Nevada, you get:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li><strong>Construction Monitoring:</strong> Every 7-10 days during your home's build</li>
                <li><strong>Building Standards Inspection:</strong> Complimentary inspection at closing</li>
                <li><strong>Expert Guidance:</strong> Know what to look for and when</li>
                <li><strong>Issue Documentation:</strong> All issues documented for builder resolution</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who provides these valuable inspection services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/buyers/financing-new-construction"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Financing New Construction</h3>
                <p className="text-muted-foreground">
                  Complete guide to financing your new construction home, including loan types and builder incentives.
                </p>
              </Link>
              <Link
                href="/work-with-dr-jan"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Work with Dr. Jan Duffy</h3>
                <p className="text-muted-foreground">
                  Learn about Dr. Jan Duffy's construction monitoring and building standards inspection services.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="inspections" />
    </MarketingPageShell>
  )
}