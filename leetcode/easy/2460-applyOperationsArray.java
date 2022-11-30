class Solution {
    public int[] applyOperations(int[] nums) {
        List<Integer> arr = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i+1]) {
                nums[i] *= 2;
                nums[i+1] = 0;
            }
        }
        
        for (int num : nums) {
            if (num != 0) arr.add(num);
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (i < arr.size()) {
                nums[i] = arr.get(i);
            } else {
                nums[i] = 0;
            }
        }
        
        return nums;
    }
}
