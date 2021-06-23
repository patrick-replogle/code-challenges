// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters 
// reverse their positions.

// Example 1:
// Input: "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// first pass solution
var reverseOnlyLetters = function(S) {
    let chars = [];
    let symbols = [];
    let output = '';
    
    for (let i = 0; i < S.length; i++) {
        let char = S[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            chars.push(S[i]);
        } else {
            symbols.push(S[i]);
        }
    }
    
    for (let i = 0; i < S.length; i++) {
        let char = S[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            output += chars.pop();
        } else {
            output += symbols.shift();
        }
    }
    return output;
};

// second pass solution using less memory and cleaner syntax
var reverseOnlyLetters = function(S) {
    let chars = S.split('').filter(char => /[a-zA-Z]/.test(char));
    let output = '';
    
    S.split('').forEach(char => {
        if (/[a-zA-Z]/.test(char)) {
            output += chars.pop();
        } else {
            output += char;
        } 
    })
    return output;
};
