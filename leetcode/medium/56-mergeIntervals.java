class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (int1, int2) -> int1[0] - int2[0]);
      
        List<int[]> output = new ArrayList<>();
        output.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] prevInterval = output.get(output.size() - 1);
            int[] currInterval = intervals[i];
            
            if (prevInterval[1] < currInterval[0]) {
                output.add(currInterval);
            } else {
                prevInterval[0] = Math.min(prevInterval[0], currInterval[0]);
                prevInterval[1] = Math.max(prevInterval[1], currInterval[1]);
            }
        }
        return output.toArray(new int[output.size()][2]);
    }
}
