class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;

        map<char, char> map1;
        map<char, char> map2;

        for (int i = 0; i < s.length(); i++) {
            auto it1 = map1.find(s[i]);
            auto it2 = map2.find(t[i]);

            if (it1 != map1.end() && it2 != map2.end() && (it1->second != t[i] || it2->second != s[i])) 
               return false;
            if ((it1 != map1.end() && it2 == map2.end()) || (it1 == map1.end() && it2 != map2.end())) 
                return false;
                
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
        return true;
    }
};
