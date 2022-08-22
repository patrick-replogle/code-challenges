// first pass solution
class Solution {
    public int minimumRecolors(String blocks, int k) {
        int output = Integer.MAX_VALUE;
        
        for (int i = 0; i <= blocks.length() - k; i++) {
            int currCount = 0;
            for (int j = i; j < i + k; j++) {
                if (blocks.charAt(j) == 'W') currCount++;
            }
            output = Math.min(output, currCount);
        }
        
        
        return output;
    }
}

// second pass solution
class Solution {
    public int minimumRecolors(String blocks, int k) {
        int currCount = 0;
        int output = Integer.MAX_VALUE;
        int left = 0;
        int right = 0;
        
        for (; right < k; right++) {
            if (blocks.charAt(right) == 'W') currCount++;
        }
        
        while (right < blocks.length()) {
            output = Math.min(output, currCount);
            
            if (blocks.charAt(left) == 'W') currCount--;
            
            left++;
            
            if (blocks.charAt(right) == 'W') currCount++;
            right++;
        }
        
        output = Math.min(output, currCount);
        
        return output;
    }
}
