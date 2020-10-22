// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

function buildPalindrome(st) {
    if (st === st.split("").reverse().join("")) {
        return st;
    }
    
    return st[0] + buildPalindrome(st.slice(1)) + st[0];
}
