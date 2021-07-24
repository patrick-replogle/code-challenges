// first pass solution
class Solution {
    public int maxAscendingSum(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        
        for (int i = 0; i < nums.length; i++) {
            int currSum = 0;
            for (int j = i; j < nums.length; j++) {
                currSum += nums[j];
                maxSum = Math.max(maxSum, currSum);
                if (j < nums.length - 1 && nums[j] >= nums[j+1]) break;
            }
        }
        return maxSum;
    }
}

// second pass solution
class Solution {
    public int maxAscendingSum(int[] nums) {
        int maxSum = nums[0];
        int currSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i-1]) {
                currSum += nums[i];
                maxSum = Math.max(currSum, maxSum);
            } else {
                currSum = nums[i];
                maxSum = Math.max(currSum, maxSum);
            }
        }
        return maxSum;
    }
}
