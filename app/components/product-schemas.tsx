import Script from 'next/script'
import { siteImage } from '@/lib/cloudflare-images'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

function productImageUrl(image: string, baseUrl: string): string {
  const resolved = siteImage(image)
  return resolved.startsWith('http') ? resolved : `${baseUrl}${resolved}`
}

function sellerJsonLd() {
  return {
    '@type': 'RealEstateAgent' as const,
    '@id': `${SITE_URL}#localbusiness`,
    name: SITE_CONTACT.agentName,
    telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.addressLocality,
      addressRegion: SITE_CONTACT.addressRegion,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: 'US',
    },
  }
}

interface FloorPlan {
  name: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  image?: string
}

interface Home {
  address: string
  lot: string
  floorPlan: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  completion: string
  features: string[]
  image?: string
}

interface ProductSchemasProps {
  floorPlans?: FloorPlan[]
  homes?: Home[]
}

export default function ProductSchemas({ floorPlans = [], homes = [] }: ProductSchemasProps) {
  const baseUrl = SITE_URL
  const seller = sellerJsonLd()

  const floorPlanSchemas = floorPlans.map((plan) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${plan.name} Floor Plan - Arroyo at Skyeview Homes`,
    description: `The ${plan.name} floor plan at Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). ${plan.description}. ${plan.sqft} square feet, ${plan.bedrooms} bedrooms, ${plan.bathrooms} bathrooms, ${plan.parking}-bay garage.`,
    url: `${baseUrl}/arroyo-at-skyeview/floor-plans#${plan.name.toLowerCase()}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONTACT.businessName,
    },
    category: 'Real Estate',
    productID: `floor-plan-${plan.name.toLowerCase()}`,
    sku: `FP-${plan.name.toUpperCase()}`,
    offers: {
      '@type': 'Offer',
      price: plan.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/arroyo-at-skyeview/floor-plans#${plan.name.toLowerCase()}`,
      seller,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: plan.sqft.toString(),
        unitCode: 'FTK',
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: plan.bedrooms.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: plan.bathrooms.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Parking Spaces',
        value: plan.parking.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Location',
        value: 'Skye Canyon, Las Vegas, NV 89166',
      },
    ],
    ...(plan.image && {
      image: productImageUrl(plan.image, baseUrl),
    }),
  }))

  /**
   * RealEstateListing (WebPage subtype) + Offer + House.
   * Google has no dedicated listing rich result (Search Central gallery, 2026);
   * this graph is for entity understanding and matches 2026 local SEO guidance.
   */
  const homeSchemas = homes.map((home) => {
    const listingUrl = `${baseUrl}/arroyo-at-skyeview/available-homes`
    const listingId = `${listingUrl}#${home.lot.toLowerCase()}`
    const image = home.image ? productImageUrl(home.image, baseUrl) : undefined

    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      '@id': listingId,
      url: listingUrl,
      name: `${home.address}, Las Vegas, NV 89166 — ${home.floorPlan} townhome at Arroyo at Skyeview`,
      description: `Available new construction townhome at ${home.address} in Arroyo at Skyeview, Skye Canyon, Las Vegas, NV 89166. ${home.floorPlan} floor plan, ${home.sqft} sq ft, ${home.bedrooms} bedrooms, ${home.bathrooms} bathrooms, ${home.parking}-bay garage. ${home.completion}.`,
      mainEntity: {
        '@type': 'Offer',
        businessFunction: 'http://purl.org/goodrelations/v1#Sell',
        price: home.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: listingUrl,
        sku: home.lot,
        seller,
        itemOffered: {
          '@type': 'House',
          name: home.address,
          numberOfBedrooms: home.bedrooms,
          numberOfBathroomsTotal: home.bathrooms,
          floorSize: {
            '@type': 'QuantitativeValue',
            value: home.sqft,
            unitCode: 'FTK',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: home.address,
            addressLocality: SITE_CONTACT.addressLocality,
            addressRegion: SITE_CONTACT.addressRegion,
            postalCode: SITE_CONTACT.communityPostalCode,
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SITE_CONTACT.geo.latitude,
            longitude: SITE_CONTACT.geo.longitude,
          },
          amenityFeature: home.features.map((feature) => ({
            '@type': 'LocationFeatureSpecification',
            name: feature,
            value: true,
          })),
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Lot Number',
              value: home.lot,
            },
            {
              '@type': 'PropertyValue',
              name: 'Floor Plan',
              value: home.floorPlan,
            },
            {
              '@type': 'PropertyValue',
              name: 'Parking Spaces',
              value: home.parking.toString(),
            },
            {
              '@type': 'PropertyValue',
              name: 'Est. Completion',
              value: home.completion,
            },
          ],
          ...(image && { image }),
        },
      },
      ...(image && { image }),
    }
  })

  const allSchemas = [...floorPlanSchemas, ...homeSchemas]

  if (allSchemas.length === 0) {
    return null
  }

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={`product-schema-${index}`}
          id={`product-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
