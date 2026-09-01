import { withWorkflow } from 'workflow/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: [
    'workflow',
    '@workflow/core',
    '@workflow/world',
    '@workflow/world-local',
    '@workflow/world-vercel',
  ],
  images: {
    // Do not set loader/loaderFile globally. RealScout listing photos must
    // keep the Vercel Image Optimization API. Site /images/* photos use
    // SiteImage (cloudflareImageLoader) when NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH
    // is inlined at build, or middleware rewrites /_next/image to
    // imagedelivery.net when CLOUDFLARE_IMAGES_HASH is set at runtime.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Next.js Image docs: raise TTL for stable production assets (31 days).
    // Src changes (Cloudflare Images hash) bust the cache automatically.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'drjanduffy.realscout.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drjanduffy.realscout.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.realscout.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'em.realscout.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.arroyoskyeview.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
        pathname: '/**',
      },
    ],
  },
  // Optimize for modern browsers - reduce legacy JavaScript polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-popover', '@radix-ui/react-alert-dialog'],
  },
  // Optimize production builds - disable source maps for smaller bundles
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      // Only aliases with no App Router page. Do not 301 /faq/*, /buyers/*,
      // or /online-homebuying — those routes exist, are in the sitemap, and
      // Google Search Console listed them as "Page with redirect".
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
    ]
  },
  // Apex→www and HTTP→HTTPS live in middleware.ts (skips *.vercel.app).
  async headers() {
    const contentSecurityPolicy = [
      "img-src 'self' data: blob: https: http://drjanduffy.realscout.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://widget.followupboss.com https://widgetbe.com",
      "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://assets.calendly.com https://calendly.com https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://imagedelivery.net https://vitals.vercel-insights.com https://va.vercel-scripts.com https://widget.followupboss.com https://www.followupboss.com https://widgetbe.com wss://*.realscout.com",
    ].join('; ')

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ]
  },
}

export default withWorkflow(nextConfig)
