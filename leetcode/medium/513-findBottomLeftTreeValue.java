class Solution {
    public int findBottomLeftValue(TreeNode root) {
        LinkedList<TreeNode> queue = new LinkedList<>();
        int output = -1;
        
        if (root != null) queue.addFirst(root);
        
        while (!queue.isEmpty()) {
            int len = queue.size();
            output = queue.peekFirst().val;
            
            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.removeFirst();
                
                if (currNode.left != null) queue.addLast(currNode.left);
                if (currNode.right != null) queue.addLast(currNode.right);
            }
        }
        return output;
    }
}
