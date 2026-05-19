import { MailtrapClient } from 'mailtrap'

export function isSandbox() {
  return process.env.MAILTRAP_USE_SANDBOX === 'true'
}

export function getMailtrapClient() {
  const token = process.env.MAILTRAP_API_TOKEN
  if (!token) {
    throw new Error('MAILTRAP_API_TOKEN is not configured')
  }

  const sandbox = isSandbox()
  const testInboxId = sandbox
    ? Number(process.env.MAILTRAP_INBOX_ID)
    : undefined

  if (sandbox && !testInboxId) {
    throw new Error('MAILTRAP_INBOX_ID is required when MAILTRAP_USE_SANDBOX=true')
  }

  return new MailtrapClient({
    token,
    sandbox,
    testInboxId,
  })
}

export function getMailFrom() {
  const email =
    process.env.MAIL_FROM_EMAIL ||
    (isSandbox() ? 'sandbox@mailtrap.io' : null)
  const name = process.env.MAIL_FROM_NAME || 'Beyond Accra Concierge'
  if (!email) {
    throw new Error('MAIL_FROM_EMAIL is not configured')
  }
  return { email, name }
}

const DEFAULT_TEAM_EMAILS = [
  'travel@beyondaccra.com',
  'ama@snowwhitegroup.com',
  'carl@beyondaccra.com',
  'operations@beyondaccra.com',
]

export function getTeamEmails() {
  const raw = process.env.TEAM_EMAILS || process.env.TEAM_EMAIL
  const emails = (raw || DEFAULT_TEAM_EMAILS.join(','))
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean)
  if (emails.length === 0) {
    throw new Error('TEAM_EMAILS is not configured')
  }
  return emails
}

export function getBookingTeamTemplateUuid() {
  const uuid = process.env.MAILTRAP_TEMPLATE_BOOKING_TEAM_UUID
  if (!uuid) throw new Error('MAILTRAP_TEMPLATE_BOOKING_TEAM_UUID is not configured')
  return uuid
}

export function getBookingClientTemplateUuid() {
  const uuid = process.env.MAILTRAP_TEMPLATE_BOOKING_CLIENT_UUID
  if (!uuid) throw new Error('MAILTRAP_TEMPLATE_BOOKING_CLIENT_UUID is not configured')
  return uuid
}

export function getEnquiryTeamTemplateUuid() {
  const uuid = process.env.MAILTRAP_TEMPLATE_ENQUIRY_TEAM_UUID
  if (!uuid) throw new Error('MAILTRAP_TEMPLATE_ENQUIRY_TEAM_UUID is not configured')
  return uuid
}

export function getEnquiryClientTemplateUuid() {
  const uuid = process.env.MAILTRAP_TEMPLATE_ENQUIRY_CLIENT_UUID
  if (!uuid) throw new Error('MAILTRAP_TEMPLATE_ENQUIRY_CLIENT_UUID is not configured')
  return uuid
}

export function useMailtrapTemplates() {
  return Boolean(
    process.env.MAILTRAP_TEMPLATE_BOOKING_TEAM_UUID &&
      process.env.MAILTRAP_TEMPLATE_BOOKING_CLIENT_UUID &&
      process.env.MAILTRAP_TEMPLATE_ENQUIRY_TEAM_UUID &&
      process.env.MAILTRAP_TEMPLATE_ENQUIRY_CLIENT_UUID
  )
}
