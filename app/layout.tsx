import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { SITE_URL } from '@/lib/site-url'
import StructuredData from './components/structured-data'
import PreconnectLinks from './components/preconnect-links'
import CalendlyFubBridge from './components/calendly-fub-bridge'
import DeferredThirdParties from './components/deferred-third-parties'
import SkipToMain from './components/skip-to-main'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview, Skye Canyon Las Vegas 89166",
  description: "White-glove buyer representation at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas ZIP 89166. Dr. Jan Duffy represents home buyers—not the builder. Private tours, construction monitoring every 7–10 days. Call (702) 903-4687.",
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
    title: "Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview, Skye Canyon Las Vegas 89166",
    description:
      "White-glove buyer representation at Arroyo at Skyeview in Skye Canyon ZIP 89166. Dr. Jan Duffy represents home buyers—not the builder. Call (702) 903-4687.",
    siteName: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
    images: [
      {
        url: '/images/brand/dr-jan-duffy.png',
        width: 800,
        height: 800,
        alt: "Dr. Jan Duffy, luxury buyer's agent at Arroyo at Skyeview, Skye Canyon Las Vegas 89166",
      },
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
    title: "Dr. Jan Duffy | Luxury Buyer's Agent | Arroyo at Skyeview Las Vegas 89166",
    description:
      "Luxury buyer advocacy at Arroyo at Skyeview in Skye Canyon. Private tours, 7–10 day construction checks. Call (702) 903-4687.",
    images: ['/images/brand/dr-jan-duffy.png', '/og-image.png'],
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
        <PreconnectLinks />
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <StructuredData />
        <DeferredThirdParties />
        <CalendlyFubBridge />
        <SkipToMain />
        {children}
      </body>
    </html>
  )
}
