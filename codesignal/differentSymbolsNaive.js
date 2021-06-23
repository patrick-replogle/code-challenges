// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

// solution 1
function differentSymbolsNaive(s) {
    let chars = new Set();
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!chars.has(s[i])) {
            chars.add(s[i]);
            count++; 
        }
    }
    return count;
}

// solution 2 
function differentSymbolsNaive(s) {
    s = s.split("").sort();
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            count++;
        }
    }
    return count;
}
