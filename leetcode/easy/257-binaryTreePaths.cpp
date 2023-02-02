class Solution {
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> paths;

        dft(root, paths, to_string(root->val));

        return paths;
    }
    void dft(TreeNode* root, vector<string>& vect, string s) {
        if (root == nullptr) return;
        if (root->left == nullptr && root->right == nullptr) {
            return vect.push_back(s);
        }
        if (root->left != nullptr) dft(root->left, vect, s+"->"+to_string(root->left->val));
        if (root->right != nullptr) dft(root->right, vect, s+"->"+to_string(root->right->val));
    }
};
