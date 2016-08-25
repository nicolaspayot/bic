var test = require('ava');
var bic = require('../index');

test('Undefined should not be valid as BIC', function (t) {
  t.false(bic.isValid());
});

test('An empty string should not be valid as BIC', function (t) {
  t.false(bic.isValid(''));
});

test('A number should not be valid as BIC', function (t) {
  t.false(bic.isValid(12345678));
});

test('A BIC with less than 8 characters should not be valid', function (t) {
  t.false(bic.isValid('ABCDE'));
  t.false(bic.isValid('ABCDEFG'));
  t.false(bic.isValid('ABCD123'));
});

test('A BIC with length between 8 and 11 should not be valid', function (t) {
  t.false(bic.isValid('ABCDEFGHI'));
  t.false(bic.isValid('ABCDEFGHIJ'));
});

test('A BIC with more than 11 characters should not be valid', function (t) {
  t.false(bic.isValid('ABCDEFGHIJKL'));
});

test('A BIC with numbers on the 6 first characters should not be valid', function (t) {
  t.false(bic.isValid('1ABCDEFG'));
  t.false(bic.isValid('A1BCDEFG'));
  t.false(bic.isValid('AB1CDEFG'));
  t.false(bic.isValid('ABC1DEFG'));
  t.false(bic.isValid('ABCD1EFG'));
  t.false(bic.isValid('ABCDE1FG'));
});

test('A BIC with special characters should not be valid', function (t) {
  t.false(bic.isValid('ABCDEFG*'));
  t.false(bic.isValid('_BCDEFG'));
  t.false(bic.isValid('ABC-EFG'));
});

test('A BIC with 8 characters (last 2 can be numbers) should be valid', function (t) {
  t.true(bic.isValid('ABCDEFGH'));
  t.true(bic.isValid('ABCDEFG1'));
  t.true(bic.isValid('ABCDEF12'));
});

test('A BIC with 11 characters (last 5 can be numbers) should be valid', function (t) {
  t.true(bic.isValid('ABCDEFGHIJK'));
  t.true(bic.isValid('ABCDEFGHIJ1'));
  t.true(bic.isValid('ABCDEFGHI12'));
  t.true(bic.isValid('ABCDEFGH123'));
  t.true(bic.isValid('ABCDEFG1234'));
  t.true(bic.isValid('ABCDEF12345'));
});
