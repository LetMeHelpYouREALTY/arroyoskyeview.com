/**
 * Flags page metadata title/description length for SEO.
 * Title target ≤60 chars; description 70–160 chars (warnings outside range).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const APP = join(ROOT, 'app')
const LIB = join(ROOT, 'lib')

function collectPages(dir, segments = []) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry.startsWith('(') || entry === 'api' || entry.startsWith('[')) continue
      out.push(...collectPages(full, [...segments, entry]))
      continue
    }
    if (entry === 'page.tsx') {
      out.push(join(...segments, 'page.tsx'))
    }
  }
  return out
}

function unescapeTsString(s) {
  return s.replace(/\\'/g, "'").replace(/\\n/g, '\n')
}

/** Parse `'/path': { title: '...', description: '...' }` blocks from SEO registry files. */
function loadSeoRegistry(fileName) {
  const src = readFileSync(join(LIB, fileName), 'utf8')
  const reg = {}
  const blockRe =
    /'(\/[^']+)':\s*\{[^}]*?title:\s*'((?:\\'|[^'])*)'[^}]*?description:\s*\n?\s*'((?:\\'|[^'])*)'/gs
  for (const m of src.matchAll(blockRe)) {
    reg[m[1]] = {
      title: unescapeTsString(m[2]),
      description: unescapeTsString(m[3]),
    }
  }
  return reg
}

const siteSeo = loadSeoRegistry('site-page-seo.ts')
const arroyoSeo = loadSeoRegistry('arroyo-hub-seo.ts')
const allSeo = { ...siteSeo, ...arroyoSeo }

function routeFromRel(rel) {
  if (rel === 'page.tsx') return '/'
  return '/' + rel.replace(/\/page\.tsx$/, '')
}

function resolvePathFromSource(src, fallbackRoute) {
  const pathConst = src.match(/const PATH = '([^']+)'/)
  if (pathConst) return pathConst[1]
  return fallbackRoute
}

function resolveMeta(route, src) {
  const path = resolvePathFromSource(src, route)

  if (src.includes('arroyoHubSeo') && allSeo[path]) {
    return allSeo[path]
  }
  if (
    (src.includes('sitePageSeo') || src.includes('SITE_PAGE_SEO')) &&
    allSeo[path]
  ) {
    return allSeo[path]
  }
  if (src.includes('CONTACT_SEO') && allSeo['/contact-us']) {
    return allSeo['/contact-us']
  }
  if (src.includes('SERVICES_SEO') && allSeo[path]) {
    return allSeo[path]
  }
  if (src.includes('ZIP_89166_SEO') && allSeo[path]) {
    return allSeo[path]
  }

  const metaBlock = src.match(/export const metadata[\s\S]*?^}/m)?.[0] ?? src
  const titleLit = metaBlock.match(/^\s*title:\s*['`]([^'`]+)['`]/m)
  const descLit = metaBlock.match(/^\s*description:\s*['`]([^'`]+)['`]/m)
  if (titleLit || descLit) {
    return {
      title: titleLit ? unescapeTsString(titleLit[1]) : null,
      description: descLit ? unescapeTsString(descLit[1]) : null,
    }
  }
  return { title: null, description: null }
}

let issues = 0
for (const rel of collectPages(APP)) {
  const src = readFileSync(join(APP, rel), 'utf8')
  if (!src.includes('export const metadata')) continue
  const route = routeFromRel(rel)
  const { title, description } = resolveMeta(route, src)

  if (title && title.length > 60) {
    console.log(`TITLE>${60} (${title.length}) ${route}: ${title}`)
    issues++
  }
  if (description) {
    if (description.length > 160) {
      console.log(`DESC>${160} (${description.length}) ${route}`)
      issues++
    } else if (description.length < 70) {
      console.log(`DESC<70 (${description.length}) ${route}`)
      issues++
    }
  } else if (title) {
    console.log(`DESC missing ${route}`)
    issues++
  }
}

if (issues === 0) {
  console.log('Meta length check passed.')
} else {
  console.log(`\n${issues} meta length issue(s) reported (informational).`)
  process.exit(0)
}
