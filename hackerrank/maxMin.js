// first pass solution
function maxMin(k, arr) {
    let min = Infinity;
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - k + 1; i++) {
        min = Math.min(min, arr[i + k - 1] - arr[i]);
    }
    return min;
}
