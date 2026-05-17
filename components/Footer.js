import { Globe } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { COLORS, FONTS } from '@/lib/constants'

export default function Footer() {
  return (

      <footer className="footer">
        {/* TOP SECTION */}
        <div className="footer-top">
          {/* LEFT */}
          <div className="footer-left">
            <h2 className="footer-heading" style={{ fontFamily: FONTS.heading }}>
              Beyond Accra Concierge
            </h2>
            <p className="footer-subheading" style={{ fontFamily: FONTS.body }}>
              Luxury Travel Concierge
            </p>
          </div>

          {/* CENTER NAV */}
          <div className="footer-nav">
            {[
              { label: 'Concierge', url: 'https://beyondaccra.com' },
              { label: 'Curated Experiences', url: 'https://experiencesbybeyond.com' },
              { label: 'City Guide', url: 'https://beyondaccra.com/blog' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-item"
                style={{ fontFamily: FONTS.body, textDecoration: 'none', cursor: 'pointer' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT CONTACT */}
          <div className="footer-contact">
            <p className="footer-contact-label" style={{ fontFamily: FONTS.body }}>CONTACT</p>
            <p className="footer-contact-text" style={{ fontFamily: FONTS.body }}>
              NYANIBA LK, GL-016-3249<br />
              NYANIBA, ACCRA, GHANA
            </p>
            <p className="footer-contact-text" style={{ fontFamily: FONTS.body }}>
              +233 504 513 123
            </p>
            <p className="footer-contact-text" style={{ fontFamily: FONTS.body, textTransform: 'uppercase' }}>
              TRAVEL@BEYONDACCRA.COM
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider" />

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <div className="footer-logos">
            <img src="/images/aowlogo.png" alt="AOW" className="footer-logo-aow" />
            <img src="/images/bclogo.svg" alt="Beyond Accra" className="footer-logo-bc" />
          </div>

          <div className="footer-socials">
            {[
              {
                label: 'CONCIERGE',
                instagram: 'https://www.instagram.com/beyondaccra/',
                globe: 'https://beyondaccra.com',
              },
              {
                label: 'EXPERIENCES',
                instagram: 'https://www.instagram.com/experiencesbybeyond/',
                globe: 'https://experiencesbybeyond.com',
              },
            ].map((item) => (
              <div key={item.label} className="footer-social-item">
                <p className="footer-social-label" style={{ fontFamily: FONTS.body }}>{item.label}</p>
                <div className="footer-social-icons">
                  <a href={item.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                    <FaInstagram size={14} color="#F5EBDD" style={{ cursor: 'pointer' }} />
                  </a>
                  <a href={item.globe} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                    <Globe size={14} color="#F5EBDD" style={{ cursor: 'pointer' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
  )
}