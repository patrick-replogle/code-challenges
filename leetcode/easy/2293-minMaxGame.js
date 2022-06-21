// first pass solution
class Solution {
    public int minMaxGame(int[] nums) {
        if (nums.length == 0) return -1;
        if (nums.length == 1) return nums[0];
        
        while (nums.length > 1) {
            int[] newNums = new int[nums.length / 2];
            int j = 0;
            
            for (int i = 1; i < nums.length; i += 2) {
                if (j % 2 == 0) {
                    newNums[j] = Math.min(nums[i], nums[i-1]);
                } else {
                    newNums[j] = Math.max(nums[i], nums[i-1]);
                }
                j++;
            }
            
            nums = newNums;
        }
        return nums[0];
    } 
}
