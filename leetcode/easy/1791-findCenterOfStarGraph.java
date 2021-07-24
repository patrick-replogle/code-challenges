// first pass solution
class Solution {
    public int findCenter(int[][] edges) {
        Map<Integer, HashSet<Integer>> hashMap = new HashMap<>();
        
        for (int[] edge : edges) {
            if (!hashMap.containsKey(edge[0])) hashMap.put(edge[0], new HashSet<>());
            if (!hashMap.containsKey(edge[1])) hashMap.put(edge[1], new HashSet<>());
            
            hashMap.get(edge[0]).add(edge[1]);
            hashMap.get(edge[1]).add(edge[0]);
            
            if (hashMap.get(edge[0]).size() > 1) return edge[0];
            else if (hashMap.get(edge[1]).size() > 1) return edge[1];
        }
        return -1;
    }
}
