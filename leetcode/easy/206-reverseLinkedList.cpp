// iterative
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* curr = head;
        ListNode* prev = nullptr;

        while (curr != nullptr) {
            ListNode* temp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
};

// recursive
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        return reverse(head, nullptr);
    }

    ListNode* reverse(ListNode *curr, ListNode* prev) {
        if (curr == nullptr) return prev;

        cout << curr->val << endl;

        ListNode* temp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = temp;

        return reverse(curr, prev);
    }
};
