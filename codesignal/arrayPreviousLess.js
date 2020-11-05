// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. 
// Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

function arrayPreviousLess(items) { 
    for (let i = items.length - 1; i >= 0; i--) {
        let j = i;
        
        while (j > 0 && items[j] >= items[i]) { j--; }
        if (items[j] >= items[i]) { items[i] = -1; } 
        else { items[i] = items[j]; }
    }
    return items;
}
