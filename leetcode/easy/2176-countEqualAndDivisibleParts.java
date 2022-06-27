class Solution {
    public int countPairs(int[] nums, int k) {
        int output = 0;
        
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    if (i == 0 && j % k == 0 || (i * j) % k == 0) {
                        output++;
                    }
                } 
            }
        }
        return output;
    }
}
