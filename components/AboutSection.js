import { ASSETS, COLORS, FONTS } from '@/lib/constants'

export default function AboutSection() {
  return (
      <section className="about-section">
        {/* Photo */}
        <div className="about-photo-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/beyondxaow.jpg" alt="Beyond AOW team" />
        </div>

        {/* Text */}
        <div className="about-text">
          <p
            className="about-eyebrow"
            style={{ fontFamily: FONTS.body, color: COLORS.champagne }}
          >
            BEYOND × AOW
          </p>

          <h2
            className="about-heading"
            style={{ fontFamily: FONTS.heading, color: COLORS.white }}
          >
            More than a gathering.<br />
            A platform for connection<br />
            and opportunity
          </h2>

          <p
            className="about-body"
            style={{ fontFamily: FONTS.body, color: 'rgba(248,237,223,0.8)' }}
          >
            AOW:Energy is Africa’s leading platform for upstream investment, exploration deal-making and strategic energy dialogue. For over 31 years, AOW has brought together the most influential decision-makers shaping Africa’s energy future, including Heads of State, Ministers, CEOs, investors, national oil companies and global operators.
          </p>

          <p
            className="about-body"
            style={{ fontFamily: FONTS.body, color: 'rgba(248,237,223,0.8)' }}
          >
            Beyond provides delegates with a seamless concierge experience from arrival to departure,
            ensuring every detail is coordinated with precision and ease.
          </p>
        </div>
      </section>
  )
}