import Script from 'next/script'
import { localBusinessJsonLd } from '@/lib/local-business-schema'

/**
 * LocalBusiness JSON-LD for pages that also show testimonials.
 * GBP reviews for this location returned no verified aggregate (checked
 * 2026-09-01). Do not emit Review or AggregateRating markup until a live
 * ratingValue/reviewCount exists.
 */
export default function ReviewSchema() {
  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
    />
  )
}
