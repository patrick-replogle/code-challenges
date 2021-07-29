// first pass solution
class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {  
        if (checkMatrix(mat, target)) return true;
        
        for (int i = 0; i < 3; i++) {
            rotateMatrix(mat);
            if (checkMatrix(mat, target)) return true;
        }
        return false;
    }
    
    public void rotateMatrix(int[][] mat) {
        for (int i = 0; i < mat.length; i++) {
            for (int j = i; j < mat[i].length; j++) {
                int temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }
        reverseMatrixRows(mat);
    }
    
    public boolean checkMatrix(int[][] mat, int[][] target) {
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                if (mat[i][j] != target[i][j]) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    public void reverseMatrixRows(int[][] mat) {
        for (int i = 0; i < mat.length; i++) {
            int n = mat[i].length - 1;
            for (int j = 0; j < mat.length / 2; j++) {
                int temp = mat[i][j];
                mat[i][j] = mat[i][n];
                mat[i][n] = temp;
                n--;
            }
        }
    }
}
