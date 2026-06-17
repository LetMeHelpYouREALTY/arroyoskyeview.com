/** Shared Arroyo at Skyeview inventory for ProductSchemas and child pages. */

export const ARROYO_FLOOR_PLANS = [
  {
    name: 'Beverly',
    price: 364990,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'Interior Unit',
    image: '/images/floor-plans/beverly-model.jpg',
  },
  {
    name: 'Captiva',
    price: 374990,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: '3 Bed + Loft',
    image: '/images/floor-plans/captiva-model.jpg',
  },
  {
    name: 'Delray',
    price: 384990,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'End Unit',
    image: '/images/floor-plans/delray-model.jpg',
  },
] 

export const ARROYO_AVAILABLE_HOMES = [
  {
    address: '8933 Grabill Spruce St',
    lot: 'ARR224',
    floorPlan: 'Delray',
    price: 424590,
    sqft: 1729,
    bedrooms: 4,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['Gray cabinets'],
    image: '/images/homes/homes-1.jpg',
  },
  {
    address: '8925 Grabill Spruce St',
    lot: 'ARR223',
    floorPlan: 'Captiva',
    price: 405720,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LVP Flooring', 'White Cabinets'],
    image: '/images/homes/homes-2.jpg',
  },
  {
    address: '8942 Grabill Spruce St',
    lot: 'ARR183',
    floorPlan: 'Delray',
    price: 416960,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End Unit', 'White Cabinets'],
    image: '/images/homes/homes-3.jpg',
  },
  {
    address: '8917 Grabill Spruce St',
    lot: 'ARR222',
    floorPlan: 'Beverly',
    price: 392640,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LG Kitchen Appliances', 'Java Cabinets'],
    image: '/images/homes/homes-4.jpg',
  },
  {
    address: '8909 Grabill Spruce St',
    lot: 'ARR221',
    floorPlan: 'Captiva',
    price: 411090,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End unit', 'Courtyard Entry'],
    image: '/images/homes/homes-5.jpg',
  },
]

export const ARROYO_PRICE_RANGE = '$392,640 - $424,590'

export const ARROYO_BASE_BREADCRUMB = {
  name: 'Arroyo at Skyeview',
  url: '/',
} as const

export const ARROYO_HUB_LINKS = [
  {
    href: '/arroyo-at-skyeview/available-homes',
    title: 'Available Homes',
    description: 'Move-in ready townhomes on Grabill Spruce St with current builder incentives.',
  },
  {
    href: '/arroyo-at-skyeview/floor-plans',
    title: 'Floor Plans',
    description: 'Beverly, Captiva, and Delray layouts from 1,531–1,729 sq ft.',
  },
  {
    href: '/arroyo-at-skyeview/homesite-map',
    title: 'Homesite Map',
    description: 'Explore lot locations, end units, and courtyard entries across the community.',
  },
  {
    href: '/arroyo-at-skyeview/overview',
    title: 'Community Overview',
    description: 'Builder details, finishes, HOA, and what makes Arroyo at Skyeview unique.',
  },
  {
    href: '/arroyo-at-skyeview/area',
    title: 'Area & Schools',
    description: 'Skye Canyon amenities, zip 89166 schools, shopping, and outdoor recreation.',
  },
  {
    href: '/resources',
    title: 'Homebuyer Resources',
    description: 'Financing guides, inspections, and the step-by-step new construction process.',
  },
] as const

export type ArroyoHubPath = (typeof ARROYO_HUB_LINKS)[number]['href']
