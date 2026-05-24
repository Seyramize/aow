'use client'
import { useCart } from '@/lib/CartContext'
import { COLORS, FONTS } from '@/lib/constants'
import { ShoppingBasket } from 'lucide-react'

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
        <ShoppingBasket size={20} />
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