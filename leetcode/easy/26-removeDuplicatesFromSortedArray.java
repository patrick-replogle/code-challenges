class Solution {
    public int removeDuplicates(int[] nums) {
        int prev = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[prev]) {
                for (int j = i; j < nums.length; j++) {
                    if (nums[j] > nums[prev]) {
                        nums[i] = nums[j];
                        break;
                    }
                }
            }
            prev++;
        }
        
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] >= nums[i+1]) return i + 1;
        }
        return nums.length;
    }
}
