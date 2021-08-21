// solution 1
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return true;
        if (root1 == null || root2 == null || root1.val != root2.val) return false;
        
        return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
            (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
    } 
}

// solution 2
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        DFS(root1, root2);
        
        return areEven(root1, root2);
    } 
    
    public void DFS(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return;
        if (root1 == null || root2 == null) return;
        
        if ((root1.left == null && root2.left != null) ||
            (root1.left != null && root2.left == null) ||
            (root1.left != null && root1.left != null && root1.left.val != root2.left.val)) {
            TreeNode temp = root1.left;
            root1.left = root1.right;
            root1.right = temp;
        }
        
        DFS(root1.left, root2.left);
        DFS(root1.right, root2.right);
    }
    
    public boolean areEven(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return true;
        if (root1 == null || root2 == null || root1.val != root2.val) return false;
        
        return areEven(root1.left, root2.left) && areEven(root1.right, root2.right);
    }
}
