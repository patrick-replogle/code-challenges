// first pass solution
class Solution {
    List<List<Integer>> subsets = new ArrayList<>();
    int sum = 0;
    
    public int subsetXORSum(int[] nums) {       
        buildSubsets(new ArrayList<>(), 0, nums);
        
        for (List<Integer> list : subsets) {
            int currSum = 0;
            for (int num : list) {
                currSum ^= num;
            }
            sum += currSum;
        }
        return sum;
    }
    
    public void buildSubsets(List<Integer> path, int index, int[] nums) {
        subsets.add(new ArrayList<>(path));
        
        if (index >= nums.length) return;
        
        for (int i = index; i < nums.length; i++) {
            path.add(nums[i]);
            buildSubsets(path, i + 1, nums);
            path.remove(path.size() - 1);
        }
    }
}
