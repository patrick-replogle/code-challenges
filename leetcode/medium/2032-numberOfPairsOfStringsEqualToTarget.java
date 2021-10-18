// brute force first pass solution
class Solution {
    public int numOfPairs(String[] nums, String target) {
        int count = 0;
        
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                StringBuilder sb1 = new StringBuilder(nums[i] + nums[j]);
                StringBuilder sb2 = new StringBuilder(nums[j] + nums[i]);

                if (sb1.toString().equals(target)) count++;
                if (sb2.toString().equals(target)) count++;
            }
        }
        return count;
    }
}
