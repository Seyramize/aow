import { getMailtrapClient, getMailFrom } from '@/lib/mailtrap'

function toRecipients(to) {
  return (Array.isArray(to) ? to : [to]).map((email) => ({ email }))
}

export async function sendTemplateMail({ to, templateUuid, variables, replyTo }) {
  const client = getMailtrapClient()
  const from = getMailFrom()

  const payload = {
    from: { email: from.email, name: from.name },
    to: toRecipients(to),
    template_uuid: templateUuid,
    template_variables: variables,
  }

  if (replyTo) {
    payload.reply_to = { email: replyTo }
  }

  return client.send(payload)
}

/** Fallback when template UUIDs are not configured */
export async function sendMail({ to, subject, text, html, replyTo }) {
  const client = getMailtrapClient()
  const from = getMailFrom()

  const payload = {
    from: { email: from.email, name: from.name },
    to: toRecipients(to),
    subject,
    text,
    html,
  }

  if (replyTo) {
    payload.reply_to = { email: replyTo }
  }

  return client.send(payload)
}
