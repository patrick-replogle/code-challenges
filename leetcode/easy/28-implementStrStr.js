// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.length) return -1;

    for(let i = 0; i < haystack.length; i++) {
      if(haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
    return -1;
};
