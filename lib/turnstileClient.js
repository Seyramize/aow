export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

export function isTurnstileConfigured() {
  return Boolean(TURNSTILE_SITE_KEY)
}
