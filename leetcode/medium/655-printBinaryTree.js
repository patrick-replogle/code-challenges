// first pass solution
var printTree = function(root) {
    let height = findHeight(root, 0);
    let m = height + 1;
    let n = Math.pow(2, m) - 1;
    let matrix = new Array(m).fill().map(() => new Array(n).fill(''));
    let queue = [[root, [0, 0, n]]];
    
    while (queue.length) {
        let len = queue.length;
        
        for (let i = 0; i < len; i++) {
            let [currNode, coordinates] = queue.shift();
            let [row, left, right] = coordinates;
            let mid = Math.floor((left + right) / 2);
            matrix[row][mid] = currNode.val + '';
            
            if (currNode.left) queue.push([currNode.left, [row+1, left, mid -1]]);
            if (currNode.right) queue.push([currNode.right, [row+1, mid + 1, right]]);
        }
    }
    
    return matrix;
};

var findHeight = function(root, depth) {
    if (!root) return 0;
    if (!root.left && !root.right) return depth;

    let left = findHeight(root.left, depth + 1);
    let right = findHeight(root.right, depth + 1);

    return Math.max(left, right);
}
