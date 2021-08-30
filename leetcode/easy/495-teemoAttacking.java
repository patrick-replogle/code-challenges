// first pass solution
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int total = 0;
        
        for (int i = 0; i < timeSeries.length - 1; i++) {
            if (timeSeries[i] + duration < timeSeries[i+1]) {
                total += duration;
            } else {
                total += timeSeries[i+1] - timeSeries[i];
            }
        }
        return total + duration;
    }
}
