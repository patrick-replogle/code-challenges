// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning 
// of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning 
// and from the end of the array differ by one.
// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. 
// Return the resulting array as the answer.

// Example

// For arr = [7, 2, 2, 5, 10, 7], the output should be
// replaceMiddle(arr) = [7, 2, 7, 10, 7]

function replaceMiddle(arr) {   
    if (arr.length % 2 !== 0) {
        return arr;
    } else {
        let midIdx = Math.floor((arr.length - 1) / 2);
        let midVal = arr[midIdx] + arr[midIdx + 1];
        let start = arr.slice(0, midIdx);
        let end = arr.slice(midIdx + 2);
        
        return [...start, midVal, ...end];
    }
}
