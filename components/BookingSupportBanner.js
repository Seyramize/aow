import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function BookingSupportBanner({ onEnquiry }) {
  return (


    <section className="booking-section">
      <div className="booking-wrapper">
        <div className="booking-card">
          {/* BG */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(/images/concierge1.png)`,
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
              className="booking-title"
              style={{ fontFamily: FONTS.body, color: COLORS.white }}
            >
              BOOKING AND SUPPORT
            </p>
            <p
              className="booking-body"
              style={{ fontFamily: FONTS.body, color: COLORS.white }}
            >
              Our concierge team is available to assist with all accommodation arrangements,
              ensuring your stay aligns with your schedule, preferences, and level of comfort.
            </p>
            <button
              onClick={onEnquiry}
              className="booking-btn"
              style={{
                border: `1px solid ${COLORS.white}`,
                color: COLORS.white,
                fontFamily: FONTS.body,
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