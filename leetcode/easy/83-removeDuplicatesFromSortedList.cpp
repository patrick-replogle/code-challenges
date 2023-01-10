class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        set<int> seen;
        ListNode *curr = head;
        ListNode *prev = nullptr;

        while (curr != nullptr) {
            cout << curr->val;
            if (seen.find(curr->val) != seen.end()) {
                prev->next = curr->next;
            } else {
                seen.insert(curr->val);
                prev = curr;
            }
            curr = curr->next;
        }
        return head;
    }
};
