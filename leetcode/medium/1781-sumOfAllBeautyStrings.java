// first pass solution
class Solution {
    public int beautySum(String s) {
        int output = 0;
        
        for (int i = 0; i < s.length(); i++) {
            Map<Character, Integer> map = new HashMap<>();
            
            for (int j = i; j < s.length(); j++) {
                map.put(s.charAt(j), map.getOrDefault(s.charAt(j), 0) + 1);
                if (map.size() > 1) {
                    output += Collections.max(map.values()) - Collections.min(map.values());
                }
            }
        }
        return output;
    }
}

// second pass solution
class Solution {
    public int beautySum(String s) {
        int output = 0;
        
        for (int i = 0; i < s.length() - 1; i++) {
            int[] charCount = new int[26];
            
            for (int j = i; j < s.length(); j++) {
                int index = s.charAt(j) - 'a';
                charCount[index]++;
                int min = getMin(charCount);
                int max = getMax(charCount);
                output += max - min;
            }
        }
        return output;
    }
    
    public int getMin(int[] count) {
        int min = Integer.MAX_VALUE;
        
        for (int i = 0; i < count.length; i++) {
            if (count[i] != 0) {
                min = Math.min(count[i], min);
            }
        }
        return min == Integer.MAX_VALUE ? 0 : min;
    }
    public int getMax(int[] count) {
        int max = 0;
        
        for (int i = 0; i < count.length; i++) {
            if (count[i] != 0) {
                max = Math.max(count[i], max);
            }
        }
        return max;
    }
}
