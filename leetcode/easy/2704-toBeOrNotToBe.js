var expect = function(val1) {
    return {
        toBe: (val2) => {
            if (val1 === val2) {
                return true;
            }
            throw new Error('Not Equal');
        },
        notToBe: (val2) => {
            if (val1 !== val2) {
                return true;
            }
            throw new Error('Equal');
        }
    }
};
