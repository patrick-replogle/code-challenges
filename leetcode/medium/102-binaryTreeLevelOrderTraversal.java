class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> output = new ArrayList<>();
        ArrayList<TreeNode> queue = new ArrayList<>();
        
        if (root != null) queue.add(root);
        
        while (queue.size() > 0) {
            int size = queue.size();
            ArrayList<Integer> level = new ArrayList<>();
            
            for (int i = 0; i < size; i++) {
                TreeNode curr = queue.remove(0);
                level.add(curr.val);
                if (curr.left != null) queue.add(curr.left);
                if (curr.right != null) queue.add(curr.right);
            }
            output.add(level);
        }
        return output;
    }
}
