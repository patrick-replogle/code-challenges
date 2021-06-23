// first pass solution
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int output = 0;
        
        for (int i = 0; i < s.length(); i++) {
            Set<Character> set = new HashSet<>();
            
            for (int j = i; j < s.length(); j++) {
                if (set.contains(s.charAt(j))) {
                    break;
                }
                set.add(s.charAt(j));
                output = Math.max(output, set.size());
            }
        }
        return output;
    }
}

// second pass solution
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int output = 0;
        int left = 0;
        int right = 0;
        
        while (right < s.length()) {
            if (!set.contains(s.charAt(right))) {
                set.add(s.charAt(right));
                right++;
            } else {
                set.remove(s.charAt(left));
                left++;
            }
            output = Math.max(output, set.size());
        }
        return output;
    }
}
