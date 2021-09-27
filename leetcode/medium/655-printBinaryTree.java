// first pass solution
class Solution {
    public List<List<String>> printTree(TreeNode root) {
        int height = findHeight(root, 0);
        int m = height + 1;
        int n = (int) Math.pow(2, m) - 1;
        List<List<String>> matrix = initArrayList(m, n);
        Queue<int[]> queue1 = new LinkedList<>();
        Queue<TreeNode> queue2 = new LinkedList<>();
        
        queue1.add(new int[]{ 0, 0, n});
        queue2.add(root);
        
        while (!queue1.isEmpty() && !queue2.isEmpty()) {
            int len = queue1.size();
            
            for (int i = 0; i < len; i++) {
                int[] coordinates = queue1.poll();
                TreeNode node = queue2.poll();
                int row = coordinates[0];
                int start = coordinates[1];
                int end = coordinates[2];
                int mid = (int) Math.floor((start + end) / 2);
                
                matrix.get(row).set(mid, node.val + "");
                if (node.left != null) {
                    queue1.add(new int[]{ row+1, start, mid-1});
                    queue2.add(node.left);
                }
                if (node.right != null) {
                    queue1.add(new int[]{ row+1, mid+1, end});
                    queue2.add(node.right);
                }
            }
        }
        return matrix;
    }
    
    public int findHeight(TreeNode root, int height) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return height;
        
        int left = findHeight(root.left, height + 1);
        int right = findHeight(root.right, height + 1);
        
        return Math.max(left, right);
    }
    
    public List<List<String>> initArrayList(int m, int n) {
        List<List<String>> matrix = new ArrayList<>();
        
        for (int i = 0; i < m; i++) {
            List<String> row = new ArrayList<>();
            for (int j = 0; j < n; j++) {
                row.add("");
            }
            matrix.add(row);
        }
        return matrix;
    }
}
