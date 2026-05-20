import { NextResponse } from 'next/server'

import { sendEnquiryEmails } from '@/lib/emails/dispatch'
import { validateEnquirySubmission } from '@/lib/validateSubmission'
import { getClientIp, verifyTurnstileToken } from '@/lib/turnstile'

export async function POST(request) {
  try {
    const body = await request.json()

    const turnstile = await verifyTurnstileToken(
      body.turnstileToken,
      getClientIp(request)
    )
    if (!turnstile.ok) {
      return NextResponse.json({ error: turnstile.error }, { status: 403 })
    }

    const errors = validateEnquirySubmission(body)

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 })
    }

    const { name, company, email, phone, message } = body
    
    await sendEnquiryEmails({
      name,
      company,
      email,
      phone,
      message,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Enquiry email error:', err)
    return NextResponse.json(
      { error: 'Unable to send your enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
