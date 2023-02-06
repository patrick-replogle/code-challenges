class NumArray {
    vector<int> nums;
public:
    NumArray(vector<int>& vect) {
        nums = vect;
    }
    
    int sumRange(int left, int right) {
        int sum = 0;

        for (int i = left; i <= right; i++) {
            if (i >= 0 && i < nums.size()) {
                sum += nums[i];
            }
        }
        return sum;
    }
};
