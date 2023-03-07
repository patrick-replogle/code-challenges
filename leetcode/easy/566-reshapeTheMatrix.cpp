class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int origMatElemCount = mat.size() * mat[0].size();
        int newMatElemCount = r * c;

        if (origMatElemCount != newMatElemCount) return mat;

        vector<vector<int>> output(r, vector<int>(c));
        int currRow = 0;
        int currCol = 0;

        for (int i = 0; i < mat.size(); i++) {
            for (int j = 0; j < mat[i].size(); j++) {
                output[currRow][currCol] = mat[i][j];

                if (currCol == c - 1) {
                    currRow++;
                    currCol = 0;
                } else {
                    currCol++;
                }
            }
        }

        return output;
    }
};
