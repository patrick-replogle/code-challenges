class Solution {
    public int maximumValue(String[] strs) {
        int maxVal = 0;

        for (String s : strs) {
            try {
                int num = Integer.parseInt(s);
                maxVal = Math.max(maxVal, num);
            } catch (NumberFormatException nfe) {
                maxVal = Math.max(s.length(), maxVal);
            }
        }

        return maxVal;
    }
}
