class Solution {
    public boolean findSubarrays(int[] nums) {
        Set<Integer> sums = new HashSet<>();
        
        for (int i = 1; i < nums.length; i++) {
            int currSum = nums[i] + nums[i-1];
            
            if (sums.contains(currSum)) return true;
            sums.add(currSum);
        }
        return false;
    }
}
