// first pass solution 
class Solution {
    public int findFinalValue(int[] nums, int original) {
        
        while (true) {
            boolean flag = false;
            
            for (int num : nums) {
                if (num == original) {
                    original *= 2;
                    flag = true;
                }
            }
            
            if (!flag) break;
        }
        
        return original;
    }
}

// second pass solution
class Solution {
    public int findFinalValue(int[] nums, int original) {
        Set<Integer> set = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        
        while (set.contains(original)) {
            original *= 2;
        }
    
        return original;
    }
}
