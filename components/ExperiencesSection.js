import ServiceCard from './ServiceCard'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS, COLORS, FONTS, EXPERIENCES } from '@/lib/constants'

export default function ExperiencesSection() {
  return (
    <section
      style={{
        position: 'relative', borderRadius: '20px 20px 0 0',
        overflow: 'hidden', background: COLORS.champagne,
      }}
    >
      {/* Subtle BG texture */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.25,
          backgroundImage: 'url(/images/curatedexperiencesbg.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2
              style={{
                fontFamily: FONTS.heading, fontSize: 'clamp(30px, 4vw, 50px)',
                color: COLORS.blue, fontWeight: '300',
                marginBottom: '18px', letterSpacing: '-1.5px',
              }}
            >
              Curated Experiences
            </h2>
            <p
              style={{
                fontFamily: FONTS.body, fontWeight: '300', fontSize: '16px',
                color: COLORS.blue, lineHeight: '1.5', letterSpacing: '-0.48px',
                maxWidth: '571px', margin: '0 auto',
              }}
            >
              Accra offers more than a place to attend — it offers a city to experience.
              We design curated experiences that allow delegates to step beyond the conference
              and engage with Ghana through culture, cuisine, and connection.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {/* Experience cards */}
            {EXPERIENCES.map((exp) => (
              <ServiceCard key={exp.id} {...exp} />
            ))}

            {/* Explore banner - spans 2 columns */}
            <div
              style={{
                position: 'relative', borderRadius: '10px',
                overflow: 'hidden', padding: '70px 60px', textAlign: 'center',
                gridColumn: 'span 2',
              }}
            >
              <div
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${ASSETS.experiencesBg})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.75))',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p
                  style={{
                    fontFamily: FONTS.body, fontSize: '20px',
                    letterSpacing: '3.8px', textTransform: 'uppercase',
                    color: COLORS.white, marginBottom: '16px', fontWeight: '400',
                  }}
                >
                  EXPLORE EXPERIENCES
                </p>
                <p
                  style={{
                    fontFamily: FONTS.body, fontWeight: '300', fontSize: '16px',
                    color: COLORS.white, marginBottom: '24px',
                    letterSpacing: '-0.48px', lineHeight: '1.4',
                    maxWidth: '500px', margin: '0 auto 24px',
                  }}
                >
                  These are just a selection of what&apos;s available. Discover our full range of curated
                  experiences, from cultural immersions to dining and social experiences.
                </p>
                <Link
  href="https://experiencesbybeyond.com/experiences"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: '0 25px',
    height: '41px',
    background: 'transparent',
    border: `1px solid ${COLORS.white}`,
    color: COLORS.white,
    borderRadius: '10px',
    fontFamily: FONTS.body,
    fontSize: '16px',
    letterSpacing: '-0.32px',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  }}
>
  Explore Beyond Experiences
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
