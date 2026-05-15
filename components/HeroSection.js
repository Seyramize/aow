import { ASSETS, COLORS, FONTS } from '@/lib/constants'
import { FaRegComments } from 'react-icons/fa'
export default function HeroSection({ onEnquiry, onScrollToPackages }) {
return (
<section
style={{
height: '100vh', minHeight: '700px', position: 'relative',
display: 'flex', alignItems: 'center', justifyContent: 'center',
background: 'transparent', overflow: 'hidden',
      }}
>
{/* Background */}
<div
style={{
position: 'absolute', inset: 0,
backgroundImage: `url(/images/hero.png)`,
backgroundSize: 'cover', backgroundPosition: 'center',
        }}
/>
<div
style={{
position: 'absolute', inset: 0,
background:
'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0) 55%), linear-gradient(90deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25))',
        }}
/>
{/* Logo */}
<div
style={{
position: 'absolute', top: '32px', left: '50%',
transform: 'translateX(-50%)', zIndex: 2,
        }}
>
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/images/bclogo.svg" alt="Beyond Accra" style={{ height: '49px', objectFit: 'contain' }} />
</div>
{/* Content */}
<div
style={{
position: 'relative', zIndex: 1, textAlign: 'center',
padding: '0 24px', maxWidth: '791px',
animation: 'fadeUp 0.7s ease',
        }}
>
<h1
style={{
fontFamily: FONTS.heading, fontWeight: '300',
fontSize: 'clamp(40px, 7vw, 75px)', color: COLORS.white,
lineHeight: '1.0', marginBottom: '24px',
letterSpacing: '-2.25px', textShadow: '0 0 50px black',
          }}
>
          Arrive Ready for AOW.
</h1>
<p
style={{
fontFamily: FONTS.body, fontSize: '16px',
color: 'rgba(251,252,255,0.85)', maxWidth: '643px',
margin: '0 auto 10px', lineHeight: '1.5',
letterSpacing: '-0.32px', textShadow: '0 0 20px black',
          }}
>
          As the official concierge partner for Africa Oil Week 2026, Beyond coordinates arrival
          services, transportation, accommodation, and curated experiences for delegates visiting Accra.
</p>
<p
style={{
fontFamily: FONTS.body, fontSize: '16px',
color: 'rgba(251,252,255,0.85)', maxWidth: '643px',
margin: '0 auto 36px', lineHeight: '1.5',
letterSpacing: '-0.32px', textShadow: '0 0 20px black',
          }}
>
          Select your desired services and your concierge will handle the rest.
</p>
<div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
<button
onClick={onScrollToPackages}
style={{
padding: '15px 25px', height: '54px',
background: COLORS.white, backdropFilter: 'blur(17.5px)',
color: COLORS.blue, border: 'none', borderRadius: '10px',
fontFamily: FONTS.body, fontSize: '16px',
letterSpacing: '-0.32px', cursor: 'pointer',
fontWeight: '400', whiteSpace: 'nowrap',
            }}
>
            Build Your Concierge Request
</button>
<button
onClick={onEnquiry}
style={{
padding: '15px 25px',
background: 'rgba(251,252,255,0.05)',
color: COLORS.white,
border: '0.5px solid rgba(251,252,255,1)',
borderRadius: '10px', fontFamily: FONTS.body,
fontSize: '16px', letterSpacing: '-0.32px',
cursor: 'pointer', fontWeight: '400',
display: 'flex', alignItems: 'center', gap: '10px',
            }}
>
<FaRegComments style={{ fontSize: '20px' }} />
            Talk to a Concierge
</button>
</div>
</div>
</section>
  )
}