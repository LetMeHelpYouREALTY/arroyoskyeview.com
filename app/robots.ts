import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'

const DISALLOW = ['/api/', '/admin/', '/projects/']

/** Explicit allow so answer engines do not treat a wildcard rule as a block. */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
] as const

function crawlRule(userAgent: string) {
  return {
    userAgent,
    allow: '/',
    disallow: DISALLOW,
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      crawlRule('*'),
      crawlRule('Googlebot'),
      crawlRule('Googlebot-Image'),
      ...AI_CRAWLERS.map((userAgent) => crawlRule(userAgent)),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

