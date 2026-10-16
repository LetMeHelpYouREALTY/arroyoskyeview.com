import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Geist, Playfair_Display } from 'next/font/google'
import { SITE_URL } from '@/lib/site-url'
import StructuredData from './components/structured-data'
import SkipToMain from './components/skip-to-main'
import './globals.css'
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-6HBW87EGMR'

/** Search Console HTML-tag token. Not the Analytics measurement ID. */
function googleSiteVerification(): string | undefined {
  const token =
    process.env.GOOGLE_SITE_VERIFICATION ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  if (!token || token === 'your_google_search_console_token') return undefined
  return token
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
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
        alt: 'Dr. Jan Duffy with Arroyo at Skyeview townhomes in Skye Canyon',
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
    google: googleSiteVerification(),
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
        {/* Search Console Analytics verification reads this from the homepage source, in head. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true,cookie_flags:'SameSite=None;Secure'});`,
          }}
        />
        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <StructuredData />
        <SkipToMain />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

<!-- pixel-env-rebuild -->
