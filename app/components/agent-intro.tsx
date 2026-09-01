import { SITE_CONTACT } from '@/lib/site-contact'
import CalendlyScheduleButton from './calendly-schedule-button'

export default function AgentIntro() {
  return (
    <section className="bg-luxury-navy py-16 text-luxury-ivory md:py-20" aria-labelledby="agent-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:px-8">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Your Arroyo at Skyeview REALTOR®
          </p>
          <h2 id="agent-heading" className="mt-3 font-serif text-4xl font-light md:text-5xl">
            {SITE_CONTACT.agentName}
          </h2>
          <p className="mt-2 text-sm font-medium text-luxury-champagne">
            REALTOR® · {SITE_CONTACT.licenseDisplay} · Berkshire Hathaway HomeServices Nevada Properties
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-luxury-ivory/85 text-pretty">
            Dr. Jan Duffy represents buyers at Arroyo at Skyeview in Skye Canyon (89166)—new construction
            tours, contract advocacy, and MLS search. She works for you, not the builder sales office.
          </p>
          <p className="mt-4 text-sm text-luxury-ivory/70">
            {SITE_CONTACT.email} · {SITE_CONTACT.formattedAddress}
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-luxury-champagne/30 bg-luxury-navy/60 p-8">
          <p className="font-serif text-2xl font-light">Work with Dr. Jan</p>
          <p className="text-sm text-luxury-ivory/75">
            Register before the first model visit. Construction checks every 7–10 days through your build.
          </p>
          <CalendlyScheduleButton
            text="Schedule time with me"
            variant="champagne"
            className="mt-2 px-6 py-3 text-sm"
          />
          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-luxury-champagne/50 px-6 py-3 text-sm font-semibold text-luxury-champagne hover:bg-luxury-champagne/10"
          >
            Call {SITE_CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
