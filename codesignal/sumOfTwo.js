/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is 
taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

// first pass solution
function sumOfTwo(a, b, v) {
    let seen = new Set(a);
    
    for (let num of b) {
        if(seen.has(v - num)) {
            return true;
        }
    }
    return false;
}
