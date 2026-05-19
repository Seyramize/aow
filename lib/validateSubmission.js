import { validateContactForm } from './validation'

export function validateBookingSubmission(body) {
  const errors = validateContactForm(body)
  const cart = body?.cart
  if (!Array.isArray(cart) || cart.length === 0) {
    errors.cart = 'Please select at least one service'
  }
  return errors
}

export function validateEnquirySubmission(body) {
  return validateContactForm(body)
}
