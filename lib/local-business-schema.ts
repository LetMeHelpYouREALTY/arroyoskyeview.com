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
      'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Las Vegas, Nevada. Specializing in construction monitoring, building standards inspection, and insider knowledge of Las Vegas communities.',
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
    image: `${SITE_URL}/og-image.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.png`,
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
      { '@type': 'City', name: 'Summerlin', addressRegion: 'NV' },
    ],
    hasMap: 'https://maps.app.goo.gl/E4ySRChkkQjnYjeN7',
  }
}
