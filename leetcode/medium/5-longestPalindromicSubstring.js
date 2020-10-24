// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */
  
var longestPalindrome = function(s) {
  let longestLen = 0;
  let longestPal = "";
  
  for (let i = 0; i < s.length; i++) {
    // odd length palindromes
    let l = i;
    let r = i;
    
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      if ((r - l + 1) > longestLen) {
        longestLen = r - l + 1;
        longestPal = s.substring(l, r + 1);
      }
        l--;
        r++;
    }
    
    //even length palindromes
    l = i;
    r = i + 1;
    
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      if ((r - l + 1) > longestLen) {
        longestLen = r - l + 1;
        longestPal = s.substring(l, r + 1);
      }
        l--;
        r++;
    }
    
  }
  return longestPal;
}
