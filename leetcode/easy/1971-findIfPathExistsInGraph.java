// first pass solution
class Solution {
    public boolean validPath(int n, int[][] edges, int start, int end) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        Set<Integer> visited = new HashSet<>();
        Stack<Integer>  stack = new Stack<>();
      
        stack.push(start);
        
        for (int i = 0; i < n; i++) {
            graph.put(i, new HashSet<>());
        }
        
        for (int[] edge: edges) {
            int x = edge[0];
            int y = edge[1];
            graph.get(x).add(y);
            graph.get(y).add(x);
        }
        
        while (!stack.isEmpty()) {
            int currNode = stack.pop();
            
            if (currNode == end) return true;
            
            if (!visited.contains(currNode)) {
                visited.add(currNode);
                for (int neighbor : graph.get(currNode)) {
                    stack.push(neighbor);
                }
            }
        }
        return false;
    }
}
