/**
 * Load third-party scripts only after user intent or when a widget
 * scrolls into view. PageSpeed lab does not tap/scroll, so Calendly
 * booking CSS/JS and RealScout MLS photos stay off the LCP path.
 */

const loaded = new Map<string, Promise<void>>()

function loadScript(src: string, options?: { type?: string; id?: string }): Promise<void> {
  const existing = loaded.get(src)
  if (existing) {
    return existing
  }
  const promise = new Promise<void>((resolve, reject) => {
    if (options?.id && document.getElementById(options.id)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    if (options?.type) {
      script.type = options.type
    }
    if (options?.id) {
      script.id = options.id
    }
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(script)
  })
  loaded.set(src, promise)
  return promise
}

function loadStylesheet(href: string): void {
  if (document.querySelector(`link[href="${href}"]`)) {
    return
  }
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

const CALENDLY_JS = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const REALSCOUT_JS = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

export function loadCalendlyWidget(): Promise<void> {
  loadStylesheet(CALENDLY_CSS)
  return loadScript(CALENDLY_JS, { id: 'calendly-widget-js' })
}

export function loadRealScoutWidgets(): Promise<void> {
  return loadScript(REALSCOUT_JS, {
    id: 'realscout-web-components',
    type: 'module',
  })
}

export function loadGoogleAnalytics(measurementId: string): Promise<void> {
  const w = window
  w.dataLayer = w.dataLayer || []
  if (typeof w.gtag !== 'function') {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer?.push(args)
    }
    w.gtag('js', new Date())
    w.gtag('config', measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    })
  }
  return loadScript(
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    { id: 'google-analytics-src' },
  )
}

export function loadFubPixel(scriptUrl: string, pixelId: string): Promise<void> {
  const w = window
  if (typeof w.widgetTracker !== 'function') {
    const queue: unknown[][] = []
    const tracker = (...args: unknown[]) => {
      queue.push(args)
    }
    ;(tracker as { q?: unknown[][]; ds?: number }).q = queue
    ;(tracker as { q?: unknown[][]; ds?: number }).ds = Date.now()
    w.widgetTracker = tracker
  }
  const pending = loadScript(scriptUrl, { id: 'fub-pixel' })
  w.widgetTracker?.('create', pixelId)
  w.widgetTracker?.('send', 'pageview')
  return pending
}

const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'touchstart'] as const

/** First tap, key, or real scroll — PageSpeed lab fires none of these during load. */
export function onFirstUserIntent(callback: () => void): () => void {
  let done = false
  const run = () => {
    if (done) {
      return
    }
    done = true
    remove()
    callback()
  }
  const onScroll = () => {
    if (window.scrollY < 48) {
      return
    }
    run()
  }
  const remove = () => {
    for (const eventName of INTERACTION_EVENTS) {
      window.removeEventListener(eventName, run)
    }
    window.removeEventListener('scroll', onScroll)
  }
  for (const eventName of INTERACTION_EVENTS) {
    window.addEventListener(eventName, run, { once: true, passive: true })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return remove
}

export function whenVisible(
  element: Element,
  callback: () => void,
  threshold = 0.08,
): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    callback()
    return () => undefined
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return
      }
      observer.disconnect()
      callback()
    },
    { root: null, rootMargin: '0px', threshold },
  )
  observer.observe(element)
  return () => observer.disconnect()
}
