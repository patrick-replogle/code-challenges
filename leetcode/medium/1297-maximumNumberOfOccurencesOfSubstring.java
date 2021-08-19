// first pass solution 
class Solution {
    public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {
        Map<String, Integer> count = new HashMap<>();
        int max = 0;
        
        for (int i = 0; i < s.length() - minSize + 1; i++) {
            Set<Character> set = new HashSet<>();
            boolean flag = true;
            
            for (int j = i; j < i + minSize; j++) {
                set.add(s.charAt(j));
                if (set.size() > maxLetters) {
                    flag = false;
                    break;
                }
            }
            if (!flag) continue;
            
            String sub = s.substring(i, i + minSize);
            count.put(sub, count.getOrDefault(sub, 0) + 1);
        }
        
        
        for (int strCount : count.values()) {
            max = Math.max(max, strCount);
        }

        return max;
    }
}
