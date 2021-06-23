// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses 
// at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have 
// a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can 
// rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [0]
// Output: 0

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    
    function solve(arr) {
        let cache = new Array(arr.length).fill(0);
        cache[0] = arr[0];
        cache[1] = Math.max(arr[0], arr[1]);
        
        for (let i = 2; i < arr.length; i++) {
            cache[i] = Math.max(cache[i - 1], cache[i - 2] + arr[i]);
        }
        return cache[cache.length - 1];
    }
    
    return Math.max(solve(nums.slice(1)), solve(nums.slice(0, -1)));
};
