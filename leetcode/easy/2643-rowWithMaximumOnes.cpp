class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
        vector<int> output {0, 0};
        int max = 0;
        int k = 0;

        for (int i = 0; i < mat.size(); i++) {
            int currCount = 0;

            for (int j = 0; j < mat[i].size(); j++) {
                if (mat[i][j] == 1) {
                    currCount++;
                }
            }

            if (currCount == max) continue;

            if (currCount > max) {
                max = currCount;
                k = i;
            }
        }

        output[0] = k;
        output[1] = max;

        return output;
    }
};
