'use client'

import { useState } from 'react'
import { CartProvider } from '@/lib/CartContext'
import Image from 'next/image'
import { ASSETS, COLORS, FONTS, ARRIVAL_SERVICES, TRANSPORT_SERVICES, HOTELS } from '@/lib/constants'

import FloatingCartButton   from '@/components/FloatingCartButton'
import HeroSection          from '@/components/HeroSection'
import AboutSection         from '@/components/AboutSection'
import SectionBlock         from '@/components/SectionBlock'
import CardGrid             from '@/components/CardGrid'
import ServiceCard          from '@/components/ServiceCard'
import BookingSupportBanner from '@/components/BookingSupportBanner'
import ExperiencesSection   from '@/components/ExperiencesSection'
import Footer               from '@/components/Footer'

import CartModal            from '@/components/CartModal'
import BookingModal         from '@/components/BookingModal'
import EnquiryModal         from '@/components/EnquiryModal'
import ConfirmationModal    from '@/components/ConfirmationModal'

const BG_STYLE = {
  backgroundImage: 'url(/images/bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
}

export default function Home() {
  const [cartOpen,         setCartOpen]         = useState(false)
  const [bookingOpen,      setBookingOpen]      = useState(false)
  const [enquiryOpen,      setEnquiryOpen]      = useState(false)
  const [bookingConfirm,   setBookingConfirm]   = useState(false)
  const [enquiryConfirm,   setEnquiryConfirm]   = useState(false)

  const scrollToPackages = () =>
    document.getElementById('concierge-packages')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <CartProvider>
      {/* Floating cart */}
      <FloatingCartButton onClick={() => setCartOpen(true)} />

      {/* ── Page sections ─────────────────────────────────────────────── */}
      <div style={{ ...BG_STYLE, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.90)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection
          onEnquiry={() => setEnquiryOpen(true)}
          onScrollToPackages={scrollToPackages}
        />

        <div style={{
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.92), rgba(0,0,0,0))',
          marginTop: '-120px',
          position: 'relative',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        <AboutSection />

        {/* Section label */}
        <div style={{ textAlign: 'center', paddingBottom: '8px', paddingTop: '80px' }}>
          <p
            style={{
              fontFamily: FONTS.body, fontSize: '14px',
              letterSpacing: '1.4px', textTransform: 'uppercase', color: COLORS.champagne,
            }}
          >
            BUILD YOUR CONCIERGE PACKAGE
          </p>
        </div>

        {/* Arrival */}
        <SectionBlock
          id="concierge-packages"
          title="Arrival, Airport & Visa"
          description="Your journey into Ghana should feel seamless from the moment you land. Through our integrated arrival, airport, and visa services, we ensure every step — from entry clearance to your final transfer — is handled with precision, discretion, and ease."
        >
          <CardGrid cols={3}>
            {ARRIVAL_SERVICES.map((s) => <ServiceCard key={s.id} {...s} />)}
          </CardGrid>
        </SectionBlock>

        {/* Transportation */}
        <SectionBlock
          title="Transportation"
          description="Navigating Accra during Africa Oil Week requires more than just transport — it requires reliability, responsiveness, and comfort at every moment. Our transportation system is designed to operate as an extension of your schedule."
        >
          <CardGrid cols={2}>
            {TRANSPORT_SERVICES.map((s) => <ServiceCard key={s.id} {...s} />)}
          </CardGrid>
        </SectionBlock>

        {/* Accommodation */}
        <SectionBlock
          title="Accomodation"
          description="We've curated a selection of the city's leading hotels, chosen for their proximity to the Africa Oil Week venue, quality of service, and overall guest experience. From internationally recognised luxury brands to boutique stays, each option has been selected to meet the expectations of AOW delegates."
        >
          <CardGrid cols={3}>
            {HOTELS.map((h) => <ServiceCard key={h.id} {...h} />)}
          </CardGrid>
        </SectionBlock>

        {/* Booking & Support */}
        <BookingSupportBanner onEnquiry={() => setEnquiryOpen(true)} />
        </div>
      </div>

      {/* ── No background image below this line ───────────────────────── */}

      {/* Experiences */}
      <ExperiencesSection />

      <Footer />

      {/* ── Modals ────────────────────────────────────────────────────── */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onBook={() => setBookingOpen(true)}
      />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onSuccess={() => setBookingConfirm(true)}
      />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        onSuccess={() => setEnquiryConfirm(true)}
      />
      <ConfirmationModal
        isOpen={bookingConfirm}
        onClose={() => setBookingConfirm(false)}
        bgImage={ASSETS.bookingSupport}
        title="Your Request Has Been Received"
        body="A Beyond concierge will review your selections and contact you shortly to coordinate your AOW experience."
      />
      <ConfirmationModal
        isOpen={enquiryConfirm}
        onClose={() => setEnquiryConfirm(false)}
        bgImage={ASSETS.bookingSupport}
        title="Your Enquiry Has Been Received"
        body="A member of the Beyond concierge team will review your message and contact you shortly to assist with your AOW experience."
      />
    </CartProvider>
  )
}