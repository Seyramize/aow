// ─── Figma Asset URLs (valid ~7 days from generation) ────────────────────────
// Replace these with your own hosted images when they expire.
export const ASSETS = {
  heroBg: 'https://www.figma.com/api/mcp/asset/1fbb428f-951e-412e-a7e7-7b9e35b29afe',
  beyondPhoto: 'https://www.figma.com/api/mcp/asset/6c6194b0-b9ab-4777-8154-40f53a2994eb',
  card: 'https://www.figma.com/api/mcp/asset/6d9ea0fa-abf7-444e-afec-d81a17af0111',
  visa: 'https://www.figma.com/api/mcp/asset/7d712653-9183-444f-8208-f874a84267bf',
  bookingSupport: 'https://www.figma.com/api/mcp/asset/4cb86d13-6fef-40af-a3fc-ed36667d8995',
  experiencesBg: 'https://www.figma.com/api/mcp/asset/63914f0b-8a27-45af-a961-94559605d82b',
  curatedBg: 'https://www.figma.com/api/mcp/asset/31281529-5027-4f96-8b6d-02e592278fd8',
  logo: 'https://www.figma.com/api/mcp/asset/35c29f4e-b749-4cbc-9eaa-32fdd0340150',
  instagram: 'https://www.figma.com/api/mcp/asset/671a1ddd-4ef8-4550-86c5-907d94846712',
  globe: 'https://www.figma.com/api/mcp/asset/4cfef460-4e38-4175-ba4b-ab9884c71ee4',
  basket: 'https://www.figma.com/api/mcp/asset/f636f684-d790-4c62-84eb-084f15e52e71',
}

// ─── Design Tokens ────────────────────────────────────────────────────────────
export const COLORS = {
  blue: '#0b1b28',
  white: '#fbfcff',
  champagne: '#f8eddf',
  gold: '#c9a84c',
}

export const FONTS = {
  heading: "'Argent CF', Georgia, serif",
  body: "var(--font-outfit), Helvetica, sans-serif",
}

// ─── Services Data ────────────────────────────────────────────────────────────
export const ARRIVAL_SERVICES = [
  {
    id: 'arrival-service',
    image: '/images/arrival/meetngreet.png',
    title: 'Arrival Service',
    priceLabel: 'STARTING AT',
    price: '$195',
    category: 'ARRIVAL SERVICES',
    bullets: [
      'A fully coordinated airport arrival experience including personalized meet & greet, priority immigration assistance, and luggage handling for a seamless transition through the airport.',
    ],
  },
  {
    id: 'visa-on-arrival',
    image: '/images/arrival/visaonarrival.jpg',
    title: 'Visa on Arrival',
    priceLabel: 'STARTING AT',
    price: '$450',
    category: 'ARRIVAL SERVICES',
    bullets: [
      'Concierge-managed visa on arrival coordination including pre-arrival processing support and immigration facilitation for eligible delegates arriving in Ghana.',
    ],
  },
  {
    id: 'cip-terminal-access',
    image: '/images/ciplounge.png',
    title: 'CIP Terminal Access',
    priceLabel: 'STARTING AT',
    price: '$445',
    category: 'ARRIVAL SERVICES',
    bullets: [
      'A premium airport experience where delegates are picked up directly on the tarmac in a luxury SUV and escorted to the private CIP lounge while immigration and airport formalities are handled seamlessly in the background.',
    ],
  },
]

export const TRANSPORT_SERVICES = [
  {
    id: 'airport-transfers',
    image: '/images/transport/airporttransfer.webp',
    title: 'Airport Transfers',
    priceLabel: '',
    price: '$150',
    category: 'TRANSPORTATION',
    bullets: [
      '(One Way: $100, Round Trip: $150)',
      'Private chauffeur-driven airport pickup and drop-off services coordinated around delegate arrival and departure schedules.',
    ],
  },
  {
    id: 'on-demand-chauffeur-transport',
    image: '/images/transport/chauffeur.jpeg',
    title: 'On-Demand Chauffeur Transport',
    priceLabel: 'STARTING AT',
    price: '$150',
    priceNote: 'per day',
    category: 'TRANSPORTATION',
    bullets: [
      'Dedicated premium vehicles with professional chauffeurs available throughout your stay for meetings, conference transfers, dining, and city mobility.',
      '(Price is based on vehicle type)',
    ],
  },
]

