class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        set<char> row1 = {'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'};
        set<char> row2 = {'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'};
        set<char> row3 = {'z', 'x', 'c', 'v', 'b', 'n', 'm'};
        vector<string> output;

        for (const auto word: words) {
            bool hasRow1 = false;
            bool hasRow2 = false;
            bool hasRow3 = false;
            int count = 0;
            
            for (int i = 0; i < word.length(); i++) {
                char c = tolower(word[i]);

                if (row1.find(c) != row1.end()) hasRow1 = true;
                if (row2.find(c) != row2.end()) hasRow2 = true;
                if (row3.find(c) != row3.end()) hasRow3 = true;
            }

            if (hasRow1) count++;
            if (hasRow2) count++;
            if (hasRow3) count++;

           if (count == 1) output.push_back(word);
        }
        return output;
    }
};
