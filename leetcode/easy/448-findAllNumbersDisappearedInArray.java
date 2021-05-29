class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> output = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        
        for (int i = 0; i < nums.length; i++) set.add(nums[i]);
        
        for (int i = 1; i <= nums.length; i++) {
            if (!set.contains(i)) {
                output.add(i);
            }
        }
        return output;
    }
}
