// first pass solution
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> output = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        
        for (int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) {
                output.add(nums[i]);
            }
            set.add(nums[i]);
        }
        return output;
    }
}

// second pass solution
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> output = new ArrayList<>();
        
        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                output.add(index + 1);
            } else {
                nums[index] *= -1;
            }
        }
        return output;
    }
}
