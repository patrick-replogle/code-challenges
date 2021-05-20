class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> output = new ArrayList<>();
        int valueCount = matrix.length * matrix[0].length;
        int minRow = 0;
        int maxRow = matrix.length - 1;
        int minCol = 0;
        int maxCol = matrix[0].length - 1;
        
        while (output.size() < valueCount) {
            for (int j = minCol; j <= maxCol; j++) {
                output.add(matrix[minRow][j]);
            }
            minRow++;
            
            for (int i = minRow; i <= maxRow; i++) {
                output.add(matrix[i][maxCol]);
            }
            maxCol--;
            
            for (int j = maxCol; j >= minCol; j--) {
                output.add(matrix[maxRow][j]);
            }
            maxRow--;

            for (int i = maxRow; i >= minRow; i--) {
                output.add(matrix[i][minCol]);
            }
            minCol++;
        }
        return output.subList(0, valueCount);
    }
}
