import type { AmenityCategoryId } from './amenity-map-config'

export type CuratedPlace = {
  name: string
  /** Verified street address; omit when only the place name is sourced */
  address?: string
  /** Official page used to verify name and address */
  sourceUrl: string
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

/** Verified against primary sources — SSR copy, map fallback, and JSON-LD ItemList. */
export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: 'grocery',
    heading: 'Grocery & everyday shopping',
    intro:
      'Skye Canyon Marketplace sits inside the master plan, with Smith’s Marketplace anchoring daily errands minutes from Arroyo at Skyeview.',
    places: [
      {
        name: "Smith's Food and Drug",
        address: '9710 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl:
          'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/skye-canyon-marketplace/702/00141',
        schemaType: 'GroceryStore',
      },
      {
        name: 'Skye Canyon Marketplace',
        address: '9700 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/amenities/shopping/',
        schemaType: 'ShoppingCenter',
      },
    ],
  },
  {
    id: 'restaurants',
    heading: 'Dining near Skye Canyon',
    intro:
      'Restaurants at Skye Canyon Marketplace include national and local options listed by the master developer; Summerlin and the Strip add more choices within a short drive.',
    places: [
      {
        name: 'Cafe Rio',
        address: '9700 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/amenities/shopping/',
        schemaType: 'Restaurant',
        note: 'Tenant at Skye Canyon Marketplace (developer listing).',
      },
      {
        name: "Bob's Big Boy",
        address: '9700 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/amenities/shopping/',
        schemaType: 'Restaurant',
        note: 'Tenant at Skye Canyon Marketplace (developer listing).',
      },
    ],
  },
  {
    id: 'cafes',
    heading: 'Cafes & coffee',
    intro:
      'Marketplace coffee and the Skye Center coffee house support morning routines and meet-ups inside Skye Canyon.',
    places: [
      {
        name: 'Starbucks',
        address: '9710 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/amenities/shopping/',
        schemaType: 'CafeOrCoffeeShop',
        note: 'Inside Smith’s Marketplace at Skye Canyon (developer listing).',
      },
      {
        name: 'Aspire Coffee House',
        address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/about/',
        schemaType: 'CafeOrCoffeeShop',
        note: 'Coffee house at Skye Center (developer hours and location).',
      },
    ],
  },
  {
    id: 'parks',
    heading: 'Parks & recreation',
    intro:
      'Skye Canyon’s master plan includes a 15-acre central park hub with trails, courts, and resident recreation amenities.',
    places: [
      {
        name: 'Skye Canyon Park',
        address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/amenities/parks/',
        schemaType: 'Park',
        note: '15-acre community park (developer listing).',
      },
      {
        name: 'Skye Fitness',
        address: '10111 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl: 'https://skyecanyon.com/facts/',
        schemaType: 'ExerciseGym',
        note: 'Resident fitness center at Skye Canyon Park (developer listing).',
      },
    ],
  },
  {
    id: 'golf',
    heading: 'Golf',
    intro:
      'Public courses in west Las Vegas and Summerlin are within a typical drive of zip 89166; times vary with traffic.',
    places: [
      {
        name: 'Angel Park Golf Club',
        address: '100 S Rampart Blvd, Las Vegas, NV 89145',
        sourceUrl: 'https://arcisgolf.com/clubs/angel-park-golf-club/hours-and-directions',
        schemaType: 'GolfCourse',
      },
    ],
  },
  {
    id: 'healthcare',
    heading: 'Healthcare & hospitals',
    intro:
      'Hospital campuses serve northwest Las Vegas along the Durango and Tenaya corridors; urgent care offices are throughout the area.',
    places: [
      {
        name: 'Centennial Hills Hospital Medical Center',
        address: '6900 N Durango Dr, Las Vegas, NV 89149',
        sourceUrl: 'https://www.centennialhillshospital.com/',
        schemaType: 'Hospital',
      },
      {
        name: 'MountainView Hospital',
        address: '3100 N Tenaya Way, Las Vegas, NV 89128',
        sourceUrl: 'https://mountainview-hospital.com/',
        schemaType: 'Hospital',
      },
    ],
  },
  {
    id: 'pharmacies',
    heading: 'Pharmacies',
    intro: 'Retail pharmacies are available at Skye Canyon Marketplace and along northwest valley retail corridors.',
    places: [
      {
        name: "Smith's Food and Drug pharmacy",
        address: '9710 W Skye Canyon Park Dr, Las Vegas, NV 89166',
        sourceUrl:
          'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/skye-canyon-marketplace/702/00141',
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
        name: 'Downtown Summerlin',
        address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
        sourceUrl: 'https://www.downtownsummerlin.com/',
        schemaType: 'ShoppingCenter',
        note: 'Approximately 15–20 minutes southeast (approximate drive time).',
      },
    ],
  },
  {
    id: 'schools',
    heading: 'Schools serving zip 89166',
    intro:
      'Clark County School District schools associated with northwest Las Vegas include Roger Bryan Elementary, Sig Rogich Middle School, and Shadow Ridge High School. A new Skye Canyon Elementary campus is under construction for a future opening.',
    places: [
      {
        name: 'Roger M. Bryan Elementary School',
        address: '8255 W Katie Ave, Las Vegas, NV 89147',
        sourceUrl: 'https://www.rogerbryanes.com/',
        schemaType: 'School',
      },
      {
        name: 'Sig Rogich Middle School',
        address: '235 N Pavilion Center Dr, Las Vegas, NV 89144',
        sourceUrl: 'https://www.rogichms.info/contact',
        schemaType: 'School',
      },
      {
        name: 'Shadow Ridge High School',
        address: '5050 Brent Ln, Las Vegas, NV 89131',
        sourceUrl: 'https://www.srhsmustangs.com/apps/contact/',
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
        sourceUrl: 'https://www.lvcva.com/',
        schemaType: 'Place',
        note: 'Approximately 20–25 minutes via US-95 (approximate).',
      },
      {
        name: 'Harry Reid International Airport',
        address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
        sourceUrl: 'https://www.harryreidairport.com/',
        schemaType: 'Place',
        note: 'Approximately 25–35 minutes via I-215 and I-15 (approximate).',
      },
      {
        name: 'Red Rock Canyon National Conservation Area',
        address: '3205 State Route 159, Blue Diamond, NV 89005',
        sourceUrl: 'https://www.nps.gov/redr/planyourvisit/basicinfo.htm',
        schemaType: 'Park',
        note: 'Visitor center area; approximately 15 minutes west via US-95 (approximate).',
      },
    ],
  },
]

