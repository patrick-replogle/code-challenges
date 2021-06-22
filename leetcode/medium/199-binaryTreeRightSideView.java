class Solution {
    public List<Integer> rightSideView(TreeNode root) {    
        List<Integer> output = new ArrayList<>();
        LinkedList<TreeNode> queue = new LinkedList<>();
        
        if (root != null) queue.addFirst(root);
        
        while (!queue.isEmpty()) {
            int len = queue.size();
            int leftVal = 0;
            
            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.removeFirst();
                leftVal = currNode.val;
                
                if (currNode.left != null) queue.addLast(currNode.left);
                if (currNode.right != null) queue.addLast(currNode.right);
                
            }
            output.add(leftVal);
        }
        return output;
    }
}
