'use client'

import Modal from './Modal'
import { useCart } from '@/lib/CartContext'
import { COLORS, FONTS } from '@/lib/constants'

export default function CartModal({ isOpen, onClose, onBook }) {
  const { cart, removeFromCart } = useCart()

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="380px">
      <div style={{ padding: '32px 28px' }}>
        <h3
          style={{
            fontFamily: FONTS.body, fontSize: '15px', color: COLORS.blue,
            marginBottom: '24px', paddingRight: '28px',
            lineHeight: '1.4', fontWeight: '400',
          }}
        >
          Here&apos;s what you have in your cart:
        </h3>

        {cart.length === 0 ? (
          <p style={{ color: '#aaa', fontFamily: FONTS.body, fontSize: '14px', marginBottom: '24px' }}>
            Your cart is empty. Add services above.
          </p>
        ) : (
          <div style={{ marginBottom: '24px' }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '12px 0',
                  borderBottom: '1px solid rgba(11,27,40,0.08)',
                }}
              >
                <span style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.blue }}>
                  {item.title}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#bbb', fontSize: '16px', padding: '2px 6px',
                  }}
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
          style={{
            width: '100%', padding: '14px',
            background: cart.length === 0 ? '#ccc' : COLORS.blue,
            color: COLORS.white, border: 'none', borderRadius: '8px',
            fontFamily: FONTS.body, fontSize: '11px',
            letterSpacing: '1.8px', textTransform: 'uppercase',
            cursor: cart.length === 0 ? 'not-allowed' : 'pointer', fontWeight: '400',
          }}
        >
          Book Services
        </button>
      </div>
    </Modal>
  )
}
