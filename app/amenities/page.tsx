import type { Metadata } from 'next'
import Link from 'next/link'
import AmenitiesPageSchemas from '../components/amenities-page-schemas'
import AmenityMapClient from '../components/amenity-map-client'
import DrJanContactCard from '../components/dr-jan-contact-card'
import LuxuryPageHero from '../components/luxury-page-hero'
import MarketingPageShell from '../components/marketing-page-shell'
import PageSchemas from '../components/page-schemas'
import { PageContent } from '../components/page-section'
import {
  AMENITY_CONTENT_SECTIONS,
  NEARBY_AMENITIES_FAQ,
} from '@/lib/nearby-amenities-content'
import { COMMUNITY_MAP_LABEL } from '@/lib/amenity-map-config'
import { SITE_CONTACT } from '@/lib/site-contact'
import { absoluteUrl } from '@/lib/site-url'

const PATH = '/amenities'

export const metadata: Metadata = {
  title:
    'Nearby Amenities in Arroyo at Skyeview, Las Vegas | Skye Canyon 89166 Map & Guide',
  description:
    'Interactive map and hyperlocal guide to restaurants, groceries, parks, schools, healthcare, and shopping near Arroyo at Skyeview in Skye Canyon, Las Vegas NV 89166. Buyer\'s agent Dr. Jan Duffy—(702) 903-4687.',
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: 'Nearby Amenities | Arroyo at Skyeview, Skye Canyon Las Vegas',
    description:
      'Explore what is near Arroyo at Skyeview—dining, trails, schools, hospitals, and commute times in northwest Las Vegas zip 89166.',
    url: absoluteUrl(PATH),
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nearby amenities near Arroyo at Skyeview in Skye Canyon',
      },
    ],
  },
}

export default function NearbyAmenitiesPage() {
  return (
    <MarketingPageShell
      showContactCta
      schema={
        <>
          <PageSchemas
            pageType="neighborhood"
            url={PATH}
            title="Nearby Amenities in Arroyo at Skyeview, Las Vegas | Skye Canyon 89166"
            description="Hyperlocal amenity guide and interactive map for Arroyo at Skyeview in Skye Canyon, northwest Las Vegas, Nevada (zip 89166)."
            breadcrumbs={[{ name: 'Nearby Amenities', url: PATH }]}
            location="Skye Canyon"
            zipCode="89166"
            questions={NEARBY_AMENITIES_FAQ.map((q) => ({
              question: q.question,
              answer: q.answer,
            }))}
          />
          <AmenitiesPageSchemas />
        </>
      }
    >
      <LuxuryPageHero
        eyebrow="Skye Canyon · Zip 89166"
        title="Nearby Amenities in Arroyo at Skyeview, Las Vegas"
        subtitle="A buyer-focused map and guide to dining, groceries, recreation, schools, healthcare, and regional destinations from your Skye Canyon townhome."
      >
        <p className="mt-6 max-w-2xl text-sm text-luxury-sand">
          Touring inventory?{' '}
          <Link
            href="/arroyo-at-skyeview/available-homes"
            className="font-medium text-luxury-champagne underline underline-offset-2 hover:text-luxury-ivory"
          >
            View available homes
          </Link>{' '}
          or{' '}
          <Link
            href="/arroyo-at-skyeview/area"
            className="font-medium text-luxury-champagne underline underline-offset-2 hover:text-luxury-ivory"
          >
            read the Skye Canyon area guide
          </Link>
          .
        </p>
      </LuxuryPageHero>

      <PageContent>
        <section className="mb-12" aria-labelledby="amenity-map-heading">
          <h2 id="amenity-map-heading" className="mb-4 font-serif text-2xl text-foreground md:text-3xl">
            Interactive amenity map
          </h2>
          <p className="mb-6 max-w-3xl text-muted-foreground">
            Centered on {COMMUNITY_MAP_LABEL} in Skye Canyon. Switch categories to explore what
            buyers ask about most—groceries, parks, schools, and healthcare—without leaving the page.
          </p>
          <AmenityMapClient mapHeightClass="min-h-[24rem] h-[24rem] sm:h-[30rem] md:h-[32rem]" />
        </section>

        {AMENITY_CONTENT_SECTIONS.map((section) => (
          <section
            key={section.id}
            className="mb-10 border-b border-border/60 pb-10 last:border-0"
            aria-labelledby={`amenity-section-${section.id}`}
          >
            <h2
              id={`amenity-section-${section.id}`}
              className="mb-3 font-serif text-xl text-foreground md:text-2xl"
            >
              {section.heading}
            </h2>
            <p className="mb-4 max-w-3xl text-muted-foreground">{section.intro}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {section.places.map((place) => (
                <li
                  key={`${section.id}-${place.name}`}
                  className="rounded-lg border border-border bg-card/50 p-4"
                >
                  <h3 className="font-medium text-foreground">{place.name}</h3>
                  <p className="text-sm text-muted-foreground">{place.address}</p>
                  {place.note ? (
                    <p className="mt-1 text-xs text-muted-foreground">{place.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-12" aria-labelledby="amenities-faq-heading">
          <h2 id="amenities-faq-heading" className="mb-6 font-serif text-2xl text-foreground md:text-3xl">
            Nearby amenities FAQ
          </h2>
          <dl className="space-y-6">
            {NEARBY_AMENITIES_FAQ.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold text-foreground">{item.question}</dt>
                <dd className="mt-2 text-muted-foreground">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="rounded-xl border border-primary/20 bg-primary/5 p-6"
          aria-labelledby="amenities-agent-heading"
        >
          <h2 id="amenities-agent-heading" className="mb-2 font-serif text-2xl text-foreground">
            Your hyperlocal buyer&apos;s agent for {COMMUNITY_MAP_LABEL}
          </h2>
          <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
            {SITE_CONTACT.agentName} represents home buyers—not the builder—at Arroyo at Skyeview
            and across Skye Canyon. {SITE_CONTACT.licenseDisplay}. Berkshire Hathaway HomeServices
            Nevada Properties. Call {SITE_CONTACT.phoneDisplay} or email {SITE_CONTACT.email}.
          </p>
          <DrJanContactCard />
        </section>
      </PageContent>
    </MarketingPageShell>
  )
}
