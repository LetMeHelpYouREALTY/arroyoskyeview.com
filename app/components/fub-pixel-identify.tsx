'use client'

import { useEffect, useRef } from 'react'

type FubPixelIdentifyProps = {
  email?: string
  name?: string
  phone?: string
}

/**
 * Identifies a Follow Up Boss contact from the Calendly confirmation URL and
 * submits a visually hidden form so Pixel form-capture can create a new lead
 * when Events API keys are not set. Marketing pages stay Calendly-only.
 */
export default function FubPixelIdentify({ email, name, phone }: FubPixelIdentifyProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const submitted = useRef(false)

  useEffect(() => {
    if (!email) {
      return
    }

    let attempts = 0
    const timer = window.setInterval(() => {
      attempts += 1
      const tracker = window.widgetTracker
      if (typeof tracker !== 'function') {
        if (attempts >= 20) {
          window.clearInterval(timer)
        }
        return
      }

      tracker('set', 'email', email)
      if (name) {
        tracker('set', 'name', name)
      }
      if (phone) {
        tracker('set', 'phone', phone)
      }
      if (!submitted.current && formRef.current) {
        submitted.current = true
        formRef.current.requestSubmit()
      }
      window.clearInterval(timer)
    }, 250)

    return () => window.clearInterval(timer)
  }, [email, name, phone])

  if (!email) {
    return null
  }

  return (
    <form
      ref={formRef}
      className="sr-only"
      aria-hidden="true"
      tabIndex={-1}
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <label htmlFor="fub-pixel-email">Email</label>
      <input id="fub-pixel-email" name="email" type="email" value={email} readOnly />
      {name ? (
        <>
          <label htmlFor="fub-pixel-name">Name</label>
          <input id="fub-pixel-name" name="name" type="text" value={name} readOnly />
        </>
      ) : null}
      {phone ? (
        <>
          <label htmlFor="fub-pixel-phone">Phone</label>
          <input id="fub-pixel-phone" name="phone" type="tel" value={phone} readOnly />
        </>
      ) : null}
      <button type="submit">Record booking</button>
    </form>
  )
}
