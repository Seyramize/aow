'use client'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import FormField from './FormField'
import TurnstileWidget from './TurnstileWidget'
import { useCart } from '@/lib/CartContext'
import { validateContactForm } from '@/lib/validation'
import { isTurnstileConfigured } from '@/lib/turnstileClient'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function BookingModal({ isOpen, onClose, onSuccess }) {
  const { cart } = useCart()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileKey, setTurnstileKey] = useState(0)

  const handleTurnstileVerify = useCallback((token) => {
    setTurnstileToken(token || '')
  }, [])

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: '' }))
  }

  const grouped = cart.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item.title)
    return acc
  }, {})

  const handleSubmit = async () => {
    console.log('Submit button clicked', {
      formData: form,
      cartLength: cart.length,
      turnstileConfigured: isTurnstileConfigured(),
      turnstileToken: !!turnstileToken,
    })
    
    setSubmitError('')
    const e = validateContactForm(form)
    if (!cart.length) e.cart = 'Please select at least one service'
    
    if (Object.keys(e).length) {
      console.log('Validation errors:', e)
      setErrors(e)
      return
    }
    
    if (isTurnstileConfigured() && !turnstileToken) {
      console.log('Missing Turnstile token')
      setSubmitError('Please complete the security check.')
      return
    }

    setIsSubmitting(true)
    try {
      console.log('Sending booking request...')
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, cart, turnstileToken }),
      })
      console.log('Response status:', res.status)
      
      const data = await res.json().catch(() => ({}))
      console.log('Response data:', data)
      
      if (!res.ok) {
        if (data.errors) setErrors(data.errors)
        const errorMsg = data.error || 'Something went wrong. Please try again.'
        console.error('API error:', errorMsg)
        setSubmitError(errorMsg)
        setTurnstileToken('')
        setTurnstileKey((k) => k + 1)
        return
      }
      
      console.log('Booking submitted successfully')
      onClose()
      onSuccess()
    } catch (err) {
      console.error('Submit error:', err)
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (



      <Modal isOpen={isOpen} onClose={onClose} maxWidth="860px">
        {/* Header image */}
        <div className="booking-modal-hero">
          <Image
            src="/images/concierge2.jpg"
            alt="Concierge Booking"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Main content grid */}
        <div className="booking-modal-grid">
          {/* Left — summary */}
          <div className="booking-modal-summary">
            <h3
              className="booking-modal-summary-title"
              style={{ fontFamily: FONTS.heading, color: COLORS.blue }}
            >
              Your concierge request
            </h3>
            <p
              className="booking-modal-summary-subtitle"
              style={{ fontFamily: FONTS.body, color: 'rgba(11,27,40,0.45)' }}
            >
              Selected Services Summary
            </p>

            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: '20px' }}>
                <div
                  className="booking-modal-cat-label"
                  style={{ fontFamily: FONTS.body, color: 'rgba(11,27,40,0.4)' }}
                >
                  {cat}
                </div>
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="booking-modal-cat-item"
                    style={{ fontFamily: FONTS.body, color: COLORS.blue }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}

            <p
              className="booking-modal-summary-hint"
              style={{ fontFamily: FONTS.body, color: 'rgba(11,27,40,0.3)' }}
            >
              You can close this form to add or remove services from your cart
            </p>
          </div>

          {/* Right — form */}
          <div className="booking-modal-form">
            <p
              className="booking-modal-form-intro"
              style={{ fontFamily: FONTS.body, color: 'rgba(11,27,40,0.6)' }}
            >
              Our concierge team is available to assist with all arrangements, ensuring your stay
              aligns with your schedule, preferences, and level of comfort.
            </p>

            <FormField value={form.name}    onChange={set('name')}    placeholder="Full name"      error={errors.name} />
            <FormField value={form.company} onChange={set('company')} placeholder="Company"         error={errors.company} />
            <FormField value={form.email}   onChange={set('email')}   placeholder="Email Address"  type="email" error={errors.email} />
            <FormField value={form.phone}   onChange={set('phone')}   placeholder="Phone Number"   type="tel"   error={errors.phone} />

            <textarea
              placeholder="Any preferences or requirements you need your concierge to know?"
              value={form.notes}
              onChange={set('notes')}
              rows={4}
              className="booking-modal-textarea"
              style={{
                fontFamily: FONTS.body,
                color: COLORS.blue,
              }}
            />

            {errors.cart && (
              <p style={{ fontFamily: FONTS.body, color: '#c0392b', fontSize: '14px', marginBottom: '12px' }}>
                {errors.cart}
              </p>
            )}
            <TurnstileWidget onVerify={handleTurnstileVerify} resetKey={turnstileKey} />

            {submitError && (
              <p style={{ fontFamily: FONTS.body, color: '#c0392b', fontSize: '14px', marginBottom: '12px' }}>
                {submitError}
              </p>
            )}
            <button
              onClick={() => {
                console.log('Button clicked - disabled:', isSubmitting || (isTurnstileConfigured() && !turnstileToken))
                handleSubmit()
              }}
              disabled={isSubmitting || (isTurnstileConfigured() && !turnstileToken)}
              className="booking-modal-submit"
              style={{
                background: COLORS.blue,
                color: COLORS.white,
                fontFamily: FONTS.body,
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isSubmitting ? 'Sending…' : 'Send Request to Concierge'}
            </button>
          </div>
        </div>
      </Modal>

  )
}