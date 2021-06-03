// first pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> permute(int[] nums) {
        HashSet<Integer> visited = new HashSet<>();
        
        permute(new ArrayList<Integer>(), nums, visited);
        
        return output;
    }
    
    public void permute(List<Integer> path, int[] nums, HashSet<Integer> visited) {
        if (path.size() == nums.length) {
            output.add(path);
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (!visited.contains(i)) {
                visited.add(i);
                List<Integer> copy = new ArrayList<Integer>(path);
                copy.add(nums[i]);
                permute(copy, nums, visited);
                visited.remove(i);
            }
        }
    }
}

// second pass solution -> taking advantage that all nums are distinct
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> permute(int[] nums) {       
        permute(new ArrayList<Integer>(), nums);
        
        return output;
    }
    
    public void permute(List<Integer> path, int[] nums) {
        if (path.size() == nums.length) {
            output.add(path);
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (!path.contains(nums[i])) {
                List<Integer> copy = new ArrayList<Integer>(path);
                copy.add(nums[i]);
                permute(copy, nums);
            }
        }
    }
}
