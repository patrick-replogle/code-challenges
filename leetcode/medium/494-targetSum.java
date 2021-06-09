// first pass solution
class Solution {
    int output = 0;
    
    public int findTargetSumWays(int[] nums, int target) {
        solver(nums, target, 0, 0);
        
        return output;
    }
    
    public void solver(int[] nums, int target, int start, int currSum) {
        if (start == nums.length) {
            if (currSum == target) {
                output++;
            }
            return;
        }
        solver(nums, target, start + 1, currSum - nums[start]);
        solver(nums, target, start + 1, currSum + nums[start]);
    }
}
