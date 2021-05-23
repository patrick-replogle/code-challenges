class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
        
        int removed = 0;
        int prevInterval = intervals[0][1];
        
        for (int i = 1; i < intervals.length; i++) {
            int[] currInterval = intervals[i];
            
            if (prevInterval <= currInterval[0]) {
                prevInterval = currInterval[1];
            } else {
                removed++;
            }
        }
        return removed;
    }
}
