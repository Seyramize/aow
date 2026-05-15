'use client'

import { useState } from 'react'
import Modal from './Modal'
import FormField from './FormField'
import { validateContactForm } from '@/lib/validation'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function EnquiryModal({ isOpen, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: '' }))
  }

  const handleSubmit = () => {
    const e = validateContactForm(form)
    if (Object.keys(e).length) { setErrors(e); return }
    onClose()
    onSuccess()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="500px">
      {/* Image top */}
      <div
        style={{
          height: '200px', position: 'relative', overflow: 'hidden',
          borderRadius: '12px 12px 0 0',
          backgroundImage: `url(${ASSETS.bookingSupport})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55))',
          }}
        />
      </div>

      <div style={{ padding: '28px 32px 32px' }}>
        <h3
          style={{
            fontFamily: FONTS.body, fontSize: '20px', color: COLORS.blue,
            marginBottom: '8px', textAlign: 'center',
            letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '400',
          }}
        >
          Booking and Support
        </h3>
        <p
          style={{
            fontFamily: FONTS.body, fontSize: '13px',
            color: 'rgba(11,27,40,0.6)', textAlign: 'center',
            marginBottom: '24px', lineHeight: '1.6',
          }}
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
          style={{
            width: '100%', padding: '12px 16px',
            border: '1px solid rgba(11,27,40,0.18)', borderRadius: '8px',
            fontFamily: FONTS.body, fontSize: '14px',
            resize: 'vertical', outline: 'none',
            color: COLORS.blue, boxSizing: 'border-box', marginBottom: '20px',
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: '100%', padding: '14px', background: COLORS.blue,
            color: COLORS.white, border: 'none', borderRadius: '8px',
            fontFamily: FONTS.body, fontSize: '11px',
            letterSpacing: '1.8px', textTransform: 'uppercase',
            cursor: 'pointer', fontWeight: '400',
          }}
        >
          Contact Concierge
        </button>
      </div>
    </Modal>
  )
}
