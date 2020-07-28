export default {
    isValid(bic: string): boolean {
        const bicRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

        return bicRegex.test(bic);
    },
};
