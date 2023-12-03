class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int lowRow = 0;
        int highRow = matrix.size() - 1;

        /** binary search to find target row **/
        while (lowRow <= highRow) {
            int mid = floor((highRow + lowRow) / 2);
            int rowLen = matrix[mid].size() - 1;

            if (matrix[mid][0] <= target && matrix[mid][rowLen] >= target) {
                return binarySearch(matrix[mid], target);
            }

            if (target > matrix[mid][rowLen]) {
                lowRow = mid + 1;
            } else {
                highRow = mid - 1;
            }
        }

        return false;
    }
    /** binary search to find target inside of target row */ 
    bool binarySearch(vector<int>& vect, int target) {
        int low = 0;
        int high = vect.size() - 1;

        while (low <= high) {
            int mid = floor((high + low) / 2);

            if (vect[mid] == target) return true;

            if (vect[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        } 

        return false;
    }
};
