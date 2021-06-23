/*
Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
Input: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
*/

// first pass solution
var numMatchingSubseq = function(S, words) {
    let output = 0;
    let dict = {}; 
    
    for (let i = 0; i < S.length; i++) {
        if (!(S[i] in dict)) {
            dict[S[i]] = [];
        }
        dict[S[i]].push(i); // store index of each occurence of every char in S
    }
    
    for (let word of words) {
        let seen = new Set(); // we can't reuse indexes
        let count = 0; // count how many chars of the word we find in the correct order inside of S
        let prevIdx; 
        
        for (let char of word) {
            if (!dict.hasOwnProperty(char)) break; // S doesn't have a char in current word

            for (let index of dict[char]) {
                if (!seen.has(index)) { // found a potential index for the curr char
                    if (!prevIdx || index > prevIdx) { // the index has to be higher than the prevIdx we used for the prev letter of the substring
                        seen.add(index);
                        prevIdx = index;
                        count++;
                        break;
                    }
                }
            }
        }
        if (count === word.length) output++; // check if we found all letters in the correct order in S
    }
    return output;
};
