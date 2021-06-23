// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > 
// ... > arr[arr.length - 1].

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

// first pass linear search
var peakIndexInMountainArray = function(arr) {
    let max = -Infinity;
    let output = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            output = i;
        } else if (arr[i] > max) {
            break;
        }
    }
    return output;
};

// second pass using binary search
var peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid+1]) {
            return mid;
        } else if (arr[mid] > arr[mid + 1]) {
            high = mid;
        } else if (arr[mid] < arr[mid + 1]) {
            low = mid;
        }
    }
};
