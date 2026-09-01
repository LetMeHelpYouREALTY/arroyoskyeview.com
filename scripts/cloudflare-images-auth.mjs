/**
 * Cloudflare Images auth helpers for CI borrow + upload.
 *
 * Global API Key email is case-sensitive at Cloudflare. Open Brain
 * (2026-07-03) verified Super Admin as DrDuffy@bhhsnv.com. CI previously
 * only tried janet.duffy@bhhsnv.com (Linear) and drduffy@bhhsnv.com
 * (invoice To:). Do not lowercase-dedupe those variants.
 *
 * Never print token or Global key values. Active Bearer tokens that
 * 403 on Images still get an account-owned Images:Edit mint attempt
 * (GET /accounts/{id}/tokens/permission_groups + POST /accounts/{id}/tokens).
 *
 * Images probes use List V2 (per_page ≥ 10). Deprecated v1 list is fallback.
 */
import { isCloudflareRateLimit, probeImages as probeListedImages } from './cloudflare-images-list.mjs'

export const IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'

const TOKEN_NAME = 'arroyoskyeview.com Images:Edit'

/** Verified and plausible Cloudflare login emails. Exact casing matters. */
export const CLOUDFLARE_AUTH_EMAILS = [
  'DrDuffy@bhhsnv.com',
  'drduffy@bhhsnv.com',
  'janet.duffy@bhhsnv.com',
  'Janet.Duffy@bhhsnv.com',
  'geneboyle@gmail.com',
]

export function looksLikeGlobalApiKey(token) {
  return typeof token === 'string' && /^[0-9a-f]{37}$/i.test(token.trim())
}

/** Origin CA / service keys (valid through 2026-09-30). Header: X-Auth-User-Service-Key. */
export function looksLikeOriginCaKey(token) {
  return typeof token === 'string' && /^v1\.0-[A-Za-z0-9-]+$/.test(token.trim())
}

export function uniqueAuthEmails(extra = []) {
  const seen = new Set()
  const out = []
  for (const email of [...CLOUDFLARE_AUTH_EMAILS, ...extra]) {
    const trimmed = typeof email === 'string' ? email.trim() : ''
    if (!trimmed.includes('@') || seen.has(trimmed)) {
      continue
    }
    seen.add(trimmed)
    out.push(trimmed)
  }
  return out
}

export function probeSummary(probe) {
  const detail = [probe.code && `code ${probe.code}`, probe.message]
    .filter(Boolean)
    .join(' ')
  return detail ? `${probe.status} ${detail}`.trim() : String(probe.status)
}

function apiError(json) {
  const error = json?.errors?.[0]
  return {
    code: error?.code,
    message: typeof error?.message === 'string' ? error.message.slice(0, 120) : '',
  }
}

export async function probeImages(headers, accountId = IMAGES_ACCOUNT_ID) {
  return probeListedImages(headers, accountId)
}

async function probeTokenVerify(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/user/tokens/verify', { headers })
  const json = await res.json().catch(() => null)
  return {
    ok: res.ok,
    status: res.status,
    statusText: json?.result?.status || '',
    ...apiError(json),
  }
}

/**
 * Cloudflare TokenValue is 40–80 chars. Sister env sometimes stores a
 * prefixed copy; skip Global keys, Origin CA, and Vercel envelopes.
 */
export function looksLikeApiToken(token) {
  const trimmed = typeof token === 'string' ? token.trim() : ''
  if (
    !trimmed ||
    looksLikeGlobalApiKey(trimmed) ||
    looksLikeOriginCaKey(trimmed) ||
    (trimmed.startsWith('eyJ') && trimmed.length > 80)
  ) {
    return false
  }
  return trimmed.length >= 40 && trimmed.length <= 200 && !/\s/.test(trimmed)
}

async function probeUser(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/user', { headers })
  const json = await res.json().catch(() => null)
  return {
    ok: res.ok,
    status: res.status,
    email: typeof json?.result?.email === 'string' ? json.result.email : '',
    ...apiError(json),
  }
}

async function listCloudflareAccounts(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/accounts?per_page=50', {
    headers,
  })
  const json = await res.json().catch(() => null)
  const accounts = Array.isArray(json?.result) ? json.result : []
  return {
    ok: res.ok,
    status: res.status,
    accounts,
    ...apiError(json),
  }
}

