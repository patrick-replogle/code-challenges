class TrieNode {
    public:
        TrieNode *children[26] = {nullptr};
        bool isEnd = false;
};

class Trie {
public:
    TrieNode *root = new TrieNode();

    void insert(string word) {
        TrieNode *curr = this->root;

        for (const auto& c: word) {
            int index = (int) c - 97;
            if (curr->children[index] == nullptr) {
                curr->children[index] = new TrieNode();
            }
            curr = curr->children[index];
        }
        curr->isEnd = true;
    }
    
    bool search(string word) {
        TrieNode *curr = this->root;

        for (const auto& c: word) {
            int index = (int) c - 97;

            if (curr->children[index] == nullptr) {
                return false;
            }
            curr = curr->children[index];
        }

        return curr->isEnd;
    }
    
    bool startsWith(string prefix) {
        TrieNode *curr = this->root;

        for (const auto& c: prefix) {
            int index = (int) c - 97;

            if (curr->children[index] == nullptr) {
                return false;
            }
            curr = curr->children[index];
        }
        return true;
    }
};
