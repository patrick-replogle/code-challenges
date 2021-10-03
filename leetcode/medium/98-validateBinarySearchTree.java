// very slow bfs approach 
class Solution {
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            
            if (node.left != null) {
                Queue<TreeNode> q = new LinkedList<>();
                q.add(node.left);
                
                while (!q.isEmpty()) {
                    TreeNode curr = q.poll();
                    if (curr.val >= node.val) return false;
                    if (curr.left != null) q.add(curr.left);
                    if (curr.right != null) q.add(curr.right);
                }
                queue.add(node.left);
            }
            
            if (node.right != null) {
                Queue<TreeNode> q = new LinkedList<>();
                q.add(node.right);
                
                while (!q.isEmpty()) {
                    TreeNode curr = q.poll();
                    if (curr.val <= node.val) return false;
                    if (curr.left != null) q.add(curr.left);
                    if (curr.right != null) q.add(curr.right);
                }
                queue.add(node.right);
            }
        }
        return true;
    }
}

// dfs
class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    
    public boolean validate(TreeNode root, int min, int max) {
        if (root == null) return true;
        
        if (root.val <= min || root.val >= max) {
            return false;
        }
        
        boolean left = validate(root.left, min, root.val);
        boolean right = validate(root.right, root.val, max);
        
        return left && right;
    }
}
