/*
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter 
appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

// first pass solution
var partitionLabels = function(s) {
    let output = []
    let i = 0;
    
    while (i < s.length) {
        let last = s.lastIndexOf(s[i]);
        let set = new Set([s[i]]);
        let j = i;
        while (j < last) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                let nextLast = s.lastIndexOf(s[j]);
                if (nextLast > last) last = nextLast;
            }
            j++;
        }
        output.push(j - i + 1);
        i = j + 1;
    }
    return output;
};
