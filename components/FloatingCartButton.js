'use client'

import { useCart } from '@/lib/CartContext'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function FloatingCartButton({ onClick }) {
  const { cart } = useCart()

  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed', top: '24px', right: '24px', zIndex: 9998,
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'rgba(251,252,255,0.12)',
        border: `0.5px solid ${COLORS.white}`,
        backdropFilter: 'blur(17px)', WebkitBackdropFilter: 'blur(17px)',
        color: COLORS.white, borderRadius: '30px',
        padding: '16px 36px', cursor: 'pointer',
        fontFamily: FONTS.body, fontSize: '14px',
        letterSpacing: '1.4px', textTransform: 'uppercase', fontWeight: '400',
      }}
    >
      <span>View Cart</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ASSETS.basket} alt="cart" style={{ width: '20px', height: '18px', objectFit: 'contain' }} />
      {cart.length > 0 && (
        <span
          style={{
            background: COLORS.white, color: COLORS.blue,
            borderRadius: '8px', width: '20px', height: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10px', fontWeight: '700', letterSpacing: '1px',
          }}
        >
          {cart.length}
        </span>
      )}
    </button>
  )
}
