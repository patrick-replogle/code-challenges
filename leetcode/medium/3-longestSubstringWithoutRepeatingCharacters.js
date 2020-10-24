// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
 
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
