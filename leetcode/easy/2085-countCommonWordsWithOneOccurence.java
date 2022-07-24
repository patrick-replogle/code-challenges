class Solution {
    public int countWords(String[] words1, String[] words2) {
        Map<String, Integer> count1 = new HashMap<>();
        Map<String, Integer> count2 = new HashMap<>();
        int output = 0;
        
        for (String word : words1) {
            count1.put(word, count1.getOrDefault(word, 0) + 1);
        }
        
        for (String word : words2) {
            count2.put(word, count2.getOrDefault(word, 0) + 1);
        }
        
        for (String key : count1.keySet()) {
            if (count1.get(key) == 1 && count2.containsKey(key) && count2.get(key) == 1) {
                output++;
            } 
        }
        
        return output;
    }
}
