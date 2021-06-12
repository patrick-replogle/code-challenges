// first pass solution
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> seen = new HashSet<>();
        LinkedList<String> queue = new LinkedList<>();
        
        queue.addFirst(s);
        
        while (!queue.isEmpty()) {
            String currPath = queue.removeFirst();
            
            if (!seen.contains(currPath)) {
                if (currPath.length() == 0) return true;
                
                seen.add(currPath);

                for (String word : wordDict) {
                    if (currPath.startsWith(word)) {
                        queue.addLast(currPath.substring(word.length()));
                    }
                }
            }
        }
        return false;
    }
}

// second pass solution
class Solution {
    Set<String> visited = new HashSet<>();
    boolean flag = false;
    
    public boolean wordBreak(String s, List<String> wordDict) {
        recurse(wordDict, s); 
        
        return flag;
    }
    
    public void recurse(List<String> wordDict, String currPath) {
        if (currPath.length() == 0) {
            flag = true;
            return;
        }
        
        if (visited.contains(currPath) || flag) return;
        
        visited.add(currPath);
        
        for (String word : wordDict) {
            if (currPath.startsWith(word)) {
                recurse(wordDict, currPath.substring(word.length()));
            }
        }
    }
}
