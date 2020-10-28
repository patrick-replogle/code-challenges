// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.

function isPower(n) {
    if (n === 1) return true;
    
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < n; j++) {
            if (i**j === n) return true;
        }
    }
    return false;
}
