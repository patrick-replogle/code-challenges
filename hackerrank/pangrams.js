/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. 
Return either pangram or not pangram as appropriate.

Example

The string contains all letters in the English alphabet, so return pangram.

Function Description

Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

pangrams has the following parameter(s):

string s: a string to test
Returns

string: either pangram or not pangram
*/

// first pass solution
function pangrams(s) {
    let set = new Set();
    
    for (let char of s) {
        if (char.toLowerCase() !== ' ') {
            set.add(char.toLowerCase());
        }
    }
    if (set.size === 26) {
        return 'pangram';
    }
    return 'not pangram';
}
