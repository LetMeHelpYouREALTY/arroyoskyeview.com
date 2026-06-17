export type BreadcrumbItem = {
  name: string
  href: string
}

const SEGMENT_LABELS: Record<string, string> = {
  'arroyo-at-skyeview': 'Arroyo at Skyeview',
  'available-homes': 'Available Homes',
  'floor-plans': 'Floor Plans',
  'homesite-map': 'Homesite Map',
  overview: 'Overview',
  area: 'Area & Schools',
  buyers: "Buyer's Guide",
  'first-time-homebuyer': 'First-Time Homebuyer',
  'builder-incentives-guide': 'Builder Incentives',
  'moving-to-las-vegas': 'Moving to Las Vegas',
  'financing-new-construction': 'Financing',
  'new-construction-vs-resale': 'New vs Resale',
  'closing-process-guide': 'Closing Process',
  'inspections-new-construction': 'Inspections',
  neighborhoods: 'Neighborhoods',
  'summerlin-las-vegas': 'Summerlin',
  'henderson-las-vegas': 'Henderson',
  'centennial-hills': 'Centennial Hills',
  'southwest-las-vegas': 'Southwest Las Vegas',
  'north-las-vegas': 'North Las Vegas',
  areas: 'Areas',
  'zip-89166': 'Skye Canyon 89166',
  'zip-89128': 'Zip 89128',
  'zip-89135': 'Zip 89135',
  'zip-89144': 'Zip 89144',
  'zip-89117': 'Zip 89117',
  homes: 'Homes',
  'townhomes-las-vegas': 'Townhomes',
  'single-family-las-vegas': 'Single-Family Homes',
  'under-300k': 'Under $300k',
  'under-400k': 'Under $400k',
  '400k-500k': '$400k–$500k',
  '500k-plus': '$500k+',
  faq: 'FAQ',
  'las-vegas-hyperlocal': 'Las Vegas Q&A',
  financing: 'Financing FAQ',
  inspections: 'Inspections FAQ',
  blog: 'Market Insights',
  'housing-market-crash-2025': 'Housing Market 2025',
  'buying-home-with-student-loans': 'Student Loans & Buying',
  'market-passed-you-by': 'Market Passed You By',
  'sale-crosses-finish-line': 'Sale Finish Line',
  'new-home-inventory-2x': 'New Home Inventory',
  services: 'Services',
  'buyer-representation': 'Buyer Representation',
  'construction-monitoring': 'Construction Monitoring',
  'building-standards-inspection': 'Building Standards Inspection',
  'sierra-at-skyeview': 'Sierra at Skyeview',
  'terra-at-skyeview': 'Terra at Skyeview',
  ironwood: 'Ironwood',
  'homestead-west': 'Homestead West',
  'eaglepointe-skye-canyon': 'Eaglepointe at Skye Canyon',
  'about-us': 'About',
  'contact-us': 'Contact',
  'work-with-dr-jan': 'Work with Dr. Jan',
  testimonials: 'Testimonials',
  resources: 'Resources',
  'homebuying-process': 'Homebuying Process',
  'online-homebuying': 'Online Homebuying',
  'privacy-policy': 'Privacy Policy',
  'terms-of-use': 'Terms of Use',
  accessibility: 'Accessibility',
  legal: 'Legal',
  'find-your-new-home': 'Find Your Home',
  nevada: 'Nevada',
  'las-vegas-metro': 'Las Vegas Metro',
}

const GROUP_HUBS: Record<string, BreadcrumbItem> = {
  buyers: { name: "Buyer's Guide", href: '/resources' },
  blog: { name: 'Market Insights', href: '/blog/new-home-inventory-2x' },
  faq: { name: 'FAQ', href: '/faq' },
  areas: { name: 'Areas', href: '/areas/zip-89166' },
  neighborhoods: { name: 'Neighborhoods', href: '/find-your-new-home/nevada/las-vegas-metro' },
  homes: { name: 'Homes by Type', href: '/homes/townhomes-las-vegas' },
  services: { name: 'Services', href: '/services/buyer-representation' },
  'find-your-new-home': { name: 'Find Your Home', href: '/find-your-new-home/nevada/las-vegas-metro' },
}

function labelForSegment(segment: string): string {
  return (
    SEGMENT_LABELS[segment] ??
    segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

/** Visible breadcrumb trail for header bar (Home is rendered separately). */
export function getBreadcrumbsForPath(pathname: string | null): BreadcrumbItem[] {
  if (!pathname || pathname === '/') return []

  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return []

  const crumbs: BreadcrumbItem[] = []
  const first = segments[0]

  if (first === 'arroyo-at-skyeview') {
    crumbs.push({ name: 'Arroyo at Skyeview', href: '/' })
    let path = '/arroyo-at-skyeview'
    for (let i = 1; i < segments.length; i++) {
      const segment = segments[i]
      path += `/${segment}`
      crumbs.push({ name: labelForSegment(segment), href: path })
    }
    return crumbs
  }

  const hub = GROUP_HUBS[first]
  if (hub && segments.length > 1) {
    crumbs.push(hub)
  }

  let path = ''
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    path += `/${segment}`
    if (hub && i === 0) continue
    crumbs.push({ name: labelForSegment(segment), href: path })
  }

  return crumbs
}
