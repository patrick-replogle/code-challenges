class Solution {
    public String reverseWords(String s) {
        String[] arr = s.split(" ");
        String output = "";
        
        for (int i = arr.length - 1; i >= 0; i--) {
            if (arr[i].trim().length() == 0) continue;
            output = output + arr[i].trim() + " ";
        }
        return output.trim();
    }
}
