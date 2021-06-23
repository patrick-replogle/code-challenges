// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
// with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:

// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?
 
// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// the most obvious solution, but not the one the description is likely looking for
var sortColors = function(nums) {
    return nums.sort((a, b) => a - b);
};

// using a hashmap instead of a sorting algorithm
var sortColors = function(nums) {
    let dict = { "0": 0, "1": 0, "2": 0 }
    
    for (let i in nums) {
        dict[nums[i]]++;
    }
    
    for (let i in nums) {
        if (dict["0"] > 0) {
            nums[i] = 0;
            dict["0"]--;
        } else if (dict["1"] > 0) {
            nums[i] = 1;
            dict["1"]--;
        } else if (dict["2"] > 0) {
            nums[i] = 2;
            dict["2"]--;
        }
    }
    return nums;
};

// slick solution using multiple pointers
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } 
        else if (nums[mid] === 1) {
            mid++;
        }
        else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
