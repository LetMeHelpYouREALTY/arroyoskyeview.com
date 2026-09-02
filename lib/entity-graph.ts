import { DR_JAN_PORTRAIT_SRC } from '@/lib/brand-images'
import { postalAddressJsonLd } from '@/lib/local-business-schema'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

/** Stable @id values so GEO/AEO crawlers can join Person, Place, and Service. */
export const ENTITY_IDS = {
  website: `${SITE_URL}#website`,
  organization: `${SITE_URL}#organization`,
  localBusiness: `${SITE_URL}#localbusiness`,
  person: `${SITE_URL}/work-with-dr-jan#person`,
  agent: `${SITE_URL}/work-with-dr-jan#realestateagent`,
  service: `${SITE_URL}#luxury-buyer-representation`,
  skyeCanyon: `${SITE_URL}#skye-canyon`,
  arroyo: `${SITE_URL}#arroyo-at-skyeview`,
  howTo: `${SITE_URL}#how-to-buy-with-dr-jan`,
} as const

export const AGENT_SAME_AS = [
  SITE_CONTACT.googleMapsPlaceUrl,
  'https://www.linkedin.com/in/dr-jan-duffy',
  'https://www.facebook.com/dr-jan-duffy',
  'https://www.instagram.com/dr-jan-duffy',
] as const

export const AEO_SPEAKABLE_SELECTORS = [
  '#aeo-who',
  '#aeo-where',
  '#aeo-service',
  '#aeo-how',
] as const

export function personEntityJsonLd() {
  return {
    '@type': 'Person' as const,
    '@id': ENTITY_IDS.person,
    name: SITE_CONTACT.agentName,
    alternateName: ['Dr. Jan', 'Dr. Duffy'],
    jobTitle: "Luxury buyer's agent",
    description:
      "Dr. Jan Duffy is the luxury buyer's agent for Arroyo at Skyeview in Skye Canyon, Las Vegas 89166. She represents home buyers—not the builder—with private tours, construction monitoring every 7–10 days, and a building standards inspection at closing. Nevada license S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties.",
    url: `${SITE_URL}/work-with-dr-jan`,
    image: `${SITE_URL}${DR_JAN_PORTRAIT_SRC}`,
    telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
    email: SITE_CONTACT.email,
    address: postalAddressJsonLd(),
    worksFor: { '@id': ENTITY_IDS.organization },
    affiliation: {
      '@type': 'Organization' as const,
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential' as const,
      credentialCategory: 'license',
      identifier: 'S.0197614.LLC',
      name: SITE_CONTACT.licenseDisplay,
    },
    knowsAbout: [
      'Arroyo at Skyeview',
      'Skye Canyon',
      'Northwest Las Vegas ZIP 89166',
      'Luxury new-construction townhomes',
      'Buyer representation',
      'Construction monitoring',
      'Building standards inspection',
      'Red Rock Canyon commute from Skye Canyon',
    ],
    sameAs: [...AGENT_SAME_AS],
  }
}

export function organizationEntityJsonLd() {
  return {
    '@type': 'Organization' as const,
    '@id': ENTITY_IDS.organization,
    name: SITE_CONTACT.businessName,
    alternateName: ['Dr. Jan Duffy Real Estate', 'Arroyo at Skyeview Homes'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject' as const,
      url: `${SITE_URL}${DR_JAN_PORTRAIT_SRC}`,
    },
    image: [`${SITE_URL}${DR_JAN_PORTRAIT_SRC}`, `${SITE_URL}/og-image.png`],
    founder: { '@id': ENTITY_IDS.person },
    employee: { '@id': ENTITY_IDS.person },
    sameAs: [...AGENT_SAME_AS],
  }
}

export function skyeCanyonPlaceJsonLd() {
  return {
    '@type': 'Place' as const,
    '@id': ENTITY_IDS.skyeCanyon,
    name: 'Skye Canyon',
    description:
      'Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas, Nevada, ZIP 89166, near US-95 and the 215 Beltway. It is about 15 minutes from Red Rock Canyon National Conservation Area and 20–25 minutes from the Las Vegas Strip.',
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: SITE_CONTACT.geo.latitude,
      longitude: SITE_CONTACT.geo.longitude,
    },
    containedInPlace: {
      '@type': 'City' as const,
      name: 'Las Vegas',
      addressRegion: 'NV',
    },
  }
}

