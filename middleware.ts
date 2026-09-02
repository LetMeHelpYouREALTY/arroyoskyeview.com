import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cloudflareFlexibleDeliveryUrl } from '@/lib/cloudflare-images'

const CANONICAL_HOST = 'www.arroyoskyeview.com'
const APEX_HOST = 'arroyoskyeview.com'
const CANONICAL_PROTOCOL = 'https:'

function isLocalHost(hostname: string): boolean {
  return hostname.includes('localhost') || hostname.includes('127.0.0.1')
}

function isVercelPreviewHost(hostname: string): boolean {
  return hostname.endsWith('.vercel.app') || hostname.endsWith('.vercel.sh')
}

function rewriteCloudflareImages(request: NextRequest): NextResponse | undefined {
  const pathname = request.nextUrl.pathname
  const params = request.nextUrl.searchParams
  let localPath: string | undefined
  let width = 1920
  let quality = 75

  if (pathname === '/_next/image' || pathname.startsWith('/_next/image/')) {
    const urlParam = params.get('url')
    if (!urlParam) {
      return undefined
    }
    let decoded = urlParam
    try {
      decoded = decodeURIComponent(urlParam)
    } catch {
      decoded = urlParam
    }
    if (!decoded.startsWith('/images/')) {
      try {
        const remote = new URL(decoded)
        const isOwnHost =
          remote.hostname === 'www.arroyoskyeview.com' ||
          remote.hostname === 'arroyoskyeview.com'
        if (!isOwnHost || !remote.pathname.startsWith('/images/')) {
          return undefined
        }
      } catch {
        return undefined
      }
    }
    localPath = decoded
    const parsedWidth = Number.parseInt(params.get('w') || '', 10)
    const parsedQuality = Number.parseInt(params.get('q') || '', 10)
    if (Number.isFinite(parsedWidth) && parsedWidth > 0) {
      width = parsedWidth
    }
    if (Number.isFinite(parsedQuality) && parsedQuality > 0) {
      quality = parsedQuality
    }
  } else if (pathname.startsWith('/images/')) {
    localPath = pathname
    const parsedWidth = Number.parseInt(params.get('w') || '', 10)
    const parsedQuality = Number.parseInt(params.get('q') || '', 10)
    if (Number.isFinite(parsedWidth) && parsedWidth > 0) {
      width = parsedWidth
    }
    if (Number.isFinite(parsedQuality) && parsedQuality > 0) {
      quality = parsedQuality
    }
  } else {
    return undefined
  }

  const dest = cloudflareFlexibleDeliveryUrl(localPath, width, quality)
  if (!dest) {
    return undefined
  }
  return NextResponse.rewrite(dest)
}

function withSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  )
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  return response
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Workflow SDK internal routes must not be intercepted
  if (pathname.startsWith('/.well-known/workflow/')) {
    return NextResponse.next()
  }

  const cloudflareImages = rewriteCloudflareImages(request)
  if (cloudflareImages) {
    return withSecurityHeaders(cloudflareImages)
  }

  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  if (isLocalHost(hostname) || isVercelPreviewHost(hostname)) {
    const response = NextResponse.next()
    if (pathname === '/manifest.webmanifest') {
      response.headers.set(
        'X-Robots-Tag',
        'noindex, nofollow, noarchive, nosnippet',
      )
    }
    return withSecurityHeaders(response)
  }

  const hostWithoutPort = hostname.split(':')[0] ?? hostname
  const needsCanonicalRedirect =
    url.protocol !== CANONICAL_PROTOCOL ||
    hostWithoutPort === APEX_HOST ||
    hostWithoutPort !== CANONICAL_HOST

  if (needsCanonicalRedirect) {
    url.hostname = CANONICAL_HOST
    url.protocol = CANONICAL_PROTOCOL
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()

  if (url.pathname === '/manifest.webmanifest') {
    response.headers.set(
      'X-Robots-Tag',
      'noindex, nofollow, noarchive, nosnippet',
    )
  }

  return withSecurityHeaders(response)
}

export const config = {
  matcher: [
    '/_next/image',
    '/images/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (handled above when a Cloudflare Images hash is set)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|\\.well-known/workflow/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
