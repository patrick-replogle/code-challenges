/*
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "(*)"
Output: true

Example 3:
Input: s = "(*))"
Output: true
*/

// first pass solution
var checkValidString = function(s) {
    let openStack = [];
    let asteriskStack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openStack.push(i);
        } 
        else if (s[i] === '*') {
            asteriskStack.push(i);
        } 
        else {
            if (openStack.length) {
               openStack.pop(); 
            } 
            else if (asteriskStack.length) {
                asteriskStack.pop();
            } 
            else {
                return false;
            }
        }
    }
    
    while (openStack.length && asteriskStack.length) {
        if (openStack.pop() > asteriskStack.pop()) {
            return false;
        }
    }
    
    if (openStack.length) {
        return false;
    }
    return true;
};
