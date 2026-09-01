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
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
      {
        source: '/faq/financing',
        destination: '/buyers/financing-new-construction',
        permanent: true,
      },
      {
        source: '/faq/inspections',
        destination: '/services/building-standards-inspection',
        permanent: true,
      },
      {
        source: '/buyers/inspections-new-construction',
        destination: '/services/construction-monitoring',
        permanent: true,
      },
      {
        source: '/buyers/closing-process-guide',
        destination: '/homebuying-process',
        permanent: true,
      },
      {
        source: '/online-homebuying',
        destination: '/homebuying-process',
        permanent: true,
      },
    ]
  },
  // Apex→www and HTTP→HTTPS live in middleware.ts (skips *.vercel.app).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // img-src must allow Cloudflare Images / R2. Other fetch types
            // stay unrestricted because default-src is omitted.
            key: 'Content-Security-Policy',
            value:
              "img-src 'self' data: blob: https: http://drjanduffy.realscout.com",
          },
        ],
      },
    ]
  },
}

export default withWorkflow(nextConfig)
