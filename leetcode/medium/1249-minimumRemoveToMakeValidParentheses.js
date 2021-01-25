// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is 
// valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 
// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// Example 4:
// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"

// first pass solution
var minRemoveToMakeValid = function(s) {
    let arr = s.split('');
    let stack = [];
    let i = 0;
    
    while (i < arr.length) {
        if (arr[i] === '(') {
            stack.push(i);
        } else if (arr[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                arr.splice(i, 1);
                continue;
            }
        }
        i++;
    }

    while (stack.length) {
        let i = stack.pop();
        arr.splice(i, 1);
    }
    return arr.join('');
};

// second pass solution without using splice method
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let set = new Set();
    let output = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                set.add(i);
            }
        }
    }
    
    while (stack.length) {
        set.add(stack.pop());
    }

    for (let i = 0; i < s.length; i++) {
        if (!set.has(i)) {
            output += s[i];
        }
    }
    return output;
};
