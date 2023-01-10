// first pass solution
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m + n - 1; 
        int j = m - 1;
        int k = n - 1;

        while (i >= 0 && j >= 0 && k >= 0 ) {
            if (nums1[j] > nums2[k]) {
                nums1[i] = nums1[j];
                j--;
            } else {
                nums1[i] = nums2[k];
                k--;
            }
            i--;
        }

        while (i >= 0 && j >= 0) {
            nums1[i] = nums1[j];
            i--;
            j--;
        }

        while (i >= 0 && k >= 0) {
            nums1[i] = nums2[k];
            i--;
            k--;
        }
    }
};

// refactor
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m + n - 1; 
        int j = m - 1;
        int k = n - 1;

        for (; i >= 0; i--) {
            if (j >= 0 && k >= 0) {
                if (nums1[j] > nums2[k]) {
                    nums1[i] = nums1[j];
                    j--;
                } else {
                    nums1[i] = nums2[k];
                    k--;
                }
            }

            else if (j >= 0) {
                nums1[i] = nums1[j];
                j--;
            }

            else {
                nums1[i] = nums2[k];
                k--;
            }
        }
    }
};
