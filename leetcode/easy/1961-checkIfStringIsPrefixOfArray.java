// first pass solution
class Solution {
    public boolean isPrefixString(String s, String[] words) {
        for (String word : words) {
            if (s.startsWith(word)) {
                s = s.substring(word.length());
                if (s.length() == 0) break;
            } else {
                return false;
            }
        }
        return s.length() == 0;
    }
}

// second pass solution
class Solution {
    public boolean isPrefixString(String s, String[] words) {
        StringBuilder sb = new StringBuilder();
        
        for (String word : words) {
            sb.append(word);
            if (sb.toString().equals(s)) {
                return true;
            }
        }
        return false;
    }
}

// third pass solution
class Solution {
    public boolean isPrefixString(String s, String[] words) {
        StringBuilder sb = new StringBuilder();
        
        for (String word : words) {
            sb.append(word);
            String curr = sb.toString();
            
            if (curr.equals(s)) {
                return true;
            } 
            else if (!s.startsWith(curr)) {
                return false;
            }
        }
        return false;
    }
}
