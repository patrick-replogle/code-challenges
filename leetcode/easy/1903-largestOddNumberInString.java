// first pass solution
class Solution {
    public String largestOddNumber(String num) {
        StringBuilder sb = new StringBuilder();
        
        for (int i = num.length() - 1; i >= 0; i--) {
            char digit = num.charAt(i);
            if ((sb.length() == 0 && Character.valueOf(digit) % 2 != 0) || (sb.length() > 0)) {
                sb.append(digit);
            } 
        }
        
        return sb.reverse().toString();
    }
}
