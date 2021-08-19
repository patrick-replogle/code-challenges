// first pass solution
class Solution {
    public List<List<Integer>> queensAttacktheKing(int[][] queens, int[] king) {
        List<List<Integer>> output = new ArrayList<>();
        int[][] directions = { {-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {1, 1}, {-1, 1}, {1, -1} };
        char[][] board = new char[8][8];
        int row = king[0];
        int col = king[1];
        
        for (int[] queen : queens) {
            board[queen[0]][queen[1]] = 'Q';
        }
        
        for (int[] move : directions) {
            int i = row;
            int j = col;
            
            while (checkIfValidCoordinates(i, j, board)) {
                i += move[0];
                j += move[1];
                
                if (checkIfValidCoordinates(i, j, board) && board[i][j] == 'Q') {
                    List<Integer> arr = new ArrayList<>();
                    arr.add(i);
                    arr.add(j);
                    output.add(arr);
                    break;
                }
            }
        }
        
        return output;
    }
    
    public boolean checkIfValidCoordinates(int i, int j, char[][] board) {
        return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
    }
}
