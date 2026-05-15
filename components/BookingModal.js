'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import FormField from './FormField'
import { useCart } from '@/lib/CartContext'
import { validateContactForm } from '@/lib/validation'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function BookingModal({ isOpen, onClose, onSuccess }) {
  const { cart } = useCart()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' })
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: '' }))
  }

  const grouped = cart.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item.title)
    return acc
  }, {})

  const handleSubmit = () => {
    const e = validateContactForm(form)
    if (Object.keys(e).length) { setErrors(e); return }
    onClose()
    onSuccess()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="860px">

      {/* HEADER IMAGE (spans both sections) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          borderRadius: '12px 12px 0 0',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/concierge2.jpg"
          alt="Concierge Booking"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* MAIN CONTENT GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '520px',
        }}
      >

        {/* Left — summary */}
        <div
          style={{
            background: '#f8f7f5',
            padding: '40px 32px',
            borderRadius: '0 0 0 12px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3
            style={{
              fontFamily: FONTS.heading,
              fontSize: '28px',
              color: COLORS.blue,
              marginBottom: '6px',
              fontWeight: '300',
              letterSpacing: '-0.8px',
            }}
          >
            Your concierge request
          </h3>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: '13px',
              color: 'rgba(11,27,40,0.45)',
              marginBottom: '28px',
              letterSpacing: '0.5px',
            }}
          >
            Selected Services Summary
          </p>

          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: '10px',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: 'rgba(11,27,40,0.4)',
                  marginBottom: '8px',
                }}
              >
                {cat}
              </div>

              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: '14px',
                    color: COLORS.blue,
                    marginBottom: '4px',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: '11px',
              color: 'rgba(11,27,40,0.3)',
              marginTop: 'auto',
              lineHeight: '1.6',
              paddingTop: '20px',
            }}
          >
            You can close this form to add or remove services from your cart
          </p>
        </div>

        {/* Right — form */}
        <div style={{ padding: '40px 32px' }}>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: '13px',
              color: 'rgba(11,27,40,0.6)',
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            Our concierge team is available to assist with all arrangements, ensuring your stay
            aligns with your schedule, preferences, and level of comfort.
          </p>

          <FormField value={form.name} onChange={set('name')} placeholder="Full name" error={errors.name} />
          <FormField value={form.company} onChange={set('company')} placeholder="Company" error={errors.company} />
          <FormField value={form.email} onChange={set('email')} placeholder="Email Address" type="email" error={errors.email} />
          <FormField value={form.phone} onChange={set('phone')} placeholder="Phone Number" type="tel" error={errors.phone} />

          <textarea
            placeholder="Any preferences or requirements you need your concierge to know?"
            value={form.notes}
            onChange={set('notes')}
            rows={4}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid rgba(11,27,40,0.18)',
              borderRadius: '8px',
              fontFamily: FONTS.body,
              fontSize: '14px',
              resize: 'vertical',
              outline: 'none',
              color: COLORS.blue,
              boxSizing: 'border-box',
              marginBottom: '20px',
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              background: COLORS.blue,
              color: COLORS.white,
              border: 'none',
              borderRadius: '8px',
              fontFamily: FONTS.body,
              fontSize: '11px',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: '400',
            }}
          >
            Send Request to Concierge
          </button>
        </div>
      </div>
    </Modal>
  )
}