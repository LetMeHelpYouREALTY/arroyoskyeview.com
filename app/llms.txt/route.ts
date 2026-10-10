import { NextResponse } from 'next/server'

/**
 * Google crawled /llms.txt and left it in "Crawled - currently not indexed".
 * The file is not published on this site. 410 tells Google to drop the URL.
 */
export function GET() {
  return new NextResponse('This file is no longer published.\n', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
