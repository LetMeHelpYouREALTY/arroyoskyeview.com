import { NextResponse } from 'next/server'
import {
  isCalendlyInviteeUri,
  isCalendlyScheduledEventUri,
} from '@/lib/calendly-invitee'
import {
  isFollowUpBossConfigured,
  sendCalendlyLeadToFollowUpBoss,
} from '@/lib/fub-client'
import { getUserIdentifier } from '@/lib/rate-limiter'

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 8
const hits = new Map<string, number[]>()

function allowRequest(identifier: string): boolean {
  const now = Date.now()
  const recent = (hits.get(identifier) ?? []).filter(
    (ts) => now - ts < WINDOW_MS,
  )
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(identifier, recent)
    return false
  }
  recent.push(now)
  hits.set(identifier, recent)
  return true
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function GET() {
  const followUpBoss = isFollowUpBossConfigured()
  return NextResponse.json({
    ok: true,
    configured: followUpBoss,
    followUpBoss,
  })
}

type ConfirmedBody = {
  email?: unknown
  name?: unknown
  phone?: unknown
  inviteeUri?: unknown
  eventUri?: unknown
  company?: unknown
}

export async function POST(request: Request) {
  if (!isFollowUpBossConfigured()) {
    return NextResponse.json(
      { error: 'Follow Up Boss is not configured' },
      { status: 503 },
    )
  }

  if (!allowRequest(getUserIdentifier(request))) {
    return NextResponse.json({ error: 'Too many attempts' }, { status: 429 })
  }

  let body: ConfirmedBody
  try {
    body = (await request.json()) as ConfirmedBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (typeof body.company === 'string' && body.company.trim()) {
    return NextResponse.json({ ok: true, queued: false })
  }

  const inviteeUri =
    typeof body.inviteeUri === 'string' ? body.inviteeUri.trim() : ''
  const eventUri =
    typeof body.eventUri === 'string' ? body.eventUri.trim() : undefined
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : undefined

  if (!isCalendlyInviteeUri(inviteeUri)) {
    return NextResponse.json({ error: 'Booking URI required' }, { status: 400 })
  }
  if (eventUri && !isCalendlyScheduledEventUri(eventUri)) {
    return NextResponse.json({ error: 'Invalid event URI' }, { status: 400 })
  }
  if (!isEmail(email) || name.length < 2) {
    return NextResponse.json(
      { error: 'Name and email required' },
      { status: 400 },
    )
  }

  const result = await sendCalendlyLeadToFollowUpBoss({
    event: 'invitee.created',
    inviteeEmail: email,
    inviteeName: name,
    inviteePhone: phone,
    eventType: 'Buyer consultation',
    questionsAndAnswers: [
      { question: 'Calendly invitee', answer: inviteeUri },
      ...(eventUri ? [{ question: 'Calendly event', answer: eventUri }] : []),
    ],
  })
  if (!result.ok) {
    return NextResponse.json(
      { error: 'Follow Up Boss sync failed' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, queued: true })
}
