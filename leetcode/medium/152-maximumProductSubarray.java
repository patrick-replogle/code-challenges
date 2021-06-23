class Solution {
    public int maxProduct(int[] nums) {
        int output = Integer.MIN_VALUE;
        
        for (int i = 0; i < nums.length; i++) {
            int currProduct = nums[i];
            output = Math.max(output, currProduct);
          
            for (int j = i + 1; j < nums.length; j++) {
                currProduct *= nums[j];
                output = Math.max(output, currProduct);
            }
        }
        return output;
    }
}
