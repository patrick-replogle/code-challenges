/*
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Example 1:
Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

Example 2:
Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
*/

// first pass solution => brute force 
var countVowelStrings = function(n) {
    let options = ['a', 'e', 'i', 'o', 'u'];
    let output = new Set();
    
    function recurse(path, index) {
        if (path.length === n) return output.add(path);
        
        for (let i = index; i < options.length; i++) {
            if (path.length + 1 <= n) {
                if (!path.length || options[i] >= path[path.length - 1]) {
                    recurse(path + options[i], index);
                }
            }
        }
    }
    recurse('', 0);
    
    return output.size;
};

// second pass solution => slightly faster and uses much memory
var countVowelStrings = function(n) {
    let options = ['a', 'e', 'i', 'o', 'u'];
    let output = 0;
    
    function recurse(path, prev) {
        if (path.length === n) return output++;
        
        for (let char of options) {
            if (char >= prev) {
                recurse(path + char, char);
            }
        }
    }
    
    for (let char of options) {
        recurse('' + char, char);
    }
    return output;
};

// third pass => same as second, but uses o(1) memory now 
var countVowelStrings = function(n) {
    let options = ['a', 'e', 'i', 'o', 'u'];
    let output = 0;
    
    function recurse(pathLen, prev) {
        if (pathLen === n) return output++;
        
        for (let char of options) {
            if (char >= prev) {
                recurse(pathLen + 1, char);
            }
        }
    }
    
    for (let char of options) {
        recurse(1, char);
    }
    return output;
};