function permissionGroupsUrl(accountId, name) {
  const base = accountId
    ? `https://api.cloudflare.com/client/v4/accounts/${accountId}/tokens/permission_groups`
    : 'https://api.cloudflare.com/client/v4/user/tokens/permission_groups'
  const url = new URL(base)
  url.searchParams.set('per_page', '50')
  if (name) {
    url.searchParams.set('name', name)
  }
  return url
}

async function listPermissionGroups(headers, accountId, name) {
  const res = await fetch(permissionGroupsUrl(accountId, name), { headers })
  const json = await res.json().catch(() => null)
  const groups = Array.isArray(json?.result) ? json.result : []
  return { ok: res.ok, status: res.status, groups, ...apiError(json) }
}

function imagesEditGroup(groups) {
  const named = groups.filter((group) => /images/i.test(group?.name || ''))
  return (
    named.find((group) => /edit|write/i.test(group?.name || '')) || named[0]
  )
}

async function findImagesEditGroup(headers, accountId) {
  const names = ['Cloudflare Images Write', 'Images Write', 'Images']
  const seen = []
  for (const name of names) {
    const listed = await listPermissionGroups(headers, accountId, name)
    if (!listed.ok) {
      return listed
    }
    seen.push(...listed.groups)
    const group = imagesEditGroup(listed.groups)
    if (group?.id) {
      return { ok: true, status: listed.status, groups: listed.groups, group }
    }
  }
  const listed = await listPermissionGroups(headers, accountId)
  if (!listed.ok) {
    return listed
  }
  const merged = [...seen, ...listed.groups]
  return {
    ok: true,
    status: listed.status,
    groups: merged,
    group: imagesEditGroup(merged),
  }
}

function tokensUrl(accountId) {
  return accountId
    ? `https://api.cloudflare.com/client/v4/accounts/${accountId}/tokens?per_page=50`
    : 'https://api.cloudflare.com/client/v4/user/tokens?per_page=50'
}

function createTokenUrl(accountId) {
  return accountId
    ? `https://api.cloudflare.com/client/v4/accounts/${accountId}/tokens`
    : 'https://api.cloudflare.com/client/v4/user/tokens'
}

async function existingImagesToken(headers, accountId) {
  const res = await fetch(tokensUrl(accountId), { headers })
  const json = await res.json().catch(() => null)
  const tokens = Array.isArray(json?.result) ? json.result : []
  return tokens.find((token) => token?.name === TOKEN_NAME)
}

/**
 * @param {'user' | 'account'} owner
 */
async function mintImagesEditToken(headers, accountId, owner) {
  const accountApi = owner === 'account'
  const scope = accountApi ? `account ${accountId.slice(0, 8)}…` : 'user'
  const existing = await existingImagesToken(headers, accountApi ? accountId : undefined)
  if (existing?.id) {
    console.log(
      `Cloudflare ${scope} token "${TOKEN_NAME}" already exists (id ${String(existing.id).slice(0, 8)}…). Secret is not recoverable.`,
    )
    return { ok: false, status: 409, message: 'token exists' }
  }

  const listed = await findImagesEditGroup(headers, accountApi ? accountId : undefined)
  if (!listed.ok) {
    console.log(`${scope} permission groups HTTP ${probeSummary(listed)}`)
    return { ok: false, status: listed.status, message: listed.message }
  }
  const group = listed.group
  if (!group?.id) {
    const names = (listed.groups || [])
      .filter((item) => /image/i.test(item?.name || ''))
      .map((item) => item.name)
      .slice(0, 8)
    console.log(
      `No Images Edit permission group on ${scope}. Image-named groups: ${names.join(', ') || 'none'}`,
    )
    return { ok: false, status: 404, message: 'no Images permission group' }
  }
  console.log(`Minting Images token on ${scope} with permission group ${group.name}`)

  const res = await fetch(createTokenUrl(accountApi ? accountId : undefined), {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: TOKEN_NAME,
      policies: [
        {
          effect: 'allow',
          resources: {
            [`com.cloudflare.api.account.${accountId}`]: '*',
          },
          permission_groups: [{ id: group.id, name: group.name }],
        },
      ],
    }),
  })
  const json = await res.json().catch(() => null)
  const token = typeof json?.result?.value === 'string' ? json.result.value.trim() : ''
  if (!res.ok || !token) {
    console.log(
      `Mint Images token on ${scope} HTTP ${probeSummary({ status: res.status, ...apiError(json) })}`,
    )
    return { ok: false, status: res.status, ...apiError(json) }
  }
  return { ok: true, token, accountId }
}

