import Script from 'next/script'
import { localBusinessJsonLd, postalAddressJsonLd } from '@/lib/local-business-schema'
import { OFFICE_OPENING_HOURS, SITE_CONTACT } from '@/lib/site-contact'

interface PageSchemasProps {
  pageType: 'homepage' | 'community' | 'blog' | 'about' | 'contact' | 'process' | 'neighborhood' | 'zip' | 'faq' | 'buyer-guide' | 'property-type'
  url: string
  title: string
  description: string
  breadcrumbs?: Array<{ name: string; url: string }>
  communityName?: string
  location?: string
  zipCode?: string
  author?: string
  datePublished?: string
  dateModified?: string
  image?: string
  questions?: Array<{ question: string; answer: string }>
  priceRange?: string
  rating?: { value: string; count: string }
}

export default function PageSchemas({
  pageType,
  url,
  title,
  description,
  breadcrumbs = [],
  communityName,
  location,
  zipCode,
  author,
  datePublished,
  dateModified,
  image,
  questions = [],
  priceRange,
  rating,
}: PageSchemasProps) {
  const baseUrl = 'https://www.arroyoskyeview.com'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  // Auto-set dateModified if not provided (signals freshness to Google)
  const currentDateModified = dateModified || new Date().toISOString().split('T')[0]
  const currentDatePublished = datePublished || currentDateModified

  // WebPage Schema (for all pages)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': fullUrl,
    url: fullUrl,
    name: title,
    description: description,
    inLanguage: 'en-US',
    datePublished: currentDatePublished,
    dateModified: currentDateModified,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
      url: baseUrl,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
      },
    }),
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
      })),
    ],
  }

  // Organization Schema (Dr. Jan Duffy)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: 'Arroyo at Skyeview Homes | Homes by Dr. Jan Duffy',
    alternateName: ['Dr. Jan Duffy Real Estate', 'Dr. Jan Duffy', 'Arroyo at Skyeview Homes'],
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Dr. Jan Duffy represents HOME BUYERS, not the builder. Specializing in construction monitoring, building standards inspection, and insider knowledge of northwest Las Vegas communities.',
    url: baseUrl,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
    },
    image: `${baseUrl}/og-image.png`,
    address: postalAddressJsonLd(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2765',
      longitude: '-115.2832',
    },
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
    knowsAbout: [
      'Arroyo at Skyeview Homes',
      'New Construction Homes',
      'Buyer Representation',
      'Las Vegas Real Estate',
      'Skye Canyon',
      'Northwest Las Vegas',
      'Zip Code 89166',
      'First-Time Homebuyers',
      'Builder Incentives',
      'Construction Monitoring',
      'Building Standards Inspection',
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Real Estate Agent',
      telephone: '+1-702-903-4687',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-702-903-4687',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
        hoursAvailable: OFFICE_OPENING_HOURS[0],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@arroyoskyeview.com',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
  }

  // RealEstateAgent Schema (Dr. Jan Duffy)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}/work-with-dr-jan#realestateagent`,
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'New Construction Home Preferred Buyer\'s Agent specializing in new construction homes in Las Vegas, Nevada. Expert in construction monitoring, building standards inspection, and buyer representation.',
    url: `${baseUrl}/work-with-dr-jan`,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: postalAddressJsonLd(),
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
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
    priceRange: 'No Cost to Buyer',
  }

  const localBusinessSchema = {
    ...localBusinessJsonLd(),
    telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
    serviceType: [
      'Buyer Representation',
      'Construction Monitoring',
      'Building Standards Inspection',
      'New Construction Home Buying',
      'Arroyo at Skyeview Homes Expert',
      'Skye Canyon Real Estate',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
        hoursAvailable: OFFICE_OPENING_HOURS[0],
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

  // Update serviceType in LocalBusiness schema
  if (localBusinessSchema.serviceType) {
    localBusinessSchema.serviceType = [
      'Buyer Representation',
      'Construction Monitoring',
      'Building Standards Inspection',
      'New Construction Home Buying',
      'Arroyo at Skyeview Homes Expert',
      'Skye Canyon Real Estate',
    ]
  }

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Buyer Representation',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+1-702-903-4687',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. Dr. Jan Duffy represents HOME BUYERS, not the builder. Services include construction monitoring, building standards inspection, and insider knowledge of available inventory and pricing.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'No cost to buyer - Builders pay for buyer representation. Dr. Jan Duffy represents HOME BUYERS, not the builder.',
    },
  }

  // Person Schema (Dr. Jan Duffy)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan',
    jobTitle: 'Real Estate Agent',
    worksFor: {
      '@type': 'Organization',
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    },
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: postalAddressJsonLd(),
    knowsAbout: [
      'Arroyo at Skyeview',
      'New Construction Homes',
      'Las Vegas Real Estate',
      'Construction Monitoring',
      'Building Standards Inspection',
    ],
    url: `${baseUrl}/work-with-dr-jan`,
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
        email: 'info@arroyoskyeview.com',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
  }

  // ContactPoint Schema (for contact methods)
  const contactPointSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    contactType: 'Customer Service',
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    availableLanguage: ['English'],
    hoursAvailable: OFFICE_OPENING_HOURS[0],
  }

  // ImageObject Schema (for page images)
  const imageObjectSchema = image ? {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: image.startsWith('http') ? image : `${baseUrl}${image}`,
    contentUrl: image.startsWith('http') ? image : `${baseUrl}${image}`,
    description: description,
    name: title,
    license: `${baseUrl}/terms-of-use`,
  } : null

  // Offer Schema (for pricing and incentives)
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Buyer Representation Services',
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Las Vegas, Nevada. No cost to buyer - builders pay for buyer representation.',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${baseUrl}/work-with-dr-jan`,
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+1-702-903-4687',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    ...(priceRange && {
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: priceRange,
        priceCurrency: 'USD',
      },
    }),
  }

  // Community-specific schemas
  let communitySchemas: any[] = []
  if (pageType === 'community' && communityName && location) {
    // ResidentialComplex Schema
    const residentialComplexSchema = {
      '@context': 'https://schema.org',
      '@type': 'ResidentialComplex',
      name: communityName,
      description: `${communityName} is a residential community in ${location}, Las Vegas, Nevada, part of Arroyo at Skyeview Homes.`,
      url: fullUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '36.2765',
        longitude: '-115.2832',
      },
      containedInPlace: {
        '@type': 'Place',
        name: location,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: zipCode || '89166',
        },
      },
      ...(priceRange && { priceRange }),
      ...(rating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: Number(rating.value),
          reviewCount: Number(rating.count),
          bestRating: 5,
          worstRating: 1,
        },
      }),
      developer: {
        '@type': 'Organization',
        name: 'Arroyo at Skyeview Homes',
        url: baseUrl,
      },
    }
    communitySchemas.push(residentialComplexSchema)

    // Place Schema
    const placeSchema = {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: location,
      description: `${location} is a master-planned community in Las Vegas, Nevada.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
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
    communitySchemas.push(placeSchema)
  }

  // Blog Article Schema
  let articleSchema: any = null
  if (pageType === 'blog') {
    articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: fullUrl,
      author: {
        '@type': author ? 'Person' : 'Organization',
        name: author || 'Dr. Jan Duffy',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/og-image.png`,
        },
      },
      datePublished: datePublished || new Date().toISOString().split('T')[0],
      dateModified: dateModified || new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
      ...(image && {
        image: {
          '@type': 'ImageObject',
          url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        },
      }),
    }
  }

  // FAQPage Schema
  let faqSchema: any = null
  if (questions.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    }
  }

  // HowTo Schema (for process pages)
  let howToSchema: any = null
  if (pageType === 'process') {
    howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      description: description,
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prequalify',
          text: 'Get prequalified for your new home purchase',
        },
        {
          '@type': 'HowToStep',
          name: 'House Hunt',
          text: 'Explore available homes and floor plans',
        },
        {
          '@type': 'HowToStep',
          name: 'Contract',
          text: 'Sign contract and begin construction',
        },
        {
          '@type': 'HowToStep',
          name: 'Close',
          text: 'Complete closing and move into your new home',
        },
      ],
    }
  }

  // WebSite Schema (for homepage only - required for site name and Google Search)
  let websiteSchema: any = null
  if (pageType === 'homepage') {
    websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
      alternateName: ['Arroyo at Skyeview', 'Dr. Jan Duffy Real Estate', 'arroyoskyeview.com'],
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
        url: baseUrl,
      },
    }
  }

  // ItemList Schema (for listings pages)
  let itemListSchema: any = null
  if (pageType === 'property-type' || pageType === 'neighborhood' || pageType === 'zip') {
    itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: title,
      description: description,
      url: fullUrl,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Arroyo at Skyeview Homes',
            description: 'New construction townhomes in Skye Canyon, northwest Las Vegas, Nevada',
            url: baseUrl,
            offers: {
              '@type': 'Offer',
              price: '392640',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          },
        },
      ],
    }
  }

  // Product Schema (for homes/floor plans on relevant pages)
  let productSchema: any = null
  if (pageType === 'community' && communityName && priceRange) {
    productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: communityName,
      description: `${communityName} - ${description}`,
      url: fullUrl,
      brand: {
        '@type': 'Brand',
        name: 'Arroyo at Skyeview Homes',
      },
      category: 'Real Estate',
      offers: {
        '@type': 'Offer',
        price: priceRange,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: fullUrl,
        seller: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+1-702-903-4687',
        },
      },
      ...(rating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: Number(rating.value),
          reviewCount: Number(rating.count),
          bestRating: 5,
          worstRating: 1,
        },
      }),
    }
  }

  // Collect all schemas
  // For legal/informational pages (about type), use minimal schemas to avoid validation errors
  // These pages don't need LocalBusiness, RealEstateAgent, Service, Offer schemas
  // Buyer-guide pages also don't need the full business schema suite
  const isInformationalPage = pageType === 'about' || pageType === 'contact' || pageType === 'buyer-guide'
  
  const allSchemas = [
    webPageSchema,
    breadcrumbSchema,
    // Always include Organization schema (needed for publisher info)
    organizationSchema,
    // Only include business-specific schemas for non-informational pages
    ...(isInformationalPage ? [] : [
      realEstateAgentSchema,
      localBusinessSchema,
      serviceSchema,
      personSchema,
      contactPointSchema,
      offerSchema,
    ]),
    ...communitySchemas,
    ...(articleSchema ? [articleSchema] : []),
    ...(faqSchema ? [faqSchema] : []),
    ...(howToSchema ? [howToSchema] : []),
    ...(websiteSchema ? [websiteSchema] : []),
    ...(imageObjectSchema ? [imageObjectSchema] : []),
    ...(itemListSchema ? [itemListSchema] : []),
    ...(productSchema ? [productSchema] : []),
  ]

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={`schema-${pageType}-${index}`}
          id={`schema-${pageType}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

