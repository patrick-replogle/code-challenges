class Solution {
public:
    int sumCounts(vector<int>& nums) {
        int sum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            int windowLen = 1;

            while (windowLen <= nums.size() - i) {
                set<int> seen;
                int j = i;

                while (j < i + windowLen && j < nums.size()) {
                    int num = nums[j];
                    seen.insert(num);
                    j++;
                }
                if (seen.size() > 0) {
                    sum += pow(seen.size(), 2);
                }
                windowLen++;
            }
        }

        return sum;
    }
};
