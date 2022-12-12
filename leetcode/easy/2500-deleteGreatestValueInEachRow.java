class Solution {
    public int deleteGreatestValue(int[][] grid) {
        int output = 0;
        int cycles = grid[0].length;

        while (cycles > 0) {
            int max = 0;
            for (int row = 0; row < grid.length; row++) {
                int rowMax = 0;
                int maxCol = 0;
                for (int col = 0; col < grid[row].length; col++) {
                    if (grid[row][col] == -1) continue;

                    int num = grid[row][col];
                    if (num >= rowMax) {
                        rowMax = num;
                        maxCol = col;
                    }
                }
                grid[row][maxCol] = -1;
                max = Math.max(rowMax, max);
            }
            cycles--;
            output += max;
        }

        return output;
    }
}
