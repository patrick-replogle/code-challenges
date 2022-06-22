class Solution {
    public int minimumSum(int num) {
        char[] arr = String.valueOf(num).toCharArray();
        
        Arrays.sort(arr);
        
        String firstNum = "" + arr[0] + arr[2];
        String secondNum = "" + arr[1] + arr[3];
        
        return Integer.parseInt(String.valueOf(firstNum)) + Integer.parseInt(String.valueOf(secondNum));
    }
}
