// first pass solution
class Solution {
    public int[] buildArray(int[] nums) {
        int[] output = new int[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            output[i] = nums[nums[i]];
        }
        
        return output;
    }
}
