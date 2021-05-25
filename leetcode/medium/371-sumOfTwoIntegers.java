// first pass solution
class Solution {
    public int getSum(int a, int b) {
        int sum = a;
        
        if (b > 0) {
            for (int i = 1; i <= b; i++) {
                sum++;
            } 
        }
        else if (b < 0) {
            for (int i = 1; i <= Math.abs(b); i++) {
                sum--;
            }  
        }
        return sum;
    }
}

// second pass solution
class Solution {
    public int getSum(int a, int b) {
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }
}
