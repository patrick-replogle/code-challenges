// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// dynamic programming solution
var canJump = function(nums) {
    let max = 0;
    let target = nums.length - 1;
    
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, i + nums[i]);
        
        if (max >= target) return true;
        if (max <= i && nums[i] === 0) return false;
    }
};

// slow recursive solution
var canJump = function(nums) {  
    let visited = new Set();
    
    function solve(index) {
        if (index >= nums.length - 1) return true;
        
        for (let i = index + 1; i <= index + nums[index]; i++) {
            if (!visited.has(i)) {
                if (solve(i)) return true;
                visited.add(i)
            }
        }
        return false;
    }
    return solve(0);
};
