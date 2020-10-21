// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers 
// is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example:

// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    
    let mid = Math.floor(arr.length / 2);
    arr = arr.concat(arr);
    
    return arr[mid + firstNumber];
}
