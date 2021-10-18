// BFS
class Solution {
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        
        while (!queue.isEmpty()) {
            int len = queue.size();
            TreeNode xParent = null;
            TreeNode yParent = null;
            
            for (int i = 0; i < len; i++) {
                TreeNode curr = queue.poll();
                
                if (curr.left != null) {
                    if (curr.left.val == x) xParent = curr;
                    else if (curr.left.val == y) yParent = curr;
                    queue.add(curr.left);
                }
                if (curr.right != null) {
                    if (curr.right.val == y) yParent = curr;
                    else if (curr.right.val == x) xParent = curr; 
                    queue.add(curr.right);
                }
            }
            if (xParent != null && yParent != null) {
                if (xParent != yParent) return true;
                else break;
            }
        }
        return false;
    }
}

// DFS
class Solution {
    public boolean isCousins(TreeNode root, int x, int y) {
        if (root == null) return false;
        
        Map<Integer, int[]> map = new HashMap<>();
        
        DFS(root, x, y, map, 0);
        
        if (map.containsKey(x) && map.containsKey(y)) {
            return map.get(x)[0] != map.get(y)[0] && map.get(x)[1] == map.get(y)[1];
        }
        return false;
    }
    
    public void DFS(TreeNode root, int x, int y, Map<Integer, int[]> map, int depth) {
        if (root.left != null) {
            if (root.left.val == x) map.put(x, new int[] { root.val, depth });
            else if (root.left.val == y) map.put(y, new int[] { root.val, depth });
            DFS(root.left, x, y, map, depth + 1);
        }
        
        if (root.right != null) {
            if (root.right.val == x) map.put(x, new int[] { root.val, depth });
            else if (root.right.val == y) map.put(y, new int[] { root.val, depth });
            DFS(root.right, x, y, map, depth + 1);
        }
    }
}
