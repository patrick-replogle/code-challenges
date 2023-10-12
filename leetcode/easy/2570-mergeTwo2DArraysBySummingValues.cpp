class Solution {
public:
    vector<vector<int>> mergeArrays(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
        vector<vector<int>> output;
        int i = 0;
        int j = 0;

        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i][0] == nums2[j][0]) {
                vector<int> temp;
                temp.push_back(nums1[i][0]);
                temp.push_back(nums1[i][1] + nums2[j][1]);
                output.push_back(temp);
                i++;
                j++;
            } else if (nums1[i][0] < nums2[j][0]) {
                output.push_back(nums1[i]);
                i++;
            } else {
                output.push_back(nums2[j]);
                j++;
            }
        }

        while (i < nums1.size()) {
            output.push_back(nums1[i]);
            i++;
        }

        while (j < nums2.size()) {
            output.push_back(nums2[j]);
            j++;
        }
        
        return output;
    }
};
