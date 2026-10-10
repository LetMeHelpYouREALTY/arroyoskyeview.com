'use client'

import { useEffect, type RefObject } from 'react'

const SCRIPT_ID = 'realscout-web-components'
const SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

function ensureRealScoutScript() {
  if (document.getElementById(SCRIPT_ID)) return
  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.src = SCRIPT_SRC
  script.async = true
  script.type = 'module'
  document.body.appendChild(script)
}

/** Load the RealScout widget script once, when the listings block nears the viewport. */
export function useRealScoutWhenVisible(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      ensureRealScoutScript()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        ensureRealScoutScript()
        observer.disconnect()
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}
