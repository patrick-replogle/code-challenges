// first pass solution -> times out
function arrayManipulation(n, queries) {
    let array = new Array(n).fill(0);
    let max = 0;
    
    for (let query of queries) {
        let start = query[0] - 1;
        let end = query[1] - 1;
        let value = query[2];
        
        for (let i = start; i <= end; i++) {
            array[i] += value;
            max = Math.max(max, array[i]);
        }
    }
    
    return max;
}

// optimized approach
function arrayManipulation(n, queries) {
    let array = new Array(n + 1).fill(0);
    let max = 0;
    let curr = 0;
    
    for (let query of queries) {
        let start = query[0] - 1;
        let end = query[1];
        let value = query[2];
        array[start] += value;
        array[end] -= value;
        max = Math.max(max, array[start]);
    }

    for (let num of array) {
        curr += num;
        if (curr > max) max = curr;
    }
    return max;
}
