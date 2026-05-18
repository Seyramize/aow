'use client'

import { useState } from 'react'
import { CartProvider } from '@/lib/CartContext'
import Image from 'next/image'
import {
  ASSETS,
  COLORS,
  FONTS,
  ARRIVAL_SERVICES,
  TRANSPORT_SERVICES,
  HOTELS
} from '@/lib/constants'

import FloatingCartButton from '@/components/FloatingCartButton'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SectionBlock from '@/components/SectionBlock'
import CardGrid from '@/components/CardGrid'
import ServiceCard from '@/components/ServiceCard'
import BookingSupportBanner from '@/components/BookingSupportBanner'
import ExperiencesSection from '@/components/ExperiencesSection'
import Footer from '@/components/Footer'

import CartModal from '@/components/CartModal'
import BookingModal from '@/components/BookingModal'
import EnquiryModal from '@/components/EnquiryModal'
import ConfirmationModal from '@/components/ConfirmationModal'

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [bookingConfirm, setBookingConfirm] = useState(false)
  const [enquiryConfirm, setEnquiryConfirm] = useState(false)

  const scrollToPackages = () =>
    document
      .getElementById('concierge-packages')
      ?.scrollIntoView({ behavior: 'smooth' })

  return (
    <CartProvider>
      {/* Floating cart */}
      <FloatingCartButton onClick={() => setCartOpen(true)} />

      {/* ── Page wrapper ─────────────────────────────────────────────── */}
      <div className="page-bg min-h-screen">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90 pointer-events-none" />

        <div className="relative z-10">
          <HeroSection
            onEnquiry={() => setEnquiryOpen(true)}
            onScrollToPackages={scrollToPackages}
          />

          <div className="fade-divider" />

          <AboutSection />

          {/* Section label */}
          <div className="section-label">
            <p style={{ fontFamily: FONTS.body, color: COLORS.champagne }}>
              BUILD YOUR CONCIERGE PACKAGE
            </p>
          </div>

          {/* Arrival */}
          <SectionBlock
            id="concierge-packages"
            title="Arrival, Airport & Visa"
            description={[
              "Your journey into Ghana should feel seamless from the moment you land. Through our integrated arrival, airport, and visa services, we ensure every step - from entry clearance to your final transfer - is handled with precision, discretion, and ease.",
              "Whether you prefer a streamlined arrival or a fully private VIP experience, our team manages every detail so you can move through the airport without friction."
            ]}
          >
            <CardGrid cols={3}>
              {ARRIVAL_SERVICES.map((s) => (
                <ServiceCard key={s.id} {...s} />
              ))}
            </CardGrid>
          </SectionBlock>

          {/* Transportation */}
          <SectionBlock
            title="Transportation"
            description={[
              "Navigating Accra during Africa Oil Week requires more than just transport - it requires reliability, responsiveness, and comfort at every moment.",
              "Our transportation system is designed to operate as an extension of your schedule, ensuring you move effortlessly between meetings, venues, and experiences with minimal wait time and maximum comfort."
            ]}
          >
            <CardGrid cols={2}>
              {TRANSPORT_SERVICES.map((s) => (
                <ServiceCard key={s.id} {...s} />
              ))}
            </CardGrid>
          </SectionBlock>

          {/* Accommodation */}
          <SectionBlock
            title="Accommodation"
            description={[
              "Your stay in Accra should reflect both comfort and convenience. We've curated a selection of the city's leading hotels, chosen for their proximity to the Africa Oil Week venue, quality of service, and overall guest experience.",
              "From internationally recognized luxury brands to boutique stays, each option has been selected to meet the expectations of AOW delegates."
            ]}
          >
            <CardGrid cols={3}>
              {HOTELS.map((h) => (
                <ServiceCard key={h.id} {...h} />
              ))}
            </CardGrid>
          </SectionBlock>

          {/* Booking & Support */}
          <BookingSupportBanner onEnquiry={() => setEnquiryOpen(true)} />
        </div>
      </div>

      {/* ── Below main page ───────────────────────────────────────────── */}
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
        body="A Beyond concierge will review your selections and contact you shortly."
      />

      <ConfirmationModal
        isOpen={enquiryConfirm}
        onClose={() => setEnquiryConfirm(false)}
        bgImage={ASSETS.bookingSupport}
        title="Your Enquiry Has Been Received"
        body="A member of the concierge team will contact you shortly."
      />
    </CartProvider>
  )
}