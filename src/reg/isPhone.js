export function isPhone (phone) {
  return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone)
}
