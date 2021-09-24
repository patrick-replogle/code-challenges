// first pass solution
class CBTInserter {
    TreeNode root;

    public CBTInserter(TreeNode root) {
        this.root = root;
    }
    
    public int insert(int val) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        
        while (!q.isEmpty()) {
            int len = q.size();
            
            for (int i = 0; i < len; i++) {
                TreeNode currNode = q.poll();
                if (currNode.left == null) {
                    currNode.left = new TreeNode(val);
                    return currNode.val;
                }
                if (currNode.right == null) {
                    currNode.right = new TreeNode(val);
                    return currNode.val;
                }
                
                if (currNode.left != null) q.add(currNode.left);
                if (currNode.right != null) q.add(currNode.right);
            }
        }
        return -1;
    }
    
    public TreeNode get_root() {
        return root;
    }
}
