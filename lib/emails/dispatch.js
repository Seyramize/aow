import {
  getBookingTeamTemplateUuid,
  getBookingClientTemplateUuid,
  getEnquiryTeamTemplateUuid,
  getEnquiryClientTemplateUuid,
  useMailtrapTemplates,
  isSandbox,
  getTeamEmails,
} from '@/lib/mailtrap'
import { sendTemplateMail, sendMail } from '@/lib/emails/send'
import {
  bookingTemplateVariables,
  enquiryTemplateVariables,
} from '@/lib/emails/templateVariables'
import {
  bookingTeamEmail,
  bookingClientEmail,
  enquiryTeamEmail,
  enquiryClientEmail,
} from '@/lib/emails/templates'

export async function sendBookingEmails({ name, company, email, phone, notes, cart }) {
  // In sandbox/testing, send everything to sandbox address to avoid rate limiting
  const recipientEmails = isSandbox() ? ['sandbox@mailtrap.io'] : getTeamEmails()

  const variables = bookingTemplateVariables({
    name,
    company,
    email,
    phone,
    notes,
    cart,
  })

  if (useMailtrapTemplates()) {
    await sendTemplateMail({
      to: recipientEmails,
      templateUuid: getBookingTeamTemplateUuid(),
      variables,
      replyTo: email,
    })
    // Add significant delay to avoid Mailtrap rate limiting on free tier
    await new Promise(resolve => setTimeout(resolve, 2000))
    await sendTemplateMail({
      to: [email],
      templateUuid: getBookingClientTemplateUuid(),
      variables,
    })
    return
  }

  const teamContent = bookingTeamEmail({ name, company, email, phone, notes, cart })
  const clientContent = bookingClientEmail({ name, cart })

  await sendMail({ to: recipientEmails, replyTo: email, ...teamContent })
  // Add significant delay to avoid Mailtrap rate limiting on free tier
  await new Promise(resolve => setTimeout(resolve, 2000))
  await sendMail({ to: [email], ...clientContent })
}

export async function sendEnquiryEmails({ name, company, email, phone, message }) {
  // In sandbox/testing, send everything to sandbox address to avoid rate limiting
  const recipientEmails = isSandbox() ? ['sandbox@mailtrap.io'] : getTeamEmails()

  const variables = enquiryTemplateVariables({
    name,
    company,
    email,
    phone,
    message,
  })

  if (useMailtrapTemplates()) {
    await sendTemplateMail({
      to: recipientEmails,
      templateUuid: getEnquiryTeamTemplateUuid(),
      variables,
      replyTo: email,
    })
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500))
    await sendTemplateMail({
      to: [email],
      templateUuid: getEnquiryClientTemplateUuid(),
      variables,
    })
    return
  }

  const teamContent = enquiryTeamEmail({ name, company, email, phone, message })
  const clientContent = enquiryClientEmail({ name })

  await sendMail({ to: recipientEmails, replyTo: email, ...teamContent })
  // Add delay to avoid rate limiting
  await new Promise(resolve => setTimeout(resolve, 500))
  await sendMail({ to: [email], ...clientContent })
}
