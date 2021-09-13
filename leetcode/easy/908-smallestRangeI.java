class Solution {
    public int smallestRangeI(int[] nums, int k) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
        
        int diff = max - min;
        int maxAdjustment = 2*k;
        
        if (diff - maxAdjustment <= 0) {
            return 0;
        }
        return diff - maxAdjustment;
    }
}
