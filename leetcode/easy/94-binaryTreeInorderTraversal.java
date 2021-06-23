class Solution {
    private ArrayList<Integer> values = new ArrayList<>();
    
    public List<Integer> inorderTraversal(TreeNode root) {
        traverse(root);
        return values;
    }
    
    public void traverse(TreeNode node) {
        if (node == null) return;
        traverse(node.left);
        this.values.add(node.val);
        traverse(node.right);
    }
}
