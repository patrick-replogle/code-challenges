// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

// Example

// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations2(n, l, r) = 2.

// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

// first pass solution
function countSumOfTwoRepresentations2(n, l, r) {
    let count = 0;
    
    for (let i = l; i <= r; i++) {
        for (let j = l; j <= r; j++) {
            if (j > i || j + i > n) break
            else if (i + j === n) count++
        }
    }
    return count;
}

// second pass solution
function countSumOfTwoRepresentations2(n, l, r) {
    let count = 0;
    
    for (let a = l; a <= r; a++) {
        let b = n - a;
        
        if (a + b === n && l <= a && b <= r && a <= b) {
            count++;
        }
    }
    return count;
}
