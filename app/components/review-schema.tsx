import { ARROYO_JSON_LD_AREA_SERVED } from '@/lib/json-ld-area-served'

export default function ReviewSchema() {
  const baseUrl = 'https://www.arroyoskyeview.com'
  const businessId = `${baseUrl}#reviews`

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': businessId,
    name: 'Dr. Jan Duffy - Buyer\'s Agent for Arroyo at Skyeview Homes',
    alternateName: ['Dr. Jan Duffy Real Estate', 'Arroyo at Skyeview Homes'],
    image: `${baseUrl}/images/dr-jan-duffy.png`,
    url: baseUrl,
    description:
      'Expert buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy provides construction monitoring, building standards inspection, and insider knowledge of new construction homes. Represents HOME BUYERS, not the builder.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Creek St',
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
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    priceRange: 'No Cost to Buyer',
    areaServed: [...ARROYO_JSON_LD_AREA_SERVED],
    serviceType: [
      'Buyer Representation',
      'Construction Monitoring',
      'Building Standards Inspection',
      'New Construction Home Buying',
      'Arroyo at Skyeview Homes Expert',
      'Skye Canyon Real Estate',
    ],
  }

  const json = JSON.stringify(reviewSchema).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
