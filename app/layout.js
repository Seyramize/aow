import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Beyond Accra Concierge | Luxury Travel Concierge for AOW',
  description:
    'As the official concierge partner for Africa Oil Week 2026, Beyond coordinates arrival services, transportation, accommodation, and curated experiences for delegates visiting Accra.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Argent CF is not on Google Fonts — add your licensed copy here */}
        {/* <link rel="stylesheet" href="/fonts/argentcf.css" /> */}
      </head>
      <body className={outfit.variable}>{children}</body>
    </html>
  )
}
