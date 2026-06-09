const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{7,20}$/;

export function validateContactForm(values) {
  const errors = {};

  if (!values.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (values.phone?.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project type';
  }

  if (!values.budget) {
    errors.budget = 'Please select a budget range';
  }

  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}
