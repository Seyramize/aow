'use client'
import { useCallback, useState } from 'react'
import Modal from './Modal'
import FormField from './FormField'
import TurnstileWidget from './TurnstileWidget'
import { validateContactForm } from '@/lib/validation'
import { isTurnstileConfigured } from '@/lib/turnstileClient'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function EnquiryModal({ isOpen, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
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

  const handleSubmit = async () => {
    setSubmitError('')
    const e = validateContactForm(form)
    if (Object.keys(e).length) { setErrors(e); return }
    if (isTurnstileConfigured() && !turnstileToken) {
      setSubmitError('Please complete the security check.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (data.errors) setErrors(data.errors)
        setSubmitError(data.error || 'Something went wrong. Please try again.')
        setTurnstileToken('')
        setTurnstileKey((k) => k + 1)
        return
      }
      onClose()
      onSuccess()
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (

      <Modal isOpen={isOpen} onClose={onClose} maxWidth="500px">
        {/* Image top */}
        <div
          className="enquiry-modal-hero"
          style={{ backgroundImage: `url(${ASSETS.bookingSupport})` }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55))',
            }}
          />
        </div>

        <div className="enquiry-modal-body">
          <h3
            className="enquiry-modal-title"
            style={{ fontFamily: FONTS.body, color: COLORS.blue }}
          >
            Booking and Support
          </h3>
          <p
            className="enquiry-modal-subtitle"
            style={{ fontFamily: FONTS.body, color: 'rgba(11,27,40,0.6)' }}
          >
            Our concierge team is available to assist with all arrangements, ensuring your stay
            aligns with your schedule, preferences, and level of comfort.
          </p>

          <FormField value={form.name}    onChange={set('name')}    placeholder="Full name"     error={errors.name} />
          <FormField value={form.company} onChange={set('company')} placeholder="Company"       error={errors.company} />
          <FormField value={form.email}   onChange={set('email')}   placeholder="Email Address" type="email" error={errors.email} />
          <FormField value={form.phone}   onChange={set('phone')}   placeholder="Phone Number"  type="tel"   error={errors.phone} />

          <textarea
            placeholder="Tell us what you need and your concierge will reach out to assist you."
            value={form.message}
            onChange={set('message')}
            rows={3}
            className="enquiry-modal-textarea"
            style={{ fontFamily: FONTS.body, color: COLORS.blue }}
          />

          <TurnstileWidget onVerify={handleTurnstileVerify} resetKey={turnstileKey} />

          {submitError && (
            <p style={{ fontFamily: FONTS.body, color: '#c0392b', fontSize: '14px', marginBottom: '12px' }}>
              {submitError}
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || (isTurnstileConfigured() && !turnstileToken)}
            className="enquiry-modal-submit"
            style={{
              background: COLORS.blue,
              color: COLORS.white,
              fontFamily: FONTS.body,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Sending…' : 'Contact Concierge'}
          </button>
        </div>
      </Modal>
  )
}