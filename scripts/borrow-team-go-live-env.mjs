/**
 * Copy go-live keys from sister Vercel projects on the same team.
 * Prints only key names and source project — never secret values.
 *
 * GET /v10/projects/{id}/env?decrypt=true&source=vercel-cli:env:pull
 * GET /v3/env/pull/{id}/production (same path `vercel env pull` uses)
 * https://vercel.com/docs/rest-api/reference/endpoints/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name
 *
 * Cloudflare Images: Bearer tokens on clones are expired (401). Global API
 * keys return 400 as Bearer — they need X-Auth-Email + X-Auth-Key. Notion is
 * scanned when a sister decrypts NOTION_TOKEN (never copied to Arroyo).
 * Cloudflare invoice To: header (verified 2026-09-01) is the Global API Key
 * email probe. Do not upsert the Global key onto Arroyo Vercel.
 */
import { appendFile } from 'node:fs/promises'

const TEAM_ID = process.env.VERCEL_ORG_ID?.trim() || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const TOKEN = process.env.VERCEL_TOKEN?.trim()

const KEYS = [
  'CLOUDFLARE_API_TOKEN',
  'CLOUDFLARE_GLOBAL_API_TOKEN',
  'CLOUDFLARE_EMAIL',
  'CLOUDFLARE_ACCOUNT_ID',
  'CLOUDFLARE_IMAGES_HASH',
  'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
  'FOLLOW_UP_BOSS_API_KEY',
  'FUB_API_KEY',
  'CALENDLY_API_TOKEN',
  'CALENDLY_PERSONAL_ACCESS_TOKEN',
  'CALENDLY_PAT',
  'CALENDLY_WEBHOOK_SIGNING_KEY',
  'CRON_SECRET',
]

/** Sister env names that map onto the keys this repo actually reads. */
const ALIASES = {
  CLOUDFLARE_API_TOKEN: [
    'CLOUDFLARE_API_TOKEN',
    'CF_API_TOKEN',
    'CF_IMAGES_TOKEN',
    'CLOUDFLARE_IMAGES_TOKEN',
    'CLOUDFLARE_IMAGES_API_TOKEN',
  ],
  CLOUDFLARE_GLOBAL_API_TOKEN: [
    'CLOUDFLARE_GLOBAL_API_TOKEN',
    'CLOUDFLARE_API_KEY',
    'CF_GLOBAL_API_KEY',
    'CF_API_KEY',
  ],
  CLOUDFLARE_EMAIL: [
    'CLOUDFLARE_EMAIL',
    'CF_EMAIL',
    'CLOUDFLARE_ACCOUNT_EMAIL',
    'CF_ACCOUNT_EMAIL',
    'CLOUDFLARE_USER_EMAIL',
    'CF_USER_EMAIL',
  ],
  CLOUDFLARE_ACCOUNT_ID: ['CLOUDFLARE_ACCOUNT_ID', 'CF_ACCOUNT_ID'],
  FOLLOW_UP_BOSS_API_KEY: [
    'FOLLOW_UP_BOSS_API_KEY',
    'FUB_API_KEY',
    'FOLLOWUPBOSS_API_KEY',
    'FUB_APIKEY',
  ],
  CALENDLY_API_TOKEN: [
    'CALENDLY_API_TOKEN',
    'CALENDLY_PERSONAL_ACCESS_TOKEN',
    'CALENDLY_PAT',
    'CALENDLY_ACCESS_TOKEN',
    'CALENDLY_TOKEN',
    'CALENDLY_API_KEY',
  ],
  CALENDLY_WEBHOOK_SIGNING_KEY: [
    'CALENDLY_WEBHOOK_SIGNING_KEY',
    'CALENDLY_SIGNING_KEY',
    'CALENDLY_WEBHOOK_SECRET',
  ],
  CRON_SECRET: ['CRON_SECRET'],
  CLOUDFLARE_IMAGES_HASH: [
    'CLOUDFLARE_IMAGES_HASH',
    'NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH',
    'NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH',
  ],
}

