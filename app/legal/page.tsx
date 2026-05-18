import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'Legal Information | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description: 'Legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Access our Privacy Policy, Terms of Use, and Accessibility Statement.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/legal',
  },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="about"
        url="/legal"
        title="Legal Information | Arroyo at Skyeview | Homes by Dr. Jan Duffy"
        description="Legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Access our Privacy Policy, Terms of Use, and Accessibility Statement."
        breadcrumbs={[
          { name: 'Legal', url: '/legal' },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-linear-to-b from-muted/80 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Legal Information
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Important legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy. 
              Please review these documents to understand your rights and our obligations.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Privacy Policy */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
              <p className="text-muted-foreground mb-6">
                Learn how we collect, use, and protect your personal information when you use our website 
                and real estate services. Our privacy policy explains your rights regarding data collection 
                and how we comply with privacy laws including CCPA and GDPR.
              </p>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                title="View Privacy Policy"
              >
                Read Privacy Policy
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Terms of Use */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Terms of Use</h2>
              <p className="text-muted-foreground mb-6">
                Understand the terms and conditions for using our website and services. These terms 
                govern your access to property information, contact forms, and all content provided 
                by Arroyo at Skyeview | Homes by Dr. Jan Duffy.
              </p>
              <Link
                href="/terms-of-use"
                className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                title="View Terms of Use"
              >
                Read Terms of Use
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Accessibility Statement */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Statement</h2>
              <p className="text-muted-foreground mb-6">
                Our commitment to making our website accessible to all users. Learn about our 
                accessibility features, compliance with WCAG 2.1 Level AA standards, and how to 
                contact us with accessibility concerns.
              </p>
              <Link
                href="/accessibility"
                className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                title="View Accessibility Statement"
              >
                Read Accessibility Statement
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 rounded-lg border border-border bg-muted/40 border-l-4 border-l-primary p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Questions About Legal Information?</h3>
            <p className="text-muted-foreground mb-4">
              If you have questions about our legal policies or need clarification on any of these documents, 
              please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Dr. Jan Duffy</strong></p>
              <p>Nevada Real Estate License #S.0197614</p>
              <p>
                8912 Vanhoy Crk St<br />
                Las Vegas, NV 89166
              </p>
              <p>
                <a href="tel:7029034687" className="font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                  Phone: (702) 903-4687
                </a>
              </p>
              <p>
                Email: <a href="mailto:info@arroyoskyeview.com" className="text-primary hover:text-primary/90 underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">info@arroyoskyeview.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

