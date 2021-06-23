// top down approach with memoization
class Solution {
    Map<String, Boolean> cache = new HashMap<>();
    
    public boolean canPartition(int[] nums) {
        int sum = 0;
        
        for (int num : nums) {
            sum += num;
        }
        
        if (sum % 2 != 0) {
            return false;
        }
        return helper(nums, 0, sum / 2);
    }
    
    public boolean helper(int[] nums, int index, int sum) {
        String curr = index + ":" + sum;
        
        if (cache.containsKey(curr)) return cache.get(curr);
        if (sum == 0) return true;
        if (index == nums.length) return false;
        
        boolean result = helper(nums, index + 1, sum - nums[index]) || helper(nums, index + 1, sum);
        cache.put(curr, result);
        
        return cache.get(curr);
    }
}
