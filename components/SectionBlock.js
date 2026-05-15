import { COLORS, FONTS } from '@/lib/constants'

export default function SectionBlock({ id, title, description, children, bg = 'dark' }) {
  const dark = bg === 'dark'

  return (
    <section
      id={id}
      style={{ padding: '90px 40px', background: 'transparent' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: '300',
              color: dark ? COLORS.white : COLORS.blue,
              marginBottom: '18px',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: '16px',
              color: dark ? 'rgba(248,237,223,0.7)' : 'rgba(11,27,40,0.7)',
              maxWidth: '571px',
              margin: '0 auto',
              lineHeight: '1.5',
              letterSpacing: '-0.16px',
            }}
          >
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}
