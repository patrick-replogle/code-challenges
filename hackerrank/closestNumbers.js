/*
Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In 
this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

Example

Sorted, . Several pairs have the minimum difference of : . Return the array .

Note
As shown in the example, pairs may overlap.

Given a list of unsorted integers, , find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find 
them all.

Function Description

Complete the closestNumbers function in the editor below.

closestNumbers has the following parameter(s):

int arr[n]: an array of integers
Returns
- int[]: an array of integers as described
*/

// first pass solution
function closestNumbers(arr) {
    let output = [];
    let smallestDiff = Infinity;
    arr.sort((a, b) => a - b);
    
    for (let i = 1; i < arr.length; i++) {
        let currDiff = Math.abs(arr[i-1] - arr[i]);
        if (currDiff < smallestDiff) {
            smallestDiff = currDiff;
            output = [arr[i-1], arr[i]]
        }
        else if (currDiff === smallestDiff) {
            output.push(arr[i-1], arr[i]);
        }
    }
    return output;
}

