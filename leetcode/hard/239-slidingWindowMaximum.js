// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// first pass brute force solution => passes all tests, but is slow
var maxSlidingWindow = function(nums, k) {
    let result = [];
    
    for (let i = 0; i < nums.length - k + 1; i++) {
        let currMax = nums[i]
        for (let j = i + 1; j < i + k; j++) {
            if (currMax < nums[j]) {
                currMax = nums[j];
            }
        }
        result.push(currMax);
    }
    return result;
};

// optimized solution using a stack or queue to achieve o(n) time complexity
var maxSlidingWindow = function(nums, k) {
    let results = [];
    let stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop()
        }
        
        stack.push(i);

        if (stack[0] === i - k) {
            stack.shift();
        }
        
        if (i >= k - 1) {
            results.push(nums[stack[0]]);
        }
    }
    return results;
};
