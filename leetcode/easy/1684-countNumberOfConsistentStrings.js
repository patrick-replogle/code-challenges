/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all 
characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/

// first pass solution
var countConsistentStrings = function(allowed, words) {
    let set = new Set(allowed.split(''));
    let output = 0;
    
    for (let word of words) {
        let flag = true;
        for (let char of word) {
            if (!set.has(char)) {
                flag = false;
                break;
            }
        }
        if (flag) output++;
    }
    return output;
};
