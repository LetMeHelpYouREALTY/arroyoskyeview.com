const PRECONNECT = [{ href: 'https://imagedelivery.net', crossOrigin: true }] as const

/** Only hint origins needed for LCP. Third-party preconnects steal sockets. */
export default function PreconnectLinks() {
  return (
    <>
      {PRECONNECT.map((item) => (
        <link
          key={item.href}
          rel="preconnect"
          href={item.href}
          crossOrigin={item.crossOrigin ? 'anonymous' : undefined}
        />
      ))}
    </>
  )
}
