'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function ServiceCard({
  id,
  image = 'card',
  title,
  priceLabel,
  price,
  bullets = [],
  description,
  category,
  badge,
}) {
  const { cart, addToCart, removeFromCart } = useCart()
  const [hovered, setHovered] = useState(false)
  const inCart = cart.some((i) => i.id === id)
  const imgSrc =
  image?.startsWith('/')
    ? image
    : ASSETS[image] || ASSETS.card
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: '400px',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#111',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.55)'
          : '0 4px 20px rgba(0,0,0,0.35)',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: hovered ? 'blur(3px)' : 'none',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 0.45s ease',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.92) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.75) 100%)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* Star/location badge */}
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: COLORS.gold,
            color: '#000',
            fontSize: '10px',
            fontFamily: FONTS.body,
            fontWeight: '700',
            padding: '5px 10px',
            borderRadius: '20px',
            letterSpacing: '0.6px',
            zIndex: 3,
            whiteSpace: 'nowrap',
          }}
        >
          {badge}
        </div>
      )}

      {/* Card content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
          padding: '20px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Top spacer */}
        <div />

        {/* Content: Price Label, Title+Price, Bullets, Button */}
        <div>
          {/* Price label */}
          <div
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '8px',
              fontFamily: FONTS.body,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '3px',
              textAlign: 'right',
            }}
          >
            {priceLabel}
          </div>

          {/* Title (left) and Price (right) */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
            <h3
              style={{
                color: COLORS.white,
                fontSize: '22px',
                fontFamily: FONTS.heading,
                fontWeight: '300',
                marginBottom: '10px',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                flex: 1,
              }}
            >
              {title}
            </h3>
            <div style={{ minWidth: '60px', textAlign: 'right' }}>
              <div
                style={{
                  color: COLORS.white,
                  fontSize: '18px',
                  fontFamily: FONTS.body,
                  fontWeight: '400',
                }}
              >
                {price}
              </div>
            </div>
          </div>

          {/* Hover-revealed bullets */}
          <div
            style={{
              overflow: 'hidden',
              maxHeight: hovered ? '120px' : '0',
              opacity: hovered ? 1 : 0,
              transition: 'all 0.35s ease',
              marginBottom: hovered ? '14px' : '0',
            }}
          >
            {description && (
              <p
                style={{
                  color: 'rgba(255,255,255,0.88)',
                  fontSize: '13px',
                  fontFamily: FONTS.body,
                  lineHeight: '1.6',
                  marginBottom: '8px',
                }}
              >
                {description}
              </p>
            )}
            {bullets.map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start',
                  marginBottom: '5px',
                }}
              >
                <span
                  style={{
                    color: COLORS.gold,
                    fontSize: '12px',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: '12px',
                    fontFamily: FONTS.body,
                    lineHeight: '1.5',
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              inCart
                ? removeFromCart(id)
                : addToCart({ id, title, category, price, image: imgSrc })
            }}
            style={{
              width: '100%',
              padding: '11px',
              background: inCart ? 'rgba(201,168,76,0.12)' : 'transparent',
              border: `1px solid ${inCart ? COLORS.gold : 'rgba(251,252,255,0.5)'}`,
              color: inCart ? COLORS.gold : COLORS.white,
              fontFamily: FONTS.body,
              fontSize: '11px',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '8px',
              fontWeight: '400',
              transition: 'all 0.2s ease',
            }}
          >
            {inCart ? 'Remove' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
