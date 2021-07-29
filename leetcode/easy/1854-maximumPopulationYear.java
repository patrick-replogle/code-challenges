// first pass solution
class Solution {
    public int maximumPopulation(int[][] logs) {
        Map<Integer, Integer> map = new HashMap<>();
        int maxPopulation = 0;
        int maxPopYear = Integer.MAX_VALUE;
        
        for (int i = 0; i < logs.length; i++) {
            int start = logs[i][0];
            int end = logs[i][1];
            for (int year = start; year < end; year++) {
                map.put(year, map.getOrDefault(year, 0) + 1);
            }
        }
        
        for (int year : map.keySet()) {
            if ((map.get(year) > maxPopulation) || 
                (map.get(year) == maxPopulation && year < maxPopYear)) 
            {
                maxPopulation = map.get(year);
                maxPopYear = year;
            } 
        }
        
        return maxPopYear;
    }
}
