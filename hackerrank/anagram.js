/*
Two words are anagrams of one another if their letters can be rearranged to form the other word.

Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings 
into anagrams of one another.

Example

Break  into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 
'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

Function Description

Complete the anagram function in the editor below.

anagram has the following parameter(s):

string s: a string
Returns

int: the minimum number of characters to change or -1.
*/

// first pass solution
function anagram(s) {
    if (s.length % 2 !== 0) return - 1;
    
    let mid = Math.floor(s.length / 2);
    let firstHalf = s.slice(0, mid);
    let secondHalf = s.slice(mid);
    
    for (let char of firstHalf) {
        if (secondHalf.includes(char)) {
            secondHalf = secondHalf.replace(char, '');
        }
    }
    return secondHalf.length;
}
