class RandomizedSet {
    private: 
    map<int, int> unorderedSet;
    vector<int> vect;
public:
    RandomizedSet() {
        
    }
    
    bool insert(int val) {
        if (unorderedSet.find(val) != unorderedSet.end()) {
            return false;
        }

        vect.push_back(val);
        unorderedSet[val] = vect.size() - 1;
        return true;
    }
    
    bool remove(int val) {
        map<int, int>::iterator it = unorderedSet.find(val);

        if (it == unorderedSet.end()) {
            return false;
        }

        int n = vect.size() - 1;
        int i = it->second;
        map<int, int>::iterator it2 = unorderedSet.find(vect[n]);

        swap(vect[i], vect[n]);
        vect.pop_back();
        unorderedSet[it2->first] = i;
        unorderedSet.erase(val);

        return true;
    }
    
    int getRandom() {
        return vect[rand() % vect.size()];
    }
};
