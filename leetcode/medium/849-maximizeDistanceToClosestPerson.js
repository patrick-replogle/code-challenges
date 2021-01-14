// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to the closest person.

// Example 1:
// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.

// Example 2:
// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.

// Example 3:
// Input: seats = [0,1]
// Output: 1

// first pass solution
var maxDistToClosest = function(seats) {
    let output = 0;
    let prev = 0;
    
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            prev = i;
            continue;
        }
        
        let j = i + 1;
        while (seats[j] === 0) {
            j++;
        }
     
        if (j === seats.length || i === 0) { 
            output = Math.max(output, i - prev, j - i); // either no one to the left or right of Alex
        } else {
            output = Math.max(output, Math.min(i - prev, j - i)) // someone is sitting to the left and right of Alex
        }
    }
    return output;
};
