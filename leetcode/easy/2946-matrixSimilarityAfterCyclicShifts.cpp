class Solution {
public:
    bool areSimilar(vector<vector<int>>& mat, int k) {
        vector<vector<int>> copy = copyMatrix(mat);

        shiftMatrix(copy, k);

        printMatrix(copy);

        return compareMatrixes(mat, copy);
    }

    vector<vector<int>> copyMatrix(vector<vector<int>>& mat) {
        vector<vector<int>> copy;

        for (int i = 0; i < mat.size(); i++) {
            vector<int> currRow;
            for (int j = 0; j < mat[i].size(); j++) {
                currRow.push_back(mat[i][j]);
            }
            copy.push_back(currRow);
        }

        return copy;
    }

    bool compareMatrixes(vector<vector<int>>& a, vector<vector<int>>& b) {
        if (a.size() != b.size()) return false;

        for (int i = 0; i < a.size(); i++) {
            if (a[i].size() != b[i].size()) return false;
            for (int j = 0; j < a[i].size(); j++) {
                if (a[i][j] != b[i][j]) return false;
            }
        }

        return true;
    }

    void shiftMatrix(vector<vector<int>>& mat, int k) {
        while (k > 0) {
            for (int i = 0; i <mat.size(); i++) {
                bool isEven = i % 2 == 0;
                int size = mat[i].size() - 1;

                /** left shit */
                if (isEven) {
                    int firstElem = mat[i][0];
                    
                    for (int j = 0; j < mat[i].size() - 1; j++) {
                        mat[i][j] = mat[i][j+1];
                    }
                    mat[i][size] = firstElem;
                /** right shift */
                } else {
                    int lastElem = mat[i][size];
                     
                    for (int j = size; j > 0; j--) {
                        mat[i][j] = mat[i][j-1];
                    }
                    mat[i][0] = lastElem;
                }
            }
            k--;
        }
    }

    void printMatrix(vector<vector<int>>& mat) {
        for (int i = 0; i < mat.size(); i++) {
            for (int j = 0; j < mat[i].size(); j++) {
                cout << mat[i][j] << " ";
                if (j == mat[i].size() -1) {
                    cout << endl;
                }
            }
        }
    }
};
