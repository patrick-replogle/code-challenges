// 2D Array - DS

// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .


function hourglassSum(arr) {
    let maxSum = -Infinity
    let currMax= -Infinity
    
    for(let i = 0; i <= 3; i++) {
      for(let j = 0; j <= 3; j++) {
        let topSum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
        let middleVal = arr[i+1][j+1]
        let bottomSum = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] 
        
        currMax = topSum + middleVal + bottomSum
        maxSum = Math.max(currMax, maxSum)
      }
    }
    return maxSum
  }