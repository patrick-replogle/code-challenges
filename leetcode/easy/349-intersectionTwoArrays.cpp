class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        vector<int> output;
        map<int, bool> seen;

        for (const auto num: nums1) {
            seen[num] = false;
        }

        for (const auto num: nums2) {
            auto it = seen.find(num);
            cout << it->second;

            if (it != seen.end() && it->second == false) {
                output.push_back(num);
                seen[num] = true;
            }
        }

        return output;
    }
};
