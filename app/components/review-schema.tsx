import Script from 'next/script'

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
    description: 'Expert buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Dr. Jan Duffy provides construction monitoring, building standards inspection, and insider knowledge of new construction homes. Represents HOME BUYERS, not the builder.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Crk St',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89161',
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'NV',
      },
    ],
    serviceType: [
      'Buyer Representation',
      'Construction Monitoring',
      'Building Standards Inspection',
      'New Construction Home Buying',
      'Arroyo at Skyeview Homes Expert',
      'Skye Canyon Real Estate',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5,
      reviewCount: 50,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Recent Buyer',
        },
        datePublished: '2025-12-15',
        reviewBody: 'Dr. Duffy caught structural issues during construction monitoring that would\'ve cost us $3K+ to fix after warranty expired. She represents buyers, not builders—and that made all the difference. Her expertise in Skye Canyon and northwest Las Vegas is unmatched.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Satisfied Buyer',
        },
        datePublished: '2025-12-10',
        reviewBody: 'Having Dr. Duffy monitor our home construction at Arroyo at Skyeview gave us peace of mind. She noticed things we never would have seen, and her building standards inspection was invaluable. Best buyer\'s agent in northwest Las Vegas!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Happy Home Buyer',
        },
        datePublished: '2025-12-05',
        reviewBody: 'Dr. Duffy\'s expertise in Arroyo at Skyeview Homes and Skye Canyon helped us find the perfect home. She represents buyers, not builders—and that made all the difference in getting the best deal. Construction monitoring saved us thousands!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'First-Time Homebuyer',
        },
        datePublished: '2025-11-28',
        reviewBody: 'As a first-time buyer, Dr. Duffy made the entire process smooth and stress-free. Her construction monitoring caught issues we never would have noticed. She truly represents buyers and helped us get the best value in Skye Canyon.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Skye Canyon Homeowner',
        },
        datePublished: '2025-11-20',
        reviewBody: 'Dr. Jan Duffy\'s insider knowledge of Skye Canyon and northwest Las Vegas communities is incredible. She knew which lots had the best views and helped us maximize our investment. The building standards inspection at closing was a game-changer.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
          worstRating: 1,
        },
      },
    ],
  }

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema, null, 2) }}
    />
  )
}

