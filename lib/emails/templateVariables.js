const EMPTY = '—'

const CATEGORY = {
  ARRIVAL: 'ARRIVAL SERVICES',
  TRANSPORT: 'TRANSPORTATION',
  ACCOMMODATION: 'ACCOMMODATION',
  EXPERIENCES: 'EXPERIENCES',
}

function titlesInCategory(cart, category) {
  const titles = cart
    .filter((item) => item.category === category)
    .map((item) => item.title)
  return titles.length > 0 ? titles.join(', ') : EMPTY
}

function groupCartByCategory(cart) {
  return cart.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(item.title)
    return acc
  }, {})
}

function formatServicesText(cart) {
  const grouped = groupCartByCategory(cart)
  return Object.entries(grouped)
    .map(([cat, items]) => `${cat}:\n${items.map((t) => `  - ${t}`).join('\n')}`)
    .join('\n\n')
}

function formatServicesHtml(cart) {
  const grouped = groupCartByCategory(cart)
  return Object.entries(grouped)
    .map(
      ([cat, items]) =>
        `<p><strong>${cat}</strong></p><ul>${items.map((t) => `<li>${t}</li>`).join('')}</ul>`
    )
    .join('')
}

function contactFields({ name, company, email, phone }) {
  return {
    // Mailtrap HTML template variables
    full_name: name,
    company,
    email_address: email,
    phone_number: phone,
    // Legacy / fallback names
    name,
    email,
    phone,
    user_name: name,
    company_name: company,
  }
}

export function bookingTemplateVariables({ name, company, email, phone, notes, cart }) {
  const preferences = notes?.trim() || EMPTY
  const arrival = titlesInCategory(cart, CATEGORY.ARRIVAL)
  const transport = titlesInCategory(cart, CATEGORY.TRANSPORT)
  const accommodation = titlesInCategory(cart, CATEGORY.ACCOMMODATION)
  const experiences = titlesInCategory(cart, CATEGORY.EXPERIENCES)

  return {
    ...contactFields({ name, company, email, phone }),
    country_of_origin: EMPTY,
    arrival_services: arrival,
    transportation_services: transport,
    accommodation,
    accommodation_selection: accommodation,
    experience_selection: experiences,
    preferences_and_requirements: preferences,
    notes: preferences,
    services: formatServicesText(cart),
    services_html: formatServicesHtml(cart),
    services_list: cart.map((item) => ({
      category: item.category || 'Other',
      title: item.title,
    })),
  }
}

export function enquiryTemplateVariables({ name, company, email, phone, message }) {
  const msg = message?.trim() || EMPTY
  return {
    ...contactFields({ name, company, email, phone }),
    message: msg,
  }
}
