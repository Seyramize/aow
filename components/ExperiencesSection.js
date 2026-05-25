import ServiceCard from './ServiceCard'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS, COLORS, FONTS, EXPERIENCES } from '@/lib/constants'

export default function ExperiencesSection() {
  return (

    <section className="exp-section" style={{ background: COLORS.champagne }}>
      {/* Subtle BG texture */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.25,
          backgroundImage: 'url(/images/curatedexperiencesbg.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />

      <div className="exp-inner">
        <div className="exp-container">

          {/* Heading */}
          <div className="exp-heading-block">
            <h2 className="exp-title" style={{ fontFamily: FONTS.heading, color: COLORS.blue }}>
              Curated Experiences
            </h2>
            <p className="exp-subtitle" style={{ fontFamily: FONTS.body, color: COLORS.blue }}>
              Accra offers more than a place to attend, it offers a city to experience.
            </p>
            <p className="exp-subtitle" style={{ fontFamily: FONTS.body, color: COLORS.blue, padding: '10px' }}>
              We design curated experiences that allow delegates to step beyond the conference environment and engage with Ghana through culture, cuisine, and connection. Whether for personal exploration or client hosting, each experience is tailored to feel intentional and memorable.
            </p>
          </div>

          <div className="exp-grid">
            {/* Experience cards */}
            {EXPERIENCES.map((exp) => (
              <ServiceCard key={exp.id} {...exp} />
            ))}

            {/* Explore banner */}
            <div className="exp-explore-banner">
              <div
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(images/bs.jpg)`,
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
                  className="exp-explore-title"
                  style={{ fontFamily: FONTS.body, color: COLORS.white }}
                >
                  EXPLORE EXPERIENCES
                </p>
                <p
                  className="exp-explore-body"
                  style={{ fontFamily: FONTS.body, color: COLORS.white }}
                >
                  These are just a selection of what&apos;s available.
                </p>
                <p
                  className="exp-explore-body"
                  style={{ fontFamily: FONTS.body, color: COLORS.white, padding: "-1px" }}
                >
                  Discover our full range of curated experiences, from cultural immersions to dining and social experiences, and book directly through beyond experiences.
                </p>
                <Link
                  href="https://experiencesbybeyond.com/experiences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-explore-btn"
                  style={{
                    border: `1px solid ${COLORS.white}`,
                    color: COLORS.white,
                    fontFamily: FONTS.body,
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