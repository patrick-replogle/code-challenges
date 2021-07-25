// first pass solution
class Solution {
    public int arraySign(int[] nums) {
        double product = 1;
        
        for (int n : nums) {
            product *= n;
        }
        
        if (product > 0) {
            return 1;
        } else if (product < 0) {
            return -1;
        }
        return 0;
    }
}

// second pass solution
class Solution {
    public int arraySign(int[] nums) {
        int negativeCount = 0;
        
        for (int num : nums) {
            if (num == 0) return 0;
            else if (num < 0) negativeCount++;
        }
        return negativeCount % 2 == 0 ? 1 : -1;
    }
}
