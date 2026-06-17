import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'

const DISALLOW = ['/api/', '/admin/', '/projects/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

