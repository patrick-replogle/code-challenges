// first pass solution
class Solution {
    int max = 1;
    Set<String> set = new HashSet<>();
    
    public int maxUniqueSplit(String s) {
        helper(s, 0);
         
        return max;
    }
    
    public void helper(String s, int i) {
        if (i > s.length()) return;
        
        if (i == s.length()) {
            max = Math.max(max, set.size());
            return;
        }
        
        for (int j = i; j < s.length(); j++) {
            String next = s.substring(i, j + 1);
            if (!set.contains(next)) {
                set.add(next);
                helper(s, j+1);
                set.remove(next);
            } 
        }
    }
}
