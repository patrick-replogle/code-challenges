/*
A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the 
frequency of 'a' is 2, while the frequency of 'b' is 1.

Example 1:
Input: s = "aab"
Output: 0
Explanation: s is already good.

Example 2:
Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
*/

// first pass solution
var minDeletions = function(s) {
    let dict = {};
    
    for (let char of s) {
        dict[char] ? dict[char] += 1: dict[char] = 1;
    }
    
    let arr = Object.values(dict).sort((a, b) => a - b);
    let seen = new Set();
    let deletions = 0;
    
    for (let count of arr) {
        if (!seen.has(count)) seen.add(count);
        else {
            while (seen.has(count)) {
                count--;
                deletions++;
            }
            if (count > 0) seen.add(count);
        }
    }
    return deletions;
};
