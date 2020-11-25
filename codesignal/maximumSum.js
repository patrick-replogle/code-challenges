// You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to 
// a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

// You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum 
// of all of the query outputs is maximized, and return this total sum.

// Example

// For a = [9, 7, 2, 4, 4] and q = [[1, 3], [1, 4], [0, 2]], the output should be
// maximumSum(a, q) = 62.

// You can get this sum if the array a is rearranged to be [2, 9, 7, 4, 4]. In that case, the first range sum query [1, 3] returns the 
// sum 9 + 7 + 4 = 20, the second query [1, 4] returns the sum 9 + 7 + 4 + 4 = 24, and the third query [0, 2] returns the sum 2 + 9 + 7 = 18. 
// The total sum will be 20 + 24 + 18 = 62.

// first pass solution using an array to count the number of times each index will occur in the q array
// then sort count array by highest count first and also sort the inputArray in desc order so largest count and largest nums will correlate
// then just add count * currHighestNum to the overall total

function maximumSum(a, q) {
    a.sort((num1, num2) => num2 - num1);
    let count = new Array(a.length).fill(0);
    let result = 0;
    
    for (let i = 0; i < q.length; i++) {
        for (let j = q[i][0]; j <= q[i][1]; j++) {
            count[j] += 1;
        }
    }
    
    count.sort((num1, num2) => num2 - num1)

    for (let i = 0; i < a.length; i++) {
        result += (count[i] * a[i]);
    }
    return result;
}

