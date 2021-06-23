/*
Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
*/

// first pass solution => brute force: times out
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let output = -Infinity;
    
    for (let i = 0; i < s.length - k + 1; i++) {
        let substringCount = 0;
        for (let j = i; j < i + k; j++) {
            if (vowels.has(s[j])) {
                substringCount++;
            }
        }
        output = Math.max(output, substringCount); 
    }
    return output;
};

// second pass solution => sliding window pattern and linear time complexity
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let output = 0, 
    let currCount = 0;
    let i = 0;
    let j = 0;
    
    while (j < k) {
        if (vowels.has(s[j])) currCount++;
        j++;
    }
    
    output = currCount;
    
    while (j < s.length) {
        if (vowels.has(s[i])) currCount--;
        if (vowels.has(s[j])) currCount++;
        output = Math.max(output, currCount);
        j++, i++;
    }
    return output;
};
