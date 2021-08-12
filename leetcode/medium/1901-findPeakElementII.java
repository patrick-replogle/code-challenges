// first pass solution
class Solution {
    public int[] findPeakGrid(int[][] mat) {       
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                if (isGreater(mat, i, j)) {
                    return new int[] {i,j};
                }
            }
        }
        return new int[] {-1, -1};
    }
    public boolean isGreater(int[][] mat, int i, int j) {
        int curr = mat[i][j];
        int north = i > 0 ? mat[i-1][j] : -1;
        int west = j > 0 ? mat[i][j-1] : -1;
        int east = j < mat[0].length -1 ? mat[i][j+1] : -1;
        int south = i < mat.length - 1 ? mat[i+1][j] : -1;
        
        return 
            curr > north &&
            curr > west &&
            curr > east &&
            curr > south;
    }
}

// second pass solution
class Solution {
    public int[] findPeakGrid(int[][] mat) {       
        for (int i = 0; i < mat.length; i++) {
            int left = 0;
            int right = mat[i].length - 1;
            
            while (left <= right) {
                int mid = (int) Math.floor((left + right) / 2);
                if (isGreater(mat, i, mid)) {
                    return new int[] {i, mid};
                } 
                else if (mid < right) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }
        return new int[] {-1, -1};
    }
    public boolean isGreater(int[][] mat, int i, int j) {
        int curr = mat[i][j];
        int north = i > 0 ? mat[i-1][j] : -1;
        int west = j > 0 ? mat[i][j-1] : -1;
        int east = j < mat[0].length -1 ? mat[i][j+1] : -1;
        int south = i < mat.length - 1 ? mat[i+1][j] : -1;
        
        return 
            curr > north &&
            curr > west &&
            curr > east &&
            curr > south;
    }
}
