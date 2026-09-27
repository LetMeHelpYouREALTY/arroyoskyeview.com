import type { AmenityCategoryId } from './amenity-map-config'

export type CuratedPlace = {
  name: string
  address: string
  /** schema.org @type for ItemList entries */
  schemaType:
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'School'
    | 'ExerciseGym'
    | 'Place'
  note?: string
}

export type AmenityContentSection = {
  id: AmenityCategoryId | 'commute'
  heading: string
  intro: string
  places: CuratedPlace[]
}

/** Verified or site-documented places only — used for SSR copy, fallback list, and JSON-LD ItemList. */
export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: 'grocery',
    heading: 'Grocery & everyday shopping',
    intro:
      'Skye Canyon Marketplace sits inside the master plan, so Smith’s and other daily errands are minutes from Arroyo at Skyeview without crossing town.',
    places: [
      {
        name: "Smith's Food and Drug",
        address: 'Skye Canyon Marketplace, Las Vegas, NV 89166',
        schemaType: 'GroceryStore',
      },
      {
        name: 'Skye Canyon Marketplace',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'ShoppingCenter',
      },
      {
        name: "Lowe's Home Improvement",
        address: 'Northwest Las Vegas, NV',
        schemaType: 'ShoppingCenter',
        note: 'Home improvement and project supplies for new homeowners.',
      },
    ],
  },
  {
    id: 'restaurants',
    heading: 'Dining near Skye Canyon',
    intro:
      'Casual dining clusters at Skye Canyon Marketplace; Summerlin and the Strip add more options within a short drive.',
    places: [
      {
        name: 'Restaurants at Skye Canyon Marketplace',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'Restaurant',
      },
      {
        name: 'Baby Stacks Cafe',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'Restaurant',
      },
      {
        name: 'Cafe Rio',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'Restaurant',
      },
    ],
  },
  {
    id: 'cafes',
    heading: 'Cafes & coffee',
    intro:
      'Morning routines and meet-ups often start at marketplace coffee spots or the Skye Center social hub.',
    places: [
      {
        name: 'Starbucks',
        address: 'Skye Canyon Marketplace, Las Vegas, NV 89166',
        schemaType: 'CafeOrCoffeeShop',
      },
      {
        name: 'Aspire Coffee House',
        address: 'Skye Center, Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'CafeOrCoffeeShop',
        note: 'Gathering space at the Skye Canyon recreation hub.',
      },
    ],
  },
  {
    id: 'parks',
    heading: 'Parks & recreation',
    intro:
      'Skye Canyon’s 1,700-acre plan centers on trails, sports courts, and the 15-acre Skye Canyon Park hub.',
    places: [
      {
        name: 'Skye Canyon Park',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'Park',
      },
      {
        name: 'Skye Fitness & recreation center',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'ExerciseGym',
        note: 'Community fitness center with pool and courts (Skye Canyon master plan).',
      },
    ],
  },
  {
    id: 'golf',
    heading: 'Golf',
    intro:
      'Northwest Las Vegas and Summerlin put multiple public and resort courses within an easy drive of zip 89166.',
    places: [
      {
        name: 'Angel Park Golf Club',
        address: '1001 S Rampart Blvd, Las Vegas, NV 89145',
        schemaType: 'GolfCourse',
        note: 'Public courses in west Las Vegas; drive time varies with traffic (approximate).',
      },
    ],
  },
  {
    id: 'healthcare',
    heading: 'Healthcare & hospitals',
    intro:
      'Major hospital campuses serve northwest Las Vegas; urgent care and medical offices are throughout the 215/US-95 corridor.',
    places: [
      {
        name: 'Centennial Hills Hospital Medical Center',
        address: '6900 N Durango Dr, Las Vegas, NV 89149',
        schemaType: 'Hospital',
      },
      {
        name: 'MountainView Hospital',
        address: '3100 N Tenaya Way, Las Vegas, NV 89128',
        schemaType: 'Hospital',
      },
    ],
  },
  {
    id: 'pharmacies',
    heading: 'Pharmacies',
    intro: 'Retail pharmacies are available at Skye Canyon Marketplace and along Durango and Centennial corridors.',
    places: [
      {
        name: "Smith's Food and Drug pharmacy",
        address: 'Skye Canyon Marketplace, Las Vegas, NV 89166',
        schemaType: 'Pharmacy',
      },
    ],
  },
  {
    id: 'shopping',
    heading: 'Regional shopping',
    intro:
      'Beyond the marketplace, Durango Square and Downtown Summerlin expand dining and retail within roughly 10–20 minutes.',
    places: [
      {
        name: 'Durango Square',
        address: 'Northwest Las Vegas, NV',
        schemaType: 'ShoppingCenter',
        note: 'Approximately 10 minutes south of Skye Canyon (approximate drive time).',
      },
      {
        name: 'Downtown Summerlin',
        address: 'Summerlin, Las Vegas, NV',
        schemaType: 'ShoppingCenter',
        note: 'Approximately 15–20 minutes southeast (approximate drive time).',
      },
    ],
  },
  {
    id: 'schools',
    heading: 'Schools serving zip 89166',
    intro:
      'Clark County School District schools for Skye Canyon include Roger Bryan Elementary on campus and feeder middle and high schools in northwest Las Vegas.',
    places: [
      {
        name: 'Roger Bryan Elementary School',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'School',
      },
      {
        name: 'Sig Rogich Middle School',
        address: 'Skye Canyon, Las Vegas, NV 89166',
        schemaType: 'School',
      },
      {
        name: 'Shadow Ridge High School',
        address: 'Northwest Las Vegas, NV 89166',
        schemaType: 'School',
      },
    ],
  },
  {
    id: 'commute',
    heading: 'Commute & key destinations',
    intro:
      'Arroyo at Skyeview sits northwest of the Strip with US-95 and the 215 Beltway for valley-wide access. Times below are approximate and depend on traffic.',
    places: [
      {
        name: 'Las Vegas Strip',
        address: 'Las Vegas, NV',
        schemaType: 'Place',
        note: 'Approximately 20–25 minutes via US-95 (approximate).',
      },
      {
        name: 'Harry Reid International Airport',
        address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
        schemaType: 'Place',
        note: 'Approximately 25–35 minutes via I-215 and I-15 (approximate).',
      },
      {
        name: 'Red Rock Canyon National Conservation Area',
        address: 'Las Vegas, NV',
        schemaType: 'Park',
        note: 'Approximately 15 minutes west via US-95 (approximate).',
      },
      {
        name: 'Downtown Summerlin',
        address: 'Summerlin, Las Vegas, NV',
        schemaType: 'ShoppingCenter',
        note: 'Approximately 15–20 minutes southeast (approximate).',
      },
    ],
  },
]

