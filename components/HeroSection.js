import { ASSETS, COLORS, FONTS } from '@/lib/constants'
import { FaRegComments } from 'react-icons/fa'

export default function HeroSection({ onEnquiry, onScrollToPackages }) {
  return (
      <section
        className="hero-section"
        style={{
          height: '100vh',
          minHeight: '700px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div className="hero-bg" />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background:
              'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0) 55%), linear-gradient(90deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25))',
          }}
        />

        {/* Logo */}
        <div
          className="hero-logo"
          style={{
            position: 'absolute', top: '32px', left: '50%',
            transform: 'translateX(-50%)', zIndex: 2,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bclogo.svg" alt="Beyond Accra" />
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontFamily: FONTS.heading }}>
            Arrive Ready for AOW.
          </h1>

          <p className="hero-body" style={{ fontFamily: FONTS.body }}>
            As the official concierge partner for Africa Oil Week 2026, Beyond coordinates arrival
            services, transportation, accommodation, and curated experiences for delegates visiting Accra.
          </p>

          <p className="hero-body hero-body-last" style={{ fontFamily: FONTS.body }}>
            Select your desired services and your concierge will handle the rest.
          </p>

          <div className="hero-cta-group">
            <button
              onClick={onScrollToPackages}
              className="hero-btn-primary"
              style={{ fontFamily: FONTS.body }}
            >
              Build Your Concierge Request
            </button>

            <button
              onClick={onEnquiry}
              className="hero-btn-secondary"
              style={{ fontFamily: FONTS.body }}
            >
              <FaRegComments style={{ fontSize: '20px', flexShrink: 0 }} />
              Talk to a Concierge
            </button>
          </div>
        </div>
      </section>
  )
}