// recursive
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) return true;
        if (p == nullptr || q == nullptr) return false;
        if (p->val != q->val) return false;

        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};

// iterative
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        stack<pair<TreeNode*, TreeNode*>> stack;
        pair<TreeNode*, TreeNode*> newPair(p, q);
        stack.push(newPair);

        while (!stack.empty()) {
            pair<TreeNode*, TreeNode*> curr = stack.top();
            stack.pop();
        
            if (curr.first == nullptr && curr.second == nullptr) continue;
            if (curr.first == nullptr || curr.second == nullptr) return false;
            if (curr.first->val != curr.second->val) return false;

            pair<TreeNode*, TreeNode*> leftPair(curr.first->left, curr.second->left);
            pair<TreeNode*, TreeNode*> rightPair(curr.first->right, curr.second->right);

            stack.push(leftPair);
            stack.push(rightPair);
        }
        return true;
    }
};
