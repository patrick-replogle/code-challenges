// first pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        HashSet<String> seen = new HashSet<>();
        List<Integer> subset = new ArrayList<>();
        Arrays.sort(nums);
        
        combos(subset, nums, seen, 0);
        
        return output;
    }
    
    public void combos(List<Integer> subset, int[] nums, HashSet<String> seen, int index) {
        List<Integer> subsetCopy = new ArrayList<>(subset);
        String str = "";
        
        for (int num : subsetCopy) {
            str += num + ",";
        }
        
        if (!seen.contains(str)) {
            output.add(subsetCopy);
            seen.add(str);
        }
        
        for(int i = index; i < nums.length; i++) {
            subset.add(nums[i]);
            combos(subset, nums, seen, i + 1);
            subset.remove(subset.size() - 1);
        }
    }
}
