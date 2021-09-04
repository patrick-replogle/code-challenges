// first pass solution
function toys(w) {
    w.sort((a, b) => a - b);
    let containers = 1;
    let minWindowItem = w[0];
    
    for (let i = 1; i < w.length; i++) {
        if (w[i] - minWindowItem <= 4) continue;
        minWindowItem = w[i];
        containers++;
    }
    return containers;
}
