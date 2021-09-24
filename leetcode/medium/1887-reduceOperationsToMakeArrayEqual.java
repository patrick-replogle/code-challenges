class Solution {
    public int reductionOperations(int[] nums) {
        int output = 0;
        int count = 1;
        Arrays.sort(nums);
        
        if (nums[0] == nums[nums.length -1]) return 0;
        
        for (int i = nums.length - 1; i > 0; i--) {
            if (nums[i] != nums[i-1]) {
                output += count;
            }
            count++;
        }
        return output;
    }
}
