// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up 
// to a positive integer target.

// Example:

// nums = [1, 2, 3]
// target = 4

// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// Note that different sequences are counted as different combinations.

// Therefore the output is 7.

// first pass recursive approach with memoization
var combinationSum4 = function(nums, target) {
    if (nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);
    let dict = {};
    
    function combos(sum) {
        if (sum in dict) return dict[sum];
        if (sum === target) return 1;
        if (sum > target) return 0;
        
        let ways = 0;
        
        for (let num of nums) {
            ways += combos(sum + num);
            dict[sum] = ways;
        }
        return dict[sum];
    }
    return combos(0);
};

// dynamic programming approach
var combinationSum4 = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let cache = new Array(target + 1).fill(0);
    cache[0] = 1;
    
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i >= num) cache[i] = cache[i] + cache[i - num];
            else break; 
        }
    }
    return cache[target];
};
