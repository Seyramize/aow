import { Globe } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { COLORS, FONTS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#041B2D',
        padding: '60px 75px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flex: 1,
            minWidth: '280px',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontWeight: 300,
              fontSize: '44px',
              lineHeight: '100%',
              letterSpacing: '-1.5px',
              color: '#F5EBDD',
            }}
          >
            Beyond Accra Concierge
          </h2>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: '13px',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              color: '#F5EBDD',
            }}
          >
            Luxury Travel Concierge
          </p>
        </div>

        {/* CENTER NAV */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            minWidth: '220px',
          }}
        >
          {['Concierge', 'Curated Experiences', 'City Guide'].map((item) => (
            <p
              key={item}
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#F5EBDD',
                cursor: 'pointer',
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* RIGHT CONTACT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'flex-end',
            textAlign: 'right',
            minWidth: '250px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#F5EBDD',
            }}
          >
            CONTACT
          </p>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '1.2px',
              color: '#F5EBDD',
            }}
          >
            NYANIBA LK, GL-016-3249
            <br />
            NYANIBA, ACCRA, GHANA
          </p>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: '12px',
              letterSpacing: '1.2px',
              color: '#F5EBDD',
            }}
          >
            +233 504 513 123
          </p>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: '12px',
              letterSpacing: '1.2px',
              color: '#F5EBDD',
              textTransform: 'uppercase',
            }}
          >
            TRAVEL@BEYONDACCRA.COM
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'rgba(245,235,221,0.4)',
        }}
      />

      {/* BOTTOM SECTION */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* LOGOS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <img
            src="/images/aowlogo.png"
            alt="AOW"
            style={{
              height: '32px',
              objectFit: 'contain',
            }}
          />

          <img
            src="/images/bclogo.svg"
            alt="Beyond Accra"
            style={{
              height: '36px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* SOCIALS */}
        <div
          style={{
            display: 'flex',
            gap: '50px',
          }}
        >
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
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: FONTS.body,
                  fontSize: '12px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#F5EBDD',
                }}
              >
                {item.label}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {/* Instagram */}
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaInstagram
                    size={14}
                    color="#F5EBDD"
                    style={{ cursor: 'pointer' }}
                  />
                </a>

                {/* Globe */}
                <a
                  href={item.globe}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Globe
                    size={14}
                    color="#F5EBDD"
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}