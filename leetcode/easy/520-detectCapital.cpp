class Solution {
public:
    bool detectCapitalUse(string word) {
        bool allLetters = true;
        bool firstLetter = word[0] == toupper(word[0]);
        bool noLetters = true;

        for (int i = 1; i < word.length(); i++) {
            char c = word[i];
            if (c != toupper(c)) allLetters = false;
            if (c == toupper(c)) noLetters = false;
        }

        return (!firstLetter && noLetters) || 
                (firstLetter && allLetters) ||
                (firstLetter && noLetters);
    }
};
