import JsonLdScript from './json-ld-script'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'

/** Community + FAQ JSON-LD for the homepage only (avoids duplicate FAQ on every URL). */
export default function HomepageStructuredData() {
  const baseUrl = 'https://www.arroyoskyeview.com'

  const residentialComplex = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    name: 'Arroyo at Skyeview Homes',
    alternateName: ['Arroyo at Skyeview', 'Skyeview Arroyo'],
    description:
      'Arroyo at Skyeview Homes is a townhome community in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Two-story townhomes with 2–4 bedrooms, 2.5 baths, and 2-bay garages, starting from $392,640.',
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Crk St',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2765',
      longitude: '-115.2832',
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Skye Canyon',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89166',
      },
    },
    numberOfBedrooms: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 4,
    },
    numberOfBathroomsTotal: 2.5,
    floorSize: {
      '@type': 'QuantitativeValue',
      minValue: 1531,
      maxValue: 1729,
      unitCode: 'FTK',
    },
    priceRange: ARROYO_PRICE_RANGE,
    dateBuilt: '2024',
  }

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Skye Canyon',
    description:
      'Skye Canyon is a master-planned community in northwest Las Vegas, Nevada, covering 1,700 acres with parks, trails, and recreation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2765',
      longitude: '-115.2832',
    },
    containedIn: {
      '@type': 'City',
      name: 'Las Vegas',
      addressRegion: 'NV',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Arroyo at Skyeview Homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Arroyo at Skyeview Homes is a townhome community in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Dr. Jan Duffy represents home buyers, not the builder sales office.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the prices for Arroyo at Skyeview Homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Published pricing on arroyoskyeview.com ranges ${ARROYO_PRICE_RANGE}. Confirm live inventory with Dr. Jan Duffy at (702) 903-4687 before quoting a specific home.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are available at Skye Canyon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Skye Canyon includes parks, trails, recreation facilities, and neighborhood retail across its 1,700-acre master plan in zip code 89166.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLdScript data={residentialComplex} id="schema-residential-complex" />
      <JsonLdScript data={placeSchema} id="schema-skye-canyon-place" />
      <JsonLdScript data={faqSchema} id="schema-homepage-faq" />
    </>
  )
}
