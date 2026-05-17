'use client'
import Modal from './Modal'
import { useCart } from '@/lib/CartContext'
import { COLORS, FONTS } from '@/lib/constants'

export default function CartModal({ isOpen, onClose, onBook }) {
  const { cart, removeFromCart } = useCart()
  return (

      <Modal isOpen={isOpen} onClose={onClose} maxWidth="380px">
        <div className="cart-modal-inner">
          <h3
            className="cart-modal-title"
            style={{ fontFamily: FONTS.body, color: COLORS.blue }}
          >
            Here&apos;s what you have in your cart:
          </h3>

          {cart.length === 0 ? (
            <p
              className="cart-empty-text"
              style={{ color: '#aaa', fontFamily: FONTS.body }}
            >
              Your cart is empty. Add services above.
            </p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span
                    className="cart-item-title"
                    style={{ fontFamily: FONTS.body, color: COLORS.blue }}
                  >
                    {item.title}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-remove"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => { if (cart.length > 0) { onClose(); onBook() } }}
            disabled={cart.length === 0}
            className="cart-book-btn"
            style={{
              background: cart.length === 0 ? '#ccc' : COLORS.blue,
              color: COLORS.white,
              fontFamily: FONTS.body,
              cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Book Services
          </button>
        </div>
      </Modal>
  )
}