'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { TURNSTILE_SITE_KEY } from '@/lib/turnstileClient'

export default function TurnstileWidget({ onVerify, resetKey = 0 }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Poll for window.turnstile to be available
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.turnstile) {
        console.log('window.turnstile is now available')
        clearInterval(timer)
        setIsLoaded(true)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Once loaded and container is ready, render the widget
  useEffect(() => {
    if (!isLoaded || !TURNSTILE_SITE_KEY || !containerRef.current) {
      return
    }

    // Remove old widget if exists
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current)
      } catch (e) {
        console.warn('Error removing widget:', e)
      }
    }

    // Render new widget
    try {
      console.log('Rendering Turnstile with sitekey:', TURNSTILE_SITE_KEY)
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => {
          console.log('✓ Turnstile verified successfully')
          onVerify(token)
        },
        'expired-callback': () => {
          console.log('✗ Turnstile token expired')
          onVerify(null)
        },
        'error-callback': () => {
          console.log('✗ Turnstile error')
          onVerify(null)
        },
      })
      console.log('✓ Widget rendered, ID:', widgetIdRef.current)
    } catch (err) {
      console.error('✗ Failed to render widget:', err)
    }

    return () => {
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        } catch (e) {
          console.warn('Error cleanup:', e)
        }
      }
    }
  }, [isLoaded, TURNSTILE_SITE_KEY, onVerify, resetKey])

  if (!TURNSTILE_SITE_KEY) {
    console.log('Turnstile not configured - TURNSTILE_SITE_KEY missing')
    return null
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onError={(e) => console.error('Script load error:', e)}
      />
      <div
        ref={containerRef}
        style={{
          marginBottom: '16px',
          minHeight: '80px',
        }}
      >
        {!isLoaded && (
          <p style={{ fontSize: '12px', color: '#999', margin: '12px 0' }}>
            Loading security verification...
          </p>
        )}
      </div>
    </>
  )
}
