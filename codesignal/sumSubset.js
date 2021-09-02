// first pass solution
function sumSubsets(arr, num) {
    let set = new Set();
    
    DFS(arr, num, 0, set, "");
    
    return Array.from(set)
            .map(str => str.split(',')
            .filter(str => str.length > 0)
            .map(str => Number(str)));
             
}

function DFS(arr, num, index, set, path) {
    if (num === 0) {
        return set.add(path);
    }
    
    for (let i = index; i < arr.length; i++) {
        if (num - arr[i] >= 0) {
            DFS(arr, num - arr[i], i + 1, set, path + ',' + arr[i]);
        }
    } 
}
