// first pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        
        recurse(target, candidates, 0, new ArrayList<Integer>());
        
        return output;
    }
    
    public void recurse(int target, int[] nums, int index, List<Integer> path) {
        if (target == 0) {
            if (!output.contains(path)) {
                output.add(path);
                return;
            }
        }
        
        for (int i = index; i < nums.length; i++) {
            if (target - nums[i] >= 0) {
                List<Integer> copy = new ArrayList<>(path);
                copy.add(nums[i]);
                recurse(target - nums[i], nums, i + 1, copy);
            }
        }
     }
}

// optimized approach -> skip duplicate values to avoid unecessary recursive calls
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        
        recurse(target, candidates, 0, new ArrayList<Integer>());
        
        return output;
    }
    
    public void recurse(int target, int[] nums, int index, List<Integer> path) {
        if (target == 0) {
            List<Integer> copy = new ArrayList<>(path);
            output.add(copy);
            return;
        }
        
        for (int i = index; i < nums.length; i++) {
            if (i > index && nums[i] == nums[i-1]) continue;
            if (target - nums[i] >= 0) {
                path.add(nums[i]);
                recurse(target - nums[i], nums, i + 1, path);
                path.remove(path.size() - 1);
            }
        }
     }
}
