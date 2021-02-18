/*
Given an integer array nums that is sorted in ascending order, return true if and only if you can split it into one or more subsequences such 
that each subsequence consists of consecutive integers and has a length of at least 3.

Example 1:
Input: nums = [1,2,3,3,4,5]
Output: true
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5

Example 2:
Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5
*/

// first pass solution
var isPossible = function(nums) {
    let arrs = [[nums[0]]];
    
    for (let i = 1; i < nums.length; i++) {
        let min = Infinity;
        let index = null;

        for (let j = 0; j < arrs.length; j++) {
            let currArr = arrs[j];
            let lastElem = currArr[currArr.length - 1];     
            if (lastElem + 1 === nums[i]) {
                if (currArr.length < min) {
                    min = currArr.length;
                    index = j;
                }
            }
        }
        if (index === null) arrs.push([nums[i]]);
        else arrs[index].push(nums[i]);
    }
    return arrs.every(arr => arr.length >= 3);
};
