// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// first pass solution using dict to cache strings, sorting and a set for further optimization
// n * n log n time complexity 
var findAnagrams = function(s, p) {
    let results = [];
    let anagrams = {};
    let set1 = new Set(p)
    p = p.split("").sort().join("");
    
    for (let i = 0; i < s.length - p.length + 1; i++) {
        if (!set1.has(s[i])) continue;
        
        let curr = s.slice(i, i + p.length);
        
        if (curr in anagrams) {
            results.push(i)
        } else if (curr.split("").sort().join("") === p) {
            results.push(i);
            anagrams[curr] = true;
        }
    }
    return results;
};
