/*
You are given an unordered array of unique integers incrementing from . You can swap any two elements a limited number of times. Determine the largest 
lexicographical value array that can be created by executing no more than the limited number of swaps.

Example

The following arrays can be formed by swapping the  with the other elements:

[2,1,3,4]
[3,2,1,4]
[4,2,3,1]
The highest value of the four (including the original) is . If , we can swap to the highest possible value: .

Function Description

Complete the largestPermutation function in the editor below. It must return an array that represents the highest value permutation that can be formed.

largestPermutation has the following parameter(s):

int k: the maximum number of swaps
int arr[n]: an array of integers
Input Format

The first line contains two space-separated integers  and , the length of  and the maximum swaps that can be performed. The second line contains  
distinct space-separated integers from  to  as  where .
*/

// first pass solution
function largestPermutation(k, arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (k === 0) break;
        let max = arr[i];
        let maxIdx = i;
        let j = i;
        
        while (j < arr.length) {
            if (arr[j] > max) {
                max = arr[j];
                maxIdx = j;
            }
            j++;
        }

        if (arr[i] < max) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            k--;
        }
    }
    return arr;
}
