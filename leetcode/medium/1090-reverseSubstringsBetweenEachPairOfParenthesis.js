// You are given a string s that consists of lower case English letters and brackets. 

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.

// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"

// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.

// Example 3:e
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

// first pass solution
var reverseParentheses = function(str) {
    let stack = [];
    let output = '';
    let s = str.split('')
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')'){
            let leftIndex = stack.pop();
            s = s.slice(0, leftIndex).concat(s.slice(leftIndex, i).reverse()).concat(s.slice(i))
        }
    }
    
    for (let char of s) {
        if (char !== '(' && char !== ')') {
            output += char;
        }
    }
    return output;
};

// A very clever and more memory efficient solution
var reverseParentheses = function(str) {
    let stack = [[]];
    
    for (let char of str) {
        if (char === '(') {
            stack.push([]);
        } else if (char === ')') {
            let curr = stack.pop().reverse();
            stack[stack.length - 1].push(...curr);
        } else {
            stack[stack.length - 1].push(char);
        }
    }
    return stack.pop().join('')
};
