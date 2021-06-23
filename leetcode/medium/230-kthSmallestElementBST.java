// first pass solution
class Solution {
    List<Integer> values = new ArrayList<>();
    
    public int kthSmallest(TreeNode root, int k) {
        inorder(root);
        
        return values.get(k - 1);
    }
    
    public void inorder(TreeNode node) {
        if (node.left != null) {
            inorder(node.left);
        }
        values.add(node.val);
        
        if (node.right != null) {
            inorder(node.right);
        }
    }
}
