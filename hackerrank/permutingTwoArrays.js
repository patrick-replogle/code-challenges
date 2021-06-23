/*
There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

Example

A valid  is  and :  and . Return YES.

Function Description

Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

twoArrays has the following parameter(s):

int k: an integer
int A[n]: an array of integers
int B[n]: an array of integers
Returns
- string: either YES or NO
*/

// first pass solution
function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    while (A.length && B.length) {
        if (A.shift() + B.pop() < k) {
            return 'NO';
        }
    }
    return 'YES';
}
