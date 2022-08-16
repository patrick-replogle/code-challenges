class Solution {
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] output = new int[n-2][n-2];
        int currOutputRow = 0;
        int currOutputCol = 0;
        
        
        for (int i = 0; i < n - 2; i++) {
            for (int j = 0; j < n - 2; j++) {
                int greatest = 0;
                
                for (int o = i; o < i + 3; o++) {
                    for (int m = j; m < j + 3; m++) {
                        greatest = Math.max(greatest, grid[o][m]);
                    }
                }
                output[currOutputRow][currOutputCol] = greatest;
                
                if (currOutputCol >= output.length - 1) {
                    currOutputCol = 0;
                    currOutputRow++;
                } else {
                    currOutputCol++;
                }
            }
        }
        return output;
    }
}
