'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SITE_CONTACT } from '@/lib/site-contact'

type CalendlyBookingDetailsFormProps = {
  inviteeUri: string
  eventUri?: string
}

type FormStatus = 'idle' | 'submitting' | 'ok' | 'error'

/**
 * Noindex /schedule-confirmed only. Embed postMessage is URIs-only, so this
 * form sends name/email to Follow Up Boss without a Calendly PAT.
 */
export default function CalendlyBookingDetailsForm({
  inviteeUri,
  eventUri,
}: CalendlyBookingDetailsFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting' || status === 'ok') {
      return
    }
    setStatus('submitting')
    setMessage(null)
    try {
      const response = await fetch('/api/calendly/confirmed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          inviteeUri,
          eventUri,
          company,
        }),
      })
      if (!response.ok) {
        setStatus('error')
        setMessage('Could not save details. Call the office instead.')
        return
      }
      setStatus('ok')
      setMessage('Details received. Dr. Jan Duffy has this booking.')
    } catch {
      setStatus('error')
      setMessage('Could not save details. Call the office instead.')
    }
  }

  if (status === 'ok') {
    return (
      <p className="mt-6 text-muted-foreground text-pretty" role="status">
        {message}
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md space-y-4">
      <p className="text-muted-foreground text-pretty">
        Leave your email so Dr. Jan Duffy can follow up on this booking.
      </p>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="booking-company">Company</label>
        <input
          id="booking-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="booking-name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="booking-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2"
        />
      </div>
      <div>
        <label
          htmlFor="booking-email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2"
        />
      </div>
      <div>
        <label
          htmlFor="booking-phone"
          className="block text-sm font-medium text-foreground"
        >
          Phone
        </label>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2"
        />
      </div>
      {message ? (
        <p className="text-sm text-destructive" role="alert">
          {message}
        </p>
      ) : null}
      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send my details'}
      </Button>
      <p className="text-sm text-muted-foreground">
        Prefer to talk now? Call{' '}
        <a
          href={`tel:${SITE_CONTACT.phoneTel}`}
          className="font-semibold text-primary hover:text-primary/90"
        >
          {SITE_CONTACT.phoneDisplay}
        </a>
        .
      </p>
    </form>
  )
}
