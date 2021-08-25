class Solution {    
    int maxValue = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        if (root == null) return 0;
        
        DFT(root);
        
        return maxValue;
    }
    
    public int DFT(TreeNode root) {
        if (root == null) return 0;
        
        int left = Math.max(0, DFT(root.left));
        int right = Math.max(0, DFT(root.right));
        
        maxValue = Math.max(maxValue, left + right + root.val);
        
        return Math.max(left, right) + root.val;
    }  
}
