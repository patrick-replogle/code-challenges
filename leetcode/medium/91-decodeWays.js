// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. 
// So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
// Example 4:

// Input: s = "1"
// Output: 1

// approach #1:
// dynamic programming => calculate number of ways to decode each 1 & 2 digit substring along the way and add them to dp array
// each index in the dp array represents how many ways to decode the substring up until that index


// dp solution
var numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === "0" ? 0 : 1;
    
    for (let i = 2; i < s.length + 1; i++) {
        let oneDigit = parseInt(s.slice(i - 1, i));
        let twoDigits = parseInt(s.slice(i - 2, i));
        
        if (oneDigit >= 1 && oneDigit <= 9) dp[i] += dp[i - 1];
        if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];
    }
    return dp[s.length];
};

// recursive solution
var numDecodings = function(s) {
    let cache = {};
    let len = s.length;
    
    function dfs(index) {
        if (index in cache) return cache[index];
        if (index === len) return 1;
        if (s[index] === "0") return 0;
        else if (index < len) {
            let ways = dfs(index + 1);
            let twoDigit = parseInt(s.slice(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) ways += dfs(index + 2);
            
            cache[index] = ways;
            return cache[index];
        }
    }
    return dfs(0); 
};






