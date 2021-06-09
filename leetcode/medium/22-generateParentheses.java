// first pass solution
class Solution {
    List<String> output = new ArrayList<>();
    
    public List<String> generateParenthesis(int n) {
        recurse(n, "", 0, 0);
        
        return output;
    }
    
    public void recurse(int n, String path, int open, int closed) {
        if (open > n || closed > n || closed > open) return;
        
        if (open == n && closed == n) {
            output.add(path);
            return;
        }
        
        if (closed < open) {
            recurse(n, path + ")", open, closed + 1);
        } 
        recurse(n, path + "(", open + 1, closed);
    }
}
