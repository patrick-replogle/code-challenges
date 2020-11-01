// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

// For example, given the arrays  and , there are two numbers between them:  and . , ,  and  for the first value. Similarly, ,  and , .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// a: an array of integers
// b: an array of integers

function getTotalX(a, b) {
    let multiples = [];
    let result = 0;
    // find common multiples of all values in a
    for (let i = a[0]; i <= b[0]; i++) {
        let count = 0
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] === 0) count++;
        }
        if (count === a.length) multiples.push(i);
    }
    // find common multiples from multiples array that all values in b share
    for (let i = 0; i < multiples.length; i++) {
        let count = 0;
        for (let j = 0; j < b.length; j++) {
            if (b[j] % multiples[i] === 0) count++;
        }
        if (count === b.length) result++;
    }
    return result;
}
