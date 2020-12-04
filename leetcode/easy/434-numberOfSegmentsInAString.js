// You are given a string s, return the number of segments in the string. 

// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
// Example 3:

// Input: s = "love live! mu'sic forever"
// Output: 4
// Example 4:

// Input: s = ""
// Output: 0

// first pass solution
var countSegments = function(s) {
    let i = 0;
    s = s.trim().split(" ");
    
    while (i < s.length) {
        if (s[i].trim() === "") {
            s.splice(i, 1);
        } else {
            i++;
        }
    }
    return s.length;
}

// second pass solution
var countSegments = function(s) {
    let length = 0;
    s = s.trim().split(" ");
    
    for (let str of s) {
        if (str.trim().length === 0) {
            continue;
        } else {
            length++;
        }
    }
    return length;
}
