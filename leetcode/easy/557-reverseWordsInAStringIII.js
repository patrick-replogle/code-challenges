// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

// first pass solution
var reverseWords = function(s) {
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('');
    }
    return s.join(' ');
};
