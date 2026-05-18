import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Privacy Policy | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description: 'Privacy Policy for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Learn how we collect, use, and protect your personal information in compliance with CCPA and GDPR.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="about"
        url="/privacy-policy"
        title="Privacy Policy | Arroyo at Skyeview | Homes by Dr. Jan Duffy"
        description="Privacy Policy for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Learn how we collect, use, and protect your personal information in compliance with CCPA and GDPR."
        breadcrumbs={[
          { name: 'Legal', url: '/legal' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-linear-to-b from-muted/80 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Arroyo at Skyeview | Homes by Dr. Jan Duffy ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website arroyoskyeview.com or use our real estate services.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                This website is operated by Dr. Jan Duffy, a licensed real estate agent in Nevada (License #S.0197614). 
                By using our website and services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Personal Information</h3>
              <p className="text-lg text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Fill out contact forms or request information about properties</li>
                <li>Schedule a tour or consultation</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Contact us via phone, email, or through our website</li>
                <li>Use our online homebuying tools</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                This information may include your name, email address, phone number, mailing address, 
                property preferences, financial information (for prequalification purposes), and any 
                other information you choose to provide.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Automatically Collected Information</h3>
              <p className="text-lg text-muted-foreground mb-4">
                When you visit our website, we automatically collect certain information about your device, 
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Search terms used to find our website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Provide real estate services and respond to your inquiries</li>
                <li>Match you with new construction properties in Las Vegas, Nevada that meet your criteria</li>
                <li>Schedule property tours and consultations</li>
                <li>Assist with mortgage prequalification and homebuying process</li>
                <li>Send you updates about available properties, pricing, and incentives</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent, where required)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Information Sharing and Disclosure</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We may share your information with:
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Builders</h3>
              <p className="text-lg text-muted-foreground mb-4">
                As a New Construction Home Expert and buyer's agent, we share your information with 
                builders to facilitate your home purchase, coordinate property tours, 
                and process transactions. Dr. Jan Duffy represents YOU, not the builder.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Service Providers</h3>
              <p className="text-lg text-muted-foreground mb-4">
                We may share information with third-party service providers who assist us in operating 
                our website, conducting business, or serving our clients, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Website hosting and analytics services</li>
                <li>Email marketing platforms</li>
                <li>Mortgage lenders and financial service providers</li>
                <li>Title companies and escrow services</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Legal Requirements</h3>
              <p className="text-lg text-muted-foreground mb-4">
                We may disclose your information if required by law, court order, or government regulation, 
                or to protect our rights, property, or safety, or that of our clients or others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Cookies and Tracking Technologies</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                You can control cookies through your browser settings. However, disabling cookies may 
                limit your ability to use certain features of our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Your Privacy Rights</h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">California Privacy Rights (CCPA)</h3>
              <p className="text-lg text-muted-foreground mb-4">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Know what personal information we collect and how it's used</li>
                <li>Request access to your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">General Privacy Rights</h3>
              <p className="text-lg text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Data Security</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is completely secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Children's Privacy</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our website and services are not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If we learn that we have 
                collected information from a child under 13, we will delete that information promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Changes to This Privacy Policy</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                please contact us:
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
      </main>
      <Footer />
    </div>
  )
}

