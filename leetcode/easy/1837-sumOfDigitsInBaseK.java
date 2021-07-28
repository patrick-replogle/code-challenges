// first pass solution
class Solution {
    public int sumBase(int n, int k) {
        String str = Integer.toString(n, k);
        int sum = 0;
        
        for (int i = 0; i < str.length(); i++) {
            sum += Integer.valueOf(Character.getNumericValue(str.charAt(i)));
        } 
        return sum;
    }
}

// second pass solution
class Solution {
    public int sumBase(int n, int k) {
        String str = Integer.toString(n, k);
        int num = Integer.parseInt(str);
        int sum = 0;
        
        while (num != 0) {
            sum += num % 10;
            num = (int) Math.floor(num / 10);
        }
        return sum;
    }
}
