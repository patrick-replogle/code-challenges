class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> output;

        traverse(output, root);

        return output;
    }

    void traverse(vector<int> &vect, TreeNode *root) {
        if (root == nullptr) return;

        traverse(vect, root->left);
        vect.push_back(root->val);
        traverse(vect, root->right);
    }
};
