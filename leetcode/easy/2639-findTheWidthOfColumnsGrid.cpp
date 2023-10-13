class Solution {
public:
    vector<int> findColumnWidth(vector<vector<int>>& grid) {
        vector<int> output;

        for (int col = 0; col < grid[0].size(); col++) {
            int maxColWidth = 0;

            for (int row = 0; row < grid.size(); row++) {
                int val = grid[row][col];
                string s = to_string(val);
                int len = s.length();
                maxColWidth = max(maxColWidth, len);
            }
            output.push_back(maxColWidth);
        }

        return output;
    }
};
