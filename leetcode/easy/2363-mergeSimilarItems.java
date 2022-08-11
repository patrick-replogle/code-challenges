class Solution {
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        Map<Integer, Integer> map = new HashMap<>();
        List<List<Integer>> output = new ArrayList<>();
        
        for (int i = 0; i < items1.length; i++) {
            int value = items1[i][0];
            int weight = items1[i][1];
            
            map.put(value, map.getOrDefault(value, 0) + weight);
        }
        
        for (int i = 0; i < items2.length; i++) {
            int value = items2[i][0];
            int weight = items2[i][1];
            
            map.put(value, map.getOrDefault(value, 0) + weight);
        }
        
        for (int key : map.keySet()) {
            List<Integer> entry = new ArrayList<>();
            entry.add(key);
            entry.add(map.get(key));
            
            output.add(entry);
        }
        
        Collections.sort(output, (a, b) -> Integer.compare(a.get(0), b.get(0)));
        
        return output;
    }
}
