class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        set<ListNode*> set;

        while (headA != nullptr) {
            set.insert(headA);
            headA = headA->next;
        }

        while (headB != nullptr) {
            if (set.find(headB) != set.end()) {
                return headB;
            }
            headB = headB->next;
        }

        return NULL;
    }
};
