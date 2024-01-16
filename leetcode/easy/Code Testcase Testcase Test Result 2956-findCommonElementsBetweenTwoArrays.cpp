class Solution {
public:
    vector<int> findIntersectionValues(vector<int>& nums1, vector<int>& nums2) {
        vector<int> output = {0, 0};
        set<int> seen1;
        set<int> seen2;

        for (const auto& num: nums1) {
            seen1.insert(num);
        }

        for (const auto& num: nums2) {
            seen2.insert(num);
        }

        for (const auto& num: nums1) {
            if (seen2.find(num) != seen2.end()) {
                output[0]++;
            }
        }

        for (const auto& num: nums2) {
            if (seen1.find(num) != seen1.end()) {
                output[1]++;
            }
        }

        return output;
    }
};
