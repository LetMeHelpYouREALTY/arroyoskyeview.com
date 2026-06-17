'use client'

import Link from 'next/link'
import CalendlyScheduleButton from './calendly-schedule-button'
import { trackCTAClick } from './analytics-tracker'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  cta?: {
    text: string
    href?: string
    type: 'link' | 'phone' | 'calendly'
  }
}

export default function ConversionFunnel() {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Contact Dr. Jan Duffy',
      description: 'Call or text your buyer\'s agent to discuss Arroyo at Skyeview Homes in Skye Canyon, zip code 89166',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      cta: {
        text: 'Call (702) 903-4687',
        href: 'tel:7029034687',
        type: 'phone',
      },
    },
    {
      id: 2,
      title: 'Free Consultation',
      description: 'Book a 30-minute buyer consultation on Arroyo at Skyeview Homes, floor plans, pricing, and representation',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      cta: {
        text: 'Schedule time with me',
        type: 'calendly',
      },
    },
    {
      id: 3,
      title: 'Home Selection',
      description: 'Choose your perfect Arroyo at Skyeview Home with insider knowledge of available inventory',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Construction Monitoring',
      description: 'Dr. Jan monitors your home\'s construction every 7-10 days—protecting YOUR interests',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Move In',
      description: 'Close on your Arroyo at Skyeview Home with building standards inspection included',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-linear-to-b from-muted/50 to-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your Buyer&apos;s Agent Journey to Arroyo at Skyeview Homes
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Simple 5-step process with expert buyer representation from Dr. Jan Duffy—at no extra cost to you
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 bg-border md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-card text-primary shadow-lg">
                  {step.icon}
                </div>
                <div className="surface-elevated rounded-xl p-6 transition-shadow hover:shadow-md">
                  <div className="mb-2 text-sm font-bold text-primary">Step {step.id}</div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>
                  {step.cta && (
                    <>
                      {step.cta.type === 'phone' && step.cta.href ? (
                        <a
                          href={step.cta.href}
                          onClick={() => trackCTAClick(step.cta!.text, `funnel_step_${step.id}`)}
                          className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {step.cta.text}
                        </a>
                      ) : null}
                      {step.cta.type === 'link' && step.cta.href ? (
                        <Link
                          href={step.cta.href}
                          onClick={() => trackCTAClick(step.cta!.text, `funnel_step_${step.id}`)}
                          className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {step.cta.text}
                        </Link>
                      ) : null}
                      {step.cta.type === 'calendly' ? (
                        <CalendlyScheduleButton
                          text={step.cta.text}
                          className="min-h-10 px-4 py-2 text-sm"
                          variant="primary"
                        />
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-elevated mt-12 rounded-xl border-2 border-primary/20 bg-accent/30 p-6 text-center">
          <p className="mb-4 text-muted-foreground">
            <strong className="text-foreground">Remember:</strong> Dr. Jan Duffy represents HOME BUYERS, not the builder.
            Builders pay for buyer representation, so there&apos;s no extra cost to you.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CalendlyScheduleButton text="Schedule time with me" variant="primary" />
            <a
              href="tel:7029034687"
              onClick={() => trackCTAClick('Call Now - Funnel', 'funnel_bottom')}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-primary bg-background px-8 py-3 text-lg font-semibold text-primary transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Call (702) 903-4687
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
