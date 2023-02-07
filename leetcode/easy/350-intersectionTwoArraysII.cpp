class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int, int> count1;
        map<int, int> count2;
        vector<int> output;

        for (const auto num: nums1) {
            count1[num]++;
        }

        for (const auto num: nums2) {
            count2[num]++;
        }

        for (const auto it1: count1) {
            auto it2 = count2.find(it1.first);

            if (it2 != count2.end()) {
                int min_count = min(it1.second, it2->second);

                while (min_count > 0) {
                    output.push_back(it1.first);
                    min_count--;
                }
            }
        }

        return output;
    }
};
