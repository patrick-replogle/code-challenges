// first pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> permuteUnique(int[] nums) {
        HashSet<Integer> visited = new HashSet<>();
        
        permute(new ArrayList<Integer>(), nums, visited);
        
        return output;
    }
    
    public void permute(List<Integer> path, int[] nums, HashSet<Integer> visited) {
        if (path.size() == nums.length && !output.contains(path)) {
            output.add(path);
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (!visited.contains(i)) {
                visited.add(i);
                List<Integer> copy = new ArrayList<>(path);
                copy.add(nums[i]);
                permute(copy, nums, visited);
                visited.remove(i);
            }
        }
    }
}
