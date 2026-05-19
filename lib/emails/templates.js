function groupCartByCategory(cart) {
  return cart.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(item.title)
    return acc
  }, {})
}

function formatServicesText(grouped) {
  return Object.entries(grouped)
    .map(([cat, items]) => `${cat}:\n${items.map((t) => `  - ${t}`).join('\n')}`)
    .join('\n\n')
}

function formatServicesHtml(grouped) {
  return Object.entries(grouped)
    .map(
      ([cat, items]) =>
        `<p><strong>${escapeHtml(cat)}</strong></p><ul>${items.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`
    )
    .join('')
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function contactBlock({ name, company, email, phone }) {
  return `Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}`
}

function contactBlockHtml({ name, company, email, phone }) {
  return `<ul>
<li><strong>Name:</strong> ${escapeHtml(name)}</li>
<li><strong>Company:</strong> ${escapeHtml(company)}</li>
<li><strong>Email:</strong> ${escapeHtml(email)}</li>
<li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
</ul>`
}

export function bookingTeamEmail({ name, company, email, phone, notes, cart }) {
  const grouped = groupCartByCategory(cart)
  const servicesText = formatServicesText(grouped)
  const notesText = notes?.trim() ? `\n\nNotes:\n${notes.trim()}` : ''

  return {
    subject: `New concierge request — ${name} (${company})`,
    text: `New concierge request

${contactBlock({ name, company, email, phone })}

Selected services:
${servicesText}${notesText}`,
    html: `<h2>New concierge request</h2>
${contactBlockHtml({ name, company, email, phone })}
<h3>Selected services</h3>
${formatServicesHtml(grouped)}
${notes?.trim() ? `<h3>Notes</h3><p>${escapeHtml(notes.trim())}</p>` : ''}`,
  }
}

export function bookingClientEmail({ name, cart }) {
  const grouped = groupCartByCategory(cart)
  const servicesText = formatServicesText(grouped)

  return {
    subject: 'We received your concierge request',
    text: `Dear ${name},

Thank you for your concierge request for Africa Oil Week 2026.

We have received the following selections:

${servicesText}

A Beyond concierge will review your request and contact you shortly.

Beyond Accra Concierge`,
    html: `<h2>Thank you, ${escapeHtml(name)}</h2>
<p>We have received your concierge request for Africa Oil Week 2026.</p>
<h3>Your selections</h3>
${formatServicesHtml(grouped)}
<p>A Beyond concierge will review your request and contact you shortly.</p>
<p>Beyond Accra Concierge</p>`,
  }
}

export function enquiryTeamEmail({ name, company, email, phone, message }) {
  const messageText = message?.trim() ? message.trim() : '(No message provided)'

  return {
    subject: `New enquiry — ${name}`,
    text: `New enquiry

${contactBlock({ name, company, email, phone })}

Message:
${messageText}`,
    html: `<h2>New enquiry</h2>
${contactBlockHtml({ name, company, email, phone })}
<h3>Message</h3>
<p>${escapeHtml(messageText)}</p>`,
  }
}

export function enquiryClientEmail({ name }) {
  return {
    subject: 'We received your enquiry',
    text: `Dear ${name},

Thank you for contacting Beyond Accra Concierge.

We have received your enquiry and a member of our concierge team will contact you shortly.

Beyond Accra Concierge`,
    html: `<h2>Thank you, ${escapeHtml(name)}</h2>
<p>We have received your enquiry and a member of our concierge team will contact you shortly.</p>
<p>Beyond Accra Concierge</p>`,
  }
}
