// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that 
// can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2

// first pass solution using dict to count chars in string
var longestPalindrome = function(s) {
    let charCount = {};
    let len = 0;
    let leftoverChar = 0;
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char] += 1;
    }
    
    for (let key in charCount) {
        while (charCount[key] - 2 >= 0) {
            charCount[key] -= 2;
            len += 2;
        }
        if (charCount[key] === 1) {
            leftoverChar = 1;
        }
    }
    return len + leftoverChar;
};

// second pass solution that is o(n) and slightly more optimized
var longestPalindrome = function(s) {
    let charCount = {};
    let odd = 0;
    let even = 0;
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char] += 1;
    }
    
    for (let key in charCount) {
        if (charCount[key] % 2 === 0) {
            even += charCount[key];
        } else {
            even += charCount[key] - 1;
            odd = 1;
        }
    }
    return odd + even;
};
