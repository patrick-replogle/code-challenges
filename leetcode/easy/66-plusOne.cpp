class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        bool carry = true;

        for (int i = digits.size() - 1; i >= 0; i--) {
            if (carry && digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                carry = false;
                break;
            }
        }
        if (carry) {
            int next = digits[0];
            digits[0] = 1;
            for (int i = 1; i < digits.size(); i++) {
                int temp = digits[i];
                digits[i] = next;
                next = temp;
            }
            digits.push_back(next);
        }
        return digits;
    }
};
