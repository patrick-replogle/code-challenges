/*
Function Description

Complete the fairRations function in the editor below.

fairRations has the following parameter(s):

int B[N]: the numbers of loaves each persons starts with
Returns

string: the minimum number of loaves required, cast as a string, or 'NO'
*/

// first pass solution
function fairRations(B) {
    let count = 0;
    
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i+1]++;
            count += 2;
        }
    }
    if (B[B.length - 1] % 2 !== 0) {
        return 'NO';
    }
    return count;
}
