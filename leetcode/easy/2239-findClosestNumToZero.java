// first pass solution
class Solution {
    public int findClosestNumber(int[] nums) {
        if (nums.length == 0) return -1;
        
        int output = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == 0) return 0;
            
            int currDiff = Math.abs(nums[i]);
            int prevDiff = Math.abs(output);
            
            if (currDiff <= prevDiff) {
                if (currDiff == prevDiff) output = Math.max(nums[i], output);
                if (output > 0 && nums[i] > 0) output = Math.min(nums[i], output);
                if (currDiff < prevDiff) output = nums[i];
            }
        }
        
        return output;
    }
}
