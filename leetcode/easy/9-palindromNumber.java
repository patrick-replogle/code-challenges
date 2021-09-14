// first pass solution
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        
        String str = String.valueOf(x);
        int i = 0;
        int j = str.length() - 1;
        
        while (i < j) {
            if (str.charAt(i) != str.charAt(j)) return false;
            i++;
            j--;
        }
        return true;
    }
}

// optimized algorithm
class Solution {
    public boolean isPalindrome(int x) {
        int sum = 0;
        
        while(x > sum) {
            sum = sum * 10 + x % 10;
            x /= 10;
        }
        return x == sum || x == sum/10;
    }
}
