// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// Example 1:

// Input:
// s = "ABAB", k = 2

// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.
 
// Example 2:

// Input:
// s = "AABABBA", k = 1

// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

// first pass and very ugly brute force solution
var characterReplacement = function(s, k) {
    let max = 0;
    let maxChar = "";
    let startIdx = 0;
    let leftOver = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        let curr = 1;
        let temp = k;
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === s[i]) {
                curr++;
            } else if (s[j] !== s[i] && temp > 0) {
                curr++;
                temp--;
            } else {
                break;
            }
            if (curr >= max) {
                maxChar = s[i];
                max = curr;
                startIdx = i;
                leftOver = temp;
            }
        }
    }
    if (leftOver > 0) {
        let left = startIdx - 1;
        let right = startIdx + max + 1;
        
        while (left >= 0 || right <= s.length - 1 && leftOver > 0) {
            if (s[left] !== maxChar) {
                max++;
                left--;
                leftOver--;
            } else if (s[right] !== maxChar) {
                max++;
                right++;
                leftOver--;
            }
        }
    }
    return max;
};
