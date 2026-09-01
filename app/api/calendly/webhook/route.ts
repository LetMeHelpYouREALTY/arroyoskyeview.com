import { start } from 'workflow/api'
import { NextResponse } from 'next/server'
import { parseCalendlyLeadInput, verifyCalendlyWebhookSignature } from '@/lib/calendly-webhook'
import { processCalendlyLead } from '@/workflows/calendly-lead'

export async function GET() {
  const signingKey = Boolean(process.env.CALENDLY_WEBHOOK_SIGNING_KEY?.trim())
  const fubKey = Boolean(process.env.FOLLOW_UP_BOSS_API_KEY?.trim())
  return NextResponse.json({
    ok: true,
    configured: signingKey && fubKey,
  })
}

export async function POST(request: Request) {
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY?.trim()
  const fubKey = process.env.FOLLOW_UP_BOSS_API_KEY?.trim()
  if (!signingKey || !fubKey) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const rawBody = await request.text()
  const signature = request.headers.get('Calendly-Webhook-Signature')

  if (!verifyCalendlyWebhookSignature(rawBody, signature, signingKey)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let body: Parameters<typeof parseCalendlyLeadInput>[0]
  try {
    body = JSON.parse(rawBody) as Parameters<typeof parseCalendlyLeadInput>[0]
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const lead = parseCalendlyLeadInput(body)
  if (!lead) {
    return NextResponse.json({ ok: true, skipped: true })
  }

  await start(processCalendlyLead, [lead])

  return NextResponse.json({ ok: true, queued: true })
}
