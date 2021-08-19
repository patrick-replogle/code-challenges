class Solution {
    public boolean checkIfCanBreak(String s1, String s2) {
        char[] s1Arr = s1.toCharArray();
        char[] s2Arr = s2.toCharArray();
        Arrays.sort(s1Arr);
        Arrays.sort(s2Arr);
        
        int s1Count = 0;
        int s2Count = 0;
 
        for (int i = 0; i < s1.length(); i++) {
            if (s1Arr[i] >= s2Arr[i]) s1Count++;
            if (s2Arr[i] >= s1Arr[i]) s2Count++;
        }
        
        return s1Count == s1.length() || s2Count == s1.length();
    }
}
