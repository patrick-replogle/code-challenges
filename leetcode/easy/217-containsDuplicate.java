// first pass solution
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        boolean output = false;
        
        for (int n : nums) {
            if (set.contains(n)) {
                output = true;
                break;
            }
            set.add(n);
        }
        return output;
    }
}

// second pass solution
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i-1]) return true;
        }
        return false;
    }
}
