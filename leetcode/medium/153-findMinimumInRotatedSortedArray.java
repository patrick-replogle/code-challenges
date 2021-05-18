class Solution {
    public int findMin(int[] nums) {
        if (nums.length == 1 || nums[0] < nums[nums.length - 1]) {
            return nums[0];
        }
        
        int left = 0;
        int right = nums.length - 1;
        int output = -1;
        
        while (left <= right) {
            int mid = (int) Math.floor((left + right) / 2);
            
            if (nums[mid] > nums[mid + 1]) {
                output = nums[mid+1];
                break;
            }
            else if (nums[mid] < nums[mid - 1]) {
                output = nums[mid];
                break;
            }
            else if (nums[mid] > nums[left]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return output;
    }
}
