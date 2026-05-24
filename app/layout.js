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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 5.0,
    userScalable: true,
    viewportFit: 'cover',
  }
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
