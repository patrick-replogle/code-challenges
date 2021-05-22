class Solution {
    public boolean exist(char[][] board, String word) {
        boolean[][] visited = new boolean[board.length][board[0].length];
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == word.charAt(0)) {
                    if (DFS(board, visited, word, i, j)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    public boolean DFS(char[][] board, boolean[][] visited, String word, int i, int j) {
        if (word.length() == 0) {
            return true;
        }
        
        if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1 || visited[i][j]) {
            return false;
        }
        
        if (board[i][j] == word.charAt(0)) {
            visited[i][j] = true;

            boolean up = DFS(board, visited, word.substring(1), i - 1, j);
            boolean down = DFS(board, visited, word.substring(1), i + 1, j);
            boolean left = DFS(board, visited, word.substring(1), i, j - 1);
            boolean right = DFS(board, visited, word.substring(1), i, j + 1);

            visited[i][j] = false;
            
            return up || down || left || right;
        }
        return false;
    }
}
