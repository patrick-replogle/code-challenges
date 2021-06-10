class Solution {
    List<List<String>> output = new ArrayList<>();
    
    public List<List<String>> partition(String s) {
        helper(s, new ArrayList<String>());
        
        return output;
    }
    
    public void helper(String s, List<String> path) {
        if (s.length() == 0) {
            List<String> copy = new ArrayList<>(path);
            output.add(copy);
            return;
        }
        
        for (int i = 1; i <= s.length(); i++) {
            String sub = s.substring(0, i);
            
            if (isPalindrome(sub)) {
                path.add(sub);
                helper(s.substring(i), path);
                path.remove(path.size() - 1);
            }
        }
    }
    
    public boolean isPalindrome(String s) {
        int j = s.length() - 1;
        
        for (int i = 0; i < s.length() / 2; i++) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
            j--;
        }
        return true;
    }
}
