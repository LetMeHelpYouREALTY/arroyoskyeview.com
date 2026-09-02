/**
 * Ensures lib/sitemap-routes.ts stays aligned with indexable app routes
 * and static public files (e.g. /llms.txt).
 * Run in CI after sitemap changes: npm run validate:sitemap
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const APP_DIR = join(ROOT, 'app')
const PUBLIC_DIR = join(ROOT, 'public')
const ROUTES_FILE = join(ROOT, 'lib', 'sitemap-routes.ts')

const EXCLUDED_PREFIXES = ['/api/', '/projects/']
const EXCLUDED_EXACT = new Set(['/manifest.webmanifest', '/schedule-confirmed'])

function collectPagePaths(dir, segments = []) {
  const paths = []

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      if (entry.startsWith('(') || entry === 'components' || entry === 'api') {
        continue
      }
      if (entry.startsWith('[')) {
        continue
      }
      paths.push(...collectPagePaths(fullPath, [...segments, entry]))
      continue
    }

    if (entry !== 'page.tsx') {
      continue
    }

    const routePath = segments.length === 0 ? '/' : `/${segments.join('/')}`
    paths.push(routePath)
  }

  return paths
}

function parseSitemapPaths(source) {
  const matches = [...source.matchAll(/\{\s*path:\s*'([^']+)'/g)]
  return matches.map((match) => match[1])
}

/** Sitemap URLs that are files in public/ (not App Router pages). */
function publicFileExists(urlPath) {
  if (!urlPath.startsWith('/') || urlPath.includes('..') || urlPath.endsWith('/')) {
    return false
  }
  const fullPath = join(PUBLIC_DIR, urlPath.slice(1))
  return existsSync(fullPath) && statSync(fullPath).isFile()
}

const routeSource = readFileSync(ROUTES_FILE, 'utf8')
const sitemapPaths = new Set(parseSitemapPaths(routeSource))
const appPaths = collectPagePaths(APP_DIR)
  .filter((path) => !EXCLUDED_EXACT.has(path))
  .filter((path) => !EXCLUDED_PREFIXES.some((prefix) => path.startsWith(prefix)))

const missingFromSitemap = appPaths.filter((path) => !sitemapPaths.has(path))
const extraInSitemap = [...sitemapPaths].filter(
  (path) => !appPaths.includes(path) && !publicFileExists(path),
)

if (missingFromSitemap.length > 0 || extraInSitemap.length > 0) {
  console.error('Sitemap route registry is out of sync with app pages.\n')

  if (missingFromSitemap.length > 0) {
    console.error('Missing from sitemap (add to lib/sitemap-routes.ts):')
    for (const path of missingFromSitemap.sort()) {
      console.error(`  - ${path}`)
    }
    console.error('')
  }

  if (extraInSitemap.length > 0) {
    console.error('In sitemap but no matching page.tsx or public file:')
    for (const path of extraInSitemap.sort()) {
      console.error(`  - ${path}`)
    }
    console.error('')
  }

  process.exit(1)
}

console.log(
  `Sitemap validation passed: ${sitemapPaths.size} routes match ${appPaths.length} indexable pages.`,
)
