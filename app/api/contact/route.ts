import { NextResponse } from 'next/server'
import {
  buildContactFubEvent,
  sendFollowUpBossEvent,
  type FubInquiryType,
} from '@/lib/follow-up-boss'

type ContactBody = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  formName?: unknown
  sourceUrl?: unknown
  inquiryType?: unknown
  company?: unknown
  website?: unknown
}

const INQUIRY_TYPES: FubInquiryType[] = [
  'General Inquiry',
  'Seller Inquiry',
  'Property Inquiry',
  'Registration',
]

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function resolveSourceUrl(body: ContactBody, request: Request): string | undefined {
  const fromBody = asTrimmedString(body.sourceUrl)
  if (fromBody) return fromBody
  const referer = request.headers.get('referer')
  return referer?.trim() || undefined
}

function parseInquiryType(value: unknown): FubInquiryType | undefined {
  if (typeof value !== 'string') return undefined
  return INQUIRY_TYPES.includes(value as FubInquiryType)
    ? (value as FubInquiryType)
    : undefined
}

export async function POST(request: Request) {
  let body: ContactBody
  try {
    body = (await request.json()) as ContactBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const honeypot = asTrimmedString(body.company) || asTrimmedString(body.website)
  if (honeypot) {
    return NextResponse.json({ success: true })
  }

  const firstName = asTrimmedString(body.firstName)
  const lastName = asTrimmedString(body.lastName)
  const email = asTrimmedString(body.email)
  const phone = asTrimmedString(body.phone)
  const message = asTrimmedString(body.message)
  const formName = asTrimmedString(body.formName) || 'Contact form'

  if (!firstName || (!email && !phone)) {
    return NextResponse.json(
      { error: 'Validation failed: first name and email or phone are required' },
      { status: 400 },
    )
  }

  const result = await sendFollowUpBossEvent(
    buildContactFubEvent({
      firstName,
      lastName: lastName || undefined,
      email: email || undefined,
      phone: phone || undefined,
      message: message || undefined,
      formName,
      sourceUrl: resolveSourceUrl(body, request),
      inquiryType: parseInquiryType(body.inquiryType),
    }),
  )

  if (!result.ok && result.reason === 'not-configured') {
    console.error('FOLLOW_UP_BOSS_API_KEY is not set — contact leads are NOT reaching FUB')
    return NextResponse.json(
      { error: 'Lead capture is temporarily unavailable' },
      { status: 503 },
    )
  }

  if (!result.ok) {
    console.error(
      `Follow Up Boss API error${result.status ? ` (status ${result.status})` : ''} — contact lead not saved`,
    )
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
