class Solution {
public:
    int numberOfSpecialChars(string word) {
        int lowerCase [26];
        int upperCase [26];
        int output = 0;

        for (const auto& c: word) {
            char upper = toupper(c);
            char lower = tolower(c);
            int index = (int) lower - 97;

            if (c == upper) {
                upperCase[index] = 1;
            } 

            if (c == lower) {
                lowerCase[index] = 1;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (lowerCase[i] == 1 && upperCase[i] == 1) {
                output++;
            }
        }

        return output;
    }
};

