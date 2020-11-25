// Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with 
// the larger index in the array should come first.

// Example

// For a = [152, 23, 7, 887, 243], the output should be
// digitDifferenceSort(a) = [7, 887, 23, 243, 152].

// Here are the differences of all the numbers:

// 152: difference = 5 - 1 = 4;
// 23: difference = 3 - 2 = 1;
// 7: difference = 7 - 7 = 0;
// 887: difference = 8 - 7 = 1;
// 243: difference = 4 - 2 = 2.
// 23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first.

// second pass solution
function digitDifferenceSort(a) {
    let result = [];
    
    for (let i in a) {
        result.push({
            diff: Math.max(...String(a[i])) - Math.min(...String(a[i])),
            value: a[i],
            index: i,
        });
    }
    result.sort((a, b) => a.diff - b.diff || b.index - a.index);

    return result.map((obj) => obj.value);
}

// first pass solution: passes all tests, but relies upon dictionary entries maintaining order
function digitDifferenceSort(a) {
    let result = [];
    let dict = {};
    
    for (let i in a) {
        let diff = Math.max(...String(a[i])) - Math.min(...String(a[i]));

        if (!(diff in dict)) {
            dict[diff] = [];
        } 
        dict[diff].push(a[i]);
    }
    
    for (let key in dict) {
        while(dict[key].length > 0) {
            result.push(dict[key].pop());
        }
    }
    return result;
}
