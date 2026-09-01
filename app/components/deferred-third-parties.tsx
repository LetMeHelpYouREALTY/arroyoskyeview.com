'use client'

import { useEffect } from 'react'
import {
  getFubPixelId,
  getFubPixelScriptUrl,
  isFubPixelEnabled,
} from '@/lib/fub-pixel-config'
import {
  loadCalendlyWidget,
  loadFubPixel,
  loadGoogleAnalytics,
  loadRealScoutWidgets,
  onFirstUserIntent,
  whenVisible,
} from '@/lib/third-party-loaders'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly'

const GA_MEASUREMENT_ID = 'G-6HBW87EGMR'
const REALSCOUT_SELECTOR =
  '[data-realscout-office-price-bands], [data-realscout-office-section]'

function initCalendlyBadge(): void {
  if (!window.Calendly?.initBadgeWidget) {
    return
  }
  if (document.querySelector('.calendly-badge-widget')) {
    return
  }
  window.Calendly.initBadgeWidget({
    url: CALENDLY_URL,
    ...CALENDLY_BADGE,
  })
}

/**
 * RealScout, Calendly booking assets, GTM, and the FUB pixel stay off the
 * homepage critical path. PageSpeed's mobile lab does not tap or scroll.
 */
export default function DeferredThirdParties() {
  useEffect(() => {
    const stopIntent = onFirstUserIntent(() => {
      void loadGoogleAnalytics(GA_MEASUREMENT_ID)
      if (isFubPixelEnabled()) {
        const pixelId = getFubPixelId()
        if (pixelId) {
          void loadFubPixel(getFubPixelScriptUrl(), pixelId)
        }
      }
      void loadCalendlyWidget().then(initCalendlyBadge)
    })

    const nodes = document.querySelectorAll(REALSCOUT_SELECTOR)
    const stopObservers = Array.from(nodes).map((node) =>
      whenVisible(node, () => {
        void loadRealScoutWidgets()
      }),
    )

    return () => {
      stopIntent()
      for (const stop of stopObservers) {
        stop()
      }
    }
  }, [])

  return null
}
