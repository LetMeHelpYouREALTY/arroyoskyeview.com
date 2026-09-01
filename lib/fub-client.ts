import {
  buildCalendlyFubEvent,
  FUB_BUYER_WEBSITE_REGISTRATION_PLAN_ID,
  type CalendlyLeadInput,
} from '@/lib/fub-events'

export type FollowUpBossSyncResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'upstream'; status?: number }

function firstEnv(
  ...names: Array<
    | 'FOLLOW_UP_BOSS_API_KEY'
    | 'FUB_API_KEY'
    | 'FUB_X_SYSTEM_KEY'
    | 'FUB_SYSTEM_KEY'
  >
): string | undefined {
  for (const name of names) {
    let value: string | undefined
    switch (name) {
      case 'FOLLOW_UP_BOSS_API_KEY':
        value = process.env.FOLLOW_UP_BOSS_API_KEY
        break
      case 'FUB_API_KEY':
        value = process.env.FUB_API_KEY
        break
      case 'FUB_X_SYSTEM_KEY':
        value = process.env.FUB_X_SYSTEM_KEY
        break
      case 'FUB_SYSTEM_KEY':
        value = process.env.FUB_SYSTEM_KEY
        break
      default: {
        const _exhaustive: never = name
        return _exhaustive
      }
    }
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }
  return undefined
}

/** FOLLOW_UP_BOSS_API_KEY, or FUB_API_KEY (sister-site / Vercel alias). */
export function followUpBossApiKey(): string | undefined {
  return firstEnv('FOLLOW_UP_BOSS_API_KEY', 'FUB_API_KEY')
}

export function isFollowUpBossConfigured(): boolean {
  return Boolean(followUpBossApiKey())
}

function fubAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
}

function fubHeaders(apiKey: string): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: fubAuthHeader(apiKey),
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-System': 'arroyoskyeview.com',
  }
  const systemKey = firstEnv('FUB_X_SYSTEM_KEY', 'FUB_SYSTEM_KEY')
  if (systemKey) {
    headers['X-System-Key'] = systemKey
  }
  return headers
}

function personIdFromEventResponse(body: unknown): number | undefined {
  if (!body || typeof body !== 'object') {
    return undefined
  }
  const record = body as { person?: { id?: unknown }; personId?: unknown }
  if (typeof record.personId === 'number') {
    return record.personId
  }
  if (typeof record.person?.id === 'number') {
    return record.person.id
  }
  return undefined
}

async function applyBuyerRegistrationPlan(
  apiKey: string,
  personId: number,
): Promise<void> {
  await fetch('https://api.followupboss.com/v1/actionPlansPeople', {
    method: 'POST',
    headers: fubHeaders(apiKey),
    body: JSON.stringify({
      personId,
      actionPlanId: FUB_BUYER_WEBSITE_REGISTRATION_PLAN_ID,
    }),
  })
}

/**
 * POST a Calendly booking to the Follow Up Boss Events API as a Registration,
 * assign Dr. Jan Duffy, then start action plan 4
 * (“Buyer New Lead Website Registration”).
 */
export async function sendCalendlyLeadToFollowUpBoss(
  input: CalendlyLeadInput,
): Promise<FollowUpBossSyncResult> {
  const apiKey = followUpBossApiKey()
  if (!apiKey) {
    return { ok: false, reason: 'not-configured' }
  }

  const payload = buildCalendlyFubEvent(input)
  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: fubHeaders(apiKey),
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    return { ok: false, reason: 'upstream', status: response.status }
  }

  const body: unknown = await response.json().catch(() => null)
  const personId = personIdFromEventResponse(body)
  if (personId && payload.type === 'Registration') {
    try {
      await applyBuyerRegistrationPlan(apiKey, personId)
    } catch {
      // Registration is already in FUB; Lead Flow may still start the plan.
    }
  }

  return { ok: true }
}

