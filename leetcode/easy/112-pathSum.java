// first pass solution
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return DFT(root, targetSum, 0);
    }
    
    public boolean DFT(TreeNode root, int targetSum, int currSum) {
        if (root == null) return false;
        
        if (root.left == null && root.right == null && currSum + root.val == targetSum) {
            return true;
        }
        
        return DFT(root.left, targetSum, currSum + root.val) || DFT(root.right, targetSum, currSum + root.val);
    }
}

// second pass solution
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        
        Stack<TreeNode> nodeStack = new Stack<>();
        Stack<Integer> sumStack = new Stack<>();
        nodeStack.add(root);
        sumStack.add(root.val);
        
        while (!nodeStack.isEmpty()) {
            TreeNode currNode = nodeStack.pop();
            int currSum = sumStack.pop();
            
            if (currNode.left == null && currNode.right == null && currSum == targetSum) {
                return true;
            }
            
            if (currNode.left != null) {
                nodeStack.push(currNode.left);
                sumStack.push(currSum + currNode.left.val);
            }
            
            if (currNode.right != null) {
                nodeStack.push(currNode.right);
                sumStack.push(currSum + currNode.right.val);
            }
        }
        
        return false;
    }
}
