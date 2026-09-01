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
import {
  CALENDLY_BADGE,
  CALENDLY_URL,
  CALENDLY_UTM,
  calendlyWidgetUrl,
} from '@/lib/calendly'

const EAGER_PIXEL_PATHS = new Set(['/schedule', '/schedule-confirmed'])

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
    url: calendlyWidgetUrl(CALENDLY_URL, 'Badge'),
    utm: CALENDLY_UTM,
    ...CALENDLY_BADGE,
  })
}

function loadFubAndAnalytics(): void {
  void loadGoogleAnalytics(GA_MEASUREMENT_ID)
  if (isFubPixelEnabled()) {
    const pixelId = getFubPixelId()
    if (pixelId) {
      void loadFubPixel(getFubPixelScriptUrl(), pixelId)
    }
  }
}

/**
 * RealScout, Calendly booking assets, GTM, and the FUB pixel stay off the
 * homepage critical path. PageSpeed's mobile lab does not tap or scroll.
 */
export default function DeferredThirdParties() {
  useEffect(() => {
    const eagerPixel = EAGER_PIXEL_PATHS.has(window.location.pathname)
    if (eagerPixel) {
      loadFubAndAnalytics()
    }
    if (window.location.pathname === '/schedule') {
      void loadCalendlyWidget().then(initCalendlyBadge)
    }
    const stopIntent = onFirstUserIntent(() => {
      if (!eagerPixel) {
        loadFubAndAnalytics()
      }
      if (window.location.pathname !== '/schedule') {
        void loadCalendlyWidget().then(initCalendlyBadge)
      }
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
