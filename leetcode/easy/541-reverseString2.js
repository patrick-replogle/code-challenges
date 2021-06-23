// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If 
// there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse 
// the first k characters and left the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// first pass solution 
var reverseStr = function(s, k) {
    let result = '';
    let reverse = true;
    s = s.split('');
    
    for (let i = 0; i < s.length; i += k) {
        if (reverse) {
            result += s.slice(i, i + k).reverse().join('');
        } else {
            result += s.slice(i, i + k).join('');
        }
        reverse = !reverse;
    }
    return result;
};
