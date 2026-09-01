import { DR_JAN_PORTRAIT_SRC } from '@/lib/brand-images'
import { OFFICE_OPENING_HOURS, SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

export function postalAddressJsonLd() {
  return {
    '@type': 'PostalAddress' as const,
    streetAddress: SITE_CONTACT.streetAddress,
    addressLocality: SITE_CONTACT.addressLocality,
    addressRegion: SITE_CONTACT.addressRegion,
    postalCode: SITE_CONTACT.postalCode,
    addressCountry: 'US',
  }
}

/**
 * LocalBusiness + RealEstateAgent JSON-LD.
 * NAP and hours must match the Arroyo at Skyeview Google Business Profile.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${SITE_URL}#localbusiness`,
    name: SITE_CONTACT.businessName,
    alternateName: ['Dr. Jan Duffy Real Estate', 'Dr. Jan Duffy', 'Arroyo at Skyeview Homes'],
    description:
      "Luxury buyer representation for Arroyo at Skyeview in Skye Canyon, Las Vegas 89166. Dr. Jan Duffy represents home buyers—not the builder—with private tours, construction monitoring every 7–10 days, and a building standards inspection at closing.",
    url: SITE_URL,
    telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
    email: SITE_CONTACT.email,
    address: postalAddressJsonLd(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONTACT.geo.latitude,
      longitude: SITE_CONTACT.geo.longitude,
    },
    openingHoursSpecification: OFFICE_OPENING_HOURS,
    priceRange: 'No Cost to Buyer',
    image: [`${SITE_URL}${DR_JAN_PORTRAIT_SRC}`, `${SITE_URL}/og-image.png`],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${DR_JAN_PORTRAIT_SRC}`,
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
      { '@type': 'City', name: 'Summerlin', addressRegion: 'NV' },
    ],
    hasMap: SITE_CONTACT.googleMapsPlaceUrl,
    sameAs: [
      SITE_CONTACT.googleMapsPlaceUrl,
      'https://www.linkedin.com/in/dr-jan-duffy',
      'https://www.facebook.com/dr-jan-duffy',
      'https://www.instagram.com/dr-jan-duffy',
    ],
    memberOf: {
      '@type': 'Organization' as const,
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    knowsAbout: [
      'Arroyo at Skyeview',
      'Skye Canyon',
      'Northwest Las Vegas ZIP 89166',
      'Luxury buyer representation',
      'New-construction townhomes',
    ],
  }
}
