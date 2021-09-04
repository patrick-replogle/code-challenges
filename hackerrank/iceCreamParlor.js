// first pass solution
function icecreamParlor(m, arr) {
    let map = {};
    
    for (let i = 0; i < arr.length; i++) {
        if ((m - arr[i]) in map) {
            return [map[m - arr[i]], i + 1];
        }
        map[arr[i]] = i + 1;
    }
    return [-1, -1];
}
