// first pass solution
class Solution {
    public int longestSubarray(int[] nums, int limit) {
        int max = 0;
        
        for (int i = 0; i < nums.length; i++) {
            int minVal = nums[i];
            int maxVal = nums[i];
            int len = 1;
            for (int j = i + 1; j < nums.length; j++) {
                minVal = Math.min(minVal, nums[j]);
                maxVal = Math.max(maxVal, nums[j]);
                if (maxVal - minVal > limit || len + nums.length - j < max) break;
                len++;
            }
            max = Math.max(max, len);
        }
        return max;
    }
}
