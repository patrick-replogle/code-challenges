class Solution {
public:
    bool isPalindrome(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode* prev = reverseList(slow, nullptr);

        while (prev != nullptr) {
            if (head->val != prev->val) {
                return false;
            }
            head = head->next;
            prev = prev->next;
        }

        return true;
    }
    ListNode* reverseList(ListNode* head, ListNode* prev) {
        if (head == nullptr) return prev;

        ListNode* temp = head->next;
        head->next = prev;
        prev = head;
        head = temp;

        return reverseList(head, prev);  
    }
};
