/*
Given two arrays of integers, find which elements in the second array are missing from the first array.

Notes

If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then 
it is also a missing number.
Return the missing numbers sorted ascending.
Only include a missing number once, even if it is missing multiple times.
The difference between the maximum and minimum numbers in the original list is less than or equal to .
Function Description

Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

missingNumbers has the following parameter(s):

int arr[n]: the array with missing numbers
int brr[m]: the original array of numbers
Returns

int[]: an array of integers
*/

// first pass solution
function missingNumbers(arr, brr) {
    let dict1 = {};
    let dict2 = {};
    let output = [];
    
    for (let num of arr) {
        dict1[num] ? dict1[num] += 1 : dict1[num] = 1;
    }
    for (let num of brr) {
        dict2[num] ? dict2[num] += 1 : dict2[num] = 1;
    }
    
    for (let key in dict2) {
        if (!(key in dict1) || dict1[key] !== dict2[key]) {
            output.push(key);
        }
    }
    return output;
}
