class Solution {
    public boolean isCircularSentence(String sentence) {
        String[] arr = sentence.split(" ");
        int lastIdx = arr.length - 1;


        if (arr[0].charAt(0) != arr[lastIdx].charAt(arr[lastIdx].length() - 1)) {
            return false;
        }

        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i].charAt(arr[i].length() - 1) != arr[i+1].charAt(0)) {
                return false;
            }
        }

        return true;
    }
}
