/** Stable blog dates for Article JSON-LD and sitemap lastmod (no runtime "today"). */

export type BlogPostMeta = {
  slug: string
  path: string
  datePublished: string
  dateModified: string
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'new-home-inventory-2x',
    path: '/blog/new-home-inventory-2x',
    datePublished: '2024-01-15',
    dateModified: '2025-06-01',
  },
  {
    slug: 'buying-home-with-student-loans',
    path: '/blog/buying-home-with-student-loans',
    datePublished: '2024-01-14',
    dateModified: '2025-05-15',
  },
  {
    slug: 'housing-market-crash-2025',
    path: '/blog/housing-market-crash-2025',
    datePublished: '2024-01-10',
    dateModified: '2025-05-01',
  },
  {
    slug: 'market-passed-you-by',
    path: '/blog/market-passed-you-by',
    datePublished: '2024-01-12',
    dateModified: '2025-05-01',
  },
  {
    slug: 'sale-crosses-finish-line',
    path: '/blog/sale-crosses-finish-line',
    datePublished: '2024-01-13',
    dateModified: '2025-05-01',
  },
]

const byPath = new Map(BLOG_POSTS.map((p) => [p.path, p]))

export function getBlogPostMeta(path: string): BlogPostMeta | undefined {
  return byPath.get(path)
}
