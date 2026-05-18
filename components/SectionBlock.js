import { COLORS, FONTS } from '@/lib/constants'

export default function SectionBlock({ id, title, description, children, bg = 'dark' }) {
  const dark = bg === 'dark'
  
  // Handle both string and array descriptions
  const paragraphs = Array.isArray(description) ? description : [description]

  return (
    <section
      id={id}
      style={{
        padding: 'clamp(40px, 8vw, 90px) clamp(20px, 5vw, 40px)',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 52px)' }}>
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: 'clamp(24px, 6vw, 50px)',
              fontWeight: '300',
              color: dark ? COLORS.white : COLORS.blue,
              marginBottom: '18px',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
            }}
          >
            {title}
          </h2>
          <div style={{ maxWidth: '571px', margin: '0 auto' }}>
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  color: dark ? 'rgba(248,237,223,0.7)' : 'rgba(11,27,40,0.7)',
                  margin: idx === 0 ? '0 0 14px 0' : '14px 0 0 0',
                  lineHeight: '1.5',
                  letterSpacing: '-0.16px',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
