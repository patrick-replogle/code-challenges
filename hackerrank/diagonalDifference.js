// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers

function diagonalDifference(arr) {
    let startSum = 0;
    let endSum = 0;
    let j = 0;
    let k = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        startSum += arr[i][j];
        endSum += arr[i][k];
        j++;
        k--;
    }
    return Math.abs(startSum - endSum);
}
