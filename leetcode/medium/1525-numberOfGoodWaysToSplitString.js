/*
You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation 
is equal to s and the number of distinct letters in p and q are the same.

Return the number of good splits you can make in s.

Example 1:
Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
*/

// first pass solution
var numSplits = function(s) {
    let rightSide = {};
    let leftSide = new Set();
    let output = 0;
    
    for (let char of s) {
        rightSide[char] ? rightSide[char] += 1 : rightSide[char] = 1;
    }
    
    for (let char of s) {
        rightSide[char]--;
        
        if (rightSide[char] === 0) {
            delete rightSide[char];
        }
        
        leftSide.add(char);
        
        if (leftSide.size === Object.keys(rightSide).length) output++;
    }
    return output;
};
