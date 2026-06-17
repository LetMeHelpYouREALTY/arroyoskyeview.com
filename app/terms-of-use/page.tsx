import type { Metadata } from 'next'
import PageSchemas from '../components/page-schemas'

import MarketingPageShell from '../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Terms of Use | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description: 'Terms of Use for Arroyo at Skyeview | Homes by Dr. Jan Duffy website. Understand the terms and conditions for using our real estate services and website.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    description: 'Terms of Use for Arroyo at Skyeview | Homes by Dr. Jan Duffy website. Understand the terms and conditions for using our real estate services and website.',
    url: 'https://www.arroyoskyeview.com/terms-of-use',
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

export default function TermsOfUsePage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="about"
        url="/terms-of-use"
        title="Terms of Use | Arroyo at Skyeview | Homes by Dr. Jan Duffy"
        description="Terms of Use for Arroyo at Skyeview | Homes by Dr. Jan Duffy website. Understand the terms and conditions for using our real estate services and website."
        breadcrumbs={[
          { name: 'Legal', url: '/legal' },
          { name: 'Terms of Use', url: '/terms-of-use' },
        ]}
      />
      }
      showContactCta={true}
      showBanner={false}
    >
      <section className="bg-linear-to-b from-muted/80 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Acceptance of Terms</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Welcome to arroyoskyeview.com (the "Website"), operated by Arroyo at Skyeview | Homes by Dr. Jan Duffy. 
                Dr. Jan Duffy is a licensed real estate agent in Nevada (License #S.0197614). 
                By accessing or using this Website, you agree to be bound by these Terms of Use and all 
                applicable laws and regulations.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                If you do not agree with any of these terms, you are prohibited from using or accessing 
                this Website. The materials contained in this Website are protected by applicable copyright 
                and trademark law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Use License</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials on this Website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on this Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                This license shall automatically terminate if you violate any of these restrictions and 
                may be terminated by us at any time. Upon terminating your viewing of these materials 
                or upon the termination of this license, you must destroy any downloaded materials in 
                your possession whether in electronic or printed format.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Real Estate Information Accuracy</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The materials on this Website are provided for informational purposes only. While we 
                strive to provide accurate and up-to-date information about new construction properties in Las Vegas, Nevada, 
                pricing, availability, and features:
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Property Information</h3>
              <p className="text-lg text-muted-foreground mb-4">
                All property information, including but not limited to prices, floor plans, square 
                footage, features, availability, and completion dates, is subject to change without 
                notice. Builders reserve the right to modify, discontinue, or change 
                any aspect of their communities and homes at any time.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">No Warranty</h3>
              <p className="text-lg text-muted-foreground mb-4">
                We do not warrant or make any representations concerning the accuracy, likely results, 
                or reliability of the use of the materials on this Website or otherwise relating to 
                such materials or on any sites linked to this Website. All information should be verified 
                directly with the builder or Dr. Jan Duffy before making any purchase decisions.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Contact for Current Information</h3>
              <p className="text-lg text-muted-foreground mb-4">
                For the most current and accurate information about new construction properties in Las Vegas, Nevada, 
                pricing, incentives, and availability, please contact Dr. Jan Duffy, a New Construction Home Expert, at (702) 903-4687.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Intellectual Property</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Website and its original content, features, and functionality are owned by Arroyo at Skyeview | Homes by Dr. Jan Duffy and are protected by international copyright, trademark, 
                patent, trade secret, and other intellectual property laws.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Trademarks</h3>
              <p className="text-lg text-muted-foreground mb-4">
                "Arroyo at Skyeview" and related marks are trademarks. All other trademarks, 
                service marks, and trade names are the property of their respective owners.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Copyright</h3>
              <p className="text-lg text-muted-foreground mb-4">
                All content on this Website, including text, graphics, logos, images, and software, 
                is the property of Arroyo at Skyeview | Homes by Dr. Jan Duffy or its content suppliers and 
                is protected by copyright laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">User Conduct</h2>
              <p className="text-lg text-muted-foreground mb-4">
                You agree to use this Website only for lawful purposes and in a way that does not 
                infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the 
                Website. Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Harassing or causing distress or inconvenience to any person</li>
                <li>Transmitting obscene or offensive content</li>
                <li>Disrupting the normal flow of dialogue within the Website</li>
                <li>Using the Website to send unsolicited commercial communications</li>
                <li>Attempting to gain unauthorized access to the Website or its systems</li>
                <li>Introducing viruses, trojans, worms, or other malicious code</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In no event shall Arroyo at Skyeview | Homes by Dr. Jan Duffy or its suppliers be liable for 
                any damages (including, without limitation, damages for loss of data or profit, or due 
                to business interruption) arising out of the use or inability to use the materials on 
                this Website, even if we or our authorized representative have been notified orally or 
                in writing of the possibility of such damage.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations 
                of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Links to Third-Party Websites</h2>
              <p className="text-lg text-muted-foreground mb-4">
                This Website may contain links to third-party websites, including builder websites 
                and other real estate resources. These links are provided for your convenience 
                only. We do not endorse or assume responsibility for the content, privacy policies, or 
                practices of third-party websites.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                You acknowledge and agree that we shall not be responsible or liable for any damage or 
                loss caused by or in connection with the use of any third-party website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Real Estate Services</h2>
              <p className="text-lg text-muted-foreground mb-4">
                This Website provides information about new construction homes in Las Vegas, Nevada and 
                facilitates connections between potential buyers and Dr. Jan Duffy, a licensed real estate 
                agent and New Construction Home Expert. Dr. Jan Duffy represents buyers, not the builder. Use of this Website does not create a broker-client relationship.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">No Real Estate Brokerage Relationship</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Viewing property information on this Website does not create a real estate brokerage 
                relationship. A formal buyer representation agreement may be required for certain services.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Equal Housing Opportunity</h3>
              <p className="text-lg text-muted-foreground mb-4">
                All new construction homes in Las Vegas, Nevada are available on an equal opportunity basis without regard to race, color, religion, 
                sex, handicap, familial status, or national origin.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Governing Law</h2>
              <p className="text-lg text-muted-foreground mb-4">
                These Terms of Use shall be governed by and construed in accordance with the laws of the 
                State of Nevada, United States, without regard to its conflict of law provisions. Any 
                disputes arising from or relating to these terms or your use of this Website shall be 
                subject to the exclusive jurisdiction of the courts located in Clark County, Nevada.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Changes to Terms</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We reserve the right to revise these Terms of Use at any time without notice. By using 
                this Website, you are agreeing to be bound by the current version of these Terms of Use. 
                We encourage you to review these terms periodically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Severability</h2>
              <p className="text-lg text-muted-foreground mb-4">
                If any provision of these Terms of Use is found to be unenforceable or invalid, that 
                provision shall be limited or eliminated to the minimum extent necessary so that these 
                Terms of Use shall otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="rounded-lg border border-border bg-muted/40 border-l-4 border-l-primary p-6">
                <p className="text-lg text-foreground font-semibold mb-2">Dr. Jan Duffy</p>
                <p className="text-lg text-muted-foreground mb-2">Nevada Real Estate License #S.0197614</p>
                <p className="text-lg text-muted-foreground mb-2">
                  8912 Vanhoy Crk St<br />
                  Las Vegas, NV 89166
                </p>
                <p className="text-lg text-muted-foreground mb-2">
                  <a href="tel:7029034687" className="font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    Phone: (702) 903-4687
                  </a>
                </p>
                <p className="text-lg text-muted-foreground">
                  Email: <a href="mailto:info@arroyoskyeview.com" className="text-primary hover:text-primary/90 underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">info@arroyoskyeview.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
    </MarketingPageShell>
  )
}