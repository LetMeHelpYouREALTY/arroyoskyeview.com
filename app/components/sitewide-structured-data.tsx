import JsonLdScript from './json-ld-script'
import { ARROYO_JSON_LD_AREA_SERVED } from '@/lib/json-ld-area-served'
import {
  JSON_LD_ORGANIZATION_ID,
  JSON_LD_REAL_ESTATE_AGENT_ID,
} from '@/lib/json-ld-entities'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

/** Organization + agent graph on every page (no FAQ / breadcrumbs here). */
export default function SitewideStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': JSON_LD_ORGANIZATION_ID,
    name: SITE_CONTACT.businessName,
    alternateName: ['Dr. Jan Duffy Real Estate', 'Dr. Jan Duffy'],
    description:
      'Expert buyer representation for Arroyo at Skyeview Homes and new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Dr. Jan Duffy represents home buyers, not the builder.',
    url: SITE_URL,
    telephone: '+1-702-903-4687',
    email: SITE_CONTACT.email,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/dr-jan-duffy.png`,
    },
    image: `${SITE_URL}/images/dr-jan-duffy.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.addressLocality,
      addressRegion: SITE_CONTACT.addressRegion,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2765',
      longitude: '-115.2832',
    },
    areaServed: [...ARROYO_JSON_LD_AREA_SERVED],
    knowsAbout: [
      'Arroyo at Skyeview Homes',
      'New Construction Homes',
      'Skye Canyon',
      'Northwest Las Vegas',
      'Zip Code 89166',
      'Buyer Representation',
      'Construction Monitoring',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-702-903-4687',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: SITE_CONTACT.email,
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
  }

  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': JSON_LD_REAL_ESTATE_AGENT_ID,
    name: SITE_CONTACT.agentName,
    description:
      'Buyer representation for Arroyo at Skyeview and new construction in Skye Canyon (89166), northwest Las Vegas, Nevada. Construction monitoring and building standards inspection.',
    url: `${SITE_URL}/work-with-dr-jan`,
    telephone: '+1-702-903-4687',
    email: SITE_CONTACT.email,
    image: `${SITE_URL}/images/dr-jan-duffy.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.addressLocality,
      addressRegion: SITE_CONTACT.addressRegion,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: 'US',
    },
    areaServed: [...ARROYO_JSON_LD_AREA_SERVED],
    worksFor: { '@id': JSON_LD_ORGANIZATION_ID },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  }

  return (
    <>
      <JsonLdScript data={organizationSchema} id="schema-organization" />
      <JsonLdScript data={realEstateAgent} id="schema-realestateagent" />
    </>
  )
}