function success({ mode, status, headers, email, accountId, token, minted = false }) {
  return { ok: true, mode, status, headers, email, accountId, token, minted }
}

/** 9109 "Cannot use the access token from location" — token may work on Vercel build IPs. */
export function isTokenBlockedByCallerIp(probe) {
  if (!probe || probe.code !== 9109) {
    return false
  }
  const message = typeof probe.message === 'string' ? probe.message : ''
  return /from location/i.test(message)
}

async function tryMintedImagesToken(headers, email, accountId = IMAGES_ACCOUNT_ID, owner = 'user') {
  const minted = await mintImagesEditToken(headers, accountId, owner)
  if (!minted.ok) {
    return null
  }
  const mintedHeaders = { Authorization: `Bearer ${minted.token}` }
  const mintedProbe = await probeImages(mintedHeaders, minted.accountId || accountId)
  console.log(`Minted Images token probe HTTP ${probeSummary(mintedProbe)}`)
  if (!mintedProbe.ok) {
    return null
  }
  return success({
    mode: 'bearer',
    status: mintedProbe.status,
    headers: mintedHeaders,
    email,
    accountId: minted.accountId || accountId,
    token: minted.token,
    minted: true,
  })
}

async function listCloudflareZones(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/zones?per_page=50', {
    headers,
  })
  const json = await res.json().catch(() => null)
  const zones = Array.isArray(json?.result) ? json.result : []
  return {
    ok: res.ok,
    status: res.status,
    zones,
    ...apiError(json),
  }
}

function uniqueAccountIds(accounts, zones) {
  const ids = [IMAGES_ACCOUNT_ID]
  for (const account of accounts) {
    const id = typeof account?.id === 'string' ? account.id : ''
    if (id && !ids.includes(id)) {
      ids.push(id)
    }
  }
  for (const zone of zones) {
    const id = typeof zone?.account?.id === 'string' ? zone.account.id : ''
    if (id && !ids.includes(id)) {
      ids.push(id)
    }
  }
  return ids.slice(0, 21)
}

function zoneSummary(zones) {
  return zones
    .slice(0, 8)
    .map((zone) => {
      const name = typeof zone?.name === 'string' ? zone.name : '?'
      const accountId = typeof zone?.account?.id === 'string' ? zone.account.id.slice(0, 8) : '?'
      return `${name}@${accountId}`
    })
    .join(', ')
}

function zonePermissionSummary(zones) {
  const arroyo = zones.find((zone) => zone?.name === 'arroyoskyeview.com')
  const sample = arroyo || zones[0]
  const perms = Array.isArray(sample?.permissions)
    ? sample.permissions.filter((item) => typeof item === 'string').slice(0, 20)
    : []
  const name = typeof sample?.name === 'string' ? sample.name : '?'
  return perms.length > 0
    ? `${name} permissions: ${perms.join(', ')}`
    : `${name} permissions: (none in zone payload)`
}

async function probeAccountSurface(headers, accountId) {
  const paths = [
    ['workers', `/accounts/${accountId}/workers/scripts?per_page=1`],
    ['r2', `/accounts/${accountId}/r2/buckets`],
    ['pages', `/accounts/${accountId}/pages/projects?per_page=1`],
  ]
  const parts = []
  for (const [label, path] of paths) {
    const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, { headers })
    const json = await res.json().catch(() => null)
    const extra = apiError(json)
    parts.push(`${label} HTTP ${probeSummary({ status: res.status, ...extra })}`)
    if (label === 'workers' && res.ok) {
      const scripts = Array.isArray(json?.result) ? json.result : []
      const names = scripts
        .map((script) => (typeof script?.id === 'string' ? script.id : script?.name))
        .filter(Boolean)
        .slice(0, 8)
      if (names.length) {
        parts.push(`workers scripts: ${names.join(', ')}`)
      }
    }
  }
  console.log(`Account ${accountId.slice(0, 8)}… surface: ${parts.join('; ')}`)
}

