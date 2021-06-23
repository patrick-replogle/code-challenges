/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with 
exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.
*/

// first pass solution
function addTwoHugeNumbers(a, b) {
    let curr1 = reverseList(a);
    let curr2 = reverseList(b)
    let carry = 0;
    let arr = [];
    let dummy = new ListNode(0);
    let output = dummy;
    
    while (curr1 || curr2 || carry) {
        let z = 0, y = 0;
        if (curr1) z = curr1.value; 
        if (curr2) y = curr2.value; 

        let sum = Number(z) + Number(y) + carry;
        
        if (next >= 10000) {
            carry = 1;
            arr.push(sum - 10000);
        } else {
            arr.push(String(sum))
            carry = 0;
        }
        curr1 = curr1 ? curr1.next : null;
        curr2 = curr2 ? curr2.next : null;
    }
    
    while (arr.length) {
        dummy.next = new ListNode(Number(arr.pop()));
        dummy = dummy.next;
    }
    return output.next;
}

function reverseList(head) {
    let prev = null;
    
    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}
