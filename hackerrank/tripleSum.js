/*
Function Description

Complete the triplets function in the editor below. It must return the number of distinct triplets that can be formed from the given arrays.

triplets has the following parameter(s):

a, b, c: three arrays of integers.
*/

function triplets(a, b, c) {
    let output = 0;
    a = Array.from(new Set(a.sort((a, b) => a - b)));
    b = Array.from(new Set(b.sort((a, b) => a - b)));
    c = Array.from(new Set(c.sort((a, b) => a - b)));
    
    let i = 0;
    let j = 0;
    let k = 0;
    
    while (j < b.length) {
        while (i < a.length && a[i] <= b[j]) {
            i++;
        }
        while (k < c.length && b[j] >= c[k]) {
            k++;
        }
        output += i * k;
        j++;
    }
    return output;
}
