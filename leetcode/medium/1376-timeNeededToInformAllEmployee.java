// BFS
class Solution {
    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        int output = 0;
        
        for (int i = 0; i < manager.length; i++) {
            if (!graph.containsKey(manager[i])) {
                graph.put(manager[i], new ArrayList<>());
            }
            graph.get(manager[i]).add(i);
        }
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] { headID, informTime[headID] });
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            output = Math.max(output, curr[1]);
            if (graph.containsKey(curr[0])) {
                for (int i : graph.get(curr[0])) {
                    queue.add(new int[] {i, curr[1] + informTime[i]});
                }
            }
        }
        return output;
    }
}

// DFS
class Solution {
    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        int[] output = new int[1];
        
        for (int i = 0; i < manager.length; i++) {
            if (!graph.containsKey(manager[i])) {
                graph.put(manager[i], new ArrayList<>());
            }
            graph.get(manager[i]).add(i);
        }
        DFS(graph, informTime, headID, informTime[headID], output);
        
        return output[0];
    }
    
    public void DFS(Map<Integer, 
                    List<Integer>> graph, 
                    int[] informTime, 
                    int id, 
                    int currTime, 
                    int[] output) {
        
        output[0] = Math.max(output[0], currTime);
        
        if (graph.containsKey(id)) {
            for (int i : graph.get(id)) {
                DFS(graph, informTime, i, currTime + informTime[i], output);
            }
        }
    }
}
