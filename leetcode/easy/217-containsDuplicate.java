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
