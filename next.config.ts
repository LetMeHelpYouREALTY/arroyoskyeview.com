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
  async headers() {
    const noindex = [{ key: 'X-Robots-Tag', value: 'noindex' }]
    const noindexFollowBlocked = [
      { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
    ]
    return [
      { source: '/_next/static/:path*', headers: noindex },
      { source: '/favicon.ico', headers: noindex },
      { source: '/sitemap.xml', headers: noindex },
      { source: '/llms.txt', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/manifest.webmanifest', headers: noindexFollowBlocked },
    ]
  },
  // Host canonicalization (HTTP→HTTPS, apex→www) stays in middleware.ts.
  // Sitemap URLs must return 200. A 301/308 makes Google report
  // "Page with redirect" and skip indexing that URL.
}

export default withWorkflow(nextConfig)
