// first pass solution
class Solution {
    public int minPairSum(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int output = Integer.MIN_VALUE;
        Arrays.sort(nums);
        
        while (left < right) {
            int currPairSum = nums[left] + nums[right];
            output = Math.max(output, currPairSum);
            left++;
            right--;
        }
        
        return output;
    }
}
