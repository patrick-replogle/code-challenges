// first pass solution
class Solution {
    int min = Integer.MAX_VALUE;
    
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        
        DFS(root, 1);
        
        return min;
    }
    
    public void DFS(TreeNode node, int level) {
        if (node.left == null && node.right == null) min = Math.min(min, level);
        if (node.left != null) DFS(node.left, level + 1);
        if (node.right != null) DFS(node.right, level + 1);
    }
}

// second pass solution
class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        
        return DFS(root, 1);
    }
    
    public int DFS(TreeNode node, int level) {
        if (node == null) return Integer.MAX_VALUE;
        
        if (node.left == null && node.right == null) return level;
        
        int left = DFS(node.left, level + 1);
        int right = DFS(node.right, level + 1);
        
        return Math.min(left, right);
    }
}

// third pass solution
class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        
        List<TreeNode> queue = new ArrayList<>();
        int output = Integer.MAX_VALUE;
        int currLevel = 1;
        
        queue.add(root);
        
        while (queue.size() > 0) {
            int len = queue.size();

            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.remove(0);

                if (currNode.left == null && currNode.right == null) return currLevel;
                if (currNode.left != null) queue.add(currNode.left);
                if (currNode.right != null) queue.add(currNode.right);
            }
            currLevel++;
        }
        return currLevel;
    }
}
