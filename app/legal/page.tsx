import type { Metadata } from 'next'
import Link from 'next/link'
import MarketingPageShell from '../components/marketing-page-shell'
import StandardPageHero from '../components/standard-page-hero'
import PageSchemas from '../components/page-schemas'
import { PageSection } from '../components/page-section'

export const metadata: Metadata = {
  title: 'Legal Information | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description: 'Legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Access our Privacy Policy, Terms of Use, and Accessibility Statement.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/legal',
  },
}

export default function LegalPage() {
  return (
    <MarketingPageShell
      showBanner={false}
      schema={
        <PageSchemas
          pageType="about"
          url="/legal"
          title="Legal Information | Arroyo at Skyeview | Homes by Dr. Jan Duffy"
          description="Legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Access our Privacy Policy, Terms of Use, and Accessibility Statement."
          breadcrumbs={[{ name: 'Legal', url: '/legal' }]}
        />
      }
    >
      <StandardPageHero
        title="Legal Information"
        subtitle="Important legal information and policies for Arroyo at Skyeview | Homes by Dr. Jan Duffy."
      />
      <PageSection variant="narrow" className="py-8 md:py-12">
        <div className="space-y-8">
          <article className="surface-elevated p-8 transition-shadow hover:shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Privacy Policy</h2>
            <p className="mb-6 text-muted-foreground">
              Learn how we collect, use, and protect your personal information when you use our website
              and real estate services.
            </p>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Read Privacy Policy
            </Link>
          </article>

          <article className="surface-elevated p-8 transition-shadow hover:shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Terms of Use</h2>
            <p className="mb-6 text-muted-foreground">
              Understand the terms and conditions for using our website and services.
            </p>
            <Link
              href="/terms-of-use"
              className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Read Terms of Use
            </Link>
          </article>

          <article className="surface-elevated p-8 transition-shadow hover:shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Accessibility Statement</h2>
            <p className="mb-6 text-muted-foreground">
              Our commitment to making our website accessible to all users, including WCAG 2.1 Level AA compliance.
            </p>
            <Link
              href="/accessibility"
              className="inline-flex items-center font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Read Accessibility Statement
            </Link>
          </article>
        </div>

        <aside className="mt-12 rounded-lg border border-border border-l-primary bg-muted/40 p-6">
          <h3 className="mb-3 text-lg font-bold text-foreground">Questions About Legal Information?</h3>
          <p className="mb-4 text-muted-foreground">
            Contact Dr. Jan Duffy at{' '}
            <a href="tel:7029034687" className="font-semibold text-primary">
              (702) 903-4687
            </a>{' '}
            or{' '}
            <a href="mailto:info@arroyoskyeview.com" className="text-primary">
              info@arroyoskyeview.com
            </a>
            .
          </p>
        </aside>
      </PageSection>
    </MarketingPageShell>
  )
}
