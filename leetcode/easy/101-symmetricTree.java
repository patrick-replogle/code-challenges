// first pass solution
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null || (root.left == null && root.right == null)) return true;
        return DFS(root.left, root.right);
    }
    public boolean DFS(TreeNode left, TreeNode right) {
        if (left == null && right == null) return true;
        if (left == null || right == null) return false;
        if (left.val != right.val) return false;
        
        return DFS(left.left, right.right) && DFS(left.right, right.left);
    }
}
