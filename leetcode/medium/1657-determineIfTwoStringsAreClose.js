/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
*/
// first pass solution logic: 
// strings must be the same length
// strings must have the same characters
// strings must have the same amount of occurences of characters

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let dict1 = {};
    let dict2 = {};
    
    for (let i = 0; i < word1.length; i++) {
        dict1[word1[i]] ? dict1[word1[i]] += 1 : dict1[word1[i]] = 1;
        dict2[word2[i]] ? dict2[word2[i]] += 1 : dict2[word2[i]] = 1;
    }
    
    let arr1 = []; 
    let arr2 = [];
    
    for (let key in dict1) {
        if (!dict2.hasOwnProperty(key)) {
            return false;
        }
        arr1.push(dict1[key]);
    }
    
    for (let key in dict2) {
        if (!dict1.hasOwnProperty(key)) {
            return false;
        }
        arr2.push(dict2[key]);
    }
    return (arr1.sort((a, b) => a - b).join('')) === (arr2.sort((a, b) => a - b).join(''));
};

