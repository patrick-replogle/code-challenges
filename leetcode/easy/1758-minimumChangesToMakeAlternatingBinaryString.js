/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating

Example 1:
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

Example 2:
Input: s = "10"
Output: 0
Explanation: s is already alternating.

Example 3:
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
*/

// first pass solution
var minOperations = function(s) {
    let changes1 = 0; // count changes if starting with 0
    let changes2 = 0; // count changes if starting with 1
    let zeroArr = s.split(''); // start s with 0
    let oneArr = s.split(''); // start s with 1
    
    if (zeroArr[0] === '1') {
        changes1++;
        zeroArr[0] = '0';
    }
    
    if (oneArr[0] === '0') {
        changes2++;
        oneArr[0] = '1'
    }

    for (let i = 1; i < zeroArr.length; i++) {
        if (zeroArr[i] === zeroArr[i-1]) {
            zeroArr[i] = zeroArr[i-1] === '1' ? '0' : '1';
            changes1++;
        }
    }
    
    for (let i = 1; i < oneArr.length; i++) {
        if (oneArr[i] === oneArr[i-1]) {
            oneArr[i] = oneArr[i-1] === '1' ? '0' : '1';
            changes2++;
        }
    }
    return Math.min(changes1, changes2); // return which scenario has the fewest changes
};
