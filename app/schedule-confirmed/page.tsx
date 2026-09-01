import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CALENDLY_CONFIRMATION_URL } from '@/lib/calendly'
import NapContactCard from '../components/nap-contact-card'
import PageSchemas from '../components/page-schemas'
import MarketingPageShell from '../components/marketing-page-shell'
import { PageContent } from '../components/page-section'

export const metadata: Metadata = {
  title: 'Tour booked | Arroyo at Skyeview | Dr. Jan Duffy',
  description: `Your buyer consultation with Dr. Jan Duffy is on the calendar. Call ${SITE_CONTACT.phoneDisplay} with questions. Office: ${SITE_CONTACT.formattedAddress}.`,
  alternates: {
    canonical: CALENDLY_CONFIRMATION_URL,
  },
  robots: {
    index: false,
    follow: false,
  },
}

type ScheduleConfirmedPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

export default async function ScheduleConfirmedPage({
  searchParams,
}: ScheduleConfirmedPageProps) {
  const params = await searchParams
  const inviteeEmail = firstQueryValue(params.invitee_email)?.trim()
  const email = firstQueryValue(params.email)?.trim()

  if (inviteeEmail && inviteeEmail !== email) {
    redirect(`/schedule-confirmed?email=${encodeURIComponent(inviteeEmail)}`)
  }

  return (
    <MarketingPageShell
      schema={
        <PageSchemas
          pageType="contact"
          url="/schedule-confirmed"
          title="Tour booked | Arroyo at Skyeview | Dr. Jan Duffy"
          description="Buyer consultation booked with Dr. Jan Duffy for Arroyo at Skyeview in Skye Canyon, Las Vegas 89166."
          breadcrumbs={[{ name: 'Tour booked', url: '/schedule-confirmed' }]}
          questions={[
            {
              question: 'What happens after I book a tour with Dr. Jan Duffy?',
              answer:
                'Calendly emails a calendar invite. Dr. Jan Duffy represents home buyers—not the builder—at Arroyo at Skyeview in Skye Canyon (89166). Call (702) 903-4687 with questions before the appointment.',
            },
          ]}
        />
      }
      footerSuppressRealScout
    >
      <PageContent className="max-w-3xl">
        <h1 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          You are on the calendar
        </h1>
        <p className="mt-4 text-muted-foreground text-pretty">
          Check email for the Calendly invite. Dr. Jan Duffy will walk Arroyo at Skyeview
          townhomes in Skye Canyon as your buyer&apos;s agent—not the builder&apos;s.
        </p>
        <p className="mt-3 text-muted-foreground">
          Need to change the time? Call{' '}
          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            className="font-semibold text-primary hover:text-primary/90"
          >
            {SITE_CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8">
          <NapContactCard />
        </div>
      </PageContent>
    </MarketingPageShell>
  )
}
