// first pass solution
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;
        
        for (int num : nums) {
            if (num != 0) {
                nums[left] = num;
                left++;
            }
        }
        while (left < nums.length) {
            nums[left] = 0;
            left++;
        }
    }
}

