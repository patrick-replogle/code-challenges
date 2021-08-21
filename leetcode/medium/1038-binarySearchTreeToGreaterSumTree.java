// first pass solution
class Solution {
    List<Integer> values = new ArrayList<>();
    int index = 0;
    
    public TreeNode bstToGst(TreeNode root) {
        if (root == null) return null;
        
        inorder(root);
        int[] updatedValues = getPrefixSum(values);
        updateTreeNodeValues(root, updatedValues);
        
        return root;
    }
    
    public void inorder(TreeNode root) {
        if (root.left != null) inorder(root.left);
        
        values.add(root.val);
        
        if (root.right != null) inorder(root.right);
    }
    
    public void updateTreeNodeValues(TreeNode root, int[] updatedValues) {
        if (root.left != null) updateTreeNodeValues(root.left, updatedValues);
        
        root.val = updatedValues[index];
        index++;
        
        if (root.right != null) updateTreeNodeValues(root.right, updatedValues);
    }
    
    public int[] getPrefixSum(List<Integer> values) {
        int[] prefixSum = new int[values.size()];
        
        prefixSum[prefixSum.length - 1] = values.get(values.size() - 1);
        
        for (int i = prefixSum.length - 2; i >= 0; i--) {
            prefixSum[i] +=  values.get(i) + prefixSum[i+1];
        }
        
        return prefixSum;
    }
}
