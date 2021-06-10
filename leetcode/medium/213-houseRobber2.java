class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
        if (nums.length == 2) return Math.max(nums[0], nums[1]);

        int withoutLast = solver(Arrays.copyOfRange(nums, 0, nums.length - 1));
        int withoutFirst = solver(Arrays.copyOfRange(nums, 1, nums.length));
        
        return Math.max(withoutFirst, withoutLast);
    }
    
    public int solver(int[] nums) {
        int[] dp = new int[nums.length];
    
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        
        for (int i = 2; i < nums.length; i++) {
            dp[i] = Math.max(Math.max(dp[i-1], dp[i-2] + nums[i]), nums[i]);
        }
        
        return dp[dp.length - 1];
    }
}
