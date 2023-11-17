class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        return checkRows(board) && checkCols(board) && checkSquares(board);
    }

    bool checkRows(vector<vector<char>>& board) {
        for (const auto& row: board) {
                set<int> s;

                for (const auto& col: row) {
                    if (col == '.') continue;
                    if (s.find(col) != s.end()) return false;
                    s.insert(col);
                }
            }
            return true;
    }

    bool checkCols(vector<vector<char>>& board) {
        for (int col = 0; col < board.size(); col++) {
                set<int> s;
                for (int row = 0; row < board[0].size(); row++) {
                    if (board[row][col] == '.') continue;
                    if (s.find(board[row][col]) != s.end()) return false;
                    s.insert(board[row][col]);
                }
            }

        return true;
    }

    bool checkSquares(vector<vector<char>>& board) {
        int startRow = 0;
        int startCol = 0;

        while(startRow < board.size()) {
            set<int> s;

            for (int i = startRow; i < startRow + 3; i++) {
                for (int j = startCol; j < startCol + 3; j++) {
                    if (board[i][j] == '.') continue;
                    if (s.find(board[i][j]) != s.end()) return false;
                    s.insert(board[i][j]);
                }
            }
            if (startCol < 6) {
                startCol += 3;
            } else {
                startRow += 3;
                startCol = 0;
            }
        }

        return true;
    }
};
