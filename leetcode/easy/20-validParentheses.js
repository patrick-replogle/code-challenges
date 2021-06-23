// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// first pass solution using stack
var isValid = function(s) {
  let dict = {"(": ")", "[": "]", "{": "}"};
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] in dict) {
      stack.push(s[i]);
    } else {
      let curr = stack.pop();
      if (dict[curr] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
