// first pass solution
class Solution {
    public int minOperations(int[] nums) {
        int operations = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i-1] >= nums[i]) {
                operations += Math.abs(nums[i-1] - nums[i]) + 1;
                nums[i] = nums[i-1] + 1;
            }
        }        
        return operations;
    }
}
