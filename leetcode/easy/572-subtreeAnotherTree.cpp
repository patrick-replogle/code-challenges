class Solution {
public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        stack<TreeNode*> stack;
        stack.push(root);

        while (!stack.empty()) {
            TreeNode* curr = stack.top();
            stack.pop();

            if (dfs(curr, subRoot)) return true;
            if (curr->left != nullptr) stack.push(curr->left);
            if (curr->right != nullptr) stack.push(curr->right);
        }
        return false;
    }
    bool dfs(TreeNode* root, TreeNode* subRoot) {
        if (root == nullptr && subRoot == nullptr) return true;
        if (root == nullptr || subRoot == nullptr) return false;
        if (root->val != subRoot->val) return false;

        return dfs(root->left, subRoot->left) && dfs(root->right, subRoot->right);
    }
};
