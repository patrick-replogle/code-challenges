class Solution {
    public int countOperations(int num1, int num2) {
        if (num1 == 0 || num2 == 0) return 0;
        
        int output = 0;
        boolean flag = true;
        
        while (flag) {
            if (num1 >= num2) num1 -= num2;
            else num2 -= num1;
            output++;
            if (num1 == 0 || num2 == 0) flag = false;
        }
        
        return output;
    }
}
