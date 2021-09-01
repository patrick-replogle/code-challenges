function restoreBinaryTree(inorder, preorder) {
    if (!inorder.length || !preorder.length) return null;
    
    let root = new Tree(preorder[0]);
    let i = inorder.indexOf(preorder[0]);
    root.left = restoreBinaryTree(inorder.slice(0, i), preorder.slice(1, i + 1));
    root.right = restoreBinaryTree(inorder.slice(i+1), preorder.slice(i+1));
    
    return root;
}
