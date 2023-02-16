class Solution {
public:
    string licenseKeyFormatting(string s, int k) {
        string output = "";
        int currCount = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            if (s[i] == '-') continue;

            char c = isalpha(s[i]) ? toupper(s[i]) : s[i];
            currCount++;
            output += c;
            if (currCount == k) {
                output += "-";
                currCount = 0;
            }
        }

        if (output.length() > 0 && output[output.length() - 1] == '-') {
            output = output.substr(0, output.length() -1);
        }

        reverse(output.begin(), output.end());

        return output;
    }
};
