class Solution {
    public int minimumDifference(int[] nums, int k) {
        if (nums.length <= 1) return 0;
        
        Arrays.sort(nums);
        
        int min = Integer.MAX_VALUE;
        int left = 0;
        int right = k - 1;
        
        while (right < nums.length) {
            min = Math.min(min, nums[right] - nums[left]);
            left++;
            right++;
        }
        return min;
    }
}