export const NEARBY_AMENITIES_FAQ = [
  {
    question: 'What grocery stores are near Arroyo at Skyeview?',
    answer:
      "Smith's Food and Drug anchors Skye Canyon Marketplace inside the 89166 master plan, minutes from Arroyo at Skyeview townhomes.",
  },
  {
    question: 'How far is Arroyo at Skyeview from the Las Vegas Strip?',
    answer:
      'Arroyo at Skyeview in Skye Canyon is approximately 20–25 minutes from the Las Vegas Strip via US-95, depending on traffic.',
  },
  {
    question: 'Are there hospitals near Arroyo at Skyeview in Skye Canyon?',
    answer:
      'Centennial Hills Hospital Medical Center on N Durango Dr and MountainView Hospital in northwest Las Vegas serve the Skye Canyon area, typically within a 15–25 minute drive.',
  },
  {
    question: 'What parks and trails are near Arroyo at Skyeview?',
    answer:
      'Skye Canyon Park, community trails, sports courts, and the Skye Fitness recreation hub are inside Skye Canyon; Red Rock Canyon is about 15 minutes west.',
  },
  {
    question: 'What schools serve Arroyo at Skyeview in zip code 89166?',
    answer:
      'Roger Bryan Elementary, Sig Rogich Middle School, and Shadow Ridge High School are the Clark County schools associated with Skye Canyon and zip 89166.',
  },
  {
    question: 'Where do residents shop and dine besides the marketplace?',
    answer:
      'Durango Square is roughly 10 minutes south, and Downtown Summerlin offers additional dining and retail about 15–20 minutes southeast.',
  },
  {
    question: 'How far is Harry Reid International Airport from Skye Canyon?',
    answer:
      'Harry Reid International Airport is approximately 25–35 minutes from Arroyo at Skyeview via the 215 Beltway and I-15, depending on traffic.',
  },
  {
    question: 'Who can help me tour Arroyo at Skyeview and compare nearby communities?',
    answer:
      'Dr. Jan Duffy represents home buyers—not the builder—at Arroyo at Skyeview and across Skye Canyon. Call (702) 903-4687 or schedule a consultation through the site.',
  },
] as const

/** Flat list for map fallback markers grouped by category */
export function getCuratedPlacesForCategory(
  categoryId: AmenityCategoryId,
): CuratedPlace[] {
  const section = AMENITY_CONTENT_SECTIONS.find((s) => s.id === categoryId)
  return section?.places ?? []
}

export function getAllCuratedPlacesForSchema(): CuratedPlace[] {
  const seen = new Set<string>()
  const out: CuratedPlace[] = []
  for (const section of AMENITY_CONTENT_SECTIONS) {
    for (const place of section.places) {
      const key = `${place.name}|${place.address}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push(place)
    }
  }
  return out
}
