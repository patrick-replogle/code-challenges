class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> output;

        recurse(root, &output);

        return output;
    }

    void recurse(TreeNode* root, vector<int>* vect) {
        if (!root) return;
        vect->push_back(root->val);
        recurse(root->left, vect);
        recurse(root->right, vect);
    }
};
