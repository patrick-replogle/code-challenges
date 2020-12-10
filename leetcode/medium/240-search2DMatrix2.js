// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
 
// Example 1:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// first pass solution
var searchMatrix = function(matrix, target) {
    for (let row of matrix) {
        if (target >= row[0] && target <= row[row.length - 1]) {
            if (binarySearch(row, target)) {
                return true;
            }
        }
    }
    return false;
};

var binarySearch = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        }
    }
    return false;
}
