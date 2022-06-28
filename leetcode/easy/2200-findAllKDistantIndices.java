class Solution {
    public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        Set<Integer> indexes = new HashSet<>();
        List<Integer> output = new ArrayList<>();
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == key) indexes.add(i);
        }
        
        for (int i = 0; i < nums.length; i++) {
            for (int index: indexes) {
                if (Math.abs(i - index) <= k) {
                    output.add(i);
                    break;
                }
            }
        }
        
        Collections.sort(output);
        
        return output;
    }
}
