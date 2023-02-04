// first pass solution
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        vector<string> vect = splitString(s);
        map<char, string> map;
        set<string> set;

        if (vect.size() != pattern.length()) return false;

        for (int i = 0; i < pattern.length(); i++) {
            auto it1 = map.find(pattern[i]);
            auto it2 = set.find(vect[i]);

            if (it1 == map.end() && it2 == set.end()) {
                map[pattern[i]] = vect[i];
                set.insert(vect[i]);
                continue;
            }
            if (it1 == map.end() || it2 == set.end()) return false;
            if (it1->second != vect[i]) return false;
        }
        return true;
    }

    vector<string> splitString(string& s) {
        vector<string> vect;
        string str = "";
        int i = 0;

        while (i < s.length()) {
            if (s[i] == ' ') {
                vect.push_back(str);
                str = "";
            } else {
                str += s[i];
            }
            i++;
        }
        vect.push_back(str);

        return vect;
    }
};

// second pass solution
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        map<char, string> map;
        set<string> set;
        stringstream ss(s);
        string str;
        int i = 0;

        while (ss >> str) {
            auto it1 = map.find(pattern[i]);
            auto it2 = set.find(str);

            if (it1 == map.end() && it2 == set.end()) {
                map[pattern[i]] = str;
                set.insert(str);
            }  else if (it1 == map.end() || it2 == set.end()) { 
                return false;
            } else if (it1->second != str) {
                return false;
            }
            i++;
        }
        return i == pattern.length();
    }
};
