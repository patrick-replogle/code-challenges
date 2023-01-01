class Solution {
    public int countDigits(int num) {
        String s = Integer.toString(num);
        int output = 0;

        for (char c : s.toCharArray()) {
            if (c == '0') continue;
            if (num % Character.getNumericValue(c) == 0) output++;
        }

        return output;
    }
}
