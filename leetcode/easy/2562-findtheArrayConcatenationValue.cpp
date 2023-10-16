class Solution {
public:
    long long findTheArrayConcVal(vector<int>& nums) {
        long long sum = 0;
        int i = 0;
        int j = nums.size() - 1;
        bool odd = nums.size() % 2 != 0;

        for (; i < nums.size() / 2; i++) {
            string s = to_string(nums[i]) + to_string(nums[j]);
            sum += stoi(s);
            j--;
        }

        if (odd) sum += nums[i];

        return sum;
    }
};
