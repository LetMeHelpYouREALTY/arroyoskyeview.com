export default function StructuredData() {
  // Residential Complex Schema (Wikipedia/Knowledge Base friendly)
  const residentialComplex = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    name: 'Arroyo at Skyeview Homes',
    alternateName: ['Arroyo at Skyeview Homes', 'Arroyo at Skyeview at Skye Canyon', 'Skyeview Arroyo'],
    description: 'Arroyo at Skyeview Homes is a residential community of new construction townhomes located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). The development offers two-story townhomes with 2 to 4 bedrooms, 2.5 baths, and 2-bay garages, featuring quartz countertops and open layouts, starting from $392,640.',
    url: 'https://www.arroyoskyeview.com',
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
    numberOfRooms: {
      '@type': 'QuantitativeValue',
      minValue: 3,
      maxValue: 5,
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      minValue: 1531,
      maxValue: 1729,
      unitCode: 'SQM',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Resort-style pool',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fitness center',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parks',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Trails',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sports courts',
        value: true,
      },
    ],
    priceRange: '$392,640 - $424,590',
    dateBuilt: '2024',
    developer: {
      '@type': 'Organization',
      name: 'Arroyo at Skyeview Homes',
      url: 'http://drjanduffy.realscout.com/',
    },
  }

  // Place Schema for geographic information
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Skye Canyon',
    description: 'Skye Canyon is a master-planned community in northwest Las Vegas, Nevada, covering 1,700 acres. It features residential developments, recreational facilities, parks, trails, and neighborhood schools.',
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

  // Real Estate Agent Schema (for sales office)
  const realEstateAgent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    alternateName: 'Arroyo at Skyeview Map',
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Las Vegas, Nevada. Dr. Jan Duffy provides construction monitoring, building standards inspection, and insider knowledge of new construction homes.',
    url: 'https://www.arroyoskyeview.com',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '12:00',
        closes: '17:00',
      },
    ],
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Find Your Home',
        item: 'https://www.arroyoskyeview.com/arroyo-at-skyeview/available-homes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nevada',
        item: 'https://www.arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Las Vegas Metro',
        item: 'https://www.arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Las Vegas',
        item: 'https://www.arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Skye Canyon',
        item: 'https://www.arroyoskyeview.com',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Skyeview - Arroyo',
        item: 'https://www.arroyoskyeview.com',
      },
    ],
  }

  // FAQ Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Arroyo at Skyeview Homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arroyo at Skyeview Homes is a residential community of new construction townhomes located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). The development offers two-story townhomes with 2 to 4 bedrooms, 2.5 baths, and 2-bay garages, starting from $392,640. Dr. Jan Duffy provides expert buyer representation for Arroyo at Skyeview Homes—she represents HOME BUYERS, not the builder.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the prices for Arroyo at Skyeview Homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arroyo at Skyeview Homes start from $392,640, with prices ranging up to $424,590 depending on the floor plan and lot location. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current pricing and incentives.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are available at Skye Canyon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skye Canyon features a recreation center, fitness center, parks, trails, splash pads, sports courts and fields, and neighborhood schools across its 1,700 acres.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the floor plans available at Arroyo at Skyeview Homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arroyo at Skyeview Homes offers three floor plans: Beverly (1,531 sq ft, 3 bedrooms), Captiva (1,643 sq ft, 3 bedrooms), and Delray (1,729 sq ft, 3-4 bedrooms). All plans include 2.5 baths and 2-bay garages. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 to learn more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the sales office hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The sales office is open Monday through Thursday and Saturday through Sunday from 10:00 AM to 5:00 PM, and Friday from 12:00 PM to 5:00 PM.',
        },
      },
    ],
  }

  // Article Schema for Wikipedia-style content
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Arroyo at Skyeview at Skye Canyon',
    description: 'Arroyo at Skyeview Homes is a residential townhome community in Skye Canyon, Las Vegas, Nevada, part of Arroyo at Skyeview Homes.',
    author: {
      '@type': 'Organization',
      name: 'Arroyo at Skyeview Homes',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arroyo at Skyeview Homes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.arroyoskyeview.com/og-image.png',
      },
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.arroyoskyeview.com',
    },
  }

  // Organization Schema for Grokipedia compatibility
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    description: 'Expert buyer representation for Arroyo at Skyeview Homes and new construction homes in Las Vegas, Nevada. Specializing in construction monitoring, building standards inspection, and insider knowledge of Las Vegas communities.',
    url: 'https://www.arroyoskyeview.com',
    telephone: '+1-702-903-4687',
    email: 'info@arroyoskyeview.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.arroyoskyeview.com/og-image.png',
    },
    image: 'https://www.arroyoskyeview.com/og-image.png',
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
      'New Construction Homes',
      'Arroyo at Skyeview Homes',
      'Las Vegas Real Estate',
      'Skye Canyon',
      'Summerlin',
      'Henderson',
      'First-Time Homebuyers',
      'Builder Incentives',
      'Construction Monitoring',
      'Building Standards Inspection',
      'Buyer Representation',
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
          opens: '09:00',
          closes: '18:00',
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
    sameAs: [
      'https://www.arroyoskyeview.com',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialComplex) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

