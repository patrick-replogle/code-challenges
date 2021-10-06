// first pass solution
class Solution {
    public int reverse(int x) {
        boolean isNegative = x < 0;
        x = Math.abs(x);
        int reversed = 0;
        
        while (x > 0) {
            if (reversed > Integer.MAX_VALUE / 10 || reversed < Integer.MIN_VALUE / 10) return 0;
            reversed = reversed * 10 + (x % 10);
            x = (int) Math.floor(x / 10);
        }
        return isNegative ? reversed * -1 : reversed;
    }
}

// second pass solution
class Solution {
    public int reverse(int x) {
        boolean isNegative = x < 0;
        x = Math.abs(x);
        StringBuilder sb = new StringBuilder(String.valueOf(x));
        try {
            int output = Integer.parseInt(sb.reverse().toString());
        
            return isNegative ? output * -1 : output; 
        } catch (NumberFormatException e) {
            return 0;
        }
    }
}
