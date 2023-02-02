class Solution {
public:
    int firstBadVersion(int n) {
        long low = 1;
        long high = n;

        while (low <= high) {
            long mid = floor((low + high) / 2);
            bool isBad = isBadVersion(mid);

            if (isBad) high = mid - 1;
            else low = mid + 1;
        }
        return low;
    }
};
