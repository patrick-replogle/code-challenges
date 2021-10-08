// first pass solution
class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (root == null) { 
            root = new TreeNode(val);
        } else if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            root = newRoot;
        } else {
            traverse(root, val, depth);
        }
        return root;
    }
    public void traverse(TreeNode root, int val, int depth) {
        if (depth - 1 == 1) {
            TreeNode tempLeft = root.left;
            TreeNode tempRight = root.right;
            root.left = new TreeNode(val);
            root.right = new TreeNode(val);
            root.left.left = tempLeft;
            root.right.right = tempRight;
        }
        if (root.left != null) traverse(root.left, val, depth - 1);
        if (root.right != null) traverse(root.right, val, depth - 1);
    }
}
