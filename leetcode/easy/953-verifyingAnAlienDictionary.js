/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the 
alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words 
are sorted lexicographicaly in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical 
rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
*/

// first pass solution
var isAlienSorted = function(words, order) {
    let hashMap = {};
    
    for (let i = 0; i < order.length; i++) {
        hashMap[order[i]] = i;
    }
    
    for (let i = 1; i < words.length; i++) {
        let word1 = words[i-1];
        let word2 = words[i];
        let j = 0;
        
        if (hashMap[word1[j]] < hashMap[word2[j]] || word1 === word2) continue;
        
        while (j < word1.length && j < word2.length) {
            if (hashMap[word1[j]] > hashMap[word2[j]]) return false;
            j++;
        }
        if (word1.startsWith(word2)) return false;
    }
    return true;
};
