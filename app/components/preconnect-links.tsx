'use client'

import Script from 'next/script'

export default function PreconnectLinks() {
  return (
    <Script
      id="preconnect-gtm"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          const rsEm = document.createElement('link');
          rsEm.rel = 'preconnect';
          rsEm.href = 'https://em.realscout.com';
          rsEm.crossOrigin = 'anonymous';
          document.head.appendChild(rsEm);
        `,
      }}
    />
  )
}

