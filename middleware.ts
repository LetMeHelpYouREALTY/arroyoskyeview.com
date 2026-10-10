import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Workflow SDK internal routes must not be intercepted
  if (pathname.startsWith('/.well-known/workflow/')) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Define the canonical domain (www version with HTTPS)
  const canonicalDomain = 'www.arroyoskyeview.com'
  const canonicalProtocol = 'https:'
  
  // Skip redirects for localhost (development)
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return NextResponse.next()
  }
  
  // Check if redirect is needed
  const needsRedirect = 
    url.protocol !== canonicalProtocol || // HTTP to HTTPS
    hostname !== canonicalDomain // non-www to www
  
  if (needsRedirect) {
    // Build canonical URL
    url.hostname = canonicalDomain
    url.protocol = canonicalProtocol
    // Preserve pathname and search params
    
    // Use 301 (permanent redirect) for SEO
    return NextResponse.redirect(url, 301)
  }
  
  // Add security headers to all responses
  const response = NextResponse.next()

  // Non-HTML resources Google crawls from links. noindex keeps them out of
  // "Crawled - currently not indexed" without blocking rendering (do not Disallow).
  if (url.pathname === '/sitemap.xml') {
    response.headers.set('X-Robots-Tag', 'noindex')
  } else if (url.pathname === '/llms.txt') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  } else if (url.pathname === '/manifest.webmanifest') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
  }
  
  // Security headers for improved security and SEO
  // HSTS (HTTP Strict Transport Security) - Forces HTTPS for 1 year
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  
  return response
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

