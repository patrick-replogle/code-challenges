// first pass solution
class Solution {
    public void gameOfLife(int[][] board) {
        int[][] copyOfBoard = copyBoard(board);
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                int aliveNeighborCount = countNeighbors(copyOfBoard, i, j);
                boolean isCellAlive = copyOfBoard[i][j] == 1 ? true : false;
                
                if (getLifeOrDeathOfCell(aliveNeighborCount, isCellAlive)) {
                    board[i][j] = 1;
                } else {
                    board[i][j] = 0;
                }
            }
        }
    }
    public int countNeighbors(int[][] board, int i, int j) {
        int aliveNeighbors = 0;
        int[][] directions = 
            { {-1, 0}, {1, 0}, {0, -1}, {0, 1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1} };
        
        for (int[] move : directions) {
            int row = i + move[0];
            int col = j + move[1];
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) continue;
            if (board[row][col] == 1) aliveNeighbors++;
        }
        return aliveNeighbors;  
    }
    
    public boolean getLifeOrDeathOfCell(int aliveNeighbors, boolean isCurrentlyAlive) {
        if (isCurrentlyAlive && aliveNeighbors < 2) return false;
        if (isCurrentlyAlive && aliveNeighbors == 2 || aliveNeighbors == 3) return true;
        if (isCurrentlyAlive && aliveNeighbors > 3) return false;
        if (!isCurrentlyAlive && aliveNeighbors == 3) return true;
        return false;
    }
    
    public int[][] copyBoard(int[][] board) {
        int[][] copyOfBoard = new int[board.length][board[0].length];
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                copyOfBoard[i][j] = board[i][j];
            }
        }
        return copyOfBoard;
    }
}
