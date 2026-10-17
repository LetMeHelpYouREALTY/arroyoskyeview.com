/**
 * Flags page metadata title/description length for SEO.
 * Title target ≤60 chars; description 70–160 chars (warnings outside range).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const APP = join(ROOT, 'app')

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

function extractString(src, key) {
  const re = new RegExp(`${key}:\\s*['\`]([^'\`]+)['\`]`, 'm')
  const m = src.match(re)
  return m?.[1] ?? null
}

let issues = 0
for (const rel of collectPages(APP)) {
  const src = readFileSync(join(APP, rel), 'utf8')
  if (!src.includes('export const metadata')) continue
  const title = extractString(src, 'title')
  const description = extractString(src, 'description')
  const route = '/' + rel.replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '')

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
  }
}

if (issues === 0) {
  console.log('Meta length check passed.')
} else {
  console.log(`\n${issues} meta length issue(s) reported (informational).`)
  process.exit(0)
}
