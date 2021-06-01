// first pass solution
class Solution {
    public int[] sortedSquares(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            nums[i] *= nums[i];
        }
        Arrays.sort(nums);
        
        return nums;
    }
}

// second pass solution
class Solution {
    public int[] sortedSquares(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int[] output = new int[nums.length];
        
        for (int i = nums.length - 1; i >= 0; i--) {
            if (Math.abs(nums[left]) < Math.abs(nums[right])) {
                output[i] = nums[right] * nums[right];
                right--;
            } else {
                output[i] = nums[left] * nums[left];
                left++;
            }
        }
        return output;
    }
}
