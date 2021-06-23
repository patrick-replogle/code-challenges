/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a 
subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

Example 1:
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]

Example 2:
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]

Example 3:
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
*/

// first pass solution => 100% faster than other JS solutions 
var wordSubsets = function(A, B) {
    let count = new Array(26).fill(0); // count chars in all strings in B array
    let output = [];
    
    for (let str of B) {
        let curr = new Array(26).fill(0);
        for (let char of str) {
            let idx = char.charCodeAt(0) - 97;
            curr[idx]++;
            count[idx] = Math.max(count[idx], curr[idx]); // we only need to keep track of the maximum occurence of each char
        }
    }
    
    for (let word of A) {
        let curr = [...count]; // copy char count
        for (let char of word) {
            let idx = char.charCodeAt(0) - 97;
            curr[idx]--; // subtract each occurence from the copy
        }
        if (curr.every(el => el <= 0)) {
            output.push(word); // we have a match if every value in the copy is less than or equal to zero, meaning we a valid quanity of each needed
        }
      
    }
    return output;
};
