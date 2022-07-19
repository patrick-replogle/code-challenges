class Solution {
    public int[] numberOfPairs(int[] nums) {
        int[] output = new int[2];
        Map<Integer, Integer> dict = new HashMap<>();
        
        for (int num : nums) {
            dict.put(num, dict.getOrDefault(num, 0) + 1);
        }
        
        for (int value : dict.values()) {
            int quotient = value / 2;
            int remainder = value % 2;
        
            output[0] += quotient;
            output[1] += remainder;
        }
        
        return output;
    }
}
