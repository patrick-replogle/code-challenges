class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> output = new ArrayList<>();
        
        recurse(output, candidates, new ArrayList<Integer>(), 0, target);
        
        return output;
    }
    
    public void recurse(List<List<Integer>> output, int[] candidates, List<Integer> path, int index, int target) {
        if (target == 0) {
            output.add(path);
        }
        
        for (int i = index; i < candidates.length; i++) {
            if (target - candidates[i] >= 0) {
                List<Integer> copy = new ArrayList<Integer>(path);
                copy.add(candidates[i]);
                recurse(output, candidates, copy, i, target - candidates[i]);
            }
        }
    }
}
