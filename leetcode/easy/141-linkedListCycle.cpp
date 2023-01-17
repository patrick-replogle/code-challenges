class Solution {
public:
    bool hasCycle(ListNode *head) {
        set<ListNode*> set;
        bool flag = false;

        while (head != nullptr && !flag) {

            if (set.find(head) != set.end()) flag = true;
            set.insert(head);
            head = head->next;
        }

        return flag;
    }
};
