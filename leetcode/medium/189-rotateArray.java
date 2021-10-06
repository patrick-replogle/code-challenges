// first pass solution
class Solution {
    public void rotate(int[] nums, int k) {
        int[] arr = new int[nums.length];
        
        while (k > nums.length) k %= nums.length;
        
        int index = nums.length - k;
        int j = 0;
        
        for (int i = index; i < nums.length; i++) {
            arr[j] = nums[i];
            j++;
        }
        
        for (int i = 0; i < index; i++) {
            arr[j] = nums[i];
            j++;
        }
        
        for (int i = 0; i < nums.length; i++) {
            nums[i] = arr[i];
        }
    }
}
