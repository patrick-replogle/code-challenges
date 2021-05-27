class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        LinkedList<TreeNode> queue = new LinkedList<>();
        List<Double> output = new ArrayList<>();
        
        queue.addFirst(root);
        
        while (!queue.isEmpty()) {
            long sum = 0;
            int len = queue.size();
            
            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.removeFirst();
                sum += currNode.val;
                
                if (currNode.left != null) queue.addLast(currNode.left);
                if (currNode.right != null) queue.addLast(currNode.right);
            }
            output.add((double) sum / len);
        }
        return output;
    }
}
