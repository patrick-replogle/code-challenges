// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a 
// space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.

// first pass iterative approach
var wordBreak = function(s, wordDict) {
    let seen = new Set();
    let queue = [s];
    
    while (queue.length > 0) {
        let curr = queue.shift();
        
        if (!seen.has(curr)) {
            if (curr.length === 0) return true;
        
            seen.add(curr);
            
            for (let word of wordDict) {
                if (curr.startsWith(word)) {
                    queue.push(curr.slice(word.length))
                }
            }
        }
    }
    return false;
};

// second pass recursive approach
var wordBreak = function(s, wordDict) {
    let seen = new Set();
    
    function helper(s) {
        if (s.length === 0) return true;
        
        if (!seen.has(s)) {
            seen.add(s);          
            for (let word of wordDict) {
                if (s.startsWith(word)) {
                    if (helper(s.slice(word.length))) {
                        return true;
                    }
                }
            }
        }
        return false
    }
    return helper(s);
};
