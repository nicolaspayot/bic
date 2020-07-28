import bic from '../src/index';

describe('bic.isValid', () => {
    test('Undefined should not be valid as BIC', () => {
        // @ts-expect-error
        expect(bic.isValid()).toBe(false);
    });

    test('An empty string should not be valid as BIC', () => {
        expect(bic.isValid('')).toBe(false);
    });

    test('A number should not be valid as BIC', () => {
        // @ts-expect-error
        expect(bic.isValid(12345678)).toBe(false);
    });

    test('A BIC with less than 8 characters should not be valid', () => {
        expect(bic.isValid('ABCDE')).toBe(false);
        expect(bic.isValid('ABCDEFG')).toBe(false);
        expect(bic.isValid('ABCD123')).toBe(false);
    });

    test('A BIC with length between 8 and 11 should not be valid', () => {
        expect(bic.isValid('ABCDEFGHI')).toBe(false);
        expect(bic.isValid('ABCDEFGHIJ')).toBe(false);
    });

    test('A BIC with more than 11 characters should not be valid', () => {
        expect(bic.isValid('ABCDEFGHIJKL')).toBe(false);
    });

    test('A BIC with numbers on the 6 first characters should not be valid', () => {
        expect(bic.isValid('1ABCDEFG')).toBe(false);
        expect(bic.isValid('A1BCDEFG')).toBe(false);
        expect(bic.isValid('AB1CDEFG')).toBe(false);
        expect(bic.isValid('ABC1DEFG')).toBe(false);
        expect(bic.isValid('ABCD1EFG')).toBe(false);
        expect(bic.isValid('ABCDE1FG')).toBe(false);
    });

    test('A BIC with special characters should not be valid', () => {
        expect(bic.isValid('ABCDEFG*')).toBe(false);
        expect(bic.isValid('_BCDEFG')).toBe(false);
        expect(bic.isValid('ABC-EFG')).toBe(false);
    });

    test('A BIC with 8 characters (last 2 can be numbers) should be valid', () => {
        expect(bic.isValid('ABCDEFGH')).toBe(true);
        expect(bic.isValid('ABCDEFG1')).toBe(true);
        expect(bic.isValid('ABCDEF12')).toBe(true);
    });

    test('A BIC with 11 characters (last 5 can be numbers) should be valid', () => {
        expect(bic.isValid('ABCDEFGHIJK')).toBe(true);
        expect(bic.isValid('ABCDEFGHIJ1')).toBe(true);
        expect(bic.isValid('ABCDEFGHI12')).toBe(true);
        expect(bic.isValid('ABCDEFGH123')).toBe(true);
        expect(bic.isValid('ABCDEFG1234')).toBe(true);
        expect(bic.isValid('ABCDEF12345')).toBe(true);
    });

    test('BIC of popular known banks should be valid', () => {
        expect(bic.isValid('CHASUS33')).toBe(true);
        expect(bic.isValid('BOFAUS3N')).toBe(true);
        expect(bic.isValid('WFBIUS6S')).toBe(true);
        expect(bic.isValid('CITIUS33')).toBe(true);
        expect(bic.isValid('GOLDUS33')).toBe(true);
    });
});
