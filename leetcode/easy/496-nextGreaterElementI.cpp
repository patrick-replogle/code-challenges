class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        vector<int> output;
        map<int, int> map;

        for (int i = 0; i < nums2.size(); i++) {
            map[nums2[i]] = i;
        }

        for (const auto num: nums1) {
            int start = map[num];
            int n = -1;
            
            for (int i = start + 1; i < nums2.size(); i++) {
                if (nums2[i] > num) {
                    n = nums2[i];
                    break;
                }
            }
            output.push_back(n);
        }

        return output;
    }
};
