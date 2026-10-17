/** Shared title/description for Arroyo hub routes (≤60 / ≤160 chars for metadata + JSON-LD). */

export type ArroyoHubSeo = {
  path: string
  title: string
  description: string
}

export const ARROYO_HUB_SEO: Record<string, ArroyoHubSeo> = {
  '/arroyo-at-skyeview/available-homes': {
    path: '/arroyo-at-skyeview/available-homes',
    title: 'Arroyo Available Homes | Skye Canyon 89166',
    description:
      'Move-in ready Arroyo at Skyeview townhomes on Grabill Spruce St, Skye Canyon (89166). From $392,640. Buyer agent Dr. Jan Duffy—(702) 903-4687.',
  },
  '/arroyo-at-skyeview/floor-plans': {
    path: '/arroyo-at-skyeview/floor-plans',
    title: 'Arroyo Floor Plans | Beverly, Captiva, Delray',
    description:
      'Beverly, Captiva, and Delray townhomes at Arroyo at Skyeview, Skye Canyon 89166. 1,531–1,729 sq ft. Dr. Jan Duffy represents buyers—(702) 903-4687.',
  },
  '/arroyo-at-skyeview/homesite-map': {
    path: '/arroyo-at-skyeview/homesite-map',
    title: 'Arroyo Homesite Map | Skye Canyon 89166',
    description:
      'Homesite map for Arroyo at Skyeview on Grabill Spruce St, Skye Canyon (89166). End units and lot layout with Dr. Jan Duffy—(702) 903-4687.',
  },
  '/arroyo-at-skyeview/overview': {
    path: '/arroyo-at-skyeview/overview',
    title: 'Arroyo at Skyeview Overview | Skye Canyon NV',
    description:
      'Townhome community overview for Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (89166). From $392,640. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/arroyo-at-skyeview/area': {
    path: '/arroyo-at-skyeview/area',
    title: 'Skye Canyon Area Guide | Arroyo 89166',
    description:
      'Schools, parks, and commute context for Arroyo at Skyeview in Skye Canyon (89166), northwest Las Vegas. Dr. Jan Duffy—(702) 903-4687.',
  },
}

export function arroyoHubSeo(path: string): ArroyoHubSeo {
  const seo = ARROYO_HUB_SEO[path]
  if (!seo) {
    throw new Error(`Missing ARROYO_HUB_SEO for ${path}`)
  }
  return seo
}
