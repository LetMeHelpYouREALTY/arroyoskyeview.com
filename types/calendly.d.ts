export {}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (config: { url: string }) => void
      initBadgeWidget?: (config: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
    }
    widgetTracker?: (...args: unknown[]) => void
  }
}
