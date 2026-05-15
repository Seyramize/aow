'use client'

import Modal from './Modal'
import { useCart } from '@/lib/CartContext'
import { FONTS, COLORS } from '@/lib/constants'

export default function ConfirmationModal({ isOpen, onClose, bgImage, title, body }) {
  const { clearCart } = useCart()

  const handleClose = () => {
    clearCart()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} maxWidth="800px">
      <div
        style={{
          minHeight: '260px', position: 'relative', overflow: 'hidden',
          borderRadius: '12px', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          padding: '60px 48px',
        }}
      >
        {/* Background */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: FONTS.body,
              fontSize: 'clamp(15px, 2.5vw, 22px)',
              color: COLORS.white,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '18px',
              lineHeight: '1.3',
              fontWeight: '400',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: FONTS.body, fontSize: '15px',
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '500px', margin: '0 auto',
              lineHeight: '1.7', letterSpacing: '-0.2px',
            }}
          >
            {body}
          </p>
        </div>
      </div>
    </Modal>
  )
}
