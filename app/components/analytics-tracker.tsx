'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

interface AnalyticsTrackerProps {
  eventName: string
  eventCategory: string
  eventLabel?: string
  eventValue?: number
}

export function trackEvent(
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  eventValue?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    })
  }
}

export function trackPhoneClick(phoneNumber: string, location: string = '') {
  trackEvent('phone_click', 'engagement', `${phoneNumber} - ${location}`)
}

export function trackSmsClick(location: string = '') {
  trackEvent('sms_click', 'engagement', `702-903-4687 - ${location}`)
}

export function trackCTAClick(ctaText: string, location: string = '') {
  trackEvent('cta_click', 'conversion', `${ctaText} - ${location}`)
}

export function trackFormSubmit(formName: string) {
  trackEvent('form_submit', 'conversion', formName)
}

export function trackFAQExpand(question: string) {
  trackEvent('faq_expand', 'engagement', question)
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', 'engagement', `${depth}%`)
}

export function trackPageView(pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-6HBW87EGMR', {
      page_path: pagePath,
    })
  }
}

// Hook for tracking scroll depth
export function useScrollTracking() {
  useEffect(() => {
    const trackedDepths = new Set<number>()
    const depths = [25, 50, 75, 100]

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100)

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default function AnalyticsTracker() {
  useScrollTracking()
  return null
}

