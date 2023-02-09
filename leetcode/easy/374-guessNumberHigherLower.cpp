class Solution {
public:
    int guessNumber(int n) {
        int low = 1;
        int high = n;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int answer = guess(mid);

            if (answer == -1) {
                high = mid - 1;
            } else if (answer == 1) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
};
