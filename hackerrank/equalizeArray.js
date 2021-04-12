// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// first pass solution
function equalizeArray(arr) {
    let dict = {};
    let max = 0;
    
    arr.forEach(num => {
        dict[num] ? dict[num] += 1 : dict[num] = 1;
        max = Math.max(max, dict[num]);
    });
    return arr.length - max;
}
