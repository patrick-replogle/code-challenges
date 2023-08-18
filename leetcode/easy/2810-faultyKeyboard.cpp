class Solution {
public:
    string finalString(string s) {
        string output = "";
        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == 'i') {
                reverseString(output);
            } else {
                output += s[i];
            }
        }
        return output;
    }

    void reverseString(string &s) {
        int j = s.length() - 1;

        for (int i = 0; i < s.length() / 2; i++) {
            swap(s[i], s[j]);
            j--;
        }
    }
};
