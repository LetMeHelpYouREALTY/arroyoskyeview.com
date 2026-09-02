import { NextResponse } from 'next/server'
import {
  calendlyLeadFromInviteeUri,
  isCalendlyApiConfigured,
  isCalendlyInviteeUri,
  isCalendlyScheduledEventUri,
} from '@/lib/calendly-invitee'
import {
  isFollowUpBossConfigured,
  sendCalendlyLeadToFollowUpBoss,
} from '@/lib/fub-client'

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function GET() {
  const calendlyApiToken = isCalendlyApiConfigured()
  const followUpBoss = isFollowUpBossConfigured()
  return NextResponse.json({
    ok: true,
    configured: followUpBoss && calendlyApiToken,
    calendlyApiToken,
    followUpBoss,
    embedEmailCapture: followUpBoss,
  })
}

type ScheduledBody = {
  inviteeUri?: unknown
  eventUri?: unknown
  email?: unknown
  name?: unknown
  phone?: unknown
}

export async function POST(request: Request) {
  if (!isFollowUpBossConfigured()) {
    return NextResponse.json(
      { error: 'Follow Up Boss is not configured' },
      { status: 503 },
    )
  }

  let body: ScheduledBody
  try {
    body = (await request.json()) as ScheduledBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const inviteeUri =
    typeof body.inviteeUri === 'string' ? body.inviteeUri.trim() : ''
  const eventUri =
    typeof body.eventUri === 'string' ? body.eventUri.trim() : undefined
  if (!isCalendlyInviteeUri(inviteeUri)) {
    return NextResponse.json({ error: 'Invalid invitee URI' }, { status: 400 })
  }
  if (eventUri && !isCalendlyScheduledEventUri(eventUri)) {
    return NextResponse.json({ error: 'Invalid event URI' }, { status: 400 })
  }

  const fromPat = isCalendlyApiConfigured()
    ? await calendlyLeadFromInviteeUri(inviteeUri, eventUri)
    : null
  if (fromPat) {
    const result = await sendCalendlyLeadToFollowUpBoss(fromPat)
    if (!result.ok) {
      return NextResponse.json(
        { error: 'Follow Up Boss sync failed' },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true, queued: true })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : undefined
  if (!isEmail(email)) {
    return NextResponse.json(
      {
        error: isCalendlyApiConfigured()
          ? 'Unable to resolve invitee'
          : 'Invitee lookup not configured',
      },
      { status: isCalendlyApiConfigured() ? 400 : 503 },
    )
  }

  const result = await sendCalendlyLeadToFollowUpBoss({
    event: 'invitee.created',
    inviteeEmail: email,
    inviteeName: name.length >= 2 ? name : email,
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
