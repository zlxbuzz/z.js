export function isEmail (email) {
  return  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(email);
}
