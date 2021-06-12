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
