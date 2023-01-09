class Solution {
public:
    int maximumCount(vector<int> &nums) {
        int pos {0};
        int neg {0};

        for (const auto& num : nums) {
            if (num > 0) pos++;
            if (num < 0) neg++;
        }

        if (pos > neg) {
            return pos;
        }
        return neg;
    }
};