/**
 * Active Bearer tokens often lack Images:Edit and User API Tokens Write.
 * CI 2026-09-01: summerlinwestrealestate / pewtervalleyestates.com tokens
 * verify HTTP 200 (active), /user 403 9109, user permission groups 403.
 * Try Images on every reachable account, then mint an account-owned token.
 */
async function recoverBearerImagesAccess(headers, token, email) {
  console.log(`Bearer token len=${token.length}; trying verify + account Images mint`)
  const verify = await probeTokenVerify(headers)
  const user = await probeUser(headers)
  console.log(
    `Bearer token verify HTTP ${probeSummary(verify)}${verify.statusText ? ` (${verify.statusText})` : ''} /user HTTP ${probeSummary(user)}`,
  )

  if (isTokenBlockedByCallerIp(user) || isTokenBlockedByCallerIp(verify)) {
    console.log(
      'Bearer token is IP-allowlisted (9109 from location). GitHub runner cannot upload; copy it to Vercel so production build can.',
    )
    return {
      ok: false,
      locationRestricted: true,
      mode: 'bearer',
      status: user.status || verify.status,
      code: 9109,
      message: user.message || verify.message,
      token,
      headers,
      accountId: IMAGES_ACCOUNT_ID,
    }
  }

  if (!verify.ok && !user.ok) {
    return null
  }

  const userMinted = await tryMintedImagesToken(
    headers,
    user.email || email,
    IMAGES_ACCOUNT_ID,
    'user',
  )
  if (userMinted) {
    return userMinted
  }

  const listed = await listCloudflareAccounts(headers)
  const zones = await listCloudflareZones(headers)
  console.log(
    `Bearer accounts: HTTP ${probeSummary(listed)}, ${listed.accounts.length}; zones HTTP ${probeSummary(zones)}, ${zones.zones.length}${zones.zones.length ? ` (${zoneSummary(zones.zones)})` : ''}`,
  )
  if (zones.zones.length > 0) {
    console.log(zonePermissionSummary(zones.zones))
  }
  for (const accountId of uniqueAccountIds(listed.accounts, zones.zones)) {
    const probed = await probeImages(headers, accountId)
    console.log(`Images on account ${accountId.slice(0, 8)}…: HTTP ${probeSummary(probed)}`)
    if (probed.ok) {
      return success({
        mode: 'bearer',
        status: probed.status,
        headers,
        email: user.email || email,
        accountId,
        token,
      })
    }
    await probeAccountSurface(headers, accountId)
    const minted = await tryMintedImagesToken(
      headers,
      user.email || email,
      accountId,
      'account',
    )
    if (minted) {
      return minted
    }
  }
  console.log('Bearer recovery failed: no Images access and account-owned mint denied')
  return null
}

/**
 * Accept a Cloudflare API token (Bearer), Origin CA service key, or Global
 * API Key. When a credential authenticates as a user but Images:Edit is
 * denied, mint a scoped Images token (once) for upload/CI. Never treat an
 * Origin CA key as CLOUDFLARE_API_TOKEN on Vercel.
 */
