// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"

// first pass solution using two pointers
var reverseVowels = function(s) {
    let vowels = new Set(["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]);
    let low = 0;
    let high = s.length - 1;
    s = s.split("");
    
    while (low < high) {
        if (vowels.has(s[low]) && vowels.has(s[high])) {
            [s[low], s[high]] = [s[high], s[low]];
            low++;
            high--;
        } else if (!vowels.has(s[low])) {
            low++;
        } else if (!vowels.has(s[high])) {
            high--;
        }  
    }
    return s.join("");
};
