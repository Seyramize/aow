import { NextResponse } from 'next/server'
import { getTeamEmails, isSandbox } from '@/lib/mailtrap'
import { sendBookingEmails } from '@/lib/emails/dispatch'
import { validateBookingSubmission } from '@/lib/validateSubmission'
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

    const errors = validateBookingSubmission(body)

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 })
    }

    const { name, company, email, phone, notes, cart } = body
    
    // Only get team emails in production; in sandbox/dev, dispatch.js will handle it
    const teamEmails = isSandbox() ? [] : getTeamEmails()

    console.log(`Sending booking emails ${isSandbox() ? 'to sandbox' : `to team: ${teamEmails.join(', ')}`}`)
    
    await sendBookingEmails({
      name,
      company,
      email,
      phone,
      notes,
      cart,
      teamEmails,
    })

    console.log('Booking emails sent successfully')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking error details:', {
      message: err.message,
      stack: err.stack,
      cause: err.cause?.message,
    })
    return NextResponse.json(
      { error: 'Unable to send your request. Please try again later.' },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
