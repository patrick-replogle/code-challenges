// Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given 
// target number must exist in the array.

// Note:
// The array size can be very large. Solution that uses too much extra space will not pass the judge.

// Example:

// int[] nums = new int[] {1,2,3,3,3};
// Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
// solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
// solution.pick(1);

// first pass solution
class Solution {
    constructor(nums) {
        this.nums = nums;
        this.dict = this.buildDict();
    }
    
    pick(target) {
        let len = this.dict[target].length;
        let random = Math.floor(Math.random() * len);
        return this.dict[target][random];
    }
    
    buildDict() {
        let dict = {};
        for (let i in this.nums) {
            if (!(this.nums[i] in dict)) {
                dict[this.nums[i]] = [];
            }
            dict[this.nums[i]].push(i);
        }
        return dict;
    }
}
