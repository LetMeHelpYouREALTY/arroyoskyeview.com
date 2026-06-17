'use client'

import Script from 'next/script'

export default function PreconnectLinks() {
  return (
    <Script
      id="preconnect-gtm"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          const preconnect = document.createElement('link');
          preconnect.rel = 'preconnect';
          preconnect.href = 'https://www.googletagmanager.com';
          document.head.appendChild(preconnect);
          
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = 'https://www.googletagmanager.com';
          document.head.appendChild(dnsPrefetch);

          const rsEm = document.createElement('link');
          rsEm.rel = 'preconnect';
          rsEm.href = 'https://em.realscout.com';
          rsEm.crossOrigin = 'anonymous';
          document.head.appendChild(rsEm);

          const rsApi = document.createElement('link');
          rsApi.rel = 'preconnect';
          rsApi.href = 'https://www.realscout.com';
          rsApi.crossOrigin = 'anonymous';
          document.head.appendChild(rsApi);

          const calendlyAssets = document.createElement('link');
          calendlyAssets.rel = 'preconnect';
          calendlyAssets.href = 'https://assets.calendly.com';
          document.head.appendChild(calendlyAssets);

          const calendlyApp = document.createElement('link');
          calendlyApp.rel = 'preconnect';
          calendlyApp.href = 'https://calendly.com';
          document.head.appendChild(calendlyApp);
        `,
      }}
    />
  )
}

