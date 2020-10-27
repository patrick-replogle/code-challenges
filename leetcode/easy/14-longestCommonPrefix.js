// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    strs.sort((a, b) => a.length - b.length);
    
    let shortestPrefix = strs[0];
    
    strs.forEach((str) => {
        if(!str.startsWith(shortestPrefix)) {
            while (shortestPrefix.length > 0) {
                shortestPrefix = shortestPrefix.slice(0, -1);
                
                if (str.length === 0) return "";
                if (str.startsWith(shortestPrefix)) break;
            } 
        }
    })
    return shortestPrefix;
};
