// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
 
// first pass solution
let lengthOfLongestSubstring = function(s) {;
    let currLongest = [];
    let maxLongest = [];
    let left = 0;
    let right = 0;
    
    if (s.length <= 1) return s.length
                                            
    while(left < s.length && right < s.length) {
        if (!currLongest.includes(s[right])) {
            currLongest.push(s[right]);
            right++;
        }
        
        if (currLongest.length > maxLongest.length) {
            maxLongest = [...currLongest];
        }
        
        if (currLongest.includes(s[right])){
            currLongest.shift();
            left++;
        }
    }                     
    return maxLongest.length;
};

// second pass solution
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    
    while (left < s.length && right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
        max = Math.max(set.size, max);
    }
    return max;
}
