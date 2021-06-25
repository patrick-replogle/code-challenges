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

// third pass using dynamic programming
class Solution {
    public int longestStrChain(String[] words) {
        int[] dp = new int[words.length];
        int output = 1;
        
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        Arrays.fill(dp, 1);
        
        for (int i = 1; i < words.length; i++) {
            for (int j = i - 1; j >= 0; j--) {
                if (isValid(words[j], words[i])) { 
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            output = Math.max(output, dp[i]);
        }
        
        return output;
    }
    
    public boolean isValid(String str1, String str2) {
        if (str2.length() - str1.length() != 1) return false;
        int missmatchCount = 0;
        int i = 0;
        int j = 0;
        
        while (i < str1.length() && j < str2.length()) {
            if (str1.charAt(i) == str2.charAt(j)) {
                i++;
                j++;
            } else {
                missmatchCount++;
                j++;
                if (missmatchCount > 1) return false;
            }
        }
        return true;
    }
}
