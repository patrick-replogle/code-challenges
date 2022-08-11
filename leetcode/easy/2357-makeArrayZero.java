class Solution {
    public int minimumOperations(int[] nums) {
        int steps = 0;
        
        while (true) {
            boolean isAlreadyZero = true;
            int min = Integer.MAX_VALUE;
            
            for (int num : nums) {
                if (num > 0) {
                    isAlreadyZero = false;
                    min = Math.min(min, num);
                }
            }
            
            if (isAlreadyZero) break;
            
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] > 0) nums[i] -= min;
            }
            steps++;
        }
        
        return steps;
    }
}
