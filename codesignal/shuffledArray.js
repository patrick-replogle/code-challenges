// A noob programmer was given two simple tasks: sum and sort the elements of the given array
// a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in 
// some random position of the original array which was a bad idea. Now he needs to cope with the second task, 
// sorting the original array a, and it's giving him trouble since he modified it.

// Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the 
// sorted array of original elements a1, a2, ..., an.

// Example

// For shuffled = [1, 12, 3, 6, 2], the output should be
// shuffledArray(shuffled) = [1, 2, 3, 6].

// 1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

// For shuffled = [1, -3, -5, 7, 2], the output should be
// shuffledArray(shuffled) = [-5, -3, 2, 7].

// first pass brute force solution
function shuffledArray(shuffled) {
    let set = new Set([...shuffled]);
    let valueToRemove;
    
    for (let i = 0; i < shuffled.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < shuffled.length; j++) {
            if (j !== i) {
                sum += shuffled[j];
            }
        }
        
        if (set.has(sum)) {
            valueToRemove = sum;
            break;
        }
    }
    
    let index = shuffled.indexOf(valueToRemove);
    return (
        shuffled.slice(0, index)
            .concat(shuffled.slice(index + 1))
            .sort((a, b) => a - b)
    );
}

// second pass solution with linear space and time complexity
function shuffledArray(shuffled) {
    let sum = shuffled.reduce((acc, curr) => acc + curr);
    let dict = {};
    let index = -1;
    
    for (let i = 0; i < shuffled.length; i++) {
        dict[shuffled[i]] = i;
        
        if ((sum - shuffled[i]) in dict) {
            index = dict[sum - shuffled[i]];
            break;
        }
    }

    return [
        ...shuffled.slice(0, index),
        ...shuffled.slice(index + 1)
    ].sort((a, b) => a - b);
}
