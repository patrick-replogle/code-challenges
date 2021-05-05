/*
Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. 
There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index 
of a character to remove.

Example

Either remove 'b' at index  or 'c' at index .

Function Description

Complete the palindromeIndex function in the editor below.

palindromeIndex has the following parameter(s):

string s: a string to analyze
Returns

int: the index of the character to remove or 
*/

// first pass solution
function palindromeIndex(s) {
    if (s.split('').reverse().join('') === s) {
        return -1;
    }
    
    let i = 0;
    let j = s.length - 1;
    
    while (i <= j) {
        if (s[i] !== s[j]) {
            let optionOne = s.slice(0, i) + s.slice(i + 1);
            if (optionOne.split('').reverse().join('') === optionOne) {
                return i;
            }
            
            let optionTwo = s.slice(0, j) + s.slice(j + 1);
            if (optionTwo.split('').reverse().join('') === optionTwo) {
                return j;
            }
        }
        i++;
        j--;
    }
    return -1;
}
