// recursive solution
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> output;

        traverse(root, output);
     
        return output;
    }

    void traverse(TreeNode* root, vector<int>& vect) {
        if (root == nullptr) return;

        traverse(root->left, vect);
        traverse(root->right, vect);
        vect.push_back(root->val);
    }
};

// iterative solution
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> output;
        stack<TreeNode*> stack;

        if (root != nullptr) stack.push(root);

        while (!stack.empty()) {
            TreeNode* curr = stack.top();
            output.push_back(curr->val);
            stack.pop();

            if (curr->left) stack.push(curr->left);
            if (curr->right) stack.push(curr->right);
        }
     
        reverse(output.begin(), output.end());

        return output;
    }
};
