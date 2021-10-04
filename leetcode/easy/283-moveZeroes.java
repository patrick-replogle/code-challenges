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

// second pass solution
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;
        int right = 0;
        
        while (right < nums.length) {
            if (nums[left] == 0) {
                nums[left] = nums[right];
                nums[right] = 0;
            }
            if (nums[left] != 0) left++;
            right++;
        }
    }
}

