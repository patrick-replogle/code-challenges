// first pass solution
class Solution {
    public String tictactoe(int[][] moves) {
        char[][] board = new char[3][3];
        char turn = 'A';
        
        for (int[] move : moves) {
            int x = move[0];
            int y = move[1];
            if (turn == 'A') {
                board[x][y] = 'X';
            } else {
                board[x][y] = 'O';
            }
            turn = turn == 'A' ? 'B' : 'A';
        }
        
        String h = horizontal(board);
        String v = vertical(board);
        String d = diagonal(board);
        
        if (h.length() > 0) return h;
        else if (v.length() > 0) return v;
        else if (d.length() > 0) return d;
        
        if (moves.length == 9) return "Draw";
        
        return "Pending";
    }
    
    public String horizontal(char[][] board) {     
        for (int i = 0; i < board.length; i++) {
            int x = 0;
            int o = 0;
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'X') x++;
                else if (board[i][j] == 'O') o++;
            }
            if (x == 3) return "A";
            else if (o == 3) return "B";
        }
        return "";
    }
    
    public String vertical(char[][] board) {
        for (int j = 0; j < board[0].length; j++) {
            int x = 0;
            int o = 0;
            for (int i = 0; i < board.length; i++) {
                if (board[i][j] == 'X') x++;
                else if (board[i][j] == 'O') o++;
                }
            if (x == 3) return "A";
            else if (o == 3) return "B";
        }
        return "";
    }
    
    public String diagonal(char[][] board) {
        int i = 0;
        int j = 0;
        int x = 0;
        int o = 0;
        
        while (i < 3) {
            if (board[i][j] == 'X') x++;
            else if (board[i][j] == 'O') o++;
            i++;
            j++;
        }
        if (x == 3) return "A";
        else if (o == 3) return "B";
        
        i = 0;
        j = 2;
        x = 0;
        o = 0;
        
        while (i < 3) {
            if (board[i][j] == 'X') x++;
            else if (board[i][j] == 'O') o++;
            i++;
            j--;
        }
        if (x == 3) return "A";
        else if (o == 3) return "B";
        
        return "";
    }
 }
