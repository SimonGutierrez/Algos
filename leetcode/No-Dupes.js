// leet codelink: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class ListNode {
    constructor(value, next) {
        this.val = value ? value : 0;
        this.next = next ? next : null;
    }
}

const deleteDuplicates = (head) => {
    let seen = new Set(), currHead = head, noDupes = new ListNode(-1), temp = noDupes;

    while (currHead) {
        if (!seen.has(currHead.val)) {
            seen.add(currHead.val);
            temp.next = currHead;
            temp = temp.next;
        }

        currHead = currHead.next
    }

    if (temp.next) {
        if (seen.has(temp.next.val)) temp.next = null;
    }

    return noDupes.next;
};

let test1 = new ListNode(1);
test1.next = new ListNode(2);
test1.next.next = new ListNode(3);
test1.next.next.next = new ListNode(3);

console.log(deleteDuplicates(test1))
