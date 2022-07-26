class Solution {
    public int averageOfSubtree(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        int output = 0;
        
        stack.push(root);
        
        while (stack.size() > 0) {
            TreeNode currNode = stack.pop();
            
            if (currNode == null) continue;
            if (currNode.left != null) stack.push(currNode.left);
            if (currNode.right != null) stack.push(currNode.right);
            
            int[] count = new int[2];
            getAverage(currNode, count);
            
            if ((count[1] / count[0]) == currNode.val) output++;
        }
        
        return output;
    }
    
    public void getAverage(TreeNode root, int[] count) {
        count[0]++; // count number of nodes
        count[1] += root.val; // add all node values together
        
        if (root.left != null) getAverage(root.left, count);
        if (root.right != null) getAverage(root.right, count);
    }
}
