import { NextResponse } from 'next/server'
import { buildLlmsTxt } from '@/lib/llms-txt'

/**
 * Machine-readable brief for answer engines.
 * noindex keeps the URL out of Google web results.
 */
export function GET() {
  return new NextResponse(buildLlmsTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
