import { cn } from '@/lib/utils'
import CalendlyLinkWidget from './calendly-link-widget'

export default function ContactMethods() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Get in Touch
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Schedule Online</h3>
            <p className="mb-4 text-muted-foreground">Book a 30-minute buyer consultation</p>
            <CalendlyLinkWidget
              text="Schedule time with me"
              className={cn(
                'font-semibold text-primary underline-offset-2 transition-colors hover:text-primary/90',
                'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              )}
            />
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Email</h3>
            <p className="mb-4 text-muted-foreground">Send us an email anytime</p>
            <a
              href="mailto:info@arroyoskyeview.com"
              className={cn(
                'font-semibold text-primary underline-offset-2 transition-colors hover:text-primary/90',
                'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              )}
            >
              info@arroyoskyeview.com
            </a>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Call or Text</h3>
            <p className="mb-4 text-muted-foreground">Available 7 days a week</p>
            <a
              href="tel:7029034687"
              className={cn(
                'font-semibold text-primary underline-offset-2 transition-colors hover:text-primary/90',
                'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              )}
            >
              (702) 903-4687
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
