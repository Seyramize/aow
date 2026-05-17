'use client'
import { useCart } from '@/lib/CartContext'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function FloatingCartButton({ onClick }) {
  const { cart } = useCart()
  return (

      <button
        onClick={onClick}
        className="floating-cart-btn"
        style={{
          color: COLORS.white,
          fontFamily: FONTS.body,
          position: 'fixed',
        }}
      >
        <span className="cart-label">View Cart</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.basket}
          alt="cart"
          style={{ width: '20px', height: '18px', objectFit: 'contain' }}
        />
        {cart.length > 0 && (
          <span
            className="floating-cart-badge"
            style={{ color: COLORS.blue }}
          >
            {cart.length}
          </span>
        )}
      </button>
  )
}