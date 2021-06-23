// first pass solution
var kClosest = function(points, k) {
    let dict = {};
    let output = [];
    
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        dict[i] = point[0] * point[0] + point[1] * point[1];
    }
    
    let arr = Object.entries(dict).sort((a, b) => a[1] - b[1]);
    let i = 0;
    
    while (output.length < k) {
        output.push(points[arr[i][0]]);
        i++;
    }
    return output;
};
