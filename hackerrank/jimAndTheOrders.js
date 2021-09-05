// first pass solution
function jimOrders(orders) {
    let map = {};
    
    for (let i = 0; i < orders.length; i++) {
        map[i+1] = orders[i][0] + orders[i][1];
    }
    
    return Object.entries(map)
                .sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
                .map(el => el[0]);
}
