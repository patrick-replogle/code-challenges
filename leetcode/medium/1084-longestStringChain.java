// first pass solution
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

// second pass solution -> slower than the first
class Solution {
    public int longestStrChain(String[] words) {
        Set<String> set = new HashSet<>();
        int output = 1;
        
        for (String word : words) set.add(word);
        
        for (String word : words) {
            output = Math.max(output, findLongestPath(set, word, 1, new HashSet<String>()));
        }
        return output;
    }
    
    public int findLongestPath(Set<String> set, String word, int count, Set<String> visited) {
        
        int max = count;
        
        if (!visited.contains(word)) {
            visited.add(word);
            for (int i = 0; i < word.length(); i++) {
                String sub = word.substring(0, i) + word.substring(i + 1);
                if (set.contains(sub)) {
                    max = Math.max(max, findLongestPath(set, sub, count + 1, visited));
                }
            } 
        }
        return max;
    }
}
