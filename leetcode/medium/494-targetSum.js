// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For 
// each integer, you should choose one from + and - as its new symbol.

// Find out how many ways to assign symbols to make sum of integers equal to target S.

// Example 1:

// Input: nums is [1, 1, 1, 1, 1], S is 3. 
// Output: 5
// Explanation: 

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// There are 5 ways to assign symbols to make the sum of nums be target 3.

// first pass recursive solution
var findTargetSumWays = function(nums, s) {
    let count = 0;
    
    function helper(index, sum) {
        if (sum === s && index === nums.length) {
            count++;
        }
        if (index < nums.length) {
            helper(index + 1, sum + nums[index]); 
            helper(index + 1, sum - nums[index]); 
        }
    }
    helper(0, 0);
    return count;
};

// second pass solution using an iterative DFS approach
var findTargetSumWays = function(nums, s) {
    let count = 0;
    let stack = [[0, 0]];
    
    while (stack.length > 0) {
        let [index, sum] = queue.pop();
        
        if (sum === s && index === nums.length) {
            count++;
        }
        
        if (index < nums.length) {
            stack.push([index + 1, sum - nums[index]]);
            stack.push([index + 1, sum + nums[index]]);
        }
    }
    return count;
};