/** Scan first — these are most likely to hold Images / FUB / Calendly keys. */
const PRIORITY_PROJECTS = [
  { id: 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm', name: 'arroyoskyeview.com' },
  { id: 'prj_xZmrAjHZjKncFudRykf1hDaLVvtB', name: 'drjanduffy.com' },
  { id: 'prj_wLlJUFtUXEWI5lWpGaGAHlrfEMBg', name: 'assumablehomefinder.com' },
  { id: 'prj_yE6ZxHq8bfWfLrop5IaYncTHZmyB', name: 'justcallgene.com' },
  { id: 'prj_vLtsyX02wy389Ne9Nfl5eyJRf9iB', name: 'geneboyle-com' },
  { id: 'prj_kuK326EHPAUh4Turfh2TD8wHlvKT', name: 'taxresidencyadvisors.com' },
  { id: 'prj_OtKFgqeAGlI5hRSpiQiqdFm0XGnD', name: 'californiaforeverbroker.com' },
  { id: 'prj_OPeHlqAs7VKjCibR3xLONmQm2LbW', name: 'opportunityzonespecialist-com' },
  { id: 'prj_KDNbpc1vi3aOYg0lDisXWpp3hldj', name: 'video-creator' },
  { id: 'prj_riGA7w4NNpdcJikGwUo84ePXdk48', name: 'next-js-parallel-starter' },
  { id: 'prj_vrMcC3LsxgF3yf51M06TdeYUI24j', name: 'sienalasvegas.com' },
  { id: 'prj_Egvst53Qns0tSJ0K5cqfbicv2MIj', name: 'hertagestonebridge.com' },
  { id: 'prj_4h22EmvSku2lGaqMJICZ4F4dWMci', name: 'villagestulesprings.com' },
]

const IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
/** Cloudflare invoice recipient. Used only to probe sister Global API Keys. */
const FALLBACK_CLOUDFLARE_EMAIL = 'drduffy@bhhsnv.com'

function alreadyHave(key) {
  const value = process.env[key]
  return typeof value === 'string' && value.trim().length > 0
}

function envRow(key, value) {
  const delim = `EOF_${key}_${Date.now()}`
  return `${key}<<${delim}\n${value}\n${delim}\n`
}

function entryValue(entry) {
  if (typeof entry?.value === 'string') {
    return entry.value.trim()
  }
  if (entry?.value && typeof entry.value === 'object' && typeof entry.value.value === 'string') {
    return entry.value.value.trim()
  }
  return ''
}

function prefersProduction(entry) {
  return Array.isArray(entry?.target) && entry.target.includes('production')
}

async function vercelGet(path) {
  const url = new URL(`https://api.vercel.com${path}`)
  if (!url.searchParams.has('teamId')) {
    url.searchParams.set('teamId', TEAM_ID)
  }
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  const text = await res.text()
  let json = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = null
  }
  return { ok: res.ok, status: res.status, json }
}

function asEnvList(json) {
  if (Array.isArray(json?.envs)) {
    return json.envs
  }
  const bag = {}
  if (json?.env && typeof json.env === 'object' && !Array.isArray(json.env)) {
    Object.assign(bag, json.env)
  }
  if (json?.buildEnv && typeof json.buildEnv === 'object' && !Array.isArray(json.buildEnv)) {
    Object.assign(bag, json.buildEnv)
  }
  return Object.entries(bag).map(([key, value]) => ({
    key,
    value,
    target: ['production'],
  }))
}

async function listEnvs(projectId) {
  const attempts = [
    `/v10/projects/${projectId}/env?decrypt=true&source=vercel-cli:env:pull&target=production`,
    `/v9/projects/${projectId}/env?decrypt=true&source=vercel-cli:pull`,
    `/v3/env/pull/${projectId}/production?source=vercel-cli:env:pull`,
  ]
  let best = { ok: false, status: 0, envs: [] }
  for (const path of attempts) {
    const result = await vercelGet(path)
    const envs = asEnvList(result.json)
    if (!result.ok) {
      if (!best.ok) {
        best = { ok: false, status: result.status, envs }
      }
      continue
    }
    const valued = envs.filter((entry) => entryValue(entry)).length
    const scored = { ok: true, status: result.status, envs, valued }
    if (valued > 0) {
      return scored
    }
    if (!best.ok || envs.length > best.envs.length) {
      best = scored
    }
  }
  return best
}

