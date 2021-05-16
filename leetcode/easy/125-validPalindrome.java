class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String[] arr = s.split("");
        
        int j = arr.length - 1;
        
        for (int i = 0; i < arr.length / 2; i++) {
            String temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
        return String.join("", arr).equals(s);
    }
}
