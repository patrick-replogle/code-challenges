// Remove a part of a given array between given 0-based indexes l and r (inclusive).

// Example

// For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be
// removeArrayPart(inputArray, l, r) = [2, 3, 5].

function removeArrayPart(inputArray, l, r) {
    let firstHalf = inputArray.slice(0, l);
    let lastHalf = inputArray.slice(r + 1)
    
    return firstHalf.concat(lastHalf);
}
