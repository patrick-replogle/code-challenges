// first pass 
class Solution {
    public int findMaxK(int[] nums) {
        Set<Integer> positiveNums = new HashSet<>();
        Set<Integer> negativeNums = new HashSet<>();
        int output = 0;
        
        for (int num : nums) {
            if (num > 0) positiveNums.add(num);
            else negativeNums.add(num);
            
            if (positiveNums.contains(Math.abs(num)) && negativeNums.contains(num < 0 ? num : num * -1)) {
                output = Math.max(output, Math.abs(num));
            }
        }
        
        return output == 0 ? -1 : output;
    }
}

// second pass
class Solution {
    public int findMaxK(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int output = 0;
        
        for (int num : nums) {
            set.add(num);
        }
        
        for (int num : nums) {
            if (num > 0 && set.contains(num * -1)) {
                output = Math.max(output, num);
            } 
        }
        
        return output == 0 ? -1 : output;
    }
}
