#!/usr/bin/env node
/**
 * Ensures no lead-capture <form> elements exist on public marketing pages.
 * Excludes internal v0 tooling under app/projects and dev chat UI components.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = join(ROOT, 'app')

const EXCLUDED_PATH_FRAGMENTS = [
  'app/projects/',
  'app/components/prompt-component.tsx',
  'app/components/rename-chat-dialog.tsx',
]

const FORM_PATTERN = /<form[\s>]/i
const LEAD_INPUT_PATTERNS = [
  /name=["']email["']/i,
  /name=["']phone["']/i,
  /name=["']firstName["']/i,
  /name=["']lastName["']/i,
  /type=["']submit["']/i,
]

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full, files)
    } else if (/\.(tsx|ts|jsx|js)$/.test(entry)) {
      files.push(full)
    }
  }
  return files
}

function isExcluded(relPath) {
  const normalized = relPath.replaceAll('\\', '/')
  return EXCLUDED_PATH_FRAGMENTS.some((fragment) => normalized.includes(fragment))
}

const violations = []

for (const file of walk(APP_DIR)) {
  const rel = relative(ROOT, file).replaceAll('\\', '/')
  if (isExcluded(rel)) continue

  const content = readFileSync(file, 'utf8')

  if (FORM_PATTERN.test(content)) {
    violations.push(`${rel}: contains <form>`)
    continue
  }

  for (const pattern of LEAD_INPUT_PATTERNS) {
    if (pattern.test(content)) {
      violations.push(`${rel}: matches lead-capture pattern ${pattern}`)
      break
    }
  }
}

if (violations.length > 0) {
  console.error('Form audit failed — marketing pages must use Calendly, not HTML forms:\n')
  for (const violation of violations) {
    console.error(`  - ${violation}`)
  }
  console.error(`\n${violations.length} violation(s). Excluded: ${EXCLUDED_PATH_FRAGMENTS.join(', ')}`)
  process.exit(1)
}

console.log(
  `Form audit passed: no <form> or lead-capture inputs on public marketing pages (excluded ${EXCLUDED_PATH_FRAGMENTS.length} internal paths).`,
)
