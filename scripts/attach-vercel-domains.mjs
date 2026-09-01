/**
 * Attach production domains to the live Vercel project.
 *
 * Requires VERCEL_TOKEN. Optional: VERCEL_ORG_ID, VERCEL_PROJECT_ID.
 *
 * Based on Vercel REST API:
 * POST /v10/projects/{id}/domains
 * DELETE /v6/domains/{domain}  (orphan cleanup after a deleted project)
 */
const TEAM_ID = process.env.VERCEL_ORG_ID || 'team_EIbjFXaDDtGMTweb5Hvo3CG3'
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm'
const TOKEN = process.env.VERCEL_TOKEN
const APEX = 'arroyoskyeview.com'
const WWW = 'www.arroyoskyeview.com'

if (!TOKEN) {
  console.error(
    'VERCEL_TOKEN is not set. Add www + apex in the dashboard:\nhttps://vercel.com/janet-duffys-projects/arroyoskyeview.com/settings/domains',
  )
  process.exit(1)
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
}

async function vercel(path, { method = 'GET', body } = {}) {
  const url = new URL(`https://api.vercel.com${path}`)
  url.searchParams.set('teamId', TEAM_ID)
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  let json
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = { raw: text }
  }
  return { ok: res.ok, status: res.status, json }
}

async function removeOrphan(domain) {
  const result = await vercel(`/v6/domains/${encodeURIComponent(domain)}`, {
    method: 'DELETE',
  })
  console.log(`DELETE ${domain}: ${result.status}`, result.json?.error || result.json || '')
  return result
}

async function addDomain(name, extra = {}) {
  let result = await vercel(`/v10/projects/${PROJECT_ID}/domains`, {
    method: 'POST',
    body: { name, ...extra },
  })

  const code = result.json?.error?.code || result.json?.code
  if (
    result.status === 409 ||
    code === 'domain_already_in_use' ||
    code === 'domain_taken'
  ) {
    console.log(`${name} is claimed elsewhere; removing orphan then retrying`)
    await removeOrphan(name)
    result = await vercel(`/v10/projects/${PROJECT_ID}/domains`, {
      method: 'POST',
      body: { name, ...extra },
    })
  }

  console.log(`POST ${name}: ${result.status}`, JSON.stringify(result.json, null, 2))
  return result
}

async function main() {
  const www = await addDomain(WWW)
  const apex = await addDomain(APEX, {
    redirect: WWW,
    redirectStatusCode: 301,
  })

  const failed = [www, apex].filter((r) => !r.ok)
  if (failed.length > 0) {
    process.exit(1)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
