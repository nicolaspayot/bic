exports.isValid = function (bic) {
  return /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/i.test(bic);
}
