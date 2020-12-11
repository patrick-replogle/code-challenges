// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// recursive solution
var partition = function(s) {
    let results = [];
    
    function helper(path, s) {
        if (s.length === 0) {
            results.push(path);
        }
        
        for (let i = 1; i <= s.length; i++) {
            let curr = s.slice(0, i);
            if (curr === curr.split("").reverse("").join("")) {
                helper([...path, curr], s.slice(i));
            }
        }
    }
    helper([], s);
    return results;
};

// iterative solution
var partition = function(s) {
    let results = [];
    let stack = [[[], s]];
    
    while (stack.length > 0) {
        let [path, str] = stack.pop();
        
        if (str.length === 0) {
            results.push(path);
        }
        
        for (let i = 1; i <= str.length; i++) {
            let curr = str.slice(0, i);
            if (curr.split("").reverse().join("") === curr) {
                stack.push([[...path, curr], str.slice(i)]);
            }
        }
    }
    return results;
};
