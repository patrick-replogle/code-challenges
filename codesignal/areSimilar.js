// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

function areSimilar(a, b) {
    let diffCount = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diffCount++;
    }
    
    if (a.sort().join("") !== b.sort().join("")) return false;
    return diffCount === 0 || diffCount === 2;
}
