/*
Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this 
until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

Example 1:
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
*/

// first pass solution 
var makeGood = function(s) {
    let stack = [s[0]];
    let i = 1;
    
    while (i < s.length) {
        let len = stack.length - 1;
        let flag = false; // flag if chars were removed
        
        if (stack.length) {
            if (/[a-z]/.test(stack[len]) && s[i] === stack[len].toUpperCase()) {
                stack.pop(); // lowercase followed by uppercase of identical letter
                flag = true;
            } 
            else if (/[A-Z]/.test(stack[len]) && s[i] === stack[len].toLowerCase()) {
                stack.pop(); // uppercase followed by lowercase of identical letter
                flag = true;
            }
        }
        if (!flag) stack.push(s[i]); // add char to stack if none were removed
        i++; 
    }
    return stack.join('');
};
