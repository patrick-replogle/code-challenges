/*
A happy string is a string that:

consists only of letters of the set ['a', 'b', 'c'].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

Example 1:
Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

Example 2:
Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.
*/

// first pass solution
var getHappyString = function(n, k) {
    let happyStrings = [];
    let chars = ['a', 'b', 'c'];
    
    function recurse(path) {
        if (path.length === n) {
            return happyStrings.push(path);
        }
        else if (path.length < n) {
            for (let char of chars) {
                if (char !== path[path.length - 1]) {
                    recurse(path + char);
                }
            }
        }
    }
    
    for (let char of chars) {
        recurse(char);
    } 
    return happyStrings[k - 1] ?  happyStrings[k - 1] : '';
}
