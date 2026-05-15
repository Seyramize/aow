import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function BookingSupportBanner({ onEnquiry }) {
  return (
    <section style={{ padding: '0 40px 80px', background: 'transparent' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            position: 'relative', borderRadius: '10px',
            overflow: 'hidden', padding: '120px 80px',
            textAlign: 'center',
          }}
        >
          {/* BG */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${ASSETS.bookingSupport})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.75))',
            }}
          />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontFamily: FONTS.body, fontSize: '25px',
                letterSpacing: '4.75px', textTransform: 'uppercase',
                color: COLORS.white, marginBottom: '16px', fontWeight: '400',
              }}
            >
              BOOKING AND SUPPORT
            </p>
            <p
              style={{
                fontFamily: FONTS.body, fontSize: '16px', fontWeight: '300',
                color: COLORS.white, marginBottom: '28px',
                letterSpacing: '-0.48px', lineHeight: '1.5',
                maxWidth: '520px', margin: '0 auto 28px',
              }}
            >
              Our concierge team is available to assist with all accommodation arrangements,
              ensuring your stay aligns with your schedule, preferences, and level of comfort.
            </p>
            <button
              onClick={onEnquiry}
              style={{
                padding: '0 25px', height: '41px',
                background: 'transparent',
                border: `1px solid ${COLORS.white}`,
                color: COLORS.white, borderRadius: '10px',
                fontFamily: FONTS.body, fontSize: '16px',
                letterSpacing: '-0.32px', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center',
              }}
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
