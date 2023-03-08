class Solution {
public:
    vector<int> postorder(Node* root) {
        vector<int> output;

        dft(root, output);

        return output;
    }

    void dft(Node* root, vector<int>& vect) {
        if (root == nullptr) return;
        
        for (const auto child: root->children) {
            dft(child, vect);
        }
        vect.push_back(root->val);
    }
};
