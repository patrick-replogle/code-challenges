class Solution {
    public int countEven(int num) {
        int output = 0;
        
        for (int i = 2; i <= num; i++) {
            char[] arr = String.valueOf(i).toCharArray();
            int currSum = 0;
            
            for (char c : arr) {
                currSum += Integer.parseInt(String.valueOf(c));
            }
            if (currSum % 2 == 0) output++;
        }
        
        return output;
    }
}
