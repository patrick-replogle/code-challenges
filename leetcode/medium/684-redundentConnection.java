// first pass solution
class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        for (int i = edges.length - 1; i >= 0; i--) {
            if (DFS(edges, i)) {
                return edges[i];
            }
        }
        return new int[]{-1, -1};
    }
    
    public boolean DFS(int[][] edges, int j) {
        Map<Integer, Set<Integer>> map = new HashMap<>();
        Stack<Integer> stack = new Stack<>();
        Set<Integer> visited = new HashSet<>();
        
        stack.add(1);
        
        for (int i = 1; i <= edges.length; i++) map.put(i, new HashSet<>());
        for (int i = 0; i < edges.length; i++) {
            if (i == j) continue;
            int x = edges[i][0];
            int y = edges[i][1];
            map.get(x).add(y);
            map.get(y).add(x);
        }
        
        while (!stack.isEmpty()) {
            int curr = stack.pop();
            
            if (visited.size() == edges.length) return true;
            
            if (!visited.contains(curr)) {
                visited.add(curr);
                for (int neighbor : map.get(curr)) {
                    stack.add(neighbor);
                }
            }
        }
        return false;
    }
}
