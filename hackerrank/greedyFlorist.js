// first pass solution
function getMinimumCost(k, c) {
    let map = {};
    let curr = 1;
    let sum = 0;
    c.sort((a, b) => b - a);
    
    for (let i = 1; i <= k; i++) map[i] = 0;
    
    for (let flower of c) {
        sum += (map[curr] + 1) * flower;
        map[curr]++;
        curr++;
        if (curr > k) curr = 1;
    }
    return sum;
}
