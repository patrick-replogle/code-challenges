// first pass solution -> brute force, but using a cache in order to pass all test cases
class Solution {
    HashMap<TreeNode, Integer> cache = new HashMap<>();
    
    public int longestZigZag(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        int longest = 0;
        
        stack.push(root);
        
        while (!stack.isEmpty()) {
            TreeNode currNode = stack.pop();
            int left = traverse(currNode.left, 'L', 1);
            int right = traverse(currNode.right, 'R', 1);
            
            longest = Math.max(longest, Math.max(left, right));
         
            if (currNode.left != null) stack.push(currNode.left);
            if (currNode.right != null) stack.push(currNode.right);
        }
        
        return longest;
    }
    
    public int traverse(TreeNode root, char direction, int length) {
        if (root == null) return 0;
        if (direction == 'L' && root.right == null) return length;
        if (direction == 'R' && root.left == null) return length;
        if (cache.containsKey(root)) return cache.get(root);
        
        int left = root.left != null && direction == 'R' ? 
            traverse(root.left, 'L', length + 1) : 0;
        
        int right = root.right != null && direction == 'L' ?
            traverse(root.right, 'R', length + 1) : 0;
        
        cache.put(root, Math.max(left, right));
        
        return cache.get(root);
    }
}
