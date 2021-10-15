// first pass solution
class Solution {
    public boolean isCompleteTree(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        int height = findHeight(root);
        int numOfNodesOnCurrLevel = 1;

        queue.add(root);
        
        while (!queue.isEmpty()) {
            int len = queue.size();
            boolean flag = false;

            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.poll();
                
                if (currNode == null && height > 1) return false;
                if (currNode == null) flag = true;
                if (currNode != null && flag) return false;
                
                if (currNode != null) {
                    queue.add(currNode.left);
                    queue.add(currNode.right);
                }
            }
            height--;
            numOfNodesOnCurrLevel *= 2;
            if (flag) break;
        }
        return true;
    }
    
    public int findHeight(TreeNode root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        
        int left = findHeight(root.left) + 1;
        int right = findHeight(root.right) + 1;
        
        return Math.max(left, right);
    }
}
