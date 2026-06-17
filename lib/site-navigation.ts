/** Central navigation config — 5 top-level items per luxury RE UX best practice. */

export type NavLink = {
  name: string
  href: string
  description?: string
}

export type NavColumn = {
  title: string
  links: NavLink[]
}

export type NavMegaMenu = {
  id: string
  label: string
  columns: NavColumn[]
  featured?: NavLink
}

export type NavDropdown = {
  id: string
  label: string
  links: NavLink[]
}

export const ARROYO_NAV: NavMegaMenu = {
  id: 'arroyo',
  label: 'Arroyo at Skyeview',
  featured: {
    name: 'Arroyo hub — Skye Canyon 89166',
    href: '/',
    description: 'Luxury townhomes from $392,640 with buyer representation from Dr. Jan Duffy.',
  },
  columns: [
    {
      title: 'Inventory & plans',
      links: [
        { name: 'Available homes', href: '/arroyo-at-skyeview/available-homes', description: 'Move-in ready on Grabill Spruce St' },
        { name: 'Floor plans', href: '/arroyo-at-skyeview/floor-plans', description: 'Beverly, Captiva & Delray' },
        { name: 'Homesite map', href: '/arroyo-at-skyeview/homesite-map', description: 'Lot map & end units' },
      ],
    },
    {
      title: 'Community & area',
      links: [
        { name: 'Community overview', href: '/arroyo-at-skyeview/overview', description: 'Builder, finishes & lifestyle' },
        { name: 'Area & schools', href: '/arroyo-at-skyeview/area', description: 'Skye Canyon amenities & 89166' },
        { name: 'Skye Canyon zip 89166', href: '/areas/zip-89166', description: 'Hyperlocal market profile' },
      ],
    },
  ],
}

export const COMMUNITIES_NAV: NavMegaMenu = {
  id: 'communities',
  label: 'Communities',
  columns: [
    {
      title: 'Skye Canyon communities',
      links: [
        { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview' },
        { name: 'Terra at Skyeview', href: '/terra-at-skyeview' },
        { name: 'Ironwood', href: '/ironwood' },
        { name: 'Homestead West', href: '/homestead-west' },
        { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon' },
      ],
    },
    {
      title: 'Las Vegas neighborhoods',
      links: [
        { name: 'Skye Canyon (89166)', href: '/areas/zip-89166' },
        { name: 'Summerlin', href: '/neighborhoods/summerlin-las-vegas' },
        { name: 'Henderson', href: '/neighborhoods/henderson-las-vegas' },
        { name: 'Las Vegas metro', href: '/find-your-new-home/nevada/las-vegas-metro' },
      ],
    },
    {
      title: 'Shop by type & price',
      links: [
        { name: 'Townhomes', href: '/homes/townhomes-las-vegas' },
        { name: 'Single-family homes', href: '/homes/single-family-las-vegas' },
        { name: 'Homes under $400k', href: '/homes/under-400k' },
      ],
    },
  ],
}

export const BUYERS_NAV: NavDropdown = {
  id: 'buyers',
  label: "Buyer's guide",
  links: [
    { name: 'First-time homebuyer', href: '/buyers/first-time-homebuyer' },
    { name: 'Builder incentives', href: '/buyers/builder-incentives-guide' },
    { name: 'Homebuying process', href: '/homebuying-process' },
    { name: 'Moving to Las Vegas', href: '/buyers/moving-to-las-vegas' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Resources library', href: '/resources' },
  ],
}

export const ABOUT_NAV: NavDropdown = {
  id: 'about',
  label: 'About',
  links: [
    { name: 'About Dr. Jan Duffy', href: '/about-us' },
    { name: 'Work with Dr. Jan', href: '/work-with-dr-jan' },
    { name: 'Client testimonials', href: '/testimonials' },
    { name: 'Market insights (blog)', href: '/blog/new-home-inventory-2x' },
  ],
}

export const CONTACT_LINK: NavLink = {
  name: 'Contact',
  href: '/contact-us',
}
