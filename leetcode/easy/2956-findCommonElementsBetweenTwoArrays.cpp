// solution 1
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

// solution 2
class Solution {
public:
    vector<int> findIntersectionValues(vector<int>& nums1, vector<int>& nums2) {
        vector<int> output = {0, 0};
        int i = 0; 
        int j = 0;

        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());

        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i] == nums2[j]) {
                output[1]++;
            } 
            
            if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        i = 0;
        j = 0;


        while (i < nums1.size() && j < nums2.size()) {
            if (nums2[j] == nums1[i]) {
                output[0]++;
            } 
            
            if (nums2[j] < nums1[i]) {
                j++;
            } else {
                i++;
            }
        }

        return output;
    }
};
