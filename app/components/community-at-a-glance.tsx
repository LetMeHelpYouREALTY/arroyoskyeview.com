import Link from 'next/link'
import { ARROYO_AT_SKYEVIEW, SKYE_CANYON } from '@/lib/hyperlocal-content'
import { SITE_CONTACT } from '@/lib/site-contact'
import CalendlyScheduleButton from './calendly-schedule-button'

const GLANCE = [
  {
    title: 'Townhomes from 1,531–1,729 sq ft',
    body: `${ARROYO_AT_SKYEVIEW.beds} bedrooms, ${ARROYO_AT_SKYEVIEW.baths} baths, ${ARROYO_AT_SKYEVIEW.garages} garages. Beverly, Captiva, and Delray plans.`,
  },
  {
    title: `Pricing from ${ARROYO_AT_SKYEVIEW.priceFrom}`,
    body: 'Builder incentives and lot premiums change. Dr. Jan Duffy quotes live inventory before you tour the model.',
  },
  {
    title: `${SKYE_CANYON.name}, ZIP ${SKYE_CANYON.zip}`,
    body: `${SKYE_CANYON.acres}-acre master plan in ${SKYE_CANYON.region}, with US-95 and 215 Beltway access.`,
  },
  {
    title: 'Buyer representation, not the builder',
    body: 'Register Dr. Jan Duffy before the first model visit so you keep advocacy on the contract. Nevada license S.0197614.LLC.',
  },
] as const

const TOUR_STEPS = [
  {
    title: 'Call or book a showing',
    body: `Call ${SITE_CONTACT.phoneDisplay} or schedule a 30-minute consult. Tell Dr. Jan which plan you want to walk.`,
  },
  {
    title: 'Register your agent first',
    body: 'Have Dr. Jan Duffy registered with the builder before you enter the model so buyer representation stays on your side.',
  },
  {
    title: 'Tour the community',
    body: `Meet in Skye Canyon (${SKYE_CANYON.zip}) to walk townhome plans from 1,531–1,729 sq ft.`,
  },
] as const

export default function CommunityAtAGlance() {
  return (
    <section className="bg-background py-16 md:py-20" aria-labelledby="glance-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Arroyo at Skyeview
          </p>
          <h2
            id="glance-heading"
            className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Arroyo at Skyeview at a glance
          </h2>
          <ul className="mt-8 space-y-6">
            {GLANCE.map((item) => (
              <li key={item.title} className="border-l-2 border-luxury-champagne/50 pl-4">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            MLS pricing and availability change.{' '}
            <Link
              href="/arroyo-at-skyeview/available-homes"
              className="font-medium text-primary underline underline-offset-2 hover:text-luxury-champagne"
            >
              See current homes
            </Link>
            {' '}or call Dr. Jan for builder inventory in ZIP {SKYE_CANYON.zip}.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-8">
          <h2 className="font-serif text-3xl font-light tracking-tight text-foreground">
            How do I tour Arroyo at Skyeview?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground text-pretty">
            Register Dr. Jan Duffy as your buyer&apos;s agent before the first model visit, then tour townhomes in Skye Canyon.
          </p>
          <ol className="mt-8 space-y-6">
            {TOUR_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-luxury-navy text-sm font-semibold text-luxury-ivory">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CalendlyScheduleButton
              text="Schedule a tour"
              variant="champagne"
              className="px-6 py-3 text-sm"
            />
            <a
              href={`tel:${SITE_CONTACT.phoneTel}`}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-luxury-champagne/40 px-6 py-3 text-sm font-semibold text-luxury-navy hover:bg-luxury-champagne/10"
            >
              Call {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