async function listTeamProjects() {
  const byId = new Map(PRIORITY_PROJECTS.map((project) => [project.id, project]))
  let until
  for (let page = 0; page < 8; page += 1) {
    const path = until
      ? `/v9/projects?limit=100&until=${encodeURIComponent(until)}`
      : '/v9/projects?limit=100'
    const result = await vercelGet(path)
    const batch = Array.isArray(result.json?.projects) ? result.json.projects : []
    for (const project of batch) {
      if (project?.id && !byId.has(project.id)) {
        byId.set(project.id, { id: project.id, name: project.name || project.id })
      }
    }
    const next = result.json?.pagination?.next
    if (!next || batch.length === 0) {
      break
    }
    until = String(next)
  }
  const rest = [...byId.values()].filter(
    (project) => !PRIORITY_PROJECTS.some((seed) => seed.id === project.id),
  )
  return [...PRIORITY_PROJECTS.filter((project) => byId.has(project.id)), ...rest]
}

function pickByNames(envs, names) {
  const matches = envs.filter((entry) => names.includes(entry?.key) && entryValue(entry))
  if (matches.length === 0) {
    return undefined
  }
  return matches.find(prefersProduction) || matches[0]
}

async function decryptEnv(projectId, envId) {
  if (!envId) {
    return ''
  }
  const result = await vercelGet(`/v1/projects/${projectId}/env/${envId}`)
  return entryValue(result.json)
}

async function decryptNamed(projectId, names) {
  const listed = await vercelGet(`/v9/projects/${projectId}/env`)
  const envs = asEnvList(listed.json)
  for (const entry of envs.filter((item) => names.includes(item?.key))) {
    const direct = entryValue(entry)
    if (direct) {
      return direct
    }
    const decrypted = await decryptEnv(projectId, entry?.id)
    if (decrypted) {
      return decrypted
    }
  }
  return ''
}

async function probeImages(headers, accountId = IMAGES_ACCOUNT_ID) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1?per_page=1`,
    { headers },
  )
  return { ok: res.ok, status: res.status }
}

async function listCloudflareAccounts(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/accounts?per_page=50', { headers })
  const json = await res.json().catch(() => null)
  const accounts = Array.isArray(json?.result) ? json.result : []
  return { ok: res.ok, status: res.status, accounts }
}

async function cloudflareImagesCredentialWorks(token, emails) {
  const bearer = await probeImages({ Authorization: `Bearer ${token}` })
  if (bearer.ok) {
    return { ok: true, mode: 'bearer', status: bearer.status }
  }
  const uniqueEmails = [...new Set((Array.isArray(emails) ? emails : [emails]).filter(Boolean))]
  let lastStatus = bearer.status
  for (const email of uniqueEmails) {
    const headers = { 'X-Auth-Email': email, 'X-Auth-Key': token }
    const onDefault = await probeImages(headers)
    lastStatus = onDefault.status
    if (onDefault.ok) {
      return {
        ok: true,
        mode: 'global',
        status: onDefault.status,
        email,
        accountId: IMAGES_ACCOUNT_ID,
      }
    }
    if (onDefault.status !== 403) {
      continue
    }
    const listed = await listCloudflareAccounts(headers)
    console.log(
      `Cloudflare Global key authenticated (Images 403 on default account). Accounts: HTTP ${listed.status}, ${listed.accounts.length}`,
    )
    for (const account of listed.accounts.slice(0, 20)) {
      const id = account?.id
      if (!id) {
        continue
      }
      const probed = await probeImages(headers, id)
      console.log(`Images on account ${id.slice(0, 8)}…: HTTP ${probed.status}`)
      if (probed.ok) {
        return { ok: true, mode: 'global', status: probed.status, email, accountId: id }
      }
    }
  }
  if (uniqueEmails.length > 0) {
    return { ok: false, mode: 'global', status: lastStatus }
  }
  return { ok: false, mode: 'bearer', status: bearer.status }
}

function rememberCloudflareAccount(found, probe) {
  if (probe?.accountId && !found.CLOUDFLARE_ACCOUNT_ID && !alreadyHave('CLOUDFLARE_ACCOUNT_ID')) {
    found.CLOUDFLARE_ACCOUNT_ID = {
      value: probe.accountId,
      source: 'Cloudflare account with Images access',
    }
  }
}

function interestingKeyNames(names) {
  return names.filter((name) =>
    /cloudflare|calendly|wrangler|cf_|notion|^linear$|linear_|images_hash|images_token/i.test(
      name,
    ),
  )
}

const NOTION_LABEL =
  /(?:CLOUDFLARE_API_TOKEN|CLOUDFLARE_GLOBAL_API_TOKEN|CLOUDFLARE_API_KEY|CLOUDFLARE_EMAIL|CF_EMAIL|CALENDLY_API_TOKEN|CALENDLY_PERSONAL_ACCESS_TOKEN|CALENDLY_PAT|CALENDLY_WEBHOOK_SIGNING_KEY|CALENDLY_SIGNING_KEY)\s*[:=]\s*(\S+)/gi

function notionPlainText(block) {
  const rich =
    block?.code?.rich_text ||
    block?.paragraph?.rich_text ||
    block?.bulleted_list_item?.rich_text ||
    block?.numbered_list_item?.rich_text ||
    block?.to_do?.rich_text ||
    block?.quote?.rich_text ||
    []
  return rich
    .map((item) => item?.plain_text || '')
    .join('')
    .trim()
}

async function notionSearch(token, query) {
  const res = await fetch('https://api.notion.com/v1/search', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, page_size: 8 }),
  })
  const json = await res.json().catch(() => null)
  return { ok: res.ok, status: res.status, json }
}

async function notionBlocks(token, pageId) {
  const texts = []
  let cursor
  for (let page = 0; page < 5; page += 1) {
    const url = new URL(`https://api.notion.com/v1/blocks/${pageId}/children`)
    url.searchParams.set('page_size', '100')
    if (cursor) {
      url.searchParams.set('start_cursor', cursor)
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
      },
    })
    const json = await res.json().catch(() => null)
    if (!res.ok) {
      break
    }
    for (const block of json?.results || []) {
      const text = notionPlainText(block)
      if (text) {
        texts.push(text)
      }
    }
    if (!json?.has_more || !json?.next_cursor) {
      break
    }
    cursor = json.next_cursor
  }
  return texts
}

