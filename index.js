'use strict';

var bicRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

exports.isValid = function (bic) {
  return bicRegex.test(bic);
}
