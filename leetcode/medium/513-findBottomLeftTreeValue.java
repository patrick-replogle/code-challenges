// first pass solution using BFT
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

// second pass using DFT
class Solution {
    int maxLevel = -1;
    int output = -1;
    
    public int findBottomLeftValue(TreeNode root) {
        if (root == null) return -1;
        
        DFT(root, 0);
        
        return output;
    }
    
    public void DFT(TreeNode root, int level) {
        if (level > maxLevel) {
            output = root.val;
            maxLevel = level;
        }
        
        if (root.left != null) DFT(root.left, level + 1);
        if (root.right != null) DFT(root.right, level + 1);
    }
}
