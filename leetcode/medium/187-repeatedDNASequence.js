// All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is 
// sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

// first pass solution
var findRepeatedDnaSequences = function(s) {
    if (s.length < 11) return [];
    
    let seen = new Set();
    let output = new Set();
    
    for (let i = 0; i < s.length; i++) {
        let curr = s.slice(i, i + 10);
        if (seen.has(curr) && !output.has(curr)) {
            output.add(curr);
        }
        seen.add(curr);
    }
    return Array.from(output);
};

// second pass slight optimization makes it 30-40% faster
var findRepeatedDnaSequences = function(s) {
    if (s.length < 11) return [];
    
    let seen = new Set();
    let output = new Set();
    
    for (let i = 9; i < s.length; i++) {
        let curr = s.slice(i - 9, i + 1);
        if (seen.has(curr) && !output.has(curr)) {
            output.add(curr);
        }
        seen.add(curr);
    }
    return Array.from(output);
};
