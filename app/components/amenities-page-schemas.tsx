import Script from 'next/script'
import {
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  COMMUNITY_MAP_ADDRESS,
} from '@/lib/amenity-map-config'
import {
  getAllCuratedPlacesForSchema,
  NEARBY_AMENITIES_FAQ,
} from '@/lib/nearby-amenities-content'
import { SITE_CONTACT } from '@/lib/site-contact'

const BASE_URL = 'https://www.arroyoskyeview.com'
const PAGE_PATH = '/amenities'

export default function AmenitiesPageSchemas() {
  const pageUrl = `${BASE_URL}${PAGE_PATH}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: pageUrl,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NEARBY_AMENITIES_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const places = getAllCuratedPlacesForSchema()
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Nearby amenities around ${COMMUNITY_MAP_LABEL}`,
    itemListElement: places.map((place, index) => {
      const item: Record<string, unknown> = {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
      }
      if (place.address) {
        item.address = {
          '@type': 'PostalAddress',
          streetAddress: place.address,
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US',
        }
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item,
      }
    }),
  }

  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${pageUrl}#community`,
    name: COMMUNITY_MAP_LABEL,
    description:
      'New construction townhome community by Century Communities in Skye Canyon, northwest Las Vegas, Nevada (zip 89166).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMMUNITY_MAP_ADDRESS,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  }

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}/work-with-dr-jan#realestateagent`,
    name: SITE_CONTACT.agentName,
    telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
    email: SITE_CONTACT.email,
    url: `${BASE_URL}/work-with-dr-jan`,
    areaServed: {
      '@type': 'Place',
      name: COMMUNITY_MAP_LABEL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89166',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMMUNITY_MAP_CENTER.lat,
        longitude: COMMUNITY_MAP_CENTER.lng,
      },
    },
    knowsAbout: [
      COMMUNITY_MAP_LABEL,
      'Skye Canyon',
      'Northwest Las Vegas new construction',
    ],
  }

  const schemas = [
    breadcrumbSchema,
    faqSchema,
    itemListSchema,
    communityPlaceSchema,
    agentSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`amenities-schema-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
