export {}

type CalendlyEmbedUtm = {
  utmCampaign?: string
  utmSource?: string
  utmMedium?: string
  utmContent?: string
  utmTerm?: string
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (config: { url: string; utm?: CalendlyEmbedUtm }) => void
      initInlineWidget?: (config: {
        url: string
        parentElement: HTMLElement
        utm?: CalendlyEmbedUtm
      }) => void
      initBadgeWidget?: (config: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
        utm?: CalendlyEmbedUtm
      }) => void
    }
    widgetTracker?: (...args: unknown[]) => void
  }
}
