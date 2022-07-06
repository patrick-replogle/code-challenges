// first pass solution
class Solution {
    public boolean isSameAfterReversals(int num) {
        if (num == 0) return true;
        
        String reverse1 = new StringBuffer(String.valueOf(num)).reverse().toString();
        int i = 0;
        
        while (reverse1.charAt(i) == '0') {
            i++;
        }
        
        String reverse2 = new StringBuffer(reverse1.substring(i)).reverse().toString();
        
        return num == Integer.parseInt(String.valueOf(reverse2));
    }
}

// second pass solution
class Solution {
    public boolean isSameAfterReversals(int num) {
        if (num == 0) return true;
        
        return num % 10 != 0;
    }
}
