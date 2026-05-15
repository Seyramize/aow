export function validateContactForm(form) {
  const errors = {}
  if (!form.name?.trim() || form.name.trim().length < 2)
    errors.name = 'Full name is required'
  if (!form.company?.trim())
    errors.company = 'Company is required'
  if (!form.email?.trim() || !/\S+@\S+\.\S+/.test(form.email))
    errors.email = 'A valid email address is required'
  if (!form.phone?.trim() || form.phone.trim().length < 7)
    errors.phone = 'A valid phone number is required'
  return errors
}
