// first pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> subsets(int[] nums) {
        List<Integer> numList = new ArrayList<>();
        
        for (int num : nums) {
            numList.add(num);
        }
        
        permute(new ArrayList<Integer>(), numList);
        
        return output;
    }
    
    public void permute(List<Integer> path, List<Integer> nums) {
        output.add(path);
        
        if (nums.size() == 0) {
            return;
        }
        
        for (int i = 0; i < nums.size(); i++) {
            List<Integer> pathCopy = new ArrayList<>();
            List<Integer> numsCopy = new ArrayList<>();
            
            for (int num : path) {
                pathCopy.add(num);
            }
            
            for (int j = 0; j < i; j++) {
                numsCopy.add(nums.get(j));
            }
            pathCopy.add(nums.get(i));
            
            
            permute(pathCopy, numsCopy);
        }
    }
}

// second pass solution
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    
    public List<List<Integer>> subsets(int[] nums) {
        List<Integer> subSet = new ArrayList<>();
        
        permute(subSet, nums, 0);

        return output;
    }
    
    public void permute(List<Integer> subset, int[] nums, int index) {
        List<Integer> pathCopy = new ArrayList<>(subset);
        output.add(pathCopy);
        
        for (int i = index; i < nums.length; i++) {
            subset.add(nums[i]);
            permute(subset, nums, i + 1);
            subset.remove(subset.size() - 1);
        }
    }
}
