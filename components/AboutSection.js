import { ASSETS, COLORS, FONTS } from '@/lib/constants'
export default function AboutSection() {
return (
<section
style={{
background: 'transparent', padding: '90px 40px',
display: 'flex', flexDirection: 'column',
alignItems: 'center', gap: '50px',
      }}
>
{/* Photo */}
<div style={{ maxWidth: '860px', width: '100%', marginTop: '-210px', position: 'relative', zIndex: 2 }}>
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
src={ASSETS.beyondPhoto}
alt="Beyond AOW team"
style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
/>
</div>
{/* Text */}
<div style={{ maxWidth: '736px', textAlign: 'center' }}>
<p
style={{
fontFamily: FONTS.body, fontWeight: '700', fontSize: '14px',
letterSpacing: '1.4px', textTransform: 'uppercase',
color: COLORS.champagne, marginBottom: '20px',
          }}
>
          BEYOND × AOW
</p>
<h2
style={{
fontFamily: FONTS.heading, fontSize: 'clamp(30px, 4vw, 50px)',
color: COLORS.white, fontWeight: '300',
marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-1.5px',
          }}
>
          More than a gathering.<br />
          A platform for connection<br />
          and opportunity
</h2>
<p
style={{
fontFamily: FONTS.body, fontSize: '16px',
color: 'rgba(248,237,223,0.8)', lineHeight: '1.5',
letterSpacing: '-0.48px', marginBottom: '12px',
          }}
>
          Africa Oil Week is more than a conference, it is a space for connection and opportunity.
</p>
<p
style={{
fontFamily: FONTS.body, fontSize: '16px',
color: 'rgba(248,237,223,0.8)', lineHeight: '1.5',
letterSpacing: '-0.48px',
          }}
>
          Beyond provides delegates with a seamless concierge experience from arrival to departure,
          ensuring every detail is coordinated with precision and ease.
</p>
</div>
</section>
  )
}