class Solution {
public:
    int getCommon(vector<int>& nums1, vector<int>& nums2) {
        set<int> seen;
        int output = INT_MAX;

        for (const auto num: nums1) {
            seen.insert(num);
        }

        for (const auto num: nums2) {
            if (seen.find(num) != seen.end()) {
                output = min(num, output);
            }
        }

        return output == INT_MAX ? -1 : output;
    }
};
