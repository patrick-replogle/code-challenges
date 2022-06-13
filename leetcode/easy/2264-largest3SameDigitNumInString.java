class Solution {
    public String largestGoodInteger(String num) {
        int maxNum = -1;
        
        for (int i = 0; i < num.length() - 2; i++) {
            char currChar = num.charAt(i);
            if (currChar == num.charAt(i + 1) && currChar == num.charAt(i + 2)) {
                Integer currNum = Integer.parseInt(String.valueOf(currChar));
                maxNum = Math.max(maxNum, currNum);
            }
        }
        
        if (maxNum >= 0) {
            return String.valueOf(maxNum).repeat(3);
        }
        
        return "";
    }
}
