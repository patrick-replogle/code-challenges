/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such 
character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
*/

// first pass solution
function firstNotRepeatingCharacter(s) {
    let seenChars = {};
    
    for (let char of s) {
        seenChars[char] ? seenChars[char] += 1 : seenChars[char] = 1;
    }
    
    for (let char of s) {
        if (seenChars[char] === 1) {
            return char;
        }
    }
    return '_';
}
