import java.math.BigInteger;

class Solution {
    public int maxSum(int[][] grid) {
        BigInteger max = new BigInteger("0");
        
        for (int i = 0; i < grid.length - 2; i++) { 
            for (int j = 0; j < grid[i].length - 2; j++) {
                BigInteger currMax = new BigInteger("0");
                currMax = currMax.add(BigInteger.valueOf(grid[i][j]));
                currMax = currMax.add(BigInteger.valueOf(grid[i][j+1]));
                currMax = currMax.add(BigInteger.valueOf(grid[i][j+2]));
                currMax = currMax.add(BigInteger.valueOf(grid[i+1][j+1]));
                currMax = currMax.add(BigInteger.valueOf(grid[i+2][j]));
                currMax = currMax.add(BigInteger.valueOf(grid[i+2][j+1]));
                currMax = currMax.add(BigInteger.valueOf(grid[i+2][j+2]));

                max = max.max(currMax);
            }
        }
        return max.intValue();
    }
}
