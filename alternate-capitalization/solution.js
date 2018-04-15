function validatePIN(pin) {
  let r = /^\d{4}$|^\d{6}$/g;
  return r.test(pin);
}