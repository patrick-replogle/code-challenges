// first pass solution
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function swapNodes(indexes, queries) {
    let output = [];
    let tree = buildTree(indexes);
    
    for (let queryDepth of queries) {
        BFS(queryDepth, tree);
        
        let inorderValues = [];
        inorder(1, inorderValues, tree)
        output.push(inorderValues);
    }
    
    return output;
}

function buildTree(indexes) {
    let tree = {};
    
    for (let i = 0; i < indexes.length; i++) {
        let node = new TreeNode(i+1);
        node.left = indexes[i][0] === -1 ? null : indexes[i][0];
        node.right = indexes[i][1] === -1 ? null : indexes[i][1]; 
        tree[i+1] = node;
    }
    return tree;
}

function inorder(root, arr, tree) {
    if (tree[root].left) inorder(tree[root].left, arr, tree);
    arr.push(root);
    if (tree[root].right) inorder(tree[root].right, arr, tree);
}

function BFS(queryDepth, tree) {
    let queue = [1];
    let currDepth = 1;
    
    while (queue.length) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            if (currDepth % queryDepth === 0) {
                let temp = tree[curr].left;
                tree[curr].left = tree[curr].right;
                tree[curr].right = temp;
            }
            if (tree[curr].left) queue.push(tree[curr].left);
            if (tree[curr].right) queue.push(tree[curr].right);
        }
        currDepth++;
    }
}
