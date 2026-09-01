const PRECONNECT = [
  { href: 'https://www.googletagmanager.com' },
  { href: 'https://em.realscout.com', crossOrigin: true },
  { href: 'https://www.realscout.com', crossOrigin: true },
  { href: 'https://assets.calendly.com' },
  { href: 'https://calendly.com' },
  { href: 'https://imagedelivery.net', crossOrigin: true },
  { href: 'https://widgetbe.com', crossOrigin: true },
] as const

/** Static head hints — do not inject via JS (that delays LCP). */
export default function PreconnectLinks() {
  return (
    <>
      {PRECONNECT.map((item) => (
        <link
          key={item.href}
          rel="preconnect"
          href={item.href}
          crossOrigin={'crossOrigin' in item && item.crossOrigin ? 'anonymous' : undefined}
        />
      ))}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </>
  )
}
