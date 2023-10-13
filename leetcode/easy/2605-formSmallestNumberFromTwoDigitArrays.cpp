class Solution {
public:
    int minNumber(vector<int>& nums1, vector<int>& nums2) {
        set<int> set1;
        int nums1Smallest = INT_MAX;
        int nums2Smallest = INT_MAX;
        int smallestShared = INT_MAX;

        for (const auto &num: nums1) {
            nums1Smallest = min(nums1Smallest, num);
            set1.insert(num);
        }

        for (const auto &num: nums2) {
            nums2Smallest = min(nums2Smallest, num);

            if (set1.find(num) != set1.end()) {
                smallestShared = min(smallestShared, num);
            }
        }

        string s = to_string(min(nums1Smallest, nums2Smallest)) + to_string(max(nums1Smallest, nums2Smallest));

        return min(stoi(s), smallestShared);
     }
};
