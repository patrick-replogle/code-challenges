// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {
    let max = -Infinity;
    n = String(n)
    
    for (let i = 0; i < n.length; i++) {
        let temp = n.slice(0, i).concat(n.slice(i + 1));
        max = Math.max(max, Number(temp));
    }
    return max;
}
