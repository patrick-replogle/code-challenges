// first pass solution
class Solution {    
    public List<String> findWords(char[][] board, String[] words) {
        Set<String> visited = new HashSet<>();
        List<String> output = new ArrayList<>();
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                for (String word: words) {
                    if (DFS(board, i, j, word, visited, 0)) {
                        visited.add(word);
                    }
                }
            } 
        }
        for (String word : visited) output.add(word);
        
        return output;
    }
    public boolean DFS(char[][] board, int i, int j, String word, Set<String> visited, int index) {
        if (index == word.length()) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
        if (word.charAt(index) != board[i][j] || board[i][j] == '#') return false;
        
        char temp = board[i][j];
        board[i][j] = '#'; 
        
        boolean up = DFS(board, i-1, j, word, visited, index+1);
        boolean down = DFS(board, i+1, j, word, visited, index+1);
        boolean left = DFS(board, i, j-1, word, visited, index+1);
        boolean right = DFS(board, i, j+1, word, visited, index+1);
        
        board[i][j] = temp;
        
        return up || down || left || right;
    }
}

// second pass solution
class Solution { 
    class TrieNode {
        TrieNode[] children = new TrieNode[26];
        String word = "";
    }
    
    public List<String> findWords(char[][] board, String[] words) {
        List<String> output = new ArrayList<>();
        Set<String> set = new HashSet<>();
        TrieNode root = new TrieNode();
        
        for (String word: words) {
            insertWord(root, word);
        }
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                DFS(board, i, j, root, set);
            }
        }
        
        for (String word : set) output.add(word);
        
        return output;
    }
    
    public void insertWord(TrieNode root, String word) {
        for (char letter : word.toCharArray()) {
            int index = (int) letter - 'a';
            if (root.children[index] == null) {
                root.children[index] = new TrieNode();
            }
            root = root.children[index];
        }
        root.word = word;
    }
    
    public void DFS(char[][] board, int i, int j, TrieNode root, Set<String> set) {
        if (root.word.length() != 0) set.add(root.word);
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        
        int index = (int) board[i][j] - 'a';
        
        if (board[i][j] == '#' || root.children[index] == null) return;
        
        char temp = board[i][j];
        board[i][j] = '#'; 
        
        DFS(board, i-1, j, root.children[index], set);
        DFS(board, i+1, j, root.children[index], set);
        DFS(board, i, j-1, root.children[index], set);
        DFS(board, i, j+1, root.children[index], set);
        
        board[i][j] = temp;
    }
}
