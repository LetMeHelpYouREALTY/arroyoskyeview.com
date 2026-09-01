import { SITE_CONTACT } from '@/lib/site-contact'
import GoogleMapEmbed from './google-map-embed'

const MAP_SHARE_URL = 'https://maps.app.goo.gl/E4ySRChkkQjnYjeN7'
const REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Berkshire+Hathaway+Las+Vegas'

export default function VisitOurOffice() {
  return (
    <section className="bg-muted/40 py-16 md:py-20" aria-labelledby="office-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="office-heading"
            className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Visit our office
          </h2>
          <p className="mt-4 text-muted-foreground">
            {SITE_CONTACT.businessName} — serving Arroyo at Skyeview and the Las Vegas Valley.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Office address (NAP)</h3>
            <address className="mt-4 not-italic text-muted-foreground">
              <p className="font-medium text-foreground">{SITE_CONTACT.businessName}</p>
              <p>{SITE_CONTACT.streetAddress}</p>
              <p>
                {SITE_CONTACT.addressLocality}, {SITE_CONTACT.addressRegion}{' '}
                {SITE_CONTACT.postalCode}
              </p>
            </address>

            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Call or text</dt>
                <dd>
                  <a
                    href={`tel:${SITE_CONTACT.phoneTel}`}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Office hours</dt>
                <dd className="text-muted-foreground">Monday–Sunday: 10:00 AM – 5:00 PM</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE_CONTACT.phoneTel}`}
                className="inline-flex min-h-11 items-center rounded-lg bg-luxury-navy px-5 py-2.5 text-sm font-semibold text-luxury-ivory hover:bg-luxury-navy/90"
              >
                Call
              </a>
              <a
                href={MAP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Directions
              </a>
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                View Google Reviews
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{SITE_CONTACT.licenseDisplay}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <GoogleMapEmbed
              mapUrl={MAP_SHARE_URL}
              address={SITE_CONTACT.formattedAddress}
              height="360px"
              className="min-h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
