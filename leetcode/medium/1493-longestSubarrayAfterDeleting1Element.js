/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
*/

// first pass solution => somewhat messy two pointer sliding window approach
var longestSubarray = function(nums) {
    if (nums.indexOf(0) === -1) return nums.length - 1;
    if (nums.indexOf(1) === -1) return 0;
    
    let left = 0; 
    let right = 0;
    let zeroCount = 0;
    let output = 0;
    
    while (right < nums.length) {
        if(nums[right] === 1 && zeroCount <= 1) {
            right++;
            continue;
        } 
        zeroCount++;
        
        if (zeroCount === 1) {
            right++;
            while(nums[right] === 1) {
                right++;
            }
        }
        output = Math.max(output, right - left - 1);
        
        while(nums[left] !== 0) {
            left++;
        }
        left++;
        zeroCount--;
    }
    return output;
};