export const NEARBY_AMENITIES_FAQ = [
  {
    question: 'What grocery stores are near Arroyo at Skyeview?',
    answer:
      "Smith's Food and Drug at Skye Canyon Marketplace (9710 W Skye Canyon Park Dr) serves the 89166 master plan, minutes from Arroyo at Skyeview townhomes.",
  },
  {
    question: 'How far is Arroyo at Skyeview from the Las Vegas Strip?',
    answer:
      'Arroyo at Skyeview in Skye Canyon is approximately 20–25 minutes from the Las Vegas Strip via US-95, depending on traffic.',
  },
  {
    question: 'Are there hospitals near Arroyo at Skyeview in Skye Canyon?',
    answer:
      'Centennial Hills Hospital Medical Center on N Durango Dr and MountainView Hospital on N Tenaya Way serve northwest Las Vegas, typically within a 15–25 minute drive from Skye Canyon.',
  },
  {
    question: 'What parks and trails are near Arroyo at Skyeview?',
    answer:
      'Skye Canyon Park and the Skye Fitness hub are inside Skye Canyon; Red Rock Canyon National Conservation Area is about 15 minutes west.',
  },
  {
    question: 'What schools serve Arroyo at Skyeview in zip code 89166?',
    answer:
      'Roger M. Bryan Elementary, Sig Rogich Middle School, and Shadow Ridge High School are Clark County schools commonly associated with northwest Las Vegas and Skye Canyon buyers; confirm assignments with CCSD for your address.',
  },
  {
    question: 'Where do residents shop and dine besides the marketplace?',
    answer:
      'Downtown Summerlin offers additional dining and retail about 15–20 minutes southeast; Durango Drive retail corridors are also within a short drive.',
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
      const key = `${place.name}|${place.address ?? ''}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push(place)
    }
  }
  return out
}
