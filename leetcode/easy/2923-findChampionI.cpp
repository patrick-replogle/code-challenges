class Solution {
public:
    int findChampion(vector<vector<int>>& grid) {
        int champion = -1;
        int championStrength = -1;

        for (int i = 0; i < grid.size(); i++) {
            int count = 0;
            for (int j = 0; j < grid[i].size(); j++) {
                count += grid[i][j];
            }
            if (count > championStrength) {
                champion = i;
                championStrength = count;
            }
        }

        return champion;
    }
};
