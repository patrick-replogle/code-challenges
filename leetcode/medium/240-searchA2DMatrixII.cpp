class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = 0;
        int col = matrix[0].size() - 1;

        while (row < matrix.size() && col >= 0) {
            if (target == matrix[row][col]) return true;

            if (target > matrix[row][col]) {
                row++;
            } else {
                col--;
            }
        }

        return false;
    }
};