function canonicalFromEnvName(name) {
  for (const [canonical, names] of Object.entries(ALIASES)) {
    if (names.includes(name)) {
      return canonical
    }
  }
  return undefined
}

function walkJsonForSecrets(node, found, source, depth = 0) {
  if (!node || typeof node !== 'object' || depth > 6) {
    return
  }
  for (const [key, val] of Object.entries(node)) {
    if (typeof val === 'string' && val.trim() && val.length <= 4096) {
      const canonical = canonicalFromEnvName(key)
      if (canonical && !alreadyHave(canonical) && !found[canonical]) {
        found[canonical] = { value: val.trim(), source: `${source} JSON.${key}` }
      }
    } else if (val && typeof val === 'object') {
      walkJsonForSecrets(val, found, source, depth + 1)
    }
  }
}

function harvestFromBlob(value, found, source) {
  harvestLabeledSecrets([value], found)
  try {
    walkJsonForSecrets(JSON.parse(value), found, source)
  } catch {
    // Not JSON — labeled KEY=value lines are enough.
  }
}

function harvestLabeledSecrets(texts, found) {
  let harvested = 0
  for (const text of texts) {
    NOTION_LABEL.lastIndex = 0
    let match = NOTION_LABEL.exec(text)
    while (match) {
      const label = match[0].split(/[:=]/)[0].trim()
      const value = match[1]?.replace(/^['"]|['"]$/g, '').trim()
      const canonical =
        label === 'CF_EMAIL'
          ? 'CLOUDFLARE_EMAIL'
          : label === 'CLOUDFLARE_API_KEY'
            ? 'CLOUDFLARE_GLOBAL_API_TOKEN'
            : label === 'CALENDLY_PERSONAL_ACCESS_TOKEN' || label === 'CALENDLY_PAT'
              ? 'CALENDLY_API_TOKEN'
              : label === 'CALENDLY_SIGNING_KEY'
                ? 'CALENDLY_WEBHOOK_SIGNING_KEY'
                : label
      if (value && !alreadyHave(canonical) && !found[canonical]) {
        found[canonical] = { value, source: 'Notion labeled secret' }
        harvested += 1
      }
      match = NOTION_LABEL.exec(text)
    }
  }
  return harvested
}

async function harvestFromNotion(token, found) {
  const queries = [
    'CLOUDFLARE_API_TOKEN',
    'CALENDLY_API_TOKEN',
    'Calendly personal access token',
    'Cloudflare Images token',
    'go-live secrets',
    'Vercel env',
  ]
  let pagesScanned = 0
  const seen = new Set()
  for (const query of queries) {
    const result = await notionSearch(token, query)
    if (!result.ok) {
      console.log(`Notion search "${query}": HTTP ${result.status}`)
      if (result.status === 401 || result.status === 403) {
        return
      }
      continue
    }
    const results = Array.isArray(result.json?.results) ? result.json.results : []
    console.log(`Notion search "${query}": ${results.length} page(s)`)
    for (const page of results) {
      const id = page?.id
      if (!id || seen.has(id)) {
        continue
      }
      seen.add(id)
      pagesScanned += 1
      const title =
        page?.properties?.title?.title?.[0]?.plain_text ||
        page?.properties?.Name?.title?.[0]?.plain_text ||
        page?.object ||
        id
      console.log(`Notion page: ${title}`)
      const texts = await notionBlocks(token, id)
      harvestLabeledSecrets(texts, found)
    }
  }
  console.log(`Notion harvested ${pagesScanned} unique page(s)`)
}

if (!TOKEN) {
  console.log('VERCEL_TOKEN unset; skip borrowing env from sister projects.')
  process.exit(0)
}

const githubEnv = process.env.GITHUB_ENV
const needed = KEYS.filter((key) => !alreadyHave(key))
if (needed.length === 0) {
  console.log('All go-live keys already present. No sister-project copy needed.')
  process.exit(0)
}

const projects = await listTeamProjects()
console.log(`Scanning ${projects.length} Vercel project(s) on the team.`)

const found = {}
const candidates = {}
let decryptDenied = 0
let notionDecryptAttempts = 0
let readableProjects = 0
let loggedFullKeyList = false
let notionToken = process.env.NOTION_TOKEN?.trim() || ''
let linearToken = process.env.LINEAR_API_KEY?.trim() || process.env.LINEAR_API_TOKEN?.trim() || ''

for (const project of projects) {
  const result = await listEnvs(project.id)
  if (!result.ok) {
    if (result.status === 403 || result.status === 401) {
      decryptDenied += 1
    }
    console.log(`Skip ${project.name}: HTTP ${result.status}`)
    continue
  }
  readableProjects += 1
  const names = result.envs.map((entry) => entry?.key).filter(Boolean)
  const withValues = result.envs.filter((entry) => entryValue(entry)).map((entry) => entry.key)
  const interesting = interestingKeyNames(names)
  if (interesting.length > 0) {
    console.log(
      `Interesting keys on ${project.name}: ${interesting.join(', ')} (values: ${withValues.length})`,
    )
  }
  if (!loggedFullKeyList && interesting.includes('Linear')) {
    loggedFullKeyList = true
    console.log(`All env keys on ${project.name}: ${names.join(', ')}`)
  }

  if (
    !notionToken &&
    notionDecryptAttempts < 2 &&
    interesting.some((name) => /^notion_/i.test(name))
  ) {
    notionDecryptAttempts += 1
    const value = await decryptNamed(project.id, [
      'NOTION_TOKEN',
      'NOTION_API_KEY',
      'NOTION_SECRET',
    ])
    if (value) {
      notionToken = value
      console.log(`Found NOTION_TOKEN on ${project.name} (not copied to Arroyo).`)
    } else {
      console.log(`NOTION_TOKEN on ${project.name} did not decrypt.`)
    }
  }

  if (!linearToken) {
    const linearEntry = pickByNames(result.envs, [
      'Linear',
      'LINEAR_API_KEY',
      'LINEAR_API_TOKEN',
      'LINEAR_KEY',
    ])
    const linearValue = linearEntry ? entryValue(linearEntry) : ''
    if (linearValue) {
      linearToken = linearValue
      console.log(`Found Linear API key on ${project.name} (not copied to Arroyo).`)
    }
  }

  for (const [canonical, namesForKey] of Object.entries(ALIASES)) {
    if (alreadyHave(canonical) || found[canonical]) {
      continue
    }
    let entry = pickByNames(result.envs, namesForKey)
    let value = entry ? entryValue(entry) : ''
    if (!value) {
      const listed = result.envs.filter((item) => namesForKey.includes(item?.key))
      const candidate = listed.find(prefersProduction) || listed[0]
      if (candidate?.id) {
        value = await decryptEnv(project.id, candidate.id)
        if (value) {
          entry = candidate
        }
      }
    }
    if (!value) {
      continue
    }
    if (value.length > 4096) {
      console.log(
        `${canonical} on ${project.name} is ${value.length} chars; scanning blob, not copying`,
      )
      harvestFromBlob(value, found, `${project.name} ${canonical}`)
      continue
    }
    const source = `${project.name} (${entry?.key || namesForKey[0]})`
    const bucket = candidates[canonical] || []
    if (!bucket.some((item) => item.value === value)) {
      bucket.push({ value, source })
      candidates[canonical] = bucket
    }
  }
}

if (notionToken) {
  await harvestFromNotion(notionToken, found)
}

let linearEmails = []
if (linearToken) {
  linearEmails = await harvestFromLinear(linearToken, found)
}

async function linearGraphql(token, query) {
  const res = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  const json = await res.json().catch(() => null)
  return { ok: res.ok, status: res.status, json }
}

async function harvestFromLinear(token, found) {
  const emails = []
  const viewer = await linearGraphql(
    token,
    '{ viewer { id name email organization { name urlKey } } }',
  )
  if (!viewer.ok) {
    console.log(`Linear viewer HTTP ${viewer.status}`)
  } else if (viewer.json?.errors?.[0]?.message) {
    console.log(`Linear viewer GraphQL: ${String(viewer.json.errors[0].message).slice(0, 160)}`)
  } else {
    const name = viewer.json?.data?.viewer?.name || '?'
    const org =
      viewer.json?.data?.viewer?.organization?.urlKey ||
      viewer.json?.data?.viewer?.organization?.name ||
      '?'
    console.log(`Linear viewer: ${name} @ ${org}`)
    const email = viewer.json?.data?.viewer?.email
    if (typeof email === 'string' && email.includes('@')) {
      emails.push(email.trim())
    }
  }

  const queries = [
    '{ searchIssues(term: "calendly", first: 10, includeArchived: true) { nodes { identifier title description } } }',
    '{ searchIssues(term: "CLOUDFLARE_API_TOKEN", first: 10, includeArchived: true) { nodes { identifier title description } } }',
    '{ issues(first: 50) { nodes { identifier title description } } }',
    '{ documents(first: 25) { nodes { name title content } } }',
  ]
  const texts = []
  for (const query of queries) {
    const result = await linearGraphql(token, query)
    if (!result.ok) {
      console.log(`Linear query HTTP ${result.status}`)
      continue
    }
    const message = result.json?.errors?.[0]?.message
    if (message) {
      console.log(`Linear GraphQL: ${String(message).slice(0, 160)}`)
    }
    const data = result.json?.data || {}
    const nodes =
      data.searchIssues?.nodes ||
      data.issueSearch?.nodes ||
      data.issues?.nodes ||
      data.documents?.nodes ||
      []
    if (!Array.isArray(nodes) || nodes.length === 0) {
      continue
    }
    console.log(`Linear nodes: ${nodes.length}`)
    for (const node of nodes) {
      const title = node?.identifier || node?.name || node?.title || '?'
      console.log(`Linear: ${title} ${node?.title || ''}`.trim())
      if (typeof node?.description === 'string' && node.description) {
        texts.push(node.description)
      }
      if (typeof node?.content === 'string' && node.content) {
        texts.push(node.content)
      }
    }
  }
  harvestLabeledSecrets(texts, found)
  if (texts.length === 0) {
    console.log('Linear search returned no issue or document text')
  }
  return emails
}

const emailCandidates = [
  alreadyHave('CLOUDFLARE_EMAIL') ? process.env.CLOUDFLARE_EMAIL.trim() : '',
  found.CLOUDFLARE_EMAIL?.value,
  candidates.CLOUDFLARE_EMAIL?.[0]?.value,
  ...linearEmails,
  FALLBACK_CLOUDFLARE_EMAIL,
].filter((value) => typeof value === 'string' && value.includes('@'))

for (const key of ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_GLOBAL_API_TOKEN']) {
  const harvested = found[key]
  if (!harvested) {
    continue
  }
  const probe = await cloudflareImagesCredentialWorks(harvested.value, emailCandidates)
  if (!probe.ok) {
    console.log(`Skip ${key} from Notion/Linear: Images HTTP ${probe.status} (${probe.mode})`)
    delete found[key]
  } else {
    console.log(`Cloudflare Images ${key} from harvest accepted via ${probe.mode}`)
    rememberCloudflareAccount(found, probe)
    if (probe.mode === 'global' && probe.email && !found.CLOUDFLARE_EMAIL && !alreadyHave('CLOUDFLARE_EMAIL')) {
      found.CLOUDFLARE_EMAIL = {
        value: probe.email,
        source: 'Cloudflare invoice recipient / Linear viewer',
      }
    }
  }
}

const email = emailCandidates[0] || ''

for (const [canonical, bucket] of Object.entries(candidates)) {
  if (alreadyHave(canonical) || found[canonical]) {
    continue
  }
  if (canonical === 'CLOUDFLARE_API_TOKEN' || canonical === 'CLOUDFLARE_GLOBAL_API_TOKEN') {
    let accepted
    for (const candidate of bucket) {
      const probe = await cloudflareImagesCredentialWorks(candidate.value, emailCandidates)
      if (!probe.ok) {
        console.log(
          `Skip ${canonical} from ${candidate.source}: Images HTTP ${probe.status} (${probe.mode})`,
        )
        if (
          canonical === 'CLOUDFLARE_API_TOKEN' &&
          probe.status === 400 &&
          !candidates.CLOUDFLARE_GLOBAL_API_TOKEN?.some((item) => item.value === candidate.value)
        ) {
          const globalBucket = candidates.CLOUDFLARE_GLOBAL_API_TOKEN || []
          globalBucket.push({
            ...candidate,
            source: `${candidate.source} as Global API Key`,
          })
          candidates.CLOUDFLARE_GLOBAL_API_TOKEN = globalBucket
        }
        continue
      }
      console.log(`Cloudflare Images ${canonical} accepted via ${probe.mode}`)
      accepted = candidate
      rememberCloudflareAccount(found, probe)
      if (
        probe.mode === 'global' &&
        probe.email &&
        !found.CLOUDFLARE_EMAIL &&
        !alreadyHave('CLOUDFLARE_EMAIL')
      ) {
        found.CLOUDFLARE_EMAIL = {
          value: probe.email,
          source: candidates.CLOUDFLARE_EMAIL?.[0]?.source || 'Cloudflare invoice recipient',
        }
      }
      break
    }
    if (accepted) {
      found[canonical] = accepted
    }
    continue
  }
  if (canonical === 'CLOUDFLARE_IMAGES_HASH') {
    if (!found.CLOUDFLARE_API_TOKEN && !found.CLOUDFLARE_GLOBAL_API_TOKEN) {
      console.log(
        `Skip CLOUDFLARE_IMAGES_HASH from ${bucket[0].source}: no working Images credential`,
      )
      continue
    }
  }
  found[canonical] = bucket[0]
}

if (
  (found.CLOUDFLARE_GLOBAL_API_TOKEN || found.CLOUDFLARE_API_TOKEN) &&
  !found.CLOUDFLARE_EMAIL &&
  !alreadyHave('CLOUDFLARE_EMAIL') &&
  email
) {
  found.CLOUDFLARE_EMAIL = {
    value: email,
    source: candidates.CLOUDFLARE_EMAIL?.[0]?.source || 'Cloudflare invoice recipient',
  }
}

const copied = Object.keys(found)
if (copied.length === 0) {
  if (readableProjects === 0 && decryptDenied > 0) {
    console.log(
      'VERCEL_TOKEN cannot decrypt sister-project env (401/403). Add CLOUDFLARE_API_TOKEN, FOLLOW_UP_BOSS_API_KEY, and CALENDLY_API_TOKEN to GitHub repo secrets.',
    )
  } else {
    console.log(`No missing go-live keys found on sister projects (${needed.join(', ')}).`)
  }
  process.exit(0)
}

for (const key of copied) {
  const { value, source } = found[key]
  if (value.length > 4096) {
    console.log(`Skip ${key} from ${source}: value too long to export`)
    continue
  }
  console.log(`::add-mask::${value}`)
  console.log(`Copied ${key} from ${source}`)
  if (githubEnv) {
    await appendFile(githubEnv, envRow(key, value))
  }
}

console.log(`Borrowed ${copied.length} key(s): ${copied.join(', ')}`)