export const HOTELS = [
  {
    id: 'kempinski',
    image: '/images/accommodation/kempinski.jpg',
    title: 'Kempinski Hotel Gold Coast City',
    priceLabel: 'PRICE RANGE',
    price: '$558 – $1320',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '5-STAR | AOW MAIN VENUE',
    description: 'The official AOW venue and Accra’s flagship luxury hotel, offering premium rooms, refined dining, spa facilities, and direct conference access in the heart of the city.',
    roomTypes: [
      { type: 'Superior Room', price: '$558' },
      { type: 'Deluxe Room', price: '$612' },
      { type: 'Executive Room', price: '$714' },
      { type: 'Junior Suite', price: '$1320' },
    ],
  },
  {
    id: 'movenpick',
    image: '/images/accommodation/movenpick.webp',
    title: 'Mövenpick Ambassador Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$420 – $660',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '5-STAR | CENTRAL ACCRA',
    description: 'A spacious luxury hotel blending business convenience with a relaxed resort atmosphere, featuring expansive grounds, wellness facilities, and multiple dining options.',
    roomTypes: [
      { type: 'Deluxe Room', price: '$420 - $480' },
      { type: 'Executive Room', price: '$480 - $540' },
    ],
  },
  {
    id: 'alisa',
    image: '/images/accommodation/alisa.jpg',
    title: 'Alisa Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$208 – $480',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | NORTH RIDGE',
    description: 'A reliable business-friendly hotel in central Accra offering practical comfort, meeting facilities, and convenient access to key commercial districts.',
    roomTypes: [
      { type: 'Superior Room', price: '$208' },
      { type: 'Deluxe Room', price: '$234' },
      { type: 'Junior Suite', price: '$245' },
      { type: 'Ebony Suite', price: '$265' },
      { type: 'Royal Suite', price: '$400' },
    ],
  },
  {
    id: 'marriott',
    image: '/images/accommodation/marriot.jpg',
    title: 'Accra Marriott Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$396 – $540',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '5-STAR | AIRPORT CITY',
    description: 'A modern Airport City hotel offering polished accommodations, contemporary business amenities, and quick airport access for efficient travel.',
    roomTypes: [
      { type: 'Deluxe Room', price: '$396 - $456' },
      { type: 'Club Room', price: '$480 - $540' },
    ],
  },
  {
    id: 'labadi',
    image: '/images/accommodation/labadi.jpg',
    title: 'Labadi Beach Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$324 – $3000',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '5-STAR | BEACHFRONT, ACCRA',
    description: 'A luxury beachfront property combining premium hospitality, oceanfront relaxation, and extensive leisure facilities along Accra’s coastline.',
    roomTypes: [
      { type: 'Superior Room', price: '$324 - $360' },
      { type: 'Luxury Room', price: '$372 - $408' },
      { type: 'Superior Suite', price: '$780' },
      { type: 'Executive Suite', price: '$1054' },
      { type: 'Presidential Suite', price: '$3000' },
    ],
  },
  {
    id: 'pelican',
    image: '/images/accommodation/pelican.jpg',
    title: 'The Pelican Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$258 – $534',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | CANTONMENTS',
    description: 'A contemporary Cantonments hotel offering comfortable accommodations, practical amenities, and easy access to Accra’s business and diplomatic districts.',
    roomTypes: [
      { type: 'Standard Room', price: '$258 - $294' },
      { type: 'Deluxe Room', price: '$318 - $354' },
      { type: 'Junior Suite', price: '$378 - $414' },
      { type: 'Premier Suite', price: '$438 - $474' },
      { type: 'Executive Suite', price: '$498 - $534' },
    ],
  },
  {
    id: 'la-villa',
    image: '/images/accommodation/lavilla.jpeg',
    title: 'La Villa Boutique Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$222 – $294',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | OSU',
    description: 'A stylish boutique property in Osu offering personalized hospitality, intimate surroundings, and convenient access to restaurants, nightlife, and cultural attractions.',
    roomTypes: [
      { type: 'Standard Room', price: '$222' },
      { type: 'Superior Room', price: '$258' },
      { type: 'One Bedroom Chalet', price: '$294' },
    ],
  },
  {
    id: 'lancaster',
    image: '/images/accommodation/lancaster.webp',
    title: 'The Lancaster Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$216 – $450',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | AiRPORT CITY',
    description: 'A spacious full-service hotel with landscaped grounds, wellness facilities, conference spaces, and strong airport connectivity for business travelers.',
    roomTypes: [
      { type: 'Standard Room', price: '$216' },
      { type: 'Superior Room', price: '$240' },
      { type: 'One Bedroom Chalet', price: '$350' },
      { type: 'Premier Suite', price: '$450' },
    ],
  },
  {
    id: 'four-points',
    image: '/images/accommodation/fourpoints.jpg',
    title: 'Four Points by Sheraton Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$306 – $978',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | AiRPORT CITY',
    description: 'A newly opened modern hotel in Airport City featuring contemporary rooms, premium amenities, and easy access to business and event hubs.',
    roomTypes: [
      { type: 'Standard Room', price: '$306' },
      { type: 'Deluxe Room', price: '$331' },
      { type: 'Suite', price: '$518' },
      { type: 'Executive Suite', price: '$815' },
    ],
  },
  {
    id: 'the-palms',
    image: '/images/accommodation/palms.jpeg',
    title: 'The Palms by Eagles Hotel',
    priceLabel: 'PRICE RANGE',
    price: '$306 – $396',
    priceNote: 'per night',
    category: 'ACCOMMODATION',
    badge: '4-STAR | AiRPORT CITY',
    description: 'A trusted Airport City hotel offering reliable comfort, modern amenities, and convenient proximity to both the airport and AOW venues.',
    roomTypes: [
      { type: 'Queen Room', price: '$300 - $336' },
      { type: 'Deluxe Queen Room', price: '$336 - $396' },
    ],
  },
]

export const EXPERIENCES = [
  {
    id: 'wojutei',
    image: '/images/wojutei.jpg',
    title: 'Wojutei',
    priceLabel: 'PER PERSON',
    price: '¢3000',
    category: 'EXPERIENCES',
    bullets: [
      'A story-led culinary journey shaped by local ingredients and personal memory.',
      'An intimate, mulit-course dining experience hosted by Chef Fiifi in a private setting.',
      'An interactive dessert moment in the kitchen to close the evening together.',
    ],
  },
  {
    id: 'cape-coast',
    image: '/images/capecoast.jpg',
    title: 'Cape Coast Castle After Dark',
    priceLabel: 'PER PERSON',
    price: '¢1200',
    category: 'EXPERIENCES',
    bullets: [
      'Exclusive access after regular hours',
      'A rare nighttime perspective of the castle',
      'Private guide with intimate storytelling',
    ],
  },
]
