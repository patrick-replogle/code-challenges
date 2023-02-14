class Solution {
public:
    int arrangeCoins(int n) {
        int currColCount = 1;
        int currRow = 0;

        while (n >= 0) {
            n -= currColCount;
            currColCount++;
            if (n >= 0) currRow++;
        }

        return currRow;
    }
};
