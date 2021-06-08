class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<Integer> nums = new ArrayList<>();
        
        for (int i = 1; i <= 9; i++) {
            nums.add(i);
        }
        
        recurse(nums, new ArrayList<Integer>(), k, n, 0);
        
        return output;
    }
    
    public void recurse(List<Integer> nums, List<Integer> path, int k, int n, int start) {
        if (path.size() == k && n == 0) {
            List<Integer> copy = new ArrayList<>(path);
            output.add(copy);
            return;
        }
         
        for (int i = start; i < nums.size(); i++) {
            if (path.size() < k && n - nums.get(i) >= 0) {
                path.add(nums.get(i));
                recurse(nums, path, k, n - nums.get(i), i + 1);
                path.remove(path.size() - 1);
            }
        }
    }
}
