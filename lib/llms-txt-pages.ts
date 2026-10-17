import { SITE_URL } from '@/lib/site-url'

/** Curated llms.txt entries grouped for answer engines (not a sitemap dump). */
export type LlmsTxtLink = {
  title: string
  path: string
  blurb: string
}

export const LLMS_TXT_SECTIONS: { heading: string; links: LlmsTxtLink[] }[] = [
  {
    heading: 'Arroyo at Skyeview (Skye Canyon 89166)',
    links: [
      {
        title: 'Homepage',
        path: '/',
        blurb: 'Buyer agent Dr. Jan Duffy for Arroyo townhomes in northwest Las Vegas.',
      },
      {
        title: 'Available homes',
        path: '/arroyo-at-skyeview/available-homes',
        blurb: 'Move-in ready inventory on Grabill Spruce St with current pricing.',
      },
      {
        title: 'Floor plans',
        path: '/arroyo-at-skyeview/floor-plans',
        blurb: 'Beverly, Captiva, and Delray layouts and square footage.',
      },
      {
        title: 'Community overview',
        path: '/arroyo-at-skyeview/overview',
        blurb: 'Finishes, HOA context, and what defines Arroyo at Skyeview.',
      },
      {
        title: 'Area and schools',
        path: '/arroyo-at-skyeview/area',
        blurb: 'Skye Canyon amenities, commute anchors, and 89166 schools.',
      },
      {
        title: 'Homesite map',
        path: '/arroyo-at-skyeview/homesite-map',
        blurb: 'Lot map, end units, and courtyard entries.',
      },
      {
        title: 'Zip 89166 profile',
        path: '/areas/zip-89166',
        blurb: 'Hyperlocal market page for Skye Canyon and sibling communities.',
      },
    ],
  },
  {
    heading: 'Work with Dr. Jan Duffy',
    links: [
      {
        title: 'Work with Dr. Jan',
        path: '/work-with-dr-jan',
        blurb: 'Buyer representation, construction monitoring, no extra buyer fee.',
      },
      {
        title: 'Sell to buy at Arroyo',
        path: '/sellers/sell-to-buy-at-arroyo-skyeview',
        blurb: 'List your current home and coordinate a new-build purchase at Arroyo.',
      },
      {
        title: 'Contact',
        path: '/contact-us',
        blurb: 'Phone, email, and scheduling for buyer questions.',
      },
    ],
  },
  {
    heading: 'Services',
    links: [
      {
        title: 'Buyer representation',
        path: '/services/buyer-representation',
        blurb: 'Why a buyer agent differs from the builder sales team.',
      },
      {
        title: 'Construction monitoring',
        path: '/services/construction-monitoring',
        blurb: 'Walk-through cadence during the build at Arroyo and other new construction.',
      },
      {
        title: 'Building standards inspection',
        path: '/services/building-standards-inspection',
        blurb: 'Closing inspection to catch punch-list items before warranty windows close.',
      },
    ],
  },
  {
    heading: 'FAQ and buyer guides',
    links: [
      {
        title: 'FAQ hub',
        path: '/faq',
        blurb: 'Top questions on new construction in Skye Canyon and Las Vegas.',
      },
      {
        title: 'Las Vegas neighborhood Q&A',
        path: '/faq/las-vegas-hyperlocal',
        blurb: 'Long-form answers on 89166, schools, commute, and inventory.',
      },
      {
        title: 'Financing FAQ',
        path: '/faq/financing',
        blurb: 'Down payment, loans, and builder rate incentives.',
      },
      {
        title: 'Inspections FAQ',
        path: '/faq/inspections',
        blurb: 'New construction inspection timing and what Dr. Jan Duffy checks.',
      },
      {
        title: 'First-time homebuyer',
        path: '/buyers/first-time-homebuyer',
        blurb: 'Step-by-step for first purchase in Las Vegas new construction.',
      },
      {
        title: 'Builder incentives',
        path: '/buyers/builder-incentives-guide',
        blurb: 'How to compare builder credits and rate buy-downs.',
      },
      {
        title: 'Inspections during construction',
        path: '/buyers/inspections-new-construction',
        blurb: 'Buyer guide aligned with the inspections FAQ.',
      },
      {
        title: 'Closing process',
        path: '/buyers/closing-process-guide',
        blurb: 'Walk-through, title, and keys for new-build closings.',
      },
    ],
  },
]

export function formatLlmsTxtLink(link: LlmsTxtLink): string {
  const url = link.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${link.path}`
  return `- [${link.title}](${url}): ${link.blurb}`
}
