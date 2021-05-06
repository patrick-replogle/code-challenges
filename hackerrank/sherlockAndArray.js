/*
Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to 
the sum of all elements to the right.

Example

 is between two subarrays that sum to .

The answer is  since left and right sum to .

You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

Function Description

Complete the balancedSums function in the editor below.

balancedSums has the following parameter(s):

int arr[n]: an array of integers
Returns

string: either YES or NO
*/

// first pass solution
function balancedSums(arr) {
    let left = new Array(arr.length).fill(0)
    let right = new Array(arr.length).fill(0)
    
    for (let i = 1; i < arr.length; i++) {
        left[i] = arr[i-1] + left[i - 1];
    }
    
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = arr[i+1] + right[i+1];
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (left[i] === right[i]) {
            return 'YES';
        }
    }
    return 'NO';
}
