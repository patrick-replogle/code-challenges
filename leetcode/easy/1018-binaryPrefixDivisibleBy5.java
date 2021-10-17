class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        List<Boolean> output = new ArrayList<>();
        int num = 0;
        
        for (int bit : nums) {
            num <<= 1;
            num |= bit;
            output.add(num % 5 == 0);
            num %= 5;
        }
        return output;
    }
}
