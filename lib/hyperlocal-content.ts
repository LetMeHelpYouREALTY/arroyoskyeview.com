/** Hyperlocal Skye Canyon / Northwest Las Vegas facts for luxury copy and AEO. */
export const SKYE_CANYON = {
  name: 'Skye Canyon',
  zip: '89166',
  acres: '1,700',
  region: 'Northwest Las Vegas',
  address: '8912 Vanhoy Creek St., Las Vegas, NV 89166',
  proximity: {
    redRock: '15 minutes to Red Rock Canyon National Conservation Area',
    mountCharleston: '30 minutes to Mount Charleston',
    strip: '20–25 minutes to the Las Vegas Strip',
    us95: 'Direct access via US-95 at Skye Canyon Park Drive',
    beltway215: 'Connected via the 215 Beltway',
  },
} as const

export const ARROYO_AT_SKYEVIEW = {
  name: 'Arroyo at Skyeview',
  builder: 'Century Communities',
  beds: '2–4',
  baths: '2.5',
  sqft: '1,531–1,729',
  garages: '2-bay',
  priceFrom: '$392,640',
  features: [
    'Quartz countertops & open-concept layouts',
    'Two-story townhomes with courtyard entries',
    'Resort-style pool, fitness center & community parks',
  ],
} as const

export const SKYE_AMENITIES = [
  {
    title: 'Skye Fitness',
    description:
      '10,000 sq. ft. fitness center with junior Olympic pool, sports courts, and jogging paths.',
    icon: 'fitness' as const,
  },
  {
    title: 'Red Rock Views',
    description:
      'Northwest Las Vegas living with Red Rock Canyon and Mount Charleston as your backdrop.',
    icon: 'mountain' as const,
  },
  {
    title: 'Skye Canyon Park',
    description:
      '15-acre park hub with trails, splash pads, sports fields, and year-round community events.',
    icon: 'park' as const,
  },
  {
    title: 'Aspire Coffee House',
    description:
      'Skye Center social hub with gathering spaces, dining, and a connected active lifestyle.',
    icon: 'coffee' as const,
  },
] as const

export const LUXURY_AGENT_TAGLINE =
  'Dr. Jan Duffy · Luxury Buyer\'s Agent · Skye Canyon Specialist'
