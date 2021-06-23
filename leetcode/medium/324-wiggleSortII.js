// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example 1:

// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].
// Example 2:

// Input: nums = [1, 3, 2, 2, 3, 1]
// Output: One possible answer is [2, 3, 1, 3, 1, 2].

// n log n solution using n space complexity
var wiggleSort = function(nums) {
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    if (nums.length % 2 !== 0) mid++;
    let small = nums.slice(0, mid);
    let large = nums.slice(mid);
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = small.pop();
        } else {
            nums[i] = large.pop();
        }
    }
};
