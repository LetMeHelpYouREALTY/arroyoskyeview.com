'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LEAD_FORM_ERROR_MESSAGE } from '@/lib/lead-form-messages'

type LeadInquiryFormProps = {
  formName: string
  heading?: string
  description?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadInquiryForm({
  formName,
  heading = 'Send a Message',
  description = "Share your questions about Arroyo at Skyeview or Skye Canyon new construction. Dr. Jan Duffy typically responds within 24 hours.",
}: LeadInquiryFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<SubmitState>('idle')
  const [errorText, setErrorText] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setErrorText(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          formName,
          sourceUrl: window.location.href,
          company,
        }),
      })

      if (!response.ok) {
        setStatus('error')
        setErrorText(LEAD_FORM_ERROR_MESSAGE)
        return
      }

      setStatus('success')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setCompany('')
    } catch {
      setStatus('error')
      setErrorText(LEAD_FORM_ERROR_MESSAGE)
    }
  }

  if (status === 'success') {
    return (
      <div
        className="mb-10 rounded-xl border border-green-200 bg-green-50 p-6 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-green-900">Thank you — your message was sent.</p>
        <p className="mt-2 text-green-800">
          Dr. Jan Duffy will follow up soon. For immediate help, call{' '}
          <a className="font-semibold underline" href="tel:7029034687">(702) 903-4687</a>.
        </p>
      </div>
    )
  }

  return (
    <div className="mb-10">
      <h3 className="mb-2 text-center text-2xl font-bold text-foreground">{heading}</h3>
      <p className="mb-6 text-center text-muted-foreground">{description}</p>

      {errorText ? (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
          {errorText}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-first-name" className="mb-1 block text-sm font-medium text-foreground">
              First name <span className="text-red-600">*</span>
            </label>
            <input
              id="lead-first-name"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="lead-last-name" className="mb-1 block text-sm font-medium text-foreground">
              Last name
            </label>
            <input
              id="lead-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-foreground">
              Phone
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Provide email or phone so Dr. Jan can reach you.</p>

        <div>
          <label htmlFor="lead-message" className="mb-1 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        />

        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full min-h-11 text-base font-semibold sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
      </form>
    </div>
  )
}
