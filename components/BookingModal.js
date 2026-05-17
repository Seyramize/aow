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

            <button
              onClick={handleSubmit}
              className="booking-modal-submit"
              style={{
                background: COLORS.blue,
                color: COLORS.white,
                fontFamily: FONTS.body,
              }}
            >
              Send Request to Concierge
            </button>
          </div>
        </div>
      </Modal>

  )
}