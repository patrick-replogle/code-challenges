/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode reverseOddLevels(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        int level = 0;
        q.add(root);
        
        while (!q.isEmpty()) {
            int len = q.size();
            boolean isOdd = level % 2 != 0;
            List<TreeNode> currLevelNodes = new ArrayList<>();
            
            for (int i = 0; i < len; i++) {
                TreeNode currNode = q.remove();
                
                if (isOdd) currLevelNodes.add(currNode);
                if (currNode.left != null) q.add(currNode.left);
                if (currNode.right != null) q.add(currNode.right);
            }
            
            if (isOdd) {
                int j = len - 1;
                
                for (int i = 0; i < currLevelNodes.size() / 2; i++) {
                    swap(currLevelNodes.get(i), currLevelNodes.get(j));
                    j--;
                }
            }
            level++;
        }
        
        return root;
    }
    
    private void swap(TreeNode a, TreeNode b) {
        int temp = a.val;
        a.val = b.val;
        b.val = temp;
    }
}
