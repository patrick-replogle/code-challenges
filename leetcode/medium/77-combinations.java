// first pass solution
class Solution {
    List<List<Integer>> combos = new ArrayList<>();
    
    public List<List<Integer>> combine(int n, int k) {
        List<Integer> nums = new ArrayList<>();
        
        for (int i = 1; i <= n; i++) {
            nums.add(i);
        }
        
        recurse(new ArrayList<Integer>(), nums, k, 0);
        
        return combos;
    }
    
    public void recurse(List<Integer> path, List<Integer> nums, int k, int start) {
        if (path.size() == k) {
            combos.add(path);
            return;
        }
        
        for (int i = start; i < nums.size(); i++) {
            if (path.size() + 1 <= k) {
                List<Integer> copy = new ArrayList<>(path);
                copy.add(nums.get(i));
                recurse(copy, nums, k, i + 1);
            }
        }
    }
}
