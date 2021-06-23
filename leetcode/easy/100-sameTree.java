class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();
        stack1.push(p);
        stack2.push(q);
        
        while (!stack1.isEmpty() && !stack2.isEmpty()) {
            TreeNode left = stack1.pop();
            TreeNode right = stack2.pop();
            
            if (left == null && right == null) continue;
            if (left == null || right == null) return false;
            if (left.val != right.val) return false;
            
            stack1.push(left.left);
            stack2.push(right.left);
            stack1.push(left.right);
            stack2.push(right.right);
        }
        return stack1.isEmpty() && stack2.isEmpty();
    }
}
