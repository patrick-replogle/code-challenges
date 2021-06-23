// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

// Example 1:
// Input: [1,2,2,3]
// Output: true

// Example 2:
// Input: [6,5,4,4]
// Output: true

// Example 3:
// Input: [1,3,2]
// Output: false

// first pass solution
var isMonotonic = function(A) {
    let flag = true;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] > A[i]) flag = false; // check if increasing monotonic
    }
    
    if (flag) return true; // return early if array is increasing montonic 
    flag = true;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] < A[i]) flag = false; // check if decreasing monotonic
    }
    
    return flag;
};

// second pass solution using two flags and one pass thru the array
var isMonotonic = function(A) {
    let increaseFlag = true;
    let decreaseFlag = true;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] > A[i]) increaseFlag = false; 
        if (A[i-1] < A[i]) decreaseFlag = false;
    }
    return increaseFlag || decreaseFlag;
};
