# Beyond Accra Concierge

Luxury travel concierge website for Africa Oil Week delegates.

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
beyond-accra/
├── app/
│   ├── layout.js          # Root layout, fonts, metadata
│   ├── globals.css        # Global styles, animations
│   └── page.js            # Main page — all sections assembled here
├── components/
│   ├── ServiceCard.js     # Reusable card (hover blur + reveal)
│   ├── SectionBlock.js    # Reusable section wrapper
│   ├── CardGrid.js        # Responsive grid layout
│   ├── HeroSection.js     # Hero with CTA buttons
│   ├── AboutSection.js    # Beyond × AOW section
│   ├── BookingSupportBanner.js
│   ├── ExperiencesSection.js
│   ├── Footer.js
│   ├── FloatingCartButton.js
│   ├── Modal.js           # Base modal (all modals extend this)
│   ├── CartModal.js
│   ├── BookingModal.js
│   ├── EnquiryModal.js
│   └── ConfirmationModal.js
├── lib/
│   ├── CartContext.js     # Global cart state (React Context)
│   ├── constants.js       # Assets, colors, fonts, all data
│   └── validation.js      # Form validation
└── public/
    └── fonts/             # Drop Argent CF font files here
```

---

## Adding Argent CF Font

Argent CF is a licensed font — purchase it at https://connary.com/argentcf.html

Once you have the files:
1. Place `.woff2` and `.woff` files in `/public/fonts/`
2. Uncomment the `@font-face` block in `app/globals.css`
3. Uncomment the stylesheet link in `app/layout.js`

---

## Replacing Images

All image URLs live in `lib/constants.js` under the `ASSETS` object.
The current Figma asset URLs expire after ~7 days.

To replace:
1. Upload your images to `/public/images/` or a CDN
2. Update the corresponding URL in `lib/constants.js`

---

## Adding / Editing Services

All service, hotel, and experience data lives in `lib/constants.js`:
- `ARRIVAL_SERVICES` — Visa Support, Arrival & Airport Services, On-Demand Transport
- `TRANSPORT_SERVICES` — Airport Pickup, Conference Transportation
- `HOTELS` — All 5 hotel cards
- `EXPERIENCES` — Wafer, Cape Coast Castle After Dark

Each entry follows this shape:
```js
{
  id: 'unique-id',
  image: 'keyFromASSETS',   // e.g. 'card', 'visa'
  title: 'Service Name',
  priceLabel: 'STARTING AT' | 'PRICE RANGE',
  price: '¢500',
  category: 'ARRIVAL SERVICES',  // used in booking summary
  badge: '5-STAR | LOCATION',    // optional — hotel cards only
  description: 'Hotel description text', // shown on hover
  bullets: ['Bullet point 1', 'Bullet point 2'], // shown on hover
}
```

---

## Build for Production

```bash
npm run build
npm start
```
