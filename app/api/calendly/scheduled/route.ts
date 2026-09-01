import { NextResponse } from 'next/server'
import { calendlyLeadFromInviteeUri, isCalendlyApiConfigured } from '@/lib/calendly-invitee'
import { isFollowUpBossConfigured, sendCalendlyLeadToFollowUpBoss } from '@/lib/fub-client'

function isConfigured(): boolean {
  return isCalendlyApiConfigured() && isFollowUpBossConfigured()
}

export async function GET() {
  const calendlyApiToken = isCalendlyApiConfigured()
  const followUpBoss = isFollowUpBossConfigured()
  return NextResponse.json({
    ok: true,
    configured: calendlyApiToken && followUpBoss,
    calendlyApiToken,
    followUpBoss,
  })
}

type ScheduledBody = {
  inviteeUri?: unknown
  eventUri?: unknown
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json({ error: 'Invitee lookup not configured' }, { status: 503 })
  }

  let body: ScheduledBody
  try {
    body = (await request.json()) as ScheduledBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const inviteeUri = typeof body.inviteeUri === 'string' ? body.inviteeUri.trim() : ''
  const eventUri = typeof body.eventUri === 'string' ? body.eventUri.trim() : undefined

  const lead = await calendlyLeadFromInviteeUri(inviteeUri, eventUri)
  if (!lead) {
    return NextResponse.json({ error: 'Unable to resolve invitee' }, { status: 400 })
  }

  const result = await sendCalendlyLeadToFollowUpBoss(lead)
  if (!result.ok) {
    return NextResponse.json({ error: 'Follow Up Boss sync failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true, queued: true })
}
