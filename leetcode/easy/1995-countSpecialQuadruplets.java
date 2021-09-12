// first pass solution
class Solution {
    public int countQuadruplets(int[] nums) {
        int count = 0;
        
        for (int i = 0; i < nums.length - 3; i++) {
            for (int j = i + 1; j < nums.length - 2; j++) {
                for (int k = j + 1; k < nums.length - 1; k++) {
                    for (int m = k + 1; m < nums.length; m++) {
                        if (nums[i] + nums[j] + nums[k] == nums[m]) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }
}
