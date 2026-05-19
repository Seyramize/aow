export function isTurnstileEnabled() {
  return Boolean(
    process.env.TURNSTILE_SECRET_KEY &&
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  )
}

export function getClientIp(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    undefined
  )
}

export async function verifyTurnstileToken(token, remoteip) {
  if (!isTurnstileEnabled()) {
    if (process.env.NODE_ENV === 'production') {
      return { ok: false, error: 'Security verification is not configured.' }
    }
    return { ok: true }
  }

  if (!token) {
    return { ok: false, error: 'Please complete the security check.' }
  }

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip,
    }),
  })

  const data = await res.json()
  if (!data.success) {
    return { ok: false, error: 'Security verification failed. Please try again.' }
  }

  return { ok: true }
}
