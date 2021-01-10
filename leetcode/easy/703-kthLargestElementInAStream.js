// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth 
// distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Returns the element representing the kth largest element in the stream.

// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// first pass solution using binary search and spliceclass KthLargest {
class KthLargest {
    constructor(k, nums=[]) {
        this.nums = nums.sort((a, b) => a - b);
        this.k = k;
        this.length = this.nums.length;
    }
    add(val) {
        let index = this.binarySearch(val);
        this.nums.splice(index, 0, val);
        this.length++;
        return this.nums[this.nums.length - this.k]; 
    }
    binarySearch(val) {
        if (val <= this.nums[0]) return 0;
        if (val >= this.nums[this.length]) return this.length;
        
        let left = 0;
        let right = this.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            if (this.nums[mid] === val) {
                return mid;
            } else if (this.nums[mid] < val) {
                left = mid + 1;
            } else if (this.nums[mid] > val){
                right = mid - 1;
            }
        }
        return left;
    }
}
