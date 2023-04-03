class Solution {
public:
    int alternateDigitSum(int n) {
        string s = to_string(n);
        int output = 0;
        bool positive = s.length() % 2 != 0;

        while (n > 0) {
            int digit = (n % 10) * (positive ? 1 : -1);
            cout << digit;
            output += digit;
            n /= 10;
            positive = !positive;
        }
        return output;
    }
};
