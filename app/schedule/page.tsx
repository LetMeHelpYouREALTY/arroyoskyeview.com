import type { Metadata } from 'next'
import { SITE_CONTACT } from '@/lib/site-contact'
import CalendlyInlineWidget from '../components/calendly-inline-widget'
import NapContactCard from '../components/nap-contact-card'
import PageSchemas from '../components/page-schemas'
import MarketingPageShell from '../components/marketing-page-shell'
import { PageContent } from '../components/page-section'

export const metadata: Metadata = {
  title:
    'Schedule a Buyer Consultation | Arroyo at Skyeview Townhomes | Skye Canyon, Las Vegas 89166',
  description: `Book a 30-minute buyer consultation with Dr. Jan Duffy for Arroyo at Skyeview townhomes in Skye Canyon, Las Vegas, NV 89166. She represents home buyers—not the builder. Call ${SITE_CONTACT.phoneDisplay}. Office: ${SITE_CONTACT.formattedAddress}.`,
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/schedule',
  },
  openGraph: {
    title: 'Schedule a Buyer Consultation | Arroyo at Skyeview | Skye Canyon 89166',
    description:
      'Book a 30-minute buyer consultation with Dr. Jan Duffy for Arroyo at Skyeview townhomes in Skye Canyon, Las Vegas, NV 89166. She represents home buyers—not the builder.',
    url: 'https://www.arroyoskyeview.com/schedule',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview townhomes in Skye Canyon, Las Vegas 89166',
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

export default function SchedulePage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
          pageType="contact"
          url="/schedule"
          title="Schedule a Buyer Consultation | Arroyo at Skyeview Townhomes | Skye Canyon, Las Vegas 89166"
          description="Book a 30-minute buyer consultation with Dr. Jan Duffy for Arroyo at Skyeview townhomes in Skye Canyon, Las Vegas, NV 89166. She represents home buyers—not the builder."
          breadcrumbs={[{ name: 'Schedule a tour', url: '/schedule' }]}
          questions={[
            {
              question: 'How do I schedule a tour of Arroyo at Skyeview?',
              answer: `Use the calendar on this page or call ${SITE_CONTACT.phoneDisplay}. Dr. Jan Duffy meets buyers at ${SITE_CONTACT.formattedAddress}, Monday through Sunday, 9:00 AM to 6:00 PM.`,
            },
            {
              question: 'Does Dr. Jan Duffy represent the builder?',
              answer:
                'No. Dr. Jan Duffy represents home buyers at Arroyo at Skyeview in Skye Canyon (89166), not the builder. Builder-paid buyer representation does not add a fee to the home price.',
            },
          ]}
        />
      }
      footerSuppressRealScout
    >
      <PageContent className="max-w-4xl">
        <h1 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Schedule a buyer consultation
        </h1>
        <p className="mt-4 text-muted-foreground text-pretty">
          Pick a 30-minute slot with Dr. Jan Duffy for Arroyo at Skyeview townhomes in Skye
          Canyon, Las Vegas 89166. Calendly emails a calendar invite after you book.
        </p>
        <p className="mt-3 text-muted-foreground">
          Prefer to talk now? Call{' '}
          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            className="font-semibold text-primary hover:text-primary/90"
          >
            {SITE_CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <CalendlyInlineWidget />
        </div>
        <div className="mt-10">
          <NapContactCard />
        </div>
      </PageContent>
    </MarketingPageShell>
  )
}
