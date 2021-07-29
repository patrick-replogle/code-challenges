// first pass solution
class Solution {
    public int countGoodSubstrings(String s) {
        int count = 0;
        
        for (int i = 0; i < s.length() - 2; i++) {
            Set<String> set = new HashSet<>(Arrays.asList(s.substring(i, i + 3).split("")));
            if (set.size() == 3) count++;
        }
        
        return count;
    }
}

// second pass solution
class Solution {
    public int countGoodSubstrings(String s) {
        int count = 0;
        
        for (int i = 0; i < s.length() - 2; i++) {
            char a = s.charAt(i);
            char b = s.charAt(i + 1);
            char c = s.charAt(i + 2);
            
            if (a != b && a != c && b != c) {
                count++;
            }
        }
        return count;
    }
}