export async function cloudflareImagesCredentialWorks(token, emails) {
  const bearerHeaders = { Authorization: `Bearer ${token}` }
  const bearer = await probeImages(bearerHeaders)
  if (bearer.ok) {
    return success({
      mode: 'bearer',
      status: bearer.status,
      headers: bearerHeaders,
      accountId: IMAGES_ACCOUNT_ID,
      token,
    })
  }

  // GitHub borrow + Vercel build in parallel 429'd Cloudflare (10502).
  // Do not spray verify/user/mint after a rate limit — that made it worse.
  if (looksLikeApiToken(token) && isCloudflareRateLimit(bearer)) {
    console.log(
      `Images list HTTP ${probeSummary(bearer)}; not spraying verify/user/mint.`,
    )
    if (process.env.VERCEL) {
      console.log(
        'Vercel build: uploading with the configured Bearer after rate-limit retries.',
      )
      return success({
        mode: 'bearer',
        status: bearer.status,
        headers: bearerHeaders,
        accountId: IMAGES_ACCOUNT_ID,
        token,
      })
    }
    return {
      ok: false,
      rateLimited: true,
      mode: 'bearer',
      status: bearer.status,
      code: bearer.code,
      message: bearer.message,
      token,
      headers: bearerHeaders,
      accountId: IMAGES_ACCOUNT_ID,
    }
  }

  if (process.env.VERCEL && looksLikeApiToken(token)) {
    console.log(
      `Vercel build Images probe HTTP ${probeSummary(bearer)}; not minting from the production token.`,
    )
    return {
      ok: false,
      mode: 'bearer',
      status: bearer.status,
      code: bearer.code,
      message: bearer.message,
    }
  }

  if (looksLikeOriginCaKey(token)) {
    // Origin CA + email is 9107 (Missing X-Auth-Key). It cannot mint tokens.
    const email = uniqueAuthEmails(emails)[0] || ''
    const serviceHeaders = {
      'X-Auth-User-Service-Key': token.trim(),
      ...(email ? { 'X-Auth-Email': email } : {}),
    }
    const images = await probeImages(serviceHeaders)
    console.log(
      `Origin CA${email ? ` email=${email}` : ''}: Images HTTP ${probeSummary(images)} (skip mint; service keys cannot call /user/tokens)`,
    )
    if (images.ok) {
      return success({
        mode: 'service',
        status: images.status,
        headers: serviceHeaders,
        email,
        accountId: IMAGES_ACCOUNT_ID,
        token: token.trim(),
      })
    }
    return {
      ok: false,
      mode: 'service',
      status: images.status,
      code: images.code,
      message: images.message,
    }
  }

  if (looksLikeApiToken(token)) {
    const recovered = await recoverBearerImagesAccess(bearerHeaders, token, '')
    if (recovered) {
      return recovered
    }
  }

  if (!looksLikeGlobalApiKey(token)) {
    console.log(
      `Skip Global API Key probe (len=${token.length}, not 37-hex). Bearer Images HTTP ${probeSummary(bearer)}`,
    )
    return {
      ok: false,
      mode: 'bearer',
      status: bearer.status,
      code: bearer.code,
      message: bearer.message,
    }
  }

  const uniqueEmails = uniqueAuthEmails(emails)
  let lastProbe = bearer
  for (const email of uniqueEmails) {
    const headers = { 'X-Auth-Email': email, 'X-Auth-Key': token }
    const user = await probeUser(headers)
    const userDetail = user.ok && user.email ? ` as ${user.email}` : ''
    console.log(`Global key email=${email}: user HTTP ${probeSummary(user)}${userDetail}`)

    const onDefault = await probeImages(headers)
    lastProbe = onDefault
    console.log(`Global key email=${email}: Images HTTP ${probeSummary(onDefault)}`)
    if (onDefault.ok) {
      return success({
        mode: 'global',
        status: onDefault.status,
        headers,
        email: user.email || email,
        accountId: IMAGES_ACCOUNT_ID,
        token,
      })
    }

    if (user.ok) {
      const minted = await tryMintedImagesToken(headers, user.email || email)
      if (minted) {
        return minted
      }
    }

    if (user.status === 429 || onDefault.status === 429) {
      console.log('Cloudflare auth rate-limited; stopping further email probes for this key.')
      break
    }
    if (user.code === 9103) {
      console.log(
        'Global API Key unknown (9103); not retrying other emails for this key.',
      )
      break
    }
    if (onDefault.status !== 403) {
      continue
    }
    const listed = await listCloudflareAccounts(headers)
    console.log(
      `Cloudflare Images HTTP ${probeSummary(onDefault)} on default account. Accounts: HTTP ${probeSummary(listed)}, ${listed.accounts.length}`,
    )
    for (const account of listed.accounts.slice(0, 20)) {
      const id = account?.id
      if (!id) {
        continue
      }
      const probed = await probeImages(headers, id)
      lastProbe = probed
      console.log(`Images on account ${id.slice(0, 8)}…: HTTP ${probeSummary(probed)}`)
      if (probed.ok) {
        return success({
          mode: 'global',
          status: probed.status,
          headers,
          email: user.email || email,
          accountId: id,
          token,
        })
      }
    }
  }

  if (uniqueEmails.length > 0) {
    return {
      ok: false,
      mode: 'global',
      status: lastProbe.status,
      code: lastProbe.code,
      message: lastProbe.message,
    }
  }
  return {
    ok: false,
    mode: 'bearer',
    status: bearer.status,
    code: bearer.code,
    message: bearer.message,
  }
}
