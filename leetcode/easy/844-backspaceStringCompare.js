// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// first pass solution
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];
    
    for (let char of s) {
        if (char === "#") stack1.pop();
        else stack1.push(char);
    }
    
    for (let char of t) {
        if (char === "#") stack2.pop();
        else stack2.push(char);
    }
    return stack1.join("") === stack2.join("");
};
