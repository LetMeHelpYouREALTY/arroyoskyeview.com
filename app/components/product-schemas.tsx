import Script from 'next/script'
import { siteImage } from '@/lib/cloudflare-images'

function productImageUrl(image: string, baseUrl: string): string {
  const resolved = siteImage(image)
  return resolved.startsWith('http') ? resolved : `${baseUrl}${resolved}`
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
  const baseUrl = 'https://www.arroyoskyeview.com'

  // Generate Product schemas for floor plans
  const floorPlanSchemas = floorPlans.map((plan) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${plan.name} Floor Plan - Arroyo at Skyeview Homes`,
    description: `The ${plan.name} floor plan at Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). ${plan.description}. ${plan.sqft} square feet, ${plan.bedrooms} bedrooms, ${plan.bathrooms} bathrooms, ${plan.parking}-bay garage.`,
    brand: {
      '@type': 'Brand',
      name: 'Arroyo at Skyeview Homes',
    },
    category: 'Real Estate',
    productID: `floor-plan-${plan.name.toLowerCase()}`,
    sku: `FP-${plan.name.toUpperCase()}`,
    offers: {
      '@type': 'Offer',
      price: plan.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: baseUrl,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+1-702-903-4687',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: plan.sqft.toString(),
        unitCode: 'SQM',
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

  // Generate Product schemas for available homes
  const homeSchemas = homes.map((home) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${home.floorPlan} - ${home.address}`,
    description: `Available new construction home at ${home.address} in Arroyo at Skyeview Homes, Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). ${home.floorPlan} floor plan with ${home.sqft} square feet, ${home.bedrooms} bedrooms, ${home.bathrooms} bathrooms, ${home.parking}-bay garage. ${home.features.join(', ')}. ${home.completion}.`,
    brand: {
      '@type': 'Brand',
      name: 'Arroyo at Skyeview Homes',
    },
    category: 'Real Estate',
    productID: `home-${home.lot.toLowerCase()}`,
    sku: home.lot,
    offers: {
      '@type': 'Offer',
      price: home.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: baseUrl,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+1-702-903-4687',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Address',
        value: home.address,
      },
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
        name: 'Square Feet',
        value: home.sqft.toString(),
        unitCode: 'SQM',
      },
      {
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: home.bedrooms.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: home.bathrooms.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Parking Spaces',
        value: home.parking.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Completion Date',
        value: home.completion,
      },
      {
        '@type': 'PropertyValue',
        name: 'Features',
        value: home.features.join(', '),
      },
      {
        '@type': 'PropertyValue',
        name: 'Location',
        value: 'Skye Canyon, Las Vegas, NV 89166',
      },
    ],
    ...(home.image && {
      image: productImageUrl(home.image, baseUrl),
    }),
  }))

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

