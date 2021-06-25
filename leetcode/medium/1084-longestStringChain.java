class Solution {
    public int longestStrChain(String[] words) {
        Map<String, Integer> hashMap = new HashMap<>();
        int output = 0;
        
        Arrays.sort(words, (a, b) -> 
                    a.length() == b.length() ? 
                        a.compareTo(b) : a.length() - b.length());
        
        for (String word : words) {
            int currCount = 1;
            
            for (int i = 0; i < word.length(); i++) {
                String substring = word.substring(0, i) + word.substring(i + 1);
                if (hashMap.containsKey(substring)) {
                    currCount = Math.max(currCount, hashMap.get(substring) + 1);
                }
            }
            hashMap.put(word, currCount);
            output = Math.max(output, currCount);
        }
        
        return output;
    }
}
