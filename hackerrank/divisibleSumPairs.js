You are given an array of n integers, an array, and a positive integer, k. Find and print the number of pairs where i < j and ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
    let pairCount = 0;

    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0) {
                pairCount++;
            }
        }
    }
    return pairCount;
}
