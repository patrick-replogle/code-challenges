class Solution {
    public int maxDepth(TreeNode root) {
        return traverse(root, 0);
    }
    
    public int traverse(TreeNode root, int depth) {
        if (root == null) {
            return depth;
        } 
        
        if (root.left == null && root.right == null) {
            return depth + 1;
        }
        
        int left = traverse(root.left, depth + 1);
        int right = traverse(root.right, depth + 1);
        
        return Math.max(left, right);
    }
}
