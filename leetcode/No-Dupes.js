// leet codelink: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// remove dupes only

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

console.log(deleteDuplicates(test1)); // 1 -> 2 -> 3

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// remove all numbers that have dupes

const deleteDuplicatesII = (head) => {
    let seen = new Set(), currHead = head, noDupes = new ListNode(-1), temp = noDupes;

    while (currHead) {
        if (!seen.has(currHead.val)) {
            seen.add(currHead.val);
            if (currHead.next) {
                if (!seen.has(currHead.next.val)) {
                temp.next = currHead;
                temp = temp.next;
                }
            } else {
                temp.next = currHead;
                temp = temp.next;
            }
        }

        currHead = currHead.next
    }

    if (temp.next) {
        if (seen.has(temp.next.val)) temp.next = null;
    }

    return noDupes.next;
};

let test2 = new ListNode(1);
test2.next = new ListNode(2);
test2.next.next = new ListNode(3);
test2.next.next.next = new ListNode(3);

console.log(deleteDuplicatesII(test2)); // 1 -> 2
