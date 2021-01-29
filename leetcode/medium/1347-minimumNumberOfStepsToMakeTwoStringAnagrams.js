/*
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Example 1:
Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

Example 2:
Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

Example 3:
Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
*/

// first pass solution
var minSteps = function(s, t) {
    let count = new Array(26).fill(0);
    let steps = 0;
    
    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - 97]++;
        count[t[i].charCodeAt(0) - 97]--;
    }
    
    count.forEach((num) => num > 0 ? steps += num : '');
    return steps;
};

// second pass solution
var minSteps = function(s, t) {
    let dict = {};
    let steps = 0;
    
    for (let i = 0; i < s.length; i++) {
        dict[s[i]] ? dict[s[i]] += 1 : dict[s[i]] = 1;
        dict[t[i]] ? dict[t[i]] -= 1 : dict[t[i]] = -1;
    }
    
    for (let key in dict) {
        if (dict[key] > 0) {
            steps += dict[key];
        }
    }
    return steps;
};




