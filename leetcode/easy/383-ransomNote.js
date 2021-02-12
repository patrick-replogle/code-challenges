/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will 
return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false
*/

// first pass solution
var canConstruct = function(ransomNote, magazine) {
    let ransomCount = {};
    let magazineCount = {};
    
    for (let char of magazine) {
        magazineCount[char] ? magazineCount[char] += 1 : magazineCount[char] = 1;
    }
    
    for (let char of ransomNote) {
        ransomCount[char] ? ransomCount[char] += 1 : ransomCount[char] = 1;
        
        if (!magazineCount.hasOwnProperty(char) || ransomCount[char] > magazineCount[char]) {
            return false;
        }
    }
    return true;
};
