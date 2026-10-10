const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'

let pending: Promise<void> | null = null

function ensureStylesheet() {
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = CALENDLY_CSS
  document.head.appendChild(link)
}

/** Load Calendly only after a visitor asks to schedule, so it stays off the first paint. */
export function loadCalendly(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Calendly?.initPopupWidget) return Promise.resolve()
  if (pending) return pending

  ensureStylesheet()
  pending = new Promise((resolve, reject) => {
    const finish = () => resolve()
    const fail = () => {
      pending = null
      reject(new Error('Calendly failed to load'))
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`)
    if (existing) {
      existing.addEventListener('load', finish, { once: true })
      existing.addEventListener('error', fail, { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    script.onload = finish
    script.onerror = fail
    document.body.appendChild(script)
  })
  return pending
}
