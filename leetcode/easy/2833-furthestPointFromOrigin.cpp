class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int l = 0;
        int r = 0;
        int _ = 0;


        for (const auto c: moves) {
            if (c == 'L') l++;
            else if (c == 'R') r++;
            else _++;
        }

        int maxVal = max(l, r);
        int minVal = min(l, r);

        return maxVal - minVal + _;
    }
};
