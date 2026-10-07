import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { SITE_URL } from '@/lib/site-url'
import StructuredData from './components/structured-data'
import PreconnectLinks from './components/preconnect-links'
import CalendlyBadgeWidget from './components/calendly-badge-widget'
import SkipToMain from './components/skip-to-main'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Arroyo at Skyeview | Skye Canyon Townhomes, NV',
  description:
    'New townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (89166). Buyer agent Dr. Jan Duffy represents you—not the builder. (702) 903-4687.',
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Arroyo at Skyeview | Skye Canyon Townhomes, NV',
    description:
      'New townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (89166). Buyer agent Dr. Jan Duffy represents you—not the builder. (702) 903-4687.',
    siteName: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview at Skye Canyon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arroyo at Skyeview | Skye Canyon Townhomes, NV',
    description:
      'New townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas (89166). Buyer agent Dr. Jan Duffy represents you—not the builder. (702) 903-4687.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Blocks the Vercel Toolbar comment card ("Tag @v0…") on the public site. */}
        <Script id="disable-vercel-toolbar" strategy="beforeInteractive">
          {`
            (function () {
              try {
                sessionStorage.setItem('vercel-live-feedback-optout', '1')
                document.cookie = '__vercel_toolbar=; Max-Age=0; path=/; SameSite=Lax'
                document.cookie = '__vercel_toolbar=; Max-Age=0; path=/; Secure; SameSite=Lax'
              } catch (e) {}

              function isToolbarNode(node) {
                if (!node || node.nodeType !== 1) return false
                var tag = node.tagName
                if (tag === 'VERCEL-LIVE-FEEDBACK') return true
                if (tag !== 'SCRIPT' && tag !== 'IFRAME') return false
                var src = node.getAttribute('src') || ''
                return src.indexOf('vercel.live') !== -1
              }

              function sweep() {
                var list = document.querySelectorAll(
                  "vercel-live-feedback, script[src*='vercel.live'], iframe[src*='vercel.live']"
                )
                for (var i = 0; i < list.length; i++) list[i].remove()
              }

              sweep()
              var root = document.documentElement
              if (!root || typeof MutationObserver === 'undefined') return
              new MutationObserver(function (mutations) {
                for (var i = 0; i < mutations.length; i++) {
                  var nodes = mutations[i].addedNodes
                  for (var j = 0; j < nodes.length; j++) {
                    if (isToolbarNode(nodes[j])) nodes[j].remove()
                  }
                }
              }).observe(root, { childList: true, subtree: true })
            })()
          `}
        </Script>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {/* Preconnect links for faster resource loading */}
        <PreconnectLinks />
        
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Google tag (gtag.js) - Deferred to improve initial page load */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HBW87EGMR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HBW87EGMR', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `}
        </Script>
        {/* RealScout web components — one script for all widgets (office listings, etc.) */}
        <Script
          id="realscout-web-components"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script
          id="calendly-widget-js"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <SkipToMain />
        {children}
        <CalendlyBadgeWidget />
      </body>
    </html>
  )
}
