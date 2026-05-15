'use client'

import { useEffect } from 'react'
import { FONTS } from '@/lib/constants'

export default function Modal({ isOpen, onClose, children, maxWidth = '520px' }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)',
        zIndex: 9999, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '20px',
        backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: '12px', width: '100%',
          maxWidth, maxHeight: '90vh', overflowY: 'auto',
          position: 'relative', animation: 'fadeUp 0.25s ease',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(0,0,0,0.07)', border: 'none',
            borderRadius: '50%', width: '30px', height: '30px',
            cursor: 'pointer', fontSize: '14px', zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#333', fontFamily: FONTS.body,
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
