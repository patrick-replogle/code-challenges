/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note 
that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For 
example, there won't be input like 3a or 2[4].

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
*/

var decodeString = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ']') {
            let curr = '';
            let num = '';
            while (stack[stack.length - 1] !== '[') {
                curr = stack.pop() + curr;
            }
            stack.pop(); // pop off '['
            while (/[0-9]/.test(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            stack.push(curr.repeat(num));
        } 
        else {
            stack.push(char);
        }
    }
    return stack.join('');
}
