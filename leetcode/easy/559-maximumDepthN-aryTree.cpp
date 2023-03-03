class Solution {
public:
    int maxDepth(Node* root) {

        return traverse(root);
    }

    int traverse(Node* root) {
        if (root == nullptr) return 0;

        int curr = 1;

        for (const auto node: root->children) {
            curr = max(curr, traverse(node) + 1);
        }
        return curr;
    }
};
