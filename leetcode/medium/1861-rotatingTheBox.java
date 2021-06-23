// first pass solution
class Solution {
    public char[][] rotateTheBox(char[][] box) {
        for (int i = 0; i < box.length; i++) {
            for (int j = box[0].length - 1; j >= 0; j--) {
                if (box[i][j] == '#') {
                    int k = j;
                    
                    while (k < box[0].length - 1 && box[i][k+1] == '.') {
                        box[i][k+1] = '#';
                        box[i][k] = '.';
                        k++;
                    }
                }
            }
        }
        
        char[][] output = new char[box[0].length][box.length];
        int j = 0;
        int row = 0;
        int col = 0;
        
        while (j < box[0].length) {
            for (int i = box.length - 1; i >= 0; i--) {
                output[row][col] = box[i][j];
                col++;
            }
            j++;
            row++;
            col = 0;
        } 
        return output;
    }
}

// second pass solution
class Solution {
    public char[][] rotateTheBox(char[][] box) {
        char[][] output = new char[box[0].length][box.length];
        int k = output[0].length - 1;
        

        for (int i = 0; i < box.length; i++) {
            for (int j = 0; j < box[0].length; j++) {
                output[j][k] = box[i][j];
            } 
            k--;
        }
        
        for (int j = 0; j < output[0].length; j++) {
            for (int i = output.length - 1; i >= 0; i--) {
                if (output[i][j] == '#') {
                    int m = i;
                    
                    while (m < output.length - 1 && output[m + 1][j] == '.') {
                        output[m][j] = '.';
                        output[m+1][j] = '#';
                        m++;
                    }
                }
            }
        }
        return output;
    }
}
