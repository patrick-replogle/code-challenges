// first pass solution
class Solution {
    public int findGCD(int[] nums) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int greatest = 0;
        
        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
        
        for (int i = 1; i <= max; i++) {
            if (min % i == 0 && max % i == 0) {
                greatest = Math.max(greatest, i);
            }
        }
        
        return greatest;
    }
}

// second pass solution -> optimized
class Solution {
    public int findGCD(int[] nums) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
        
        while (max != 0) {
            int temp = max;
            max = min % max;
            min = temp;
        }
        
        return min;
    } 
}
