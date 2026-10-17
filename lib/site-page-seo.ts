/** Central metadata strings (title ≤60 chars, description 70–160 chars). */

export type SitePageSeo = {
  title: string
  description: string
}

export const SITE_PAGE_SEO: Record<string, SitePageSeo> = {
  '/accessibility': {
    title: 'Accessibility | Arroyo Skyeview Site',
    description:
      'WCAG 2.1 accessibility commitment for arroyoskyeview.com. Questions about access? Call Dr. Jan Duffy at (702) 903-4687.',
  },
  '/legal': {
    title: 'Legal Information | Arroyo Skyeview',
    description:
      'Terms, privacy, and legal notices for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Nevada real estate buyer representation in Skye Canyon.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Arroyo Skyeview',
    description:
      'How arroyoskyeview.com handles your information. Dr. Jan Duffy, buyer agent for Skye Canyon new construction—(702) 903-4687.',
  },
  '/contact-us': {
    title: 'Contact Dr. Jan Duffy | Arroyo Skyeview',
    description:
      'Call (702) 903-4687 or email info@arroyoskyeview.com. Dr. Jan Duffy represents buyers at Arroyo at Skyeview in Skye Canyon (89166).',
  },
  '/buyers/builder-incentives-guide': {
    title: 'Builder Incentives Guide | Skye Canyon',
    description:
      'Rate buy-downs and closing-cost help on new builds in Skye Canyon (89166). Dr. Jan Duffy represents buyers—(702) 903-4687.',
  },
  '/buyers/closing-process-guide': {
    title: 'New Construction Closing Guide | Las Vegas',
    description:
      'Closing on a Skye Canyon new build: documents, walk-through, and inspection tips from Dr. Jan Duffy—(702) 903-4687.',
  },
  '/buyers/financing-new-construction': {
    title: 'Financing New Construction | Las Vegas',
    description:
      'Loan types, down payment help, and builder incentives for new construction in Las Vegas (89166). Dr. Jan Duffy—(702) 903-4687.',
  },
  '/buyers/first-time-homebuyer': {
    title: 'First-Time Buyer Guide | Las Vegas 89166',
    description:
      'First-time buyer steps, assistance programs, and Skye Canyon new-build tips from Dr. Jan Duffy—(702) 903-4687.',
  },
  '/buyers/inspections-new-construction': {
    title: 'New Construction Inspections | Las Vegas',
    description:
      'Construction monitoring and building standards inspections before closing on Skye Canyon new homes. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/buyers/moving-to-las-vegas': {
    title: 'Moving to Las Vegas | New Homebuyer Guide',
    description:
      'Cost of living, commute, and Skye Canyon (89166) new construction context for relocators. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/buyers/new-construction-vs-resale': {
    title: 'New Construction vs Resale | Las Vegas',
    description:
      'Compare timelines, warranties, and costs for new builds vs resale in Las Vegas. Buyer agent Dr. Jan Duffy—(702) 903-4687.',
  },
  '/faq': {
    title: 'FAQ | New Construction Buyers Las Vegas',
    description:
      'Answers on Skye Canyon new construction, buyer representation, incentives, and warranties. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/faq/financing': {
    title: 'Financing FAQ | Skye Canyon New Homes',
    description:
      'Loan types, down payments, and builder incentives for 89166 new construction. Dr. Jan Duffy represents buyers—(702) 903-4687.',
  },
  '/faq/inspections': {
    title: 'Inspections FAQ | Skye Canyon New Homes',
    description:
      'Construction monitoring and closing inspections for new builds in Skye Canyon (89166). Dr. Jan Duffy—(702) 903-4687.',
  },
  '/faq/las-vegas-hyperlocal': {
    title: 'Las Vegas Neighborhood Q&A | Skye Canyon',
    description:
      'Hyperlocal answers on Skye Canyon, Arroyo at Skyeview, schools, and 89166 new construction. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/find-your-new-home/nevada/las-vegas-metro': {
    title: 'Las Vegas Metro New Homes | Skye Canyon',
    description:
      'Explore Skye Canyon and Arroyo at Skyeview new construction in northwest Las Vegas (89166). Dr. Jan Duffy—(702) 903-4687.',
  },
  '/homes/single-family-las-vegas': {
    title: 'Single Family Homes Las Vegas | New Construction',
    description:
      'Single-family new construction options in Las Vegas with buyer representation from Dr. Jan Duffy. Skye Canyon focus—(702) 903-4687.',
  },
  '/neighborhoods/centennial-hills': {
    title: 'Centennial Hills New Homes | Las Vegas',
    description:
      'New construction near Centennial Hills and Skye Canyon (89166). Dr. Jan Duffy represents buyers—not the builder—(702) 903-4687.',
  },
  '/neighborhoods/henderson-las-vegas': {
    title: 'Henderson NV New Homes | Buyer Agent',
    description:
      'Compare Henderson and northwest Las Vegas new construction. Dr. Jan Duffy helps buyers in Skye Canyon—(702) 903-4687.',
  },
  '/resources': {
    title: 'Buyer Resources | Skye Canyon New Homes',
    description:
      'Guides, checklists, and tools for Las Vegas new construction buyers at Arroyo and Skye Canyon. Dr. Jan Duffy—(702) 903-4687.',
  },
  '/testimonials': {
    title: 'Client Testimonials | Dr. Jan Duffy',
    description:
      'Stories from Las Vegas new construction buyers Dr. Jan Duffy represented in Skye Canyon and 89166. Call (702) 903-4687.',
  },
  '/work-with-dr-jan': {
    title: 'Work with Dr. Jan Duffy | Skye Canyon Agent',
    description:
      'Buyer representation for Arroyo at Skyeview and Skye Canyon new construction (89166). No cost to you—(702) 903-4687.',
  },
  '/services/buyer-representation': {
    title: 'Buyer Representation | Skye Canyon New Homes',
    description:
      'Why a buyer agent matters on new construction in Skye Canyon (89166). Dr. Jan Duffy represents you—not the builder. Call (702) 903-4687.',
  },
  '/services/construction-monitoring': {
    title: 'Construction Monitoring | Dr. Jan Duffy',
    description:
      'Walk-throughs during your Skye Canyon new-build. Dr. Jan Duffy monitors construction for buyers at Arroyo and 89166. (702) 903-4687.',
  },
  '/services/building-standards-inspection': {
    title: 'Building Standards Inspection | New Construction',
    description:
      'Closing inspection for new construction buyers in Las Vegas. Dr. Jan Duffy at Arroyo at Skyeview—(702) 903-4687.',
  },
}

export function sitePageSeo(path: string): SitePageSeo {
  const seo = SITE_PAGE_SEO[path]
  if (!seo) {
    throw new Error(`Missing SITE_PAGE_SEO for ${path}`)
  }
  return seo
}
