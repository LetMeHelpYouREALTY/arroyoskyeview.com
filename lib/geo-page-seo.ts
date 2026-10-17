/** @deprecated Import from `@/lib/site-page-seo` — re-exports for existing imports. */
import { SITE_PAGE_SEO, type SitePageSeo } from '@/lib/site-page-seo'

export const ZIP_89166_SEO: SitePageSeo = {
  title: 'New Homes Zip 89166 | Skye Canyon Las Vegas',
  description:
    'New construction in zip 89166, Skye Canyon: Arroyo, Sierra, and Terra at Skyeview. Buyer agent Dr. Jan Duffy—(702) 903-4687.',
}

export const CONTACT_SEO = SITE_PAGE_SEO['/contact-us']

export const SERVICES_SEO = {
  '/services/buyer-representation': SITE_PAGE_SEO['/services/buyer-representation'],
  '/services/construction-monitoring': SITE_PAGE_SEO['/services/construction-monitoring'],
  '/services/building-standards-inspection': SITE_PAGE_SEO['/services/building-standards-inspection'],
} as const
