// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further 
// clarification see the following example.

function arrayPacking(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].toString(2);
        
        while (a[i].length < 8) {
            a[i] = "0" + a[i];
        }
    }
    a = a.reverse().join("");
    
    return parseInt(a, 2);
}
