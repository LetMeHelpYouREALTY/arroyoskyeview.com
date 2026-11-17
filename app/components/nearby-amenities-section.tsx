import Link from 'next/link'
import AmenityMapClient from './amenity-map-client'
import { COMMUNITY_MAP_LABEL } from '@/lib/amenity-map-config'

type NearbyAmenitiesSectionProps = {
  /** Override default homepage-style heading */
  title?: string
  subtitle?: string
  className?: string
  showFullPageLink?: boolean
}

export default function NearbyAmenitiesSection({
  title = `Life Near ${COMMUNITY_MAP_LABEL}`,
  subtitle = 'Explore dining, groceries, parks, schools, and healthcare around Skye Canyon (zip 89166)—then dive into the full interactive map.',
  className = '',
  showFullPageLink = true,
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`border-y border-border/60 bg-card/30 py-14 md:py-16 ${className}`}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            What&apos;s Nearby
          </p>
          <h2
            id="nearby-amenities-heading"
            className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{subtitle}</p>
          {showFullPageLink ? (
            <p className="mt-4">
              <Link
                href="/amenities"
                className="font-medium text-primary underline underline-offset-2 hover:text-luxury-champagne"
              >
                View full nearby amenities guide &amp; map
              </Link>
            </p>
          ) : null}
        </div>
        <AmenityMapClient />
      </div>
    </section>
  )
}
