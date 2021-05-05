/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings 
must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption 
is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any 
characters can be deleted from either of the strings.

Example.

The only characters that match are the 's so we have to remove  from  and  from  for a total of  deletions.

Function Description

Complete the makingAnagrams function in the editor below.

makingAnagrams has the following parameter(s):

string s1: a string
string s2: a string
Returns

int: the minimum number of deletions needed
*/

// first pass solution
function makingAnagrams(s1, s2) {
    let arr = new Array(26).fill(0);
    
    for (let char of s1) {
        arr[char.charCodeAt(0) - 97]++;
    }
    
    for (let char of s2) {
        arr[char.charCodeAt(0) - 97]--;
    }
    return arr.reduce((acc, el) => {
        return Math.abs(el) + acc;
    }, 0)
}
