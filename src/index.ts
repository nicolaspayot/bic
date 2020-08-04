const BIC_REGEX = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

export default {
    isValid(bic: string): boolean {
        return BIC_REGEX.test(bic);
    },
};
