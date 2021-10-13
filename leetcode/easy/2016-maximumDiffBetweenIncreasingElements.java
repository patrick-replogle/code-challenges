// first pass solution
class Solution {
    public int maximumDifference(int[] nums) {
        int max = -1;
        
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    max = Math.max(max, nums[j] - nums[i]);
                }
            }
        }
        return max;
    }
}

// second pass solution
class Solution {
    public int maximumDifference(int[] nums) {
        int minVal = nums[0];
        int max = -1;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < minVal) minVal = nums[i];
            if (nums[i] > minVal) max = Math.max(max, nums[i] - minVal);
        }
        return max;
    }
}
