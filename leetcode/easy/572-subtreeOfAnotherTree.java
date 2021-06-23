class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        
        while (!stack.isEmpty()) {
            TreeNode currNode = stack.pop();
            
            if (currNode.val == subRoot.val && traverse(currNode, subRoot)) {
                return true;
            } 
            if (currNode.left != null) stack.push(currNode.left);
            if (currNode.right != null) stack.push(currNode.right);
        }
        return false;
    }
    
    public boolean traverse(TreeNode root, TreeNode subRoot) {
        if (root == null && subRoot == null) {
            return true;
        }
        
        if (root == null || subRoot == null) {
            return false;
        }
        
        if (root.val != subRoot.val) {
            return false;
        }
        
        boolean left = traverse(root.left, subRoot.left);
        boolean right = traverse(root.right, subRoot.right);
        
        return left && right;
    }
}
