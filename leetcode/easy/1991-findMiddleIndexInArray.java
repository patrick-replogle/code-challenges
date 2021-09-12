// first pass solution
class Solution {
    public int findMiddleIndex(int[] nums) {
        int[] left = new int[nums.length];
        int[] right = new int[nums.length];
        int j = nums.length - 2;
             
        for (int i = 1; i < nums.length; i++) {
            left[i] = nums[i-1] + left[i-1];
            right[j] = nums[j+1] + right[j+1];
            j--;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (left[i] == right[i]) return i;
        }
        
        return -1;
    }
}
