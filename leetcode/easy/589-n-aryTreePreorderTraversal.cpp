class Solution {
public:
    vector<int> preorder(Node* root) {
        vector<int> output;

        dft(root, output);

        return output;
    }
    void dft(Node* root, vector<int>& vect) {
        if (root == nullptr) return;
        vect.push_back(root->val);

        for (const auto child: root->children) {
            dft(child, vect);
        }
    }
};