export type FollowUpBossCalendlySourceProbe = {
  ok: boolean
  latestCreated: string | null
  /** True when a Calendly-sourced person cites arroyoskyeview.com (no PII). */
  fromThisSite: boolean
  fromThisSiteCreated: string | null
}

type FubPersonRecord = {
  created?: unknown
  source?: unknown
  sourceUrl?: unknown
  tags?: unknown
}

function isFubPersonRecord(value: unknown): value is FubPersonRecord {
  return Boolean(value) && typeof value === 'object'
}

function personStringParts(person: FubPersonRecord): string[] {
  const parts: string[] = []
  if (typeof person.source === 'string') {
    parts.push(person.source)
  }
  if (typeof person.sourceUrl === 'string') {
    parts.push(person.sourceUrl)
  }
  if (Array.isArray(person.tags)) {
    for (const tag of person.tags) {
      if (typeof tag === 'string') {
        parts.push(tag)
      }
    }
  }
  return parts
}

function personMentionsArroyo(person: FubPersonRecord): boolean {
  return personStringParts(person)
    .join(' ')
    .toLowerCase()
    .includes('arroyoskyeview')
}

function personHasCalendlySignal(person: FubPersonRecord): boolean {
  return personStringParts(person).join(' ').toLowerCase().includes('calendly')
}

/** Events API writes source arroyoskyeview.com + Calendly tags, not “Calendly - …”. */
function personIsArroyoCalendly(person: FubPersonRecord): boolean {
  return personMentionsArroyo(person) && personHasCalendlySignal(person)
}

async function fetchRecentCalendlyPeople(
  apiKey: string,
  source: string,
): Promise<FubPersonRecord[]> {
  const url = new URL('https://api.followupboss.com/v1/people')
  url.searchParams.set('limit', '20')
  url.searchParams.set('sort', '-created')
  url.searchParams.set('source', source)
  const response = await fetch(url, {
    headers: fubHeaders(apiKey),
    signal: AbortSignal.timeout(8000),
  })
  if (!response.ok) {
    return []
  }
  const body: unknown = await response.json().catch(() => null)
  if (
    !body ||
    typeof body !== 'object' ||
    !Array.isArray((body as { people?: unknown }).people)
  ) {
    return []
  }
  return (body as { people: unknown[] }).people.filter(isFubPersonRecord)
}

/**
 * Public go-live evidence only — created timestamp, never names or emails.
 * Native FUB↔Calendly can create people even when this site has no PAT.
 * Sister sites often source as “Calendly - drjanetduffy.com”; embed utm
 * may source this site as “Calendly - arroyoskyeview.com”. Events API
 * registrations use source arroyoskyeview.com plus a Calendly tag.
 */
export async function probeFollowUpBossCalendlySource(): Promise<FollowUpBossCalendlySourceProbe | null> {
  const apiKey = followUpBossApiKey()
  if (!apiKey) {
    return null
  }

  try {
    const [generic, fromSiteSource, fromSiteWebsite] = await Promise.all([
      fetchRecentCalendlyPeople(apiKey, 'Calendly'),
      fetchRecentCalendlyPeople(apiKey, 'Calendly - arroyoskyeview.com'),
      fetchRecentCalendlyPeople(apiKey, 'arroyoskyeview.com'),
    ])
    const people = [...fromSiteSource, ...fromSiteWebsite, ...generic]
    const created = people[0]?.created
    const fromSite =
      people.find(personIsArroyoCalendly) ??
      fromSiteSource[0] ??
      fromSiteWebsite.find(personHasCalendlySignal)
    const fromSiteCreated = fromSite?.created
    return {
      ok:
        generic.length > 0 ||
        fromSiteSource.length > 0 ||
        fromSiteWebsite.length > 0,
      latestCreated: typeof created === 'string' ? created : null,
      fromThisSite: Boolean(fromSite),
      fromThisSiteCreated:
        typeof fromSiteCreated === 'string' ? fromSiteCreated : null,
    }
  } catch {
    return {
      ok: false,
      latestCreated: null,
      fromThisSite: false,
      fromThisSiteCreated: null,
    }
  }
}
