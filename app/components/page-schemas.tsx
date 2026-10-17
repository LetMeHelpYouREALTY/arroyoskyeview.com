import JsonLdScript from './json-ld-script'
import { ARROYO_PRICE_LOW } from '@/lib/arroyo-inventory'
import { ARROYO_JSON_LD_AREA_SERVED } from '@/lib/json-ld-area-served'
import { JSON_LD_ORGANIZATION_ID, JSON_LD_WEBSITE_ID } from '@/lib/json-ld-entities'

const COMMUNITY_PRODUCT_IMAGE = '/images/hero/luxury-hero-skye-canyon.webp'

/**
 * Offer.price must be a number greater than zero.
 * A display range such as "$392,640 - $424,590" is not a price.
 * Returns the low end of "low - high", or a single amount. Returns null for
 * ceilings ("Under $300,000") and open ends ("$500,000+").
 */
function startingOfferPrice(value: string): number | null {
  const normalized = value.replace(/,/g, '').trim()
  const range = normalized.match(/^\$?(\d+(?:\.\d+)?)\s*-\s*\$?(\d+(?:\.\d+)?)$/)
  if (range) {
    const low = Number(range[1])
    const high = Number(range[2])
    if (Number.isFinite(low) && low > 0 && Number.isFinite(high) && high >= low) {
      return low
    }
    return null
  }
  const single = normalized.match(/^\$?(\d+(?:\.\d+)?)$/)
  if (!single) return null
  const amount = Number(single[1])
  return Number.isFinite(amount) && amount > 0 ? amount : null
}

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
}: PageSchemasProps) {
  const baseUrl = 'https://www.arroyoskyeview.com'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  const speakablePageTypes = new Set(['homepage', 'faq', 'buyer-guide', 'zip'])
  const includeSpeakable =
    speakablePageTypes.has(pageType) &&
    (pageType === 'homepage' || questions.length > 0)

  // WebPage Schema (for all pages)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': fullUrl,
    url: fullUrl,
    name: title,
    description: description,
    inLanguage: 'en-US',
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
      url: baseUrl,
    },
    publisher: {
      '@id': JSON_LD_ORGANIZATION_ID,
    },
    about: {
      '@id': JSON_LD_ORGANIZATION_ID,
    },
    contentLocation: {
      '@type': 'Place',
      name: location || 'Skye Canyon',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
        addressCountry: 'US',
      },
    },
    ...(includeSpeakable
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '[data-answer]'],
          },
        }
      : {}),
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

  // RealEstateAgent Schema (Dr. Jan Duffy)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}/work-with-dr-jan#realestateagent`,
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'New Construction Home Preferred Buyer\'s Agent specializing in new construction homes in Las Vegas, Nevada. Expert in construction monitoring, building standards inspection, and buyer representation.',
    image: `${baseUrl}/images/dr-jan-duffy.png`,
    url: `${baseUrl}/work-with-dr-jan`,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Crk St',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89161',
      addressCountry: 'US',
    },
    areaServed: [...ARROYO_JSON_LD_AREA_SERVED],
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

  // LocalBusiness Schema (Enhanced for Google My Business)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Las Vegas, Nevada. Specializing in construction monitoring, building standards inspection, and insider knowledge of Las Vegas communities.',
    url: baseUrl,
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
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
    priceRange: 'No Cost to Buyer',
    image: `${baseUrl}/images/dr-jan-duffy.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/dr-jan-duffy.png`,
    },
    areaServed: [...ARROYO_JSON_LD_AREA_SERVED],
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
        telephone: '+1-702-903-4687',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
        hoursAvailable: {
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
      price: 0,
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8912 Vanhoy Crk St',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89161',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Arroyo at Skyeview',
      'New Construction Homes',
      'Las Vegas Real Estate',
      'Construction Monitoring',
      'Building Standards Inspection',
    ],
    image: `${baseUrl}/images/dr-jan-duffy.png`,
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
    hoursAvailable: {
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
    price: 0,
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
  }

  const isArroyoCommunityPage =
    fullUrl.includes('/arroyo-at-skyeview/') ||
    communityName?.toLowerCase().includes('arroyo') === true

  // Community-specific schemas
  let communitySchemas: any[] = []
  if (pageType === 'community' && communityName && location) {
    const communityPlaceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: communityName,
      description: `${communityName} is a residential community in ${location}, Las Vegas, Nevada (zip ${zipCode || '89166'}).`,
      url: fullUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: zipCode || '89166',
        addressCountry: 'US',
      },
      containedInPlace: {
        '@type': 'Place',
        name: location,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: zipCode || '89166',
          addressCountry: 'US',
        },
      },
    }

    if (isArroyoCommunityPage) {
      const residentialComplexSchema = {
        ...communityPlaceSchema,
        '@type': 'ResidentialComplex',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '36.2765',
          longitude: '-115.2832',
        },
        ...(priceRange && { priceRange }),
        developer: {
          '@type': 'Organization',
          name: 'Arroyo at Skyeview Homes',
          url: baseUrl,
        },
      }
      communitySchemas.push(residentialComplexSchema)

      const skyeCanyonPlaceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: location,
        description: `${location} is a master-planned community in northwest Las Vegas, Nevada.`,
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
      communitySchemas.push(skyeCanyonPlaceSchema)
    } else {
      communitySchemas.push(communityPlaceSchema)
    }
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
          url: `${baseUrl}/images/dr-jan-duffy.png`,
        },
      },
      ...(datePublished ? { datePublished } : {}),
      ...(dateModified ? { dateModified } : {}),
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
      '@id': JSON_LD_WEBSITE_ID,
      name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
      alternateName: ['Arroyo at Skyeview', 'Dr. Jan Duffy Real Estate', 'arroyoskyeview.com'],
      url: baseUrl,
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
            image: `${baseUrl}${COMMUNITY_PRODUCT_IMAGE}`,
            url: baseUrl,
            brand: {
              '@type': 'Brand',
              name: 'Arroyo at Skyeview Homes',
            },
            offers: {
              '@type': 'Offer',
              price: ARROYO_PRICE_LOW,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: baseUrl,
            },
          },
        },
      ],
    }
  }

  // Product Schema (for homes/floor plans on relevant pages)
  // Merchant listings require Offer.price as a number and a product image.
  // A formatted range is invalid. Use the low end, which matches "from $392,640" on the page.
  let productSchema: any = null
  const offerPrice = priceRange ? startingOfferPrice(priceRange) : null
  if (pageType === 'community' && communityName && offerPrice && isArroyoCommunityPage) {
    productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: communityName,
      description: `${communityName} - ${description}`,
      image: `${baseUrl}${COMMUNITY_PRODUCT_IMAGE}`,
      url: fullUrl,
      brand: {
        '@type': 'Brand',
        name: 'Arroyo at Skyeview Homes',
      },
      category: 'Real Estate',
      offers: {
        '@type': 'Offer',
        price: offerPrice,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: fullUrl,
        seller: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+1-702-903-4687',
        },
      },
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
    // Organization + agent are in SitewideStructuredData (layout); WebPage references #organization.
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
        <JsonLdScript
          key={`schema-${pageType}-${index}`}
          id={`schema-${pageType}-${index}`}
          data={schema}
        />
      ))}
    </>
  )
}

