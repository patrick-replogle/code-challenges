class Solution {
    public int arrayPairSum(int[] nums) {
        int output = 0;
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length; i += 2) {
            output += nums[i];
        }
        
        return output;
    }
}
