class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int perimeter = 0;

        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[i].size(); j++) {
                if (grid[i][j] == 1) {
                    perimeter += countSides(grid, i, j);
                }
            }
        }
        return perimeter;
    }

    int countSides(vector<vector<int>>& grid, int i, int j) {
        int count = 0;

        // north
        if (i == 0 || grid[i-1][j] == 0) count++;
        // south
        if (i == grid.size() - 1 || grid[i+1][j] == 0) count++;
        // west
        if (j == 0 || grid[i][j-1] == 0) count++;
        // east
        if (j == grid[i].size() - 1 || grid[i][j+1] == 0) count++;

        return count;
    }
};
