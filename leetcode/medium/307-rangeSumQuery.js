// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// The update(i, val) function modifies nums by updating the element at index i to val.

// Example:

// Given nums = [1, 3, 5]

// sumRange(0, 2) -> 9
// update(1, 2)
// sumRange(0, 2) -> 8

// first pass solution
class NumArray {
    constructor(nums) {
        this.nums = nums;
    }
    
    sumRange(i, j) {
        let sum = 0;
        
        for (let k = i; k <= j; k++) {
            sum += this.nums[k];
        }
        return sum;
    }
    
    update(i, val) {
        this.nums[i] = val;
    }
}
