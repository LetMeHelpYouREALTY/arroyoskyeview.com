import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.arroyoskyeview.com'
const APEX_HOST = 'arroyoskyeview.com'
const CANONICAL_PROTOCOL = 'https:'

function isLocalHost(hostname: string): boolean {
  return hostname.includes('localhost') || hostname.includes('127.0.0.1')
}

function isVercelPreviewHost(hostname: string): boolean {
  return hostname.endsWith('.vercel.app') || hostname.endsWith('.vercel.sh')
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|\\.well-known/workflow/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
