class Solution {
public:
    string addStrings(string num1, string num2) {
        string output = "";
        int carry = 0;
        int i = num1.length() - 1;
        int j = num2.length() - 1;

        while (i >= 0 && j >= 0) {
            int digit1 = num1[i] - 48;
            int digit2 = num2[j] - 48;
            int sum = digit1 + digit2 + carry;

            if (sum > 9) {
                output =  to_string(sum - 10) + output;
                carry = 1;
            } else {
                output = to_string(sum) + output;
                carry = 0;
            }
            i--;
            j--;
        }

        while (i >= 0) {
            int digit1 = num1[i] - 48;
            int sum = digit1 + carry;

            if (sum > 9) {
                output =  to_string(sum - 10) + output;
                carry = 1;
            } else {
                output = to_string(sum) + output;
                carry = 0;
            }
            i--;
        }
        
        while (j >= 0) {
            int digit1 = num2[j] - 48;
            int sum = digit1 + carry;

            if (sum > 9) {
                output =  to_string(sum - 10) + output;
                carry = 1;
            } else {
                output = to_string(sum) + output;
                carry = 0;
            }
            j--;
        }

        if (carry > 0) {
            output = "1" + output;
        }

        return output;
     }
};
