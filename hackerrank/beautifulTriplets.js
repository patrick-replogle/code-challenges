/*
Given a sequence of integers a, a triplet a[i], a[j], a[k]  is beautiful if:

1. i < j < k
2. a[j] - a[i] = d && a[k] - a[j] = d

Given an increasing sequenc of integers and the value of , count the number of beautiful triplets in the sequence.
*/

// first pass solution
function beautifulTriplets(d, arr) {
    let output = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] - arr[i] === d) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[k] - arr[j] === d) {
                        output++;
                    }
                }
            }
        }
    }
    return output;
}
