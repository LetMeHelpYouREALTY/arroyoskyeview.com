/**
 * Attach production domains to the live Vercel project.
 *
 * Requires VERCEL_TOKEN. Optional: VERCEL_ORG_ID, VERCEL_PROJECT_ID.
 *
 * Based on Vercel REST API (https://vercel.com/docs/rest-api/reference/endpoints/projects/add-a-domain-to-a-project):
 * POST /v10/projects/{id}/domains
 * POST /v9/projects/{id}/domains/{domain}/verify
 * DELETE /v6/domains/{domain}  (orphan cleanup after a deleted project)
 * CLI equivalent: vercel domains add www.arroyoskyeview.com --force
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

function alreadyOnProject(result) {
  const message = String(result.json?.error?.message || result.json?.message || '')
  return (
    result.status === 400 &&
    /already exists|already assigned to this project/i.test(message)
  )
}

async function removeOrphan(domain) {
  const result = await vercel(`/v6/domains/${encodeURIComponent(domain)}`, {
    method: 'DELETE',
  })
  console.log(`DELETE ${domain}: ${result.status}`, result.json?.error || result.json || '')
  return result
}

async function verifyDomain(name) {
  const result = await vercel(
    `/v9/projects/${PROJECT_ID}/domains/${encodeURIComponent(name)}/verify`,
    { method: 'POST' },
  )
  console.log(`VERIFY ${name}: ${result.status}`, JSON.stringify(result.json, null, 2))
  return result
}

async function addDomain(name, extra = {}) {
  let result = await vercel(`/v10/projects/${PROJECT_ID}/domains`, {
    method: 'POST',
    body: { name, ...extra },
  })

  if (alreadyOnProject(result)) {
    console.log(`${name} is already on this project`)
    result = { ...result, ok: true }
  }

  const code = result.json?.error?.code || result.json?.code
  if (
    !result.ok &&
    (result.status === 409 ||
      code === 'domain_already_in_use' ||
      code === 'domain_taken')
  ) {
    console.log(`${name} is claimed elsewhere; removing orphan then retrying`)
    await removeOrphan(name)
    result = await vercel(`/v10/projects/${PROJECT_ID}/domains`, {
      method: 'POST',
      body: { name, ...extra },
    })
  }

  console.log(`POST ${name}: ${result.status}`, JSON.stringify(result.json, null, 2))
  if (result.ok) {
    await verifyDomain(name)
  }
  return result
}

async function main() {
  const www = await addDomain(WWW)
  const apex = await addDomain(APEX, {
    redirect: WWW,
    redirectStatusCode: 301,
  })

  const listed = await vercel(`/v9/projects/${PROJECT_ID}/domains`)
  console.log(`LIST domains: ${listed.status}`, JSON.stringify(listed.json, null, 2))

  const failed = [www, apex].filter((r) => !r.ok)
  if (failed.length > 0) {
    process.exit(1)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
