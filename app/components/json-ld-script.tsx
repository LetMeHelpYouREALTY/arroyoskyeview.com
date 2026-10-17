import { jsonLdHtml } from '@/lib/json-ld-script'

type JsonLdScriptProps = {
  data: Record<string, unknown> | unknown[]
  id?: string
}

/** Native server-rendered JSON-LD (not next/script). */
export default function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdHtml(data) }}
    />
  )
}
