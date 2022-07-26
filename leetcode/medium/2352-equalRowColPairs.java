class Solution {
    public int equalPairs(int[][] grid) {
        Map<String, Integer> rowMap = new HashMap<>();
        Map<String, Integer> colMap = new HashMap<>();
        int output = 0;
        
        for (int i = 0; i < grid.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < grid[0].length; j++) {
                sb.append(grid[i][j] + ",");
            }
            String s = sb.toString();
            rowMap.put(s, rowMap.getOrDefault(s, 0) + 1);
        }
        
        for (int j = 0; j < grid[0].length; j++) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < grid.length; i++) {
                sb.append(grid[i][j] + ",");
            }
            String s = sb.toString();
            colMap.put(s, colMap.getOrDefault(s, 0) + 1);
        }
        
        for (String key : rowMap.keySet()) {
            if (colMap.containsKey(key)) {
                output += rowMap.get(key) * colMap.get(key); 
            }
        }
        
        return output;
    }
}
