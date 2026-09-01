/**
 * Cloudflare Images auth helpers for CI borrow + upload.
 *
 * Global API Key email is case-sensitive at Cloudflare. Open Brain
 * (2026-07-03) verified Super Admin as DrDuffy@bhhsnv.com. CI previously
 * only tried janet.duffy@bhhsnv.com (Linear) and drduffy@bhhsnv.com
 * (invoice To:). Do not lowercase-dedupe those variants.
 *
 * Never print token or Global key values.
 */
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
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1?per_page=1`,
    { headers },
  )
  const json = await res.json().catch(() => null)
  return {
    ok: res.ok,
    status: res.status,
    json,
    ...apiError(json),
  }
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

function looksLikeApiToken(token) {
  const trimmed = typeof token === 'string' ? token.trim() : ''
  return trimmed.length >= 40 && trimmed.length <= 80 && !looksLikeGlobalApiKey(trimmed)
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

async function listPermissionGroups(headers) {
  const res = await fetch(
    'https://api.cloudflare.com/client/v4/user/tokens/permission_groups',
    { headers },
  )
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

async function existingImagesToken(headers) {
  const res = await fetch('https://api.cloudflare.com/client/v4/user/tokens?per_page=50', {
    headers,
  })
  const json = await res.json().catch(() => null)
  const tokens = Array.isArray(json?.result) ? json.result : []
  return tokens.find((token) => token?.name === TOKEN_NAME)
}

async function mintImagesEditToken(headers, accountId = IMAGES_ACCOUNT_ID) {
  const existing = await existingImagesToken(headers)
  if (existing?.id) {
    console.log(
      `Cloudflare user token "${TOKEN_NAME}" already exists (id ${String(existing.id).slice(0, 8)}…). Secret is not recoverable.`,
    )
    return { ok: false, status: 409, message: 'token exists' }
  }

  const listed = await listPermissionGroups(headers)
  if (!listed.ok) {
    console.log(`Permission groups HTTP ${probeSummary(listed)}`)
    return { ok: false, status: listed.status, message: listed.message }
  }
  const group = imagesEditGroup(listed.groups)
  if (!group?.id) {
    const names = listed.groups
      .filter((item) => /image/i.test(item?.name || ''))
      .map((item) => item.name)
      .slice(0, 8)
    console.log(`No Images Edit permission group. Image-named groups: ${names.join(', ') || 'none'}`)
    return { ok: false, status: 404, message: 'no Images permission group' }
  }
  console.log(`Minting Images token with permission group ${group.name}`)

  const res = await fetch('https://api.cloudflare.com/client/v4/user/tokens', {
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
    console.log(`Mint Images token HTTP ${probeSummary({ status: res.status, ...apiError(json) })}`)
    return { ok: false, status: res.status, ...apiError(json) }
  }
  return { ok: true, token }
}

function success({ mode, status, headers, email, accountId, token, minted = false }) {
  return { ok: true, mode, status, headers, email, accountId, token, minted }
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

  if (looksLikeOriginCaKey(token)) {
    const serviceHeaders = { 'X-Auth-User-Service-Key': token.trim() }
    const images = await probeImages(serviceHeaders)
    console.log(`Origin CA service key Images HTTP ${probeSummary(images)}`)
    if (images.ok) {
      const minted = await mintImagesEditToken(serviceHeaders)
      if (minted.ok) {
        const mintedHeaders = { Authorization: `Bearer ${minted.token}` }
        const mintedProbe = await probeImages(mintedHeaders)
        console.log(`Minted Images token probe HTTP ${probeSummary(mintedProbe)}`)
        if (mintedProbe.ok) {
          return success({
            mode: 'bearer',
            status: mintedProbe.status,
            headers: mintedHeaders,
            accountId: IMAGES_ACCOUNT_ID,
            token: minted.token,
            minted: true,
          })
        }
      }
      return success({
        mode: 'service',
        status: images.status,
        headers: serviceHeaders,
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
    const verify = await probeTokenVerify(bearerHeaders)
    const user = await probeUser(bearerHeaders)
    console.log(
      `Bearer token verify HTTP ${probeSummary(verify)}${verify.statusText ? ` (${verify.statusText})` : ''} /user HTTP ${probeSummary(user)}`,
    )
    if (user.ok || verify.ok) {
      const minted = await mintImagesEditToken(bearerHeaders)
      if (minted.ok) {
        const mintedHeaders = { Authorization: `Bearer ${minted.token}` }
        const mintedProbe = await probeImages(mintedHeaders)
        console.log(`Minted Images token probe HTTP ${probeSummary(mintedProbe)}`)
        if (mintedProbe.ok) {
          return success({
            mode: 'bearer',
            status: mintedProbe.status,
            headers: mintedHeaders,
            email: user.email,
            accountId: IMAGES_ACCOUNT_ID,
            token: minted.token,
            minted: true,
          })
        }
      }
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
      const minted = await mintImagesEditToken(headers)
      if (minted.ok) {
        const mintedHeaders = { Authorization: `Bearer ${minted.token}` }
        const mintedProbe = await probeImages(mintedHeaders)
        console.log(`Minted Images token probe HTTP ${probeSummary(mintedProbe)}`)
        if (mintedProbe.ok) {
          return success({
            mode: 'bearer',
            status: mintedProbe.status,
            headers: mintedHeaders,
            email: user.email || email,
            accountId: IMAGES_ACCOUNT_ID,
            token: minted.token,
            minted: true,
          })
        }
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
