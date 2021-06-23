/*
You are given a string s consisting only of characters 'a' and 'b'.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that 
i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

Example 1:
Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
*/

// first pass solution
var minimumDeletions = function(s) {
    let aCountToTheRight = new Array(s.length).fill(0); // count all a's to left of current index
    let bCountToTheLeft = new Array(s.length).fill(0); // count all b's to the right of current index
    let currACount = 0;
    let currBCount = 0;
    let j = s.length - 1; // use two pointers to build dp arrays to avoid an extra pass thru the string
    let output = s.length;
    
    for (let i = 0; i < s.length; i++) {
        bCountToTheLeft[i] = currBCount;
        if (s[i] === 'b') currBCount++;
        aCountToTheRight[j] = currACount;
        if (s[j] === 'a') currACount++;
        j--;
    }
    
    for (let i = 0; i < s.length; i++) {
        // find the min number of b's to the left and a's to the right that need to be removed at each index
        output = Math.min(output, aCountToTheRight[i] + bCountToTheLeft[i]);
    }
    return output;
};
