// first pass solution
class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 1;
        
        for (int i = digits.length - 1; i >= 0; i--) {
            digits[i] += carry;
            if (digits[i] > 9) {
                carry = 1;
                digits[i] = 0;
            } else {
                carry = 0;
            }
        }
        if (carry == 0) return digits; 
        
        int[] output = new int[digits.length + 1]; 
        output[0] = 1;
        
        for (int i = 0; i < digits.length; i++) {
            output[i+1] = digits[i]; 
        }
        return output;
    }
}
