// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first 
// string's permutations is the substring of the second string.

// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

// first pass solution: inefficient, but it passes all test cases
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    if (s1.length === s2.length) {
        return s1.split('').sort().join('') === s2.split('').sort().join('');
    }
    
    s1 = s1.split('').sort().join('');
    s2 = s2.split('');
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (s2.slice(i, i + s1.length).sort().join('') === s1) {
            return true;
        }
    }
    return false;
}

// second pass: still slow, but passes test cases
var checkInclusion = function(s1, s2) {
    let target = s1.split('').sort().join('');
    let curr = '';
    
    for (let char of s2) {
        curr += char;
        
        if (curr.length === target.length) {
            if (curr.split('').sort().join('') === target) return true;
            curr = curr.slice(1);
        }
    }
    return false;
}


// third pass: slightly faster
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    if (s1.length === s2.length) {
        return s1.split('').sort().join('') === s2.split('').sort().join('');
    }
    
    let s1Map = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 97]++;
    }
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let s2Map = new Array(26).fill(0);
        for (let j = i; j < i + s1.length; j++) {
            s2Map[s2.charCodeAt(j) - 97]++;
        }
        if (matches(s1Map, s2Map)) return true;
    }
    
    return false;
}

var matches = function(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
