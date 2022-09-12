class Solution {
    public int mostFrequentEven(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int mostFrequent = -1;
        int mostFrequentCount = 0;
        
        for (int num : nums) {
            if (num % 2 == 0) {
                map.put(num, map.getOrDefault(num, 1) + 1);
                
                int currNumCount = map.get(num);
                
                if (mostFrequent == -1 || 
                    currNumCount > mostFrequentCount || 
                    (currNumCount == mostFrequentCount && num < mostFrequent)) {
                    mostFrequent = num;
                    mostFrequentCount = currNumCount;
                }
            }
        }
        return mostFrequent;
    }
}
