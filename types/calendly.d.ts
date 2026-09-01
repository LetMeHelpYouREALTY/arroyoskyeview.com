export {}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (config: { url: string }) => void
      initInlineWidget?: (config: { url: string; parentElement: HTMLElement }) => void
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
