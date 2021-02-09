/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b 
be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s 
contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
*/

// first pass solution
var halvesAreAlike = function(s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let len = s.length / 2;
    let left = 0;
    let right = len;
    let a = 0;
    let b = 0;
    
    for (let i = 0; i < len; i++) {
        if (set.has(s[left])) a++;
        if (set.has(s[right])) b++;
        left++;
        right++;
    }
    return a === b;
};
