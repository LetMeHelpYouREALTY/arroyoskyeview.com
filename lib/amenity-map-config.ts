/**
 * Map center for Arroyo at Skyeview / Century Communities sales office area.
 * Coordinates from OpenStreetMap geocode of Vanhoy Creek St, Skye Canyon, NV 89166
 * (community sales address per Century Communities & site NAP).
 */
export const COMMUNITY_MAP_CENTER = {
  lat: 36.3150642,
  lng: -115.3296506,
} as const

export const COMMUNITY_MAP_LABEL = 'Arroyo at Skyeview'
export const COMMUNITY_MAP_ADDRESS =
  '8912 Vanhoy Creek St, Las Vegas, NV 89166'

export const AMENITY_SEARCH_RADIUS_METERS = 8000

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools'

export type AmenityCategoryConfig = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[]
  ariaLabel: string
}

/** Family / master-planned community — schools included; standard discovery order. */
export const AMENITY_CATEGORIES: AmenityCategoryConfig[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    placeTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Arroyo at Skyeview',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    placeTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Arroyo at Skyeview',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    placeTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Arroyo at Skyeview',
  },
  {
    id: 'parks',
    label: 'Parks',
    placeTypes: ['park'],
    ariaLabel: 'Show parks near Arroyo at Skyeview',
  },
  {
    id: 'golf',
    label: 'Golf',
    placeTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Arroyo at Skyeview',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    placeTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Arroyo at Skyeview',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    placeTypes: ['pharmacy'],
    ariaLabel: 'Show pharmacies near Arroyo at Skyeview',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    placeTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Arroyo at Skyeview',
  },
  {
    id: 'parking',
    label: 'Parking',
    placeTypes: ['parking'],
    ariaLabel: 'Show parking near Arroyo at Skyeview',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    placeTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show fitness centers near Arroyo at Skyeview',
  },
  {
    id: 'schools',
    label: 'Schools',
    placeTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Arroyo at Skyeview',
  },
]

export function getEmbedMapUrl(): string {
  const { lat, lng } = COMMUNITY_MAP_CENTER
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`
}

export function getDirectionsUrl(placeName: string, address?: string): string {
  const query = address ? `${placeName}, ${address}` : placeName
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}