export function arroyoComplexJsonLd() {
  return {
    '@type': 'ResidentialComplex' as const,
    '@id': ENTITY_IDS.arroyo,
    name: 'Arroyo at Skyeview',
    alternateName: ['Arroyo at Skyeview Homes', 'Skyeview Arroyo'],
    description:
      'Arroyo at Skyeview is a new-construction townhome community in Skye Canyon, northwest Las Vegas (89166). Plans run 1,531–1,729 square feet with 2–4 bedrooms, 2.5 baths, and 2-bay garages. Dr. Jan Duffy represents buyers here—not the builder.',
    url: SITE_URL,
    address: postalAddressJsonLd(),
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: SITE_CONTACT.geo.latitude,
      longitude: SITE_CONTACT.geo.longitude,
    },
    containedInPlace: { '@id': ENTITY_IDS.skyeCanyon },
    numberOfBedrooms: {
      '@type': 'QuantitativeValue' as const,
      minValue: 2,
      maxValue: 4,
    },
    floorSize: {
      '@type': 'QuantitativeValue' as const,
      minValue: 1531,
      maxValue: 1729,
      unitCode: 'FTK',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification' as const, name: 'Resort-style pool', value: true },
      { '@type': 'LocationFeatureSpecification' as const, name: 'Fitness center', value: true },
      { '@type': 'LocationFeatureSpecification' as const, name: 'Parks and trails', value: true },
    ],
  }
}

export function luxuryBuyerServiceJsonLd() {
  return {
    '@type': 'Service' as const,
    '@id': ENTITY_IDS.service,
    name: 'Luxury buyer representation at Arroyo at Skyeview',
    serviceType: [
      'Luxury buyer representation',
      'New-construction advocacy',
      'Private community tours',
      'Construction monitoring',
      'Building standards inspection',
    ],
    provider: { '@id': ENTITY_IDS.person },
    broker: { '@id': ENTITY_IDS.localBusiness },
    areaServed: [
      { '@id': ENTITY_IDS.skyeCanyon },
      { '@id': ENTITY_IDS.arroyo },
      {
        '@type': 'City' as const,
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    description:
      'White-glove buyer representation for Arroyo at Skyeview in Skye Canyon, Las Vegas 89166. Dr. Jan Duffy registers before the model visit, walks Beverly, Captiva, and Delray plans, monitors construction every 7–10 days, and inspects to building standards at closing. Builders pay the commission—no extra fee to the buyer.',
    offers: {
      '@type': 'Offer' as const,
      price: '0',
      priceCurrency: 'USD',
      description: 'No extra cost to the buyer. Builder-paid buyer representation.',
    },
  }
}

export function howToBuyWithDrJanJsonLd() {
  return {
    '@type': 'HowTo' as const,
    '@id': ENTITY_IDS.howTo,
    name: 'How to buy Arroyo at Skyeview with Dr. Jan Duffy',
    description:
      'Five steps to a luxury new-construction purchase at Arroyo at Skyeview in Skye Canyon, Las Vegas 89166, with buyer advocacy instead of the builder sales office.',
    step: [
      {
        '@type': 'HowToStep' as const,
        position: 1,
        name: 'Book a private consult',
        text: 'Call (702) 903-4687 or schedule a 30-minute consult with Dr. Jan Duffy before you enter the model.',
      },
      {
        '@type': 'HowToStep' as const,
        position: 2,
        name: 'Register your agent first',
        text: 'Have Dr. Jan Duffy registered with the builder so buyer representation stays on your contract.',
      },
      {
        '@type': 'HowToStep' as const,
        position: 3,
        name: 'Tour Arroyo at Skyeview',
        text: 'Walk 1,531–1,729 sq ft townhome plans in Skye Canyon ZIP 89166 at 8912 Vanhoy Creek St.',
      },
      {
        '@type': 'HowToStep' as const,
        position: 4,
        name: 'Monitor the build',
        text: 'Dr. Jan Duffy checks construction every 7–10 days through your build.',
      },
      {
        '@type': 'HowToStep' as const,
        position: 5,
        name: 'Close with inspection advocacy',
        text: 'A building standards inspection at closing protects your interests before you take the keys.',
      },
    ],
  }
}

/**
 * One connected @graph for layout-level GEO. PageSchemas still emit
 * page-specific FAQPage / WebPage nodes that point at these @ids.
 */
export function siteEntityGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite' as const,
        '@id': ENTITY_IDS.website,
        name: SITE_CONTACT.businessName,
        url: SITE_URL,
        publisher: { '@id': ENTITY_IDS.organization },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction' as const,
          target: {
            '@type': 'EntryPoint' as const,
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      organizationEntityJsonLd(),
      personEntityJsonLd(),
      {
        '@type': 'RealEstateAgent' as const,
        '@id': ENTITY_IDS.agent,
        name: SITE_CONTACT.agentName,
        url: `${SITE_URL}/work-with-dr-jan`,
        image: `${SITE_URL}${DR_JAN_PORTRAIT_SRC}`,
        telephone: `+1-${SITE_CONTACT.phoneAnalytics}`,
        email: SITE_CONTACT.email,
        address: postalAddressJsonLd(),
        parentOrganization: { '@id': ENTITY_IDS.organization },
        employee: { '@id': ENTITY_IDS.person },
        areaServed: { '@id': ENTITY_IDS.skyeCanyon },
        knowsAbout: personEntityJsonLd().knowsAbout,
        sameAs: [...AGENT_SAME_AS],
      },
      skyeCanyonPlaceJsonLd(),
      arroyoComplexJsonLd(),
      luxuryBuyerServiceJsonLd(),
    ],
  }
}
