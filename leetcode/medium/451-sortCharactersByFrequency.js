// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// first pass solution that first sorts string lexigraphically, then by freq count
var frequencySort = function(s) {
    s = s.split("");
    let charCount = {};
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        } 
        charCount[char] += 1;
    }
    
    return s.sort()
      .sort((a, b) => charCount[b] - charCount[a])
      .join("");
};

// second pass solution 
var frequencySort = function(s) {
    s = s.split("");
    let charCount = {};
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        } 
        charCount[char] += 1;
    }
    
    let entries = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
    let i = 0;
    let j = 0;
    
    while (i < s.length) {
        while (entries[j][1] > 0) {
            s[i] = entries[j][0];
            entries[j][1] -= 1;
            i++;
        }
        j++;
    }
    return s.join("");
};

// third pass solution => similar to the second, but a bit faster and easier to reason
var frequencySort = function(s) {
    s = s.split("");
    let charCount = {};
    
    for (let char of s) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        } 
        charCount[char] += 1;
    }
    
    let entries = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
    let result = "";
    
    for (let arr of entries) {
        result += arr[0].repeat(arr[1]);
    }
    
    return result;
};
