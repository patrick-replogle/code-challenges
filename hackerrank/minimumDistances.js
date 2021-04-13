// The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value 
// exists, return -1.

// first pass solution
function minimumDistances(a) {
    let dict = {};
    let min = Infinity;
    
    for (let i = 0; i < a.length; i++) {
        if (!(a[i] in dict)) {
            dict[a[i]] = [];
        }
        dict[a[i]].push(i);
    }
    
    for (let key in dict) {
        if (dict[key].length > 1) {
            for (let i = 0; i < dict[key].length - 1; i++) {
                for (let j = i + 1; j < dict[key].length; j++) {
                    min = Math.min(dict[key][j] - dict[key][i], min);
                }
            }
        }
    }
    return min === Infinity ? -1 : min; 
}
